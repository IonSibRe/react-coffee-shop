import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";

function ProductsContainer() {
	const { products } = useContext(ProductsContext);
	return (
		<article className="products-showcase">
			<div className="products-container">
				{products.map((product) => {
					const { id, title, rating, price, img } = product;
					const icons = [];

					for (let i = 0; i < parseInt(rating); i++) {
						icons.push({
							id: i,
							classStyling: "fas fa-star products-rating-icon",
						});
					}

					return (
						<div className="products-item" key={id}>
							<div className="products-img-wrap">
								<Link to="#" className="products-img-link-wrap">
									<img
										src={img}
										alt={title}
										className="products-img"
									/>
								</Link>
								<div className="add-to-cart-wrap">
									<button className="add-to-cart-btn">
										<i className="far fa-clipboard add-to-cart-icon"></i>{" "}
										add to cart
									</button>
								</div>
							</div>
							<div className="products-text-wrap">
								<h3 className="products-title">{title}</h3>
								<div className="products-rating-wrap">
									{icons.map((icon) => {
										const { id, classStyling } = icon;
										return (
											<i
												className={classStyling}
												key={id}
											></i>
										);
									})}
								</div>
								<h4 className="products-price">{price}</h4>
							</div>
						</div>
					);
				})}
			</div>
		</article>
	);
}

export default ProductsContainer;
