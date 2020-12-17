import React from "react";
import ProductsContainer from "./ProductsContainer";
import ProductsFilter from "./ProductsFilter";

function ProductsSection() {
	return (
		<section className="products-section">
			<ProductsContainer />
			<ProductsFilter />
		</section>
	);
}

export default ProductsSection;
