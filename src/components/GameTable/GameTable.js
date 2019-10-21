import React, { useContext } from 'react';
import { TableContext } from './TableContext';
import GameGrid from './GameGrid';
import MyGrid from './MyGrid';
import '../../scss/GameTable.scss';

const GameTable = () => {
  const [state, setState] = useContext(TableContext);
  const { grid, coords, iso, view } = state;
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
        {view === 'showTop' ? (
          <>
            <button
              onClick={() => flipGingham('gameGingham', 'green')}
              className="gingham-swatch green"
            ></button>
            <button
              onClick={() => flipGingham('gameGingham', 'red')}
              className="gingham-swatch red"
            ></button>
            <button
              onClick={() => flipGingham('gameGingham', 'black')}
              className="gingham-swatch black"
            ></button>
            <button
              onClick={() => flipGingham('gameGingham', 'blue')}
              className="gingham-swatch blue"
            ></button>
          </>
        ) : (
          <>
            <button
              onClick={() => flipGingham('myGingham', 'green')}
              className="gingham-swatch green"
            ></button>
            <button
              onClick={() => flipGingham('myGingham', 'red')}
              className="gingham-swatch red"
            ></button>
            <button
              onClick={() => flipGingham('myGingham', 'black')}
              className="gingham-swatch black"
            ></button>
            <button
              onClick={() => flipGingham('myGingham', 'blue')}
              className="gingham-swatch blue"
            ></button>
          </>
        )}
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
