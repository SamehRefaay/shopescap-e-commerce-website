const cartHeaders = [
	{ key: 'h001', title: 'Product' },
	{ key: 'h002', title: 'Price' },
	{ key: 'h003', title: 'Quantity' },
	{ key: 'h004', title: 'Sub Total' },
];

const CartTableHeader = () => {
	return (
		<div className="hidden mt-10 w-full h-16 md:grid gap-4 grid-cols-5 bg-gray-200">
			{cartHeaders.map(header => (
				<span
					key={header.key}
					className="first:col-span-2 col-span-1 grid place-content-center text-xl text-center"
				>
					{header.title}
				</span>
			))}
		</div>
	);
};

export default CartTableHeader;
