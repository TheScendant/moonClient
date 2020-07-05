import React, { useState } from 'react';
import './App.css';
import board from './seventeenBoard.png'
import { getCord } from './utils';
function App() {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [radius, setRadius] = useState(0);
  const [cord, setCord] = useState("--");
  const handleClick = (event) => {
    const { target } = event;
    if (target.classList.contains("wrapper-svg")) {
      const box = target.getBoundingClientRect();
      // dosomething - display the calculated coordinate instead of just user input?
      const clickX = event.clientX - box.x;
      const clickY = event.clientY - box.y;
      setXValue(clickX);
      setYValue(clickY);
      setRadius(box.height / 40);
      setCord(getCord(clickX, clickY));
    }
  }
  return (
    <div className="App">
      <header className="app-header">
        <div className="img-overlay-wrap">
          <img src={board} className="board" />
          <svg className="wrapper-svg" onClick={handleClick} width="100%" height="100%">
            <circle cx={xValue} cy={yValue} r={radius} stroke="green" fill="transparent" strokeWidth="4" />
          </svg>
        </div>
        <div className="cord">
          {cord}
        </div>
      </header>
    </div>
  );
}

export default App;
