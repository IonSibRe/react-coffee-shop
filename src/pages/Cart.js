import React from "react";
import CartHeader from "../components/cart/CartHeader";
import CartContainer from "../components/cart/CartContainer";
import "../css/cart.scss";

function Cart() {
	return (
		<section className="cart-section">
			<CartHeader />
			<CartContainer />
		</section>
	);
}

export default Cart;
