import React, { useContext } from 'react';
import { TableContext } from './TableContext';
import GridSquare from './GridSquare';

const MyGrid = ({ grid }) => {
  const [state] = useContext(TableContext);
  const { myGingham } = state;
  return (
    <section className={`MyGrid ${myGingham}`}>
      <div className="top-labels">
        <label className="top">1</label>
        <label className="top">2</label>
        <label className="top">3</label>
        <label className="top">4</label>
        <label className="top">5</label>
        <label className="top">6</label>
        <label className="top">7</label>
        <label className="top">8</label>
        <label className="top">9</label>
        <label className="top">10</label>
      </div>

      <div className="left-labels">
        <label className="left">A</label>
        <label className="left">B</label>
        <label className="left">C</label>
        <label className="left">D</label>
        <label className="left">E</label>
        <label className="left">F</label>
        <label className="left">G</label>
        <label className="left">H</label>
        <label className="left">I</label>
        <label className="left">J</label>
      </div>
      <div className="right-spacer"></div>

      <main>
        {grid.map((s, i) => (
          <GridSquare
            key={s.id}
            i={i}
            s={{ ...s, myTable: true }}
            onClick={e => e.preventDefault}
          />
        ))}
      </main>
    </section>
  );
};

export default MyGrid;
