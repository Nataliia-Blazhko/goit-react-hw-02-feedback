import { Component } from "react";
import PropTypes from "prop-types";

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className="section">
        <h2 className="title">{title}</h2>
        {children}
      </section>
    );
  }
}

Section.defaultProps = {
  title: "",
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
