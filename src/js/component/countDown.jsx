import React, { useEffect, useState } from "react";
import PropTypes, { func } from "prop-types";

export const CountDown = () => {
	let [time, setTime] = useState(null);

	useEffect(
		() =>
			function() {
				var timeSelected = document.querySelector("#SelectedNumber");
				timeSelected.addEventListener("change", function() {
					let data = document.querySelector("#data");
					let y = timeSelected.value;
					var myInterval = setInterval(() => {
						if (y == 0) {
							data.innerHTML = "END!!";
							clearInterval(myInterval);
						} else {
							data.innerHTML = y - 1;
							y--;
						}
					}, 1000);
				}),
					[];
			}
	);

	return (
		<div className="container">
			<div className="row">
				<div className="col-4 mx-auto pt-5">
					<label htmlFor="SelectedNumber">
						Introduce un número para la cuenta atrás:{" "}
					</label>
					<input
						id="SelectedNumber"
						type="number"
						className="form-control rounded border-success"
						onChange={e => {
							setTime(e.target.value);
						}}></input>
				</div>
				<div className="col-4 mx-auto pt-5 bg-success">
					<h1 id="time">{time}</h1>
					<h1 id="data"></h1>
				</div>
			</div>
		</div>
	);
};

CountDown.propTypes = {
	time: PropTypes.number
};
