import React, { useContext } from 'react';
import GameGrid from './GameGrid';
import { TableContext } from './TableContext';
import '../../scss/GameTable.scss';

const GameTable = () => {
  const [state, setState] = useContext(TableContext);
  const { coords, iso, view } = state;
  return (
    <div className={`GameTable ${iso ? '' : 'flat'}`}>
      <div className="table-flip">
        <div
          className={`table-flip__body 
					${view === 'green' ? 'green' : 'red'} 
					${iso ? '' : 'flat'}`}
        >
          <div className="table-flip__body--green">
            <GameGrid coords={[]} />
          </div>
          <div className="table-flip__body--red">
            <GameGrid coords={coords} />
          </div>
        </div>
      </div>
      <section className="controls">
        <button onClick={flipTable}>Flip</button>
        <button onClick={flipIso}>Iso / Flat</button>
      </section>
    </div>
  );

  function flipTable() {
    const { view } = state;
    let newView = view === 'green' ? 'red' : 'green';
    setState({ ...state, view: newView });
    console.log('flipTable');
    console.log({ state });
  }

  function flipIso() {
    setState({ ...state, iso: !state.iso });
    console.log('flipIso');
    console.log({ state });
  }
};

export default GameTable;
