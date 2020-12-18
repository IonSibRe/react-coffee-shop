import React, { useState } from "react";
import { products_data } from "../sample_data/products_data";

const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(products_data);
	const [currentProducts, setCurrentProducts] = useState(products_data);
	const categories = [
		"all",
		...new Set(products_data.map((product) => product.category)),
	];

	const prices = [
		...new Set(products_data.map((product) => parseFloat(product.price))),
	];

	// Filter by category
	const filterCategory = (category) => {
		// All categories
		if (category === "all") {
			setProducts(products_data);
			setCurrentProducts(products_data);
		}
		// Specific category
		else {
			// filter products
			const newProducts = products_data.filter(
				(product) => product.category === category
			);
			setProducts(newProducts);
			setCurrentProducts(newProducts);
		}
	};

	const filterPrice = (price) => {
		const filteredProducts = currentProducts.filter(
			(product) => parseInt(product.price) <= price
		);
		setProducts(filteredProducts);
	};

	return (
		<ProductsContext.Provider
			value={{
				products,
				categories,
				prices,
				filterCategory,
				filterPrice,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export { ProductsContext, ProductsProvider };
