import { Component } from "react";
import { Section } from "./components/section/Section";
import { Statistics } from "./components/statistics/Statistics";
import { FeedbackOptions } from "./components/feedback/FeedbackOptions";
import "./styles.scss";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = (option) => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.increment} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;
