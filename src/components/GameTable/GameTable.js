import React, { useContext } from 'react';
import { TableContext } from './TableContext';
import GameGrid from './GameGrid';
import MyGrid from './MyGrid';
import '../../scss/GameTable.scss';

const GameTable = () => {
  const [state, setState] = useContext(TableContext);
  const { allGingham, grid, coords, iso, view } = state;
  return (
    <div className={`GameTable ${iso === 'iso' ? 'iso' : 'flat'}`}>
      <section className="table-flip__container">
        <div
          className={`table-flip__body 
					${view === 'showTop' ? 'showTop' : 'showBottom'} 
					${iso === 'iso' ? 'iso' : 'flat'}`}
        >
          <div className="table-flip__body--top">
            <GameGrid grid={grid} coords={coords} />
          </div>
          <div className="table-flip__body--bottom">
            <MyGrid grid={grid} coords={coords} />
          </div>
        </div>
      </section>
      <section className="controls">
        <button onClick={flipTable}>Flip</button>
        <button onClick={flipIso}>Iso / Flat</button>
        {view === 'showTop' &&
          allGingham.map(c => (
            <button
              onClick={() => flipGingham('gameGingham', c)}
              className={`gingham-swatch ${c}`}
            ></button>
          ))}
        {view === 'showBottom' &&
          allGingham.map(c => (
            <button
              key={c}
              onClick={() => flipGingham('myGingham', c)}
              className={`gingham-swatch ${c}`}
            ></button>
          ))}
      </section>
    </div>
  );

  function flipGingham(loc, color) {
    setState({ ...state, [loc]: color });
  }

  function flipTable() {
    const { view } = state;
    let newView = view === 'showTop' ? 'showBottom' : 'showTop';
    setState({ ...state, view: newView });
  }

  function flipIso() {
    setState({ ...state, iso: state.iso === 'iso' ? 'flat' : 'iso' });
  }
};

export default GameTable;
