import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
	return (
		<div>
			<h2>Your Payment is accepted by shpoescape.com</h2>
			<div className="flex justify-center items-center gap-4">
				<Link href={'/orders'}>
					<button>Watch Your Orders</button>
				</Link>
				<Link href={'/'}>
					<button>Continue Shopping</button>
				</Link>
			</div>
		</div>
	);
};

export default SuccessPage;
