import React, { useState, useEffect, useCallback } from "react";
import { products_data } from "../sample_data/products_data";

const ProductsContext = React.createContext();

// Filter categories
const categories = [
	"all",
	...new Set(products_data.map((product) => product.category)),
];

// Filter prices
const prices = [
	...new Set(products_data.map((product) => parseFloat(product.price))),
];

const ProductsProvider = ({ children }) => {
	const minPrice = Math.min(...prices);
	const maxPrice = Math.max(...prices);

	const [products, setProducts] = useState(products_data);
	const [currentProducts, setCurrentProducts] = useState(products_data);
	const [currentMinPrice, setCurrentMinPrice] = useState(minPrice);
	const [currentMaxPrice, setCurrentMaxPrice] = useState(maxPrice);

	// Calculate min price of current products
	const calculateNewPrices = useCallback(() => {
		const newPrices = [
			...new Set(currentProducts.map((product) => product.price)),
		];

		const newMinPrice = Math.min(...newPrices);
		const newMaxPrice = Math.max(...newPrices);

		setCurrentMinPrice(newMinPrice);
		setCurrentMaxPrice(newMaxPrice);
	}, [currentProducts]);

	// Filter by category
	const filterCategory = (category) => {
		if (category === "all") {
			setProducts(products_data);
			setCurrentProducts(products_data);
		} else {
			const newProducts = products_data.filter(
				(product) => product.category === category
			);
			setProducts(newProducts);
			setCurrentProducts(newProducts);
		}
	};

	// Filter by price
	const filterPrice = (price) => {
		const newProducts = currentProducts.filter(
			(product) => parseInt(product.price) <= price
		);
		setProducts(newProducts);
	};

	// Calculate new min & max price when current products change
	useEffect(() => {
		calculateNewPrices();
	}, [currentProducts, calculateNewPrices]);

	return (
		<ProductsContext.Provider
			value={{
				products,
				categories,
				prices,
				filterCategory,
				filterPrice,
				calculateNewPrices,
				currentMinPrice,
				currentMaxPrice,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export { ProductsContext, ProductsProvider };
