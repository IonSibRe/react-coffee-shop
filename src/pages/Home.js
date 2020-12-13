import React from "react";
import CoffeeBase from "../components/home/CoffeeBase";
import Slider from "../components/home/Slider";
import HomeMenu from "../components/home/HomeMenu";
import Carousel from "../components/home/Carousel";

function Home() {
	return (
		<>
			<Slider />
			<CoffeeBase />
			<HomeMenu />
			<Carousel />
		</>
	);
}

export default Home;
