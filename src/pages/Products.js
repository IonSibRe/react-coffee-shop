import React from "react";
import ProductsHeader from "../components/products/ProductsHeader";
import ProductsSection from "../components/products/ProductsSection";
import Footer from "../components/Footer";
import "../css/products/products.scss";

function Products() {
	return (
		<>
			<ProductsHeader />
			<ProductsSection />
			<Footer />
		</>
	);
}

export default Products;
