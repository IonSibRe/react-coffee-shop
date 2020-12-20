import React from "react";
import header_background from "../../assets/products-header-background.jpg";

function ProductsHeader() {
	const background = {
		background: `url(${header_background}) no-repeat center center/cover`,
	};
	return (
		<header className="component-header" style={background}>
			<h1 className="component-heading">products</h1>
		</header>
	);
}

export default ProductsHeader;
