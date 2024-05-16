import { createSlice } from '@reduxjs/toolkit';
import { StoreState } from '../../../../type';

const initialState: StoreState = {
	cart: [],
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existingProduct = state?.cart.find(
				product => product?._id === action?.payload?._id
			);
			if (existingProduct) {
				existingProduct.quantity = existingProduct.quantity + 1;
			} else {
				state.cart.push(action.payload);
			}
		},
		removeFromCart: (state, action) => {
			state.cart = state.cart.filter(item => item._id !== action.payload._id);
		},
		increaseQuantity: (state, action) => {
			const existingProduct = state.cart.find(
				product => product?._id === action?.payload?._id
			);
			existingProduct && existingProduct.quantity++;
		},
		decreaseQuantity: (state, action) => {
			const existingProduct = state.cart.find(
				product => product?._id === action?.payload?._id
			);
			if (existingProduct && existingProduct.quantity > 1)
				existingProduct.quantity--;
		},
		resetCart: state => {
			state.cart = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addToCart,
	removeFromCart,
	resetCart,
	increaseQuantity,
	decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
