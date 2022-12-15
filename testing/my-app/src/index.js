import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  updateState(value) {
    this.setState(value);
  }

  render() {
    return (
      <Game
        history={this.state.history}
        stepNumber={this.state.stepNumber}
        xIsNext={this.state.xIsNext}
        updateState={(value) => this.updateState(value)}
      />
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Top />
  </React.StrictMode>,
  document.getElementById("root")
);
