import ReactDom from "react-dom";
import React from "react";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const root = document.querySelector("#app");

ReactDom.render(<IndecisionApp />, root);
