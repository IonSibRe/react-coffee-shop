import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";

function ProductsFilter() {
	const {
		categories,
		filterCategory,
		filterPrice,
		calculateNewPrices,
		currentMinPrice,
		currentMaxPrice,
	} = useContext(ProductsContext);

	const [currentCategory, setCurrentCategory] = useState("all");
	const [currentMaxPriceUI, setCurrentMaxPriceUI] = useState(currentMaxPrice);

	const priceInput = useRef(null);

	useEffect(() => {
		setCurrentMaxPriceUI(currentMaxPrice);
	}, [currentMaxPrice]);

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
						min={currentMinPrice}
						max={currentMaxPrice}
						ref={priceInput}
						onChange={() => {
							filterPrice(priceInput.current.value);
							setCurrentMaxPriceUI(priceInput.current.value);
						}}
					/>
					<p className="filter-price-text">
						${currentMinPrice} - ${currentMaxPriceUI}
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
									calculateNewPrices();
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
