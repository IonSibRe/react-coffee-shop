import React from "react";
import ProductsContainer from "./ProductsContainer";
import ProductsFilter from "./ProductsFilter";

function ProductsSection() {
	return (
		<section className="products-section">
			<div className="products-inner-container">
				<ProductsContainer />
				<ProductsFilter />
			</div>
		</section>
	);
}

export default ProductsSection;
