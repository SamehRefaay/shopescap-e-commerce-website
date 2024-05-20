import { OrderProps } from '@/lib/types';

interface Props {
	order: OrderProps;
}

const OrderListItem = ({ order }: Props) => (
	<div className="p-4 w-full h-16 md:grid md:gap-4 md:grid-cols-8 bg-white border-[1px] border-gray-100 border-t-0">
		<span className="col-span-1 md:col-span-2 grid place-content-center text-xl text-center">
			{order?.title}
		</span>
		<span className="col-span-1 md:col-span-2 grid place-content-center text-xl text-center">
			{order?.description}
		</span>
		<span className="col-span-1 grid place-content-center text-xl text-center">
			{order?.message}
		</span>
		<span className="col-span-1 grid place-content-center text-xl text-center">
			{order?.status}
		</span>
		<span className="col-span-1  grid place-content-center text-xl text-center">
			{order?.method}
		</span>
		<span className="col-span-1 grid place-content-center text-xl text-center">
			{order?.amount}
		</span>
	</div>
);

export default OrderListItem;
