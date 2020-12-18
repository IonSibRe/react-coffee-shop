import React from "react";

function ProductsFilter() {
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
						min="0"
						max="100"
					/>
					<p className="filter-price-text">$0 - $100</p>
				</div>
				<div className="filter-category-wrap">
					<h3 className="filter-title">category</h3>
					<button className="filter-category-btn active-category">
						Bag
					</button>
					<button className="filter-category-btn">Pot</button>
					<button className="filter-category-btn">Cup</button>
				</div>
			</div>
		</aside>
	);
}

export default ProductsFilter;
