import React, { Component } from "react";
import PropTypes from "prop-types";
import statuses from "../statuses";
import "./SearchBar.css";

export default class SearchBar extends Component {
  static propTypes = {
    onSearchChange: PropTypes.func,
    onStatusChange: PropTypes.func,
    active: PropTypes.string
  };

  render() {
    const { onSearchChange, onStatusChange, active } = this.props;

    return (
      <div className="SearchBar row">
        <div className="col-lg-4">
          <input
            onChange={e => onSearchChange(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Найти по номеру рейса"
          />
        </div>
        <div className="col-lg-4 col-lg-offset-4">
          <div className="btn-group pull-right" role="group">
            {Object.keys(statuses).map(x => (
              <button
                key={x}
                type="button"
                className={`btn btn-default ${x === active ? "active" : ""}`}
                onClick={() => onStatusChange(x)}
              >
                {statuses[x]}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
