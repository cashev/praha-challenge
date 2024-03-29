import React from 'react';
import Board from './Board';
import './index.css';

export default class Game extends React.Component {
  handleClick(i) {
    const history = this.props.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.props.updateState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.props.xIsNext,
    });
  }

  jumpTo(step) {
    this.props.updateState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const isDraw = !current.squares.includes(null);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button 
            onClick={() => this.jumpTo(move)}
            data-e2e={`move-index-${move}`}
          >
              {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (isDraw) {
      status = 'Draw!'
    } else {
      status = '次のプレイヤー: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div data-e2e="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
