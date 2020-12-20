import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Products, Contact, Cart, Error } from "./pages";
import Navbar from "./components/Navbar";
import SingleItem from "./components/products/SingleItem";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Navbar />
					<Home />
				</Route>
				<Route path="/about">
					<Navbar />
					<About />
				</Route>
				<Route exact path="/products">
					<Navbar />
					<Products />
				</Route>
				<Route path="/contact">
					<Navbar />
					<Contact />
				</Route>
				<Route path="/cart">
					<Navbar />
					<Cart />
				</Route>
				<Route exact path="/products/:id">
					<Navbar />
					<SingleItem />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
