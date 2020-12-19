import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { CartContext } from "../../context/CartContext";

function CartContainer() {
	const { cart, total, clearCart } = useContext(CartContext);
	return (
		<div className="cart-inner-container">
			{cart.length === 0 && (
				<div className="empty-cart-container">
					<h3 className="empty-cart-heading">your cart is empty</h3>
					<Link to="/products" className="empty-cart-link">
						shop
					</Link>
				</div>
			)}
			{cart.length > 0 && (
				<div className="cart-container">
					<div className="cart-info-container">
						<div className="cart-info-item">
							<h3 className="cart-info-text">product</h3>
						</div>
						<div className="cart-info-item">
							<h3 className="cart-info-text">title</h3>
						</div>
						<div className="cart-info-item">
							<h3 className="cart-info-text">price</h3>
						</div>
						<div className="cart-info-item">
							<h3 className="cart-info-text">quantity</h3>
						</div>
						<div className="cart-info-item">
							<h3 className="cart-info-text">total</h3>
						</div>
					</div>
					<CartItem />
					<div className="cart-final-wrap">
						<div className="cart-total-wrap">
							<h2 className="cart-total-text">
								cart total: ${total}
							</h2>
						</div>
						<div className="clear-cart-container">
							<button
								className="clear-cart-btn"
								onClick={clearCart}
							>
								clear cart
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default CartContainer;
