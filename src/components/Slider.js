import React, { useRef, useState } from "react";
import "../css/home/home.scss";
import slide1 from "../assets/home-imgs/slide1.jpg";
import slide2 from "../assets/home-imgs/slide2.jpeg";
import slide3 from "../assets/home-imgs/slide3.jpg";

function Slider() {
	const slidesList = [
		{
			id: 1,
			title: "importance of coffee",
			subTitle:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni.",
			bg_img: slide1,
		},
		{
			id: 2,
			title: "special coffee beans",
			subTitle:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni.",
			bg_img: slide2,
		},
		{
			id: 3,
			title: "the home of coffee",
			subTitle:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni.",
			bg_img: slide3,
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
					const { id, title, subTitle, bg_img } = slide;
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
								<h1 className="slide-title">{title}</h1>
								<h3 className="slide-subtitle">{subTitle}</h3>
							</div>
						</div>
					);
				})}
			</div>
			<div className="buttons">
				<button id="prev" className="button" onClick={prevSlide}>
					<i className="fas fa-arrow-left"></i>
				</button>
				<button id="next" className="button" onClick={nextSlide}>
					<i className="fas fa-arrow-right"></i>
				</button>
			</div>
			<div className="dots">
				{slidesList.map((slide) => {
					const { id } = slide;
					return (
						<span
							className={`dot ${id === current ? "active" : ""}`}
						></span>
					);
				})}
			</div>
		</header>
	);
}

export default Slider;
