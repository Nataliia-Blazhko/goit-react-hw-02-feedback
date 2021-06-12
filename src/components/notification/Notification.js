import { Component } from "react";
import PropTypes from "prop-types";

export class Notification extends Component {
  render() {
    return <p className="text">{this.props.message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
