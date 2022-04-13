//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import Bootstrap from "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import { Counter } from "./component/Counter.js";

//render your react application

let secs = 1;

const interval = setInterval(() => {
	if (secs == 999999) {
		clearInterval(interval);
	}
	ReactDOM.render(<Counter seconds={secs} />, document.querySelector("#app"));
	secs++;
}, 1000);
