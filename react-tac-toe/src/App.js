import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {generateSquares} from './GenerateSquares';

let toeSize = 3;


function App() {
  return (
    <div className="App">
      <header>
        <div className='title'>Tic-Tac-Toe</div>
        <div className='portfolio'>
          <a href='#'>Back to Portfolio!</a></div>
      </header>
      <div className='game-board'>
        <button onClick={() => {generateSquares(toeSize)}}>
          <h1>Play!</h1>
          </button>
          {generateSquares(toeSize)}
      </div>
    </div>
  );
}

export default App;
