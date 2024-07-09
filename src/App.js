import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

const App = () => {
  const initialBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];

  const [board, setBoard] = useState(initialBoard);

  const handleCellChange = (row, col, value) => {
    if (isValidMove(row, col, value)) {
      const newBoard = [...board];
      newBoard[row][col] = value;
      setBoard(newBoard);
    } else {
      alert('Invalid move!');
    }
  };

  const isValidMove = (row, col, value) => {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === value || board[i][col] === value) {
        return false;
      }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === value) {
          return false;
        }
      }
    }

    return true;
  };

  return (
    <div className="App">
      <h1>React Sudoku</h1>
      <Board board={board} handleCellChange={handleCellChange} />
    </div>
  );
};

export default App;
