import { Component } from "react";
export class Notification extends Component {
  render() {
    return <p className="text">{this.props.message}</p>;
  }
}
