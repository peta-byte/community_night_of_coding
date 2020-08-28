import React from "react";
import ReactDom from "react-dom";
import dotenv from "dotenv";
import Home from "./Home";
import "./index.css";
dotenv.config();
 
ReactDom.render(
  <Home/>, 
  document.getElementById("root")
);