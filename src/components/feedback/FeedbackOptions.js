import { Component } from "react";
import styles from "./FeedbackOptions.module.scss";

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className={styles.buttonsContainer}>
        {this.props.options.map((option) => {
          return (
            <button
              onClick={() => this.props.onLeaveFeedback(option)}
              className={styles.feedBackButton}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
