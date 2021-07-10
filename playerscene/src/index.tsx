import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);
