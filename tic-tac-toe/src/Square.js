import React, { useState } from "react";

function Square(props) {
  const [value, setValue] = useState("");

  function onClick() {
    setValue("X");
  }

  return (
    <>
      <button
        className="square"
        onClick={() => {
          onClick();
        }}
      >
        {value}
      </button>
    </>
  );
}

export default Square;
