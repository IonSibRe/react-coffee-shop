import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartItem() {
	const { cart, removeItem, toggleAmount } = useContext(CartContext);

	return (
		<>
			{cart.map((cartItem) => {
				const { id, title, price, img, amount, total } = cartItem;
				return (
					<div className="cart-item" key={id}>
						<div className="cart-item-img-wrap">
							<img src={img} alt="" className="cart-item-img" />
						</div>
						<div className="cart-item-title-wrap">
							<h3 className="cart-item-title">{title}</h3>
						</div>
						<div className="cart-item-price-wrap">
							<h3 className="cart-item-price">${price}</h3>
						</div>
						<div className="cart-item-quantity-wrap">
							<button
								type="button"
								className="cart-item-btn"
								id="cart-minus-btn"
								onClick={() => toggleAmount(id, "dec")}
							>
								<span> - </span>
							</button>
							<h3 className="cart-item-quantity">{amount}</h3>
							<button
								type="button"
								className="cart-item-btn"
								id="cart-plus-btn"
								onClick={() => toggleAmount(id, "inc")}
							>
								<span>+</span>
							</button>
						</div>
						<div className="cart-item-total-wrap">
							<h3 className="cart-item-total">${total}</h3>
						</div>
						<div className="cart-item-delete-wrap">
							<button
								className="cart-item-delete-btn"
								onClick={() => removeItem(id)}
							>
								<i className="fas fa-trash cart-delete-icon"></i>
							</button>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default CartItem;
