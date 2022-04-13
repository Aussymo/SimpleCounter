import React from "react";
import PropTypes from "prop-types";

export const Timer = (props) => {
	let placeholder = "00000000";

	let seconds = props.seconds.toString();

	let output = (
		placeholder.split("").slice(seconds.length).join("") + seconds
	).split("");

	return (
		<div className="clock">
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
