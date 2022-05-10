import React from "react";
import PropTypes from "prop-types";

export const Timer = (props) => {
	let placeholder = "000000";

	let seconds = props.seconds.toString();
	let watch = <i className="fa-solid fa-stopwatch"></i>;

	let output = (
		placeholder.split("").slice(seconds.length).join("") + seconds
	).split("");

	return (
		<div className="clock">
			<i className="far fa-hourglass"></i>
			{output.map((item, i) => {
				return (
					<div className="time" key={i}>
						{item}
					</div>
				);
			})}
		</div>
	);
};

Timer.propTypes = {
	seconds: PropTypes.string,
};
