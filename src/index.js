import ReactDOM, {createRoot} from "react-dom/client";
import React from "react";
import App from "./components/app";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home"/>);