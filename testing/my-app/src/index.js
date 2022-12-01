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

  setState(history) {
    this.setState({
      history: history,
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    return (
      <Game
        history={this.state.history}
        stepNumber={this.state.stepNumber}
        xIsNext={this.state.xIsNext}
        setState={(history) => this.setState(history)}
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
