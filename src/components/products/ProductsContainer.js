import React from "react";
import { Link } from "react-router-dom";
import product_img_1 from "../../assets/products-imgs/product-image-1.jpg";

function ProductsContainer() {
	return (
		<article className="products-showcase">
			<div className="products-container">
				<div className="products-item">
					<div className="products-img-wrap">
						<Link to="todo" className="products-img-link-wrap">
							<img
								src={product_img_1}
								alt=""
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
						<h3 className="products-title">Lorem, ipsum.</h3>
						<div className="products-rating-wrap">
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
						</div>
						<h4 className="products-price">$50.00</h4>
					</div>
				</div>
				<div className="products-item">
					<div className="products-img-wrap">
						<Link to="todo" className="products-img-link-wrap">
							<img
								src={product_img_1}
								alt=""
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
						<h3 className="products-title">Lorem, ipsum.</h3>
						<div className="products-rating-wrap">
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
						</div>
						<h4 className="products-price">$50.00</h4>
					</div>
				</div>
				<div className="products-item">
					<div className="products-img-wrap">
						<Link to="todo" className="products-img-link-wrap">
							<img
								src={product_img_1}
								alt=""
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
						<h3 className="products-title">Lorem, ipsum.</h3>
						<div className="products-rating-wrap">
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
						</div>
						<h4 className="products-price">$50.00</h4>
					</div>
				</div>
				<div className="products-item">
					<div className="products-img-wrap">
						<Link to="todo" className="products-img-link-wrap">
							<img
								src={product_img_1}
								alt=""
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
						<h3 className="products-title">Lorem, ipsum.</h3>
						<div className="products-rating-wrap">
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
						</div>
						<h4 className="products-price">$50.00</h4>
					</div>
				</div>
				<div className="products-item">
					<div className="products-img-wrap">
						<Link to="todo" className="products-img-link-wrap">
							<img
								src={product_img_1}
								alt=""
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
						<h3 className="products-title">Lorem, ipsum.</h3>
						<div className="products-rating-wrap">
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
						</div>
						<h4 className="products-price">$50.00</h4>
					</div>
				</div>
				<div className="products-item">
					<div className="products-img-wrap">
						<Link to="todo" className="products-img-link-wrap">
							<img
								src={product_img_1}
								alt=""
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
						<h3 className="products-title">Lorem, ipsum.</h3>
						<div className="products-rating-wrap">
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
							<i className="fas fa-star products-rating-icon"></i>
						</div>
						<h4 className="products-price">$50.00</h4>
					</div>
				</div>
			</div>
		</article>
	);
}

export default ProductsContainer;
