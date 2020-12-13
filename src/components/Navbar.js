import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/global/_navbar.scss";

function Navbar() {
	const pages = [
		{
			id: 1,
			url: "/",
			name: "home",
		},
		{
			id: 2,
			url: "/about",
			name: "about",
		},
		{
			id: 3,
			url: "/products",
			name: "products",
		},
		{
			id: 4,
			url: "/contact",
			name: "contact",
		},
	];

	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);

	return (
		<nav className="nav">
			<div className="nav-inner">
				<div className="nav-header">
					<h3 className="nav-title">Coffee Shop</h3>
					<button
						className="nav-toggle"
						onClick={() => setShowLinks(!showLinks)}
					>
						<i className="fas fa-bars toggle-icon"></i>
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{pages.map((link) => {
							const { id, url, name } = link;
							return (
								<li key={id} className="nav-li">
									<Link className="nav-a" to={url}>
										{name}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
