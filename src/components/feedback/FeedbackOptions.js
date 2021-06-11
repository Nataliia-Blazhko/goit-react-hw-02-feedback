import { Component } from "react";

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className="buttonsContainer">
        {this.props.options.map((option) => {
          return (
            <button
              key={option}
              onClick={() => this.props.onLeaveFeedback(option)}
              className="feedBackButton"
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
