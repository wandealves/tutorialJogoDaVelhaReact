import React from "react";

import Square from "./Square";

function Board(props) {
  const status = "Next player: X";

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value="0"></Square>
        <Square value="1"></Square>
        <Square value="2"></Square>
      </div>
      <div className="board-row">
        <Square value="3"></Square>
        <Square value="4"></Square>
        <Square value="5"></Square>
      </div>
      <div className="board-row">
        <Square value="6"></Square>
        <Square value="7"></Square>
        <Square value="8"></Square>
      </div>
    </>
  );
}

export default Board;
