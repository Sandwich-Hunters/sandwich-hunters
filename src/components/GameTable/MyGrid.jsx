import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TableContext } from './TableContext';
import GridSquare from './GridSquare';

export default function MyGrid({ grid }) {
  const [state] = useContext(TableContext);
  const { myGingham } = state;
  return (
    <section className={`MyGrid ${myGingham}`}>
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
            s={{ ...s, myTable: true }}
            onClick={(e) => e.preventDefault}
          />
        ))}
      </main>
    </section>
  );
}

MyGrid.propTypes = {
  grid: PropTypes.shape([
    {
      active: PropTypes.bool.isRequired,
      open: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      played: PropTypes.string.isRequired,
    },
  ]).isRequired,
};