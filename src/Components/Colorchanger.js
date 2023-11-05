import React, { useState } from 'react';

export default function Colorchanger() {
  const [color, setColor] = useState("");

  const fullScreenStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="fs-5" style={{ ...fullScreenStyle, backgroundColor: color }}>
      <button     onClick={() => setColor("#0077b6")}
       type="button" className="btn btn-primary">Blue</button>
      <button
        onClick={() => setColor("red")}
        type="button"
        className="btn btn-secondary"
        style={{ backgroundColor: "red" }}
      >
        Red
      </button>
      <button onClick={() => setColor("green")}
      type="button" className="btn btn-success">Green</button>

      <button onClick={() => setColor("yellow")}
      type="button" className="btn btn-danger">Yellow</button>

      <button onClick={() => setColor("#ffb7c3")}
      type="button" className="btn btn-warning">Pink</button>

      <button onClick={() => setColor("#ff5d8f")}
       type="button" className="btn btn-info">DarkPink</button>

      <button onClick={() => setColor("white")}
       type="button" className="btn btn-light">Light</button>

      <buttonon onClick={() => setColor("black")}
       type="button" className="btn btn-dark">Dark</buttonon>
    </div>
  );
}
