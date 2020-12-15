import React, { useRef, useState } from "react";
import "../../css/home/home.scss";
import {
	slide1,
	slide2,
	slide3,
	coffee_1,
	coffee_2,
	coffee_3,
} from "../../sample_data/home_images";

function Slider() {
	const slidesList = [
		{
			id: 1,
			title: "importance of coffee",
			subTitle:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni.",
			bg_img: slide1,
			coffee_img: coffee_1,
		},
		{
			id: 2,
			title: "special coffee beans",
			subTitle:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni.",
			bg_img: slide2,
			coffee_img: coffee_2,
		},
		{
			id: 3,
			title: "the home of coffee",
			subTitle:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni.",
			bg_img: slide3,
			coffee_img: coffee_3,
		},
	];

	const [current, setCurrent] = useState(1);
	const activeSlide = useRef(null);

	const nextSlide = () => {
		if (current <= slidesList.length - 1) {
			setCurrent(current + 1);
		} else {
			setCurrent(1);
		}
	};

	const prevSlide = () => {
		if (current > 1) {
			setCurrent(current - 1);
		} else {
			setCurrent(slidesList.length);
		}
	};

	return (
		<header className="header">
			<div className="slider">
				{slidesList.map((slide, index) => {
					const { id, title, subTitle, bg_img, coffee_img } = slide;
					const background = {
						background: `url(${bg_img}) no-repeat
							center top/cover`,
					};
					return (
						<div
							className={`slide ${
								id === current ? "current" : ""
							}`}
							ref={id === current ? activeSlide : null}
							style={background}
							key={id}
						>
							<div className="content">
								<img
									src={coffee_img}
									alt="coffee img"
									className="slide-img"
								/>
								<h1 className="slide-title">{title}</h1>
								<h3 className="slide-subtitle">{subTitle}</h3>
							</div>
						</div>
					);
				})}
			</div>
			<div className="buttons">
				<button id="prev" className="button" onClick={prevSlide}>
					<i className="fas fa-chevron-left"></i>
				</button>
				<button id="next" className="button" onClick={nextSlide}>
					<i className="fas fa-chevron-right"></i>
				</button>
			</div>
			<div className="dots">
				{slidesList.map((slide) => {
					const { id } = slide;
					return (
						<span
							key={id}
							className={`dot ${id === current ? "active" : ""}`}
						></span>
					);
				})}
			</div>
		</header>
	);
}

export default Slider;
