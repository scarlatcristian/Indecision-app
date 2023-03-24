import { createRoot } from "react-dom/client";
import React from "react";
import IndecisionApp from "./components/IndecisionApp";
import "./styles/styles.css";

const root = createRoot(document.querySelector("#app"));

root.render(<IndecisionApp />);
