import React from "react";
import { Link } from "react-router-dom";
import "../css/error.scss";

function Error() {
	return (
		<main className="main-container">
			<div className="error-text-wrap">
				<h1 className="error-title">404</h1>
				<h3 className="error-subtitle">
					Sorry, the page you are looking for doesn't exist
				</h3>
				<Link to="/" className="home-btn">
					Back Home
				</Link>
			</div>
		</main>
	);
}

export default Error;
