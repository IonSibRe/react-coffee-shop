import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
	<React.StrictMode>
		<ProductsProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductsProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
