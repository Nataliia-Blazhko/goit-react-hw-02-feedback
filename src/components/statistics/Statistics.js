import { Component } from "react";
export class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;

    return (
      <div>
        <p>{good}</p>
        <p>{neutral}</p>
        <p>{bad}</p>
      </div>
    );
  }
}
