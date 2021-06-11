import { Component } from "react";
import { Notification } from "../notification/Notification";

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return good || neutral || bad ? (
      <div>
        <p className="text">
          Good: <span className="numbers">{good}</span>{" "}
        </p>
        <p className="text">
          Neutral: <span className="numbers">{neutral}</span>
        </p>
        <p className="text">
          Bad: <span className="numbers">{bad}</span>
        </p>
        <p className="text">
          Total: <span className="numbers">{total()}</span>
        </p>
        <p className="text">
          Positive feedback:{" "}
          <span className="numbers">{positivePercentage()}%</span>
        </p>
      </div>
    ) : (
      <Notification message="No feedback given" />
    );
  }
}
