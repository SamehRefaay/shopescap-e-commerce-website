'use client';
import { useSelector } from 'react-redux';
import { StoreState } from '@/lib/types';
import Container from './Container';
import CartContent from './CartContent';
import EmptyCart from './EmptyCart';
const Cart = () => {
	const products = useSelector((state: StoreState) => state.cart);
	return (
		<Container>
			{products.length !== 0 ? (
				<CartContent products={products} />
			) : (
				<EmptyCart />
			)}
		</Container>
	);
};

export default Cart;
