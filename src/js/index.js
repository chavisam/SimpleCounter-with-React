//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
let number = 0;

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";

export function start() {
	const four = Math.floor(number / 1000);
	const three = Math.floor(number / 100);
	const two = Math.floor(number / 10);
	const one = Math.floor(number / 1);
	number++;

	ReactDOM.render(
		<Home
			digitFour={four}
			digitThree={three}
			digitTwo={two}
			digitOne={one}
		/>,
		document.querySelector("#app")
	);
}

export function reset() {
	number = 0;

	start();
}

start();
