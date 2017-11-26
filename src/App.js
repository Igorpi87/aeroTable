import React, { Component } from "react";
import FlightTable from "./components/FlightTable";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <FlightTable />
      </div>
    );
  }
}
