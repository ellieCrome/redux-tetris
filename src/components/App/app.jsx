import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Square from "../Square";

const mapStateToProps = state => {
  return {
    shapes: state
  };
};

class App extends Component {
  render() {
    return (
      <div>
        {this.props.shapes.map(shape =>
          shape
            .squares()
            .map(sq => (
              <Square key={sq.row + " " + sq.col} row={sq.row} col={sq.col} />
            ))
        )}
      </div>
    );
  }
}

App.propTypes = {
  shapes: PropTypes.array
};

export default connect(mapStateToProps)(App);
