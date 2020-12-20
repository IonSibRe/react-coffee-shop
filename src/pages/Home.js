import React from "react";
import CoffeeBase from "../components/home/CoffeeBase";
import Slider from "../components/home/Slider";
import HomeMenu from "../components/home/HomeMenu";
import Carousel from "../components/home/Carousel";
import Footer from "../components/Footer";
import "../css/home.scss";

function Home() {
	return (
		<>
			<Slider />
			<CoffeeBase />
			<HomeMenu />
			<Carousel />
			<Footer />
		</>
	);
}

export default Home;
