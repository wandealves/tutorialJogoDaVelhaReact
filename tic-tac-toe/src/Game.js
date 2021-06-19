import React, { useEffect, useState } from "react";

import Board from "./Board";

function Game(props) {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [current, SetCurrent] = useState({ squares: Array(9).fill(null) });
  const [xIsNext, SetXIsNext] = useState(true);
  const [status, setStatus] = useState("Next player: X");
  const [stepNumber, setStepNumber] = useState(0);

  function handleClick(i) {
    const historyCurrent = history.slice(0, stepNumber + 1);
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    historyCurrent.squares = squares;

    SetCurrent(historyCurrent);
    setHistory([...history, { squares }]);
    SetXIsNext(!xIsNext);
    setStepNumber(history.length);
  }

  function jumpTo(step) {
    setStepNumber(step);
    SetXIsNext(step % 2 === 0);
  }

  useEffect(() => {
    const historyCurrent = history.slice(0, stepNumber + 1);
    const squares = historyCurrent[history.length - 1].squares.slice();

    const winner = calculateWinner(squares);

    if (winner) {
      setStatus(`Winner: ${winner}`);
    } else {
      setStatus(`Next player: ${xIsNext ? "X" : "O"}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  useEffect(() => {
    SetCurrent(history[stepNumber]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={i => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((step, move) => {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Game;
