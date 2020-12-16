import React from "react";
import header_background from "../../assets/about-header-background.jpg";

function AboutHeader() {
	const background = {
		background: `url(${header_background}) no-repeat center center/cover`,
	};
	return (
		<header className="component-header" style={background}>
			<h1 className="component-heading">About Me</h1>
		</header>
	);
}

export default AboutHeader;
