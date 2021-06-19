import React from "react";

import Square from "./Square";

function Board(props) {
  return (
    <>
      <div className="board-row">
        <Square
          value={props.squares[0]}
          onClick={() => props.onClick(0)}
        ></Square>
        <Square
          value={props.squares[1]}
          onClick={() => props.onClick(1)}
        ></Square>
        <Square
          value={props.squares[2]}
          onClick={() => props.onClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={props.squares[3]}
          onClick={() => props.onClick(3)}
        ></Square>
        <Square
          value={props.squares[4]}
          onClick={() => props.onClick(4)}
        ></Square>
        <Square
          value={props.squares[5]}
          onClick={() => props.onClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={props.squares[6]}
          onClick={() => props.onClick(6)}
        ></Square>
        <Square
          value={props.squares[7]}
          onClick={() => props.onClick(7)}
        ></Square>
        <Square
          value={props.squares[8]}
          onClick={() => props.onClick(8)}
        ></Square>
      </div>
    </>
  );
}

export default Board;
