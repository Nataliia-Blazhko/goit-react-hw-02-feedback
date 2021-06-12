import { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    return (
      <div className="buttonsContainer">
        {this.props.options.map(option => {
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
