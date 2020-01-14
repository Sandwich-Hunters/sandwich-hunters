/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import randomSandwichPlacer from '../../game_functions/randomSandwichPlacer';
import EnemyGrid from './EnemyGrid';
import PlayerGrid from './PlayerGrid';
import '../../scss/GameTable.scss';

export default function GameTable() {
  const {
    //
    ginghamColors,
    enemyGrid,
    iso,
    view,
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleFlipEnemyGingham(color) {
    dispatch({ type: 'FLIP_ENEMY_GINGHAM', payload: { color } });
  }

  function handleFlipPlayerGingham(color) {
    dispatch({ type: 'FLIP_PLAYER_GINGHAM', payload: { color } });
  }

  function handleFlipTable() {
    const newView = view === 'showEnemy' ? 'showPlayer' : 'showEnemy';
    dispatch({ type: 'FLIP_TABLE', payload: { newView } });
  }

  function handleFlipIso() {
    const newIso = iso === 'iso' ? 'flat' : 'iso';
    dispatch({ type: 'FLIP_ISO', payload: { newIso } });
  }

  function handleRandomSandwichPlacement(tableSide) {
    const tempCoordsArray = randomSandwichPlacer();
    const tempCoords = tempCoordsArray.map((coordinateString) => coordinateString.slice(3));
    const updateGrid = enemyGrid.map((square) => {
      if (tempCoords.includes(square.id)) {
        return { ...square, empty: false }; // NOT EMPTY: a sandwich lives here
      }
      return { ...square, empty: true };
    });
    if (tableSide === 'PLAYER') {
      dispatch({ type: 'RANDOM_PLAYER_PLACEMENT', payload: { updateGrid } });
    } else if (tableSide === 'ENEMY') {
      dispatch({ type: 'RANDOM_ENEMY_PLACEMENT', payload: { updateGrid } });
    }
  }

  return (
    <div className={`GameTable ${iso === 'iso' ? 'iso' : 'flat'}`}>
      <section className="table-flip__container">
        <div
          className={`table-flip__body 
          ${view === 'showEnemy' ? 'showEnemy' : 'showPlayer'}
          ${iso === 'iso' ? 'iso' : 'flat'}`}
        >
          <div className="table-flip__body--enemy">
            <EnemyGrid />
          </div>
          <div className="table-flip__body--player">
            <PlayerGrid />
          </div>
        </div>
      </section>
      <section className="controls">
        <button onClick={handleFlipTable} type="button">
          Flip
        </button>
        <button onClick={handleFlipIso} type="button">
          Iso / Flat
        </button>
        {view === 'showEnemy' &&
          ginghamColors.map((color) => (
            <button
              aria-label="gingham pattern"
              key={color}
              onClick={() => handleFlipEnemyGingham(color)}
              className={`gingham-swatch ${color}`}
              type="button"
            />
          ))}
        {view === 'showPlayer' &&
          ginghamColors.map((color) => (
            <button
              aria-label="gingham pattern"
              key={color}
              onClick={() => handleFlipPlayerGingham(color)}
              className={`gingham-swatch ${color}`}
              type="button"
            />
          ))}
        <span
          tabIndex="0"
          aria-label="sandwich"
          className="sandwich"
          role="button"
          onClick={() => handleRandomSandwichPlacement('PLAYER')}
          onKeyPress={() => handleRandomSandwichPlacement('PLAYER')}
        >
          🥪
        </span>
        <span
          tabIndex="0"
          aria-label="hamburger"
          className="sandwich"
          role="button"
          onClick={() => handleRandomSandwichPlacement('ENEMY')}
          onKeyPress={() => handleRandomSandwichPlacement('ENEMY')}
        >
          🍔
        </span>
      </section>
    </div>
  );
}
