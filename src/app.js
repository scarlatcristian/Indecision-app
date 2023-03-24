import ReactDom from "react-dom";
import React from "react";
import IndecisionApp from "./components/IndecisionApp";
import "./styles/styles.scss";

const root = document.querySelector("#app");

ReactDom.render(<IndecisionApp />, root);
