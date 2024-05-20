import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { client } from '../../../../sanity/lib/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

const fullfillOrder = async (session: any) => {
	await client.create({
		_type: 'order',
		status: session?.status,
		message: 'Payment done',
		description: session?.description || 'Test messages form orders',
		title: session?.id || 'Order',
		method: session?.confirmation_method,
		amount: session?.amount / 100,
	});
};

export const POST = async (req: NextRequest) => {
	const payload = await req.text();
	const signature = req.headers.get('stripe-signature')!;
	let event: Stripe.Event | null = null;

	try {
		event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
		if (event?.type === 'payment_intent.succeeded') {
			const session = event.data.object;
			return fullfillOrder(session)
				.then(() => NextResponse.json({ status: 200 }))
				.catch((error: any) =>
					NextResponse.json({ error: error.message }, { status: 500 })
				);
		}
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	return NextResponse.json({ received: true });
};
