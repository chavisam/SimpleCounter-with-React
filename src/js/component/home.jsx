import React from "react";
import PropTypes, { resetWarningCache } from "prop-types";
import { CountDown } from "./countDown.jsx";
import { useEffect, useState } from "react";
import { start, reset } from "../index.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = props => {
	const [stop, setStop] = useState("Play");

	useEffect(() => {
		if (stop == "Stop") {
			console.log("playing");
			let myInterval = setInterval(() => {
				start();
			}, 1000);
			return () => {
				clearInterval(myInterval);
			};
		} else {
			console.log("stopped");
		}
	}, [stop]);

	return (
		<div className="text-center mt-5 ">
			<h1>Simple Counter with React</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<div className=" row text-light">
				<div className="col-5 mx-auto p-5 rounded bg-black text-larger">
					<div className="line ">
						<i className="fas fa-stopwatch"></i>
					</div>
					<div className="four line">{props.digitFour % 10}</div>
					<div className="three line">{props.digitThree % 10}</div>
					<div className="two line">{props.digitTwo % 10}</div>
					<div className="one line">{props.digitOne % 10}</div>
					<div>
						<button
							className="btn btn-primary m-3"
							id="stop"
							onClick={() => {
								stop == "Play"
									? (setStop("Stop"), console.log("cambiado"))
									: setStop("Play");
							}}>
							{stop}
						</button>
						<button className="btn-secondary btn " onClick={reset}>
							Reset
						</button>
					</div>
				</div>
			</div>
			<div className="row">
				<CountDown />
			</div>
		</div>
	);
};

Home.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number
};

export default Home;
