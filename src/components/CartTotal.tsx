import React from 'react';
import Price from './Price';

interface Props {
	subtotal: number;
	shippingCharge: number;
	total: number;
}

const CartTotal = ({ subtotal, shippingCharge, total }: Props) => {
	return (
		<div className="mt-4 w-full flex flex-col items-end">
			<h3 className="text-xl text-primeColor font-bold">Cart Totals</h3>
			<div className="w-full md:w-1/2 lg:w-1/3 mt-4 flex flex-col border-[1px] border-gray-300">
				<div className="p-4 flex justify-between border-b-[1px] border-gray-300 font-medium">
					<span className="text-primeColor">Subtotal</span>{' '}
					<Price amount={subtotal} />
				</div>
				<div className="p-4 flex justify-between border-b-[1px] border-gray-300 font-medium">
					<span className="text-primeColor">Shipping Charge</span>{' '}
					<Price amount={shippingCharge} />
				</div>
				<div className="p-4 flex justify-between font-bold">
					<span className="">Total</span> <Price amount={total} />
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
