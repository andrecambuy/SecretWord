import React from "react";
import "./Game.css";

const Game = ({ verfyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verfyLetter}>End</button>
    </div>
  );
};

export default Game;
