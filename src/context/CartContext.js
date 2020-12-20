import React, { useReducer, useEffect } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = React.createContext();

const initialState = {
	cart: [],
	total: 0,
	amount: 0,
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	const toggleAmount = (id, type) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	};

	const addToCart = (id, title, price, img) => {
		const cartItem = { id, title, price, img, amount: 1, total: price };
		dispatch({ type: "ADD_TO_CART", payload: cartItem });
	};

	const addToCartSingleItem = (id, title, price, img, amount, total) => {
		const cartItem = { id, title, price, img, amount, total };
		dispatch({ type: "ADD_SINGLE_ITEM_TO_CART", payload: cartItem });
	};

	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{
				...state,
				addToCart,
				clearCart,
				removeItem,
				toggleAmount,
				addToCartSingleItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext, CartProvider };
