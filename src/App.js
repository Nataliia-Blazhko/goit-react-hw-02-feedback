import { Component } from "react";
import { Section } from "./components/section/Section";
import { Statistics } from "./components/statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = (feedback) => () => {
    this.setState({ [feedback]: this.state[feedback] + 1 });
  };

  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <Section
        title="Please leave feedback"
        children={<Statistics title="Statistic" />}
      />
    );
  }
}

export default App;
