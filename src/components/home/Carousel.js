import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	carousel_img_1,
	carousel_img_2,
	carousel_img_3,
} from "../../sample_data/home_images";

const data_images = [
	{ id: 1, img: carousel_img_1 },
	{ id: 2, img: carousel_img_2 },
	{ id: 3, img: carousel_img_3 },
];

function Carousel() {
	const [current, setCurrent] = useState(1);

	const nextSlide = () => {
		if (current <= data_images.length - 1) {
			setCurrent(current + 1);
		} else {
			setCurrent(1);
		}
	};

	useEffect(() => {
		const slideInterval = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => clearInterval(slideInterval);
	});

	return (
		<section className="carousel-section">
			<div className="carousel-text-container">
				<div className="carousel-text-inner-container">
					<h2 className="carousel-title">
						try the best coffee <br /> in the city
					</h2>
					<p className="carousel-paragraph">
						Alienum phaedrum torquatos nec eu, vis detraxit
						periculis ex, nihil expetendis in mei. Mei an at dictum
						lacu pericula uni euripidis.
					</p>
					<Link to="/about" className="carousel-link">
						read more{" "}
						<i className="fas fa-arrow-right link-icon"></i>
					</Link>
				</div>
			</div>
			<div className="carousel-slider">
				{data_images.map((item) => {
					const { id, img } = item;
					const background = {
						background: `url(${img}) no-repeat
							center center/cover`,
					};

					return (
						<div
							className={`carousel-slide ${
								id === current ? "current" : ""
							} `}
							key={id}
							style={background}
						>
							1
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Carousel;
