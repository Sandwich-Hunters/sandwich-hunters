import React, { useContext } from 'react';
import { TableContext } from './TableContext';
import GridSquare from './GridSquare';
import '../../scss/GameGrid.scss';

export default function GameGrid() {
  const [state] = useContext(TableContext);
  const { gameGingham, grid } = state;

  // const handleClick = (i) => {
  //   const newGrid = [...grid];
  //   newGrid[i].active = true;
  //   setState({ ...state, grid: newGrid });
  // };

  return (
    <section className={`GameGrid ${gameGingham}`}>
      <div className="top-labels">
        <p className="top">1</p>
        <p className="top">2</p>
        <p className="top">3</p>
        <p className="top">4</p>
        <p className="top">5</p>
        <p className="top">6</p>
        <p className="top">7</p>
        <p className="top">8</p>
        <p className="top">9</p>
        <p className="top">10</p>
      </div>

      <div className="left-labels">
        <p className="left">A</p>
        <p className="left">B</p>
        <p className="left">C</p>
        <p className="left">D</p>
        <p className="left">E</p>
        <p className="left">F</p>
        <p className="left">G</p>
        <p className="left">H</p>
        <p className="left">I</p>
        <p className="left">J</p>
      </div>
      <div className="right-spacer" />

      <main>
        {grid.map((s, i) => (
          <GridSquare
            key={s.id + s.myTable}
            i={i}
            s={s}
          />
        ))}
      </main>
    </section>
  );
}
