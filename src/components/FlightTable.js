import React, { Component } from "react";
import { fetchFlights } from "../api";
import SearchBar from "./SearchBar";
import Flights from "./Flights";
import { ALL } from "../statuses";

export default class FlightTable extends Component {
  state = {
    items: [],
    search: "",
    status: ALL
  };

  fetchData = async () => {
    const { search, status } = this.state;
    const items = await fetchFlights({ search, status });
    this.setState((prevState, props) => ({
      ...prevState,
      items
    }));
  };

  componentDidMount() {
    this.fetchData();
  }

  onChange = prop => val =>
    this.setState(
      (prevState, props) => ({
        ...this.state,
        [prop]: val
      }),
      () => this.fetchData()
    );

  render() {
    const { items, status } = this.state;
    return (
      <div>
        <SearchBar
          onSearchChange={this.onChange("search")}
          onStatusChange={this.onChange("status")}
          active={status}
        />
        <Flights items={items} />
      </div>
    );
  }
}
