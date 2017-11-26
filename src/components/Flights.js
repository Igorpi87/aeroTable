import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Flights extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        arrival: PropTypes.string,
        status: PropTypes.string,
        terminal: PropTypes.string,
        destination: PropTypes.string,
        thread: PropTypes.shape({
          carrier: PropTypes.shape({
            codes: PropTypes.shape({
              icao: PropTypes.srting
            })
          })
        })
      })
    )
  };

  render() {
    const { items = [] } = this.props;
    return (
      <div className="table-responsive">
        <table className="table table-striped table-condensed table-bordered">
          <thead>
            <tr>
              <th>Время</th>
              <th>Код компании</th>
              <th>Рейс</th>
              <th>Направление</th>
              <th>Терминал</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item.thread.uid}>
                  <td>{item.arrival}</td>
                  <td>{item.thread.carrier.codes.icao}</td>
                  <td>{item.thread.uid}</td>
                  <td>{item.destination}</td>
                  <td>{item.terminal}</td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
