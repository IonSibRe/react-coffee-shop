import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";
import "../../css/products/singleItem.scss";

function SingleItem() {
	const { id } = useParams();
	const { products } = useContext(ProductsContext);
	const { addToCartSingleItem } = useContext(CartContext);
	const [currentProduct, setCurrentProduct] = useState([]);
	const { title, desc, rating, price, img } = currentProduct;
	const [amount, setAmount] = useState(1);
	const [total, setTotal] = useState(0);
	let icons = [];

	useEffect(() => {
		const product = products.find((product) => product.id === id);
		setCurrentProduct(product);
	}, [id, products]);

	useEffect(() => {
		setTotal(parseFloat(price));
	}, [price]);

	const updateSingleItem = (type) => {
		console.log(total);
		const newPrice = parseFloat(price);
		if (type === "inc") {
			const itemTotal = total + newPrice;
			setAmount(amount + 1);
			setTotal(itemTotal);
		} else {
			if (amount > 1) {
				const itemTotal = total - newPrice;
				setAmount(amount - 1);
				setTotal(itemTotal);
			} else {
				const itemTotal = newPrice;
				setAmount(1);
				setTotal(itemTotal);
			}
		}
	};

	for (let i = 0; i < parseInt(rating); i++) {
		icons.push({
			id: i,
			classStyling: "fas fa-star products-rating-icon",
		});
	}

	return (
		<section className="single-item-section">
			<div className="single-item-inner-container">
				<div className="single-item-img-wrap">
					<img src={img} alt={title} />
				</div>
				<div className="single-item-text-wrap">
					<h2 className="single-item-heading">{title}</h2>
					<div className="single-item-rating-wrap">
						{icons.map((icon) => {
							const { id, classStyling } = icon;
							return <i className={classStyling} key={id}></i>;
						})}
					</div>
					<h2 className="single-item-price">${price}</h2>
					<p className="single-item-desc">{desc}</p>
					<div className="single-item-add-to-cart-wrap">
						<div className="single-item-quantity-wrap">
							<button
								type="button"
								className="single-item-quantity-btn"
								onClick={() => {
									updateSingleItem("dec");
								}}
							>
								<span> - </span>
							</button>
							<h3 className="single-item-quantity-text">
								{amount}
							</h3>
							<button
								type="button"
								className="single-item-quantity-btn"
								onClick={() => updateSingleItem("inc")}
							>
								<span>+</span>
							</button>
						</div>
						<div className="single-item-add-to-cart-inner-wrap">
							<button
								className="single-item-add-to-cart-btn"
								onClick={() =>
									addToCartSingleItem(
										id,
										title,
										price,
										img,
										amount,
										total
									)
								}
							>
								add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SingleItem;
