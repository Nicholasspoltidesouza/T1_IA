/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";

type Players = "O" | "X";
function App() {
  const [turn, setTurn] = useState("O");
  const [winner, setWinner] = useState<Players | null>(null);
  const [draw, setDraw] = useState<boolean | null>(null);
  const [marks, setMarks] = useState<{ [key: string]: Players }>({});
  const getSquares = () => {
    return new Array(9).fill(true);
  };
  return (
    <div className="container">
      <h1>O Ganhou</h1>
      <h1>Empate</h1>
      <button>Jogar Novamente</button>
      <p>Vez de X</p>
      <div className="board">
        {getSquares().map((_, i) => (
          <div className="cell">X</div>
        ))}
      </div>
    </div>
  );
}

export default App;
