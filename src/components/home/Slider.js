import React, { useState, useEffect, useRef } from "react";
import { slidesList } from "../../sample_data/home_data";

function Slider() {
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

	useEffect(() => {
		const slideInterval = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => clearInterval(slideInterval);
	});

	return (
		<header className="header">
			<div className="slider">
				{slidesList.map((slide) => {
					const {
						id,
						title,
						subTitle,
						background_img,
						coffee_img,
					} = slide;
					const background = {
						background: `url(${background_img}) no-repeat
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
