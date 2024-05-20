import { groq } from 'next-sanity';
import { client } from '../../../../sanity/lib/client';
import Container from '@/components/Container';
import { OrderProps } from '@/lib/types';
import TableHeader from '@/components/TableHeader';
import OrderListItem from '@/components/OrderListItem';

const headers = [
	{ key: '001', colspan: 'col-span-2', title: 'Title' },
	{ key: '002', colspan: 'col-span-2', title: 'Description' },
	{ key: '003', colspan: 'col-span-1', title: 'Message' },
	{ key: '004', colspan: 'col-span-1', title: 'Status' },
	{ key: '005', colspan: 'col-span-1', title: 'Method' },
	{ key: '006', colspan: 'col-span-1', title: 'Amount' },
];

const orderQuery = groq`*[_type == 'order']{
    ...
  } | order(_createdAt asc)`;

const OrdersPage = async () => {
	const orders: OrderProps[] = await client.fetch(orderQuery);

	return (
		<Container className="py-20 grid place-content-center min-h-[calc(100vh-200px)]">
			<h2 className="text-2xl text-primeColor">Your Orders</h2>
			<TableHeader className="md:grid-cols-8" headers={headers} />
			{orders.map(order => (
				<OrderListItem key={order?.title} order={order} />
			))}
		</Container>
	);
};

export default OrdersPage;
