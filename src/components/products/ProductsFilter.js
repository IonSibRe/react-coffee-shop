import React, { useContext, useRef, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";

function ProductsFilter() {
	const { categories, prices, filterCategory, filterPrice } = useContext(
		ProductsContext
	);
	const [currentCategory, setCurrentCategory] = useState("all");
	const priceInput = useRef(null);
	const minPrice = Math.min(...prices);
	let maxPrice = Math.max(...prices);

	let [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);

	return (
		<aside className="filter-container">
			<div className="filter-inner-container">
				<div className="filter-heading-wrap">
					<h2 className="filter-heading">sort by</h2>
				</div>
				<div className="filter-price-wrap">
					<h3 className="filter-title">price</h3>
					<input
						type="range"
						className="filter-price-input"
						min={minPrice}
						max={maxPrice}
						ref={priceInput}
						onChange={() => {
							filterPrice(priceInput.current.value);
							setCurrentMaxPrice(priceInput.current.value);
						}}
					/>
					<p className="filter-price-text">
						${minPrice} - ${currentMaxPrice}
					</p>
				</div>
				<div className="filter-category-wrap">
					<h3 className="filter-title">category</h3>
					{categories.map((category, index) => {
						return (
							<button
								className={`filter-category-btn ${
									currentCategory === category
										? "active-category"
										: ""
								}`}
								key={index}
								onClick={() => {
									filterCategory(category);
									setCurrentCategory(category);
								}}
							>
								{category}
							</button>
						);
					})}
				</div>
			</div>
		</aside>
	);
}

export default ProductsFilter;
