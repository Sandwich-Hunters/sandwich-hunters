/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/MySammies.scss';

export default function MySammies() {
  const dispatch = useDispatch();
  const playerGingham = useSelector((state) => state.playerGingham);
  const holding = useSelector((state) => state.holding);
  const [orient, setOrient] = useState('horizontal');

  const handleCancelButton = () => {
    setOrient('horizontal');
    const cancelHolding = {
      type: null, // wedge, sub, hoagie, grinder, hero
      orient: null, // vertical or horizontal
    };
    dispatch({ type: 'CANCEL_HOLDING', payload: cancelHolding });
  };

  const handleSammyClick = (type) => {
    const nowHolding = {
      type,
      orient,
    };
    dispatch({ type: 'NOW_HOLDING', payload: nowHolding });
  };

  return (
    <div className={`MySammies ${playerGingham}`}>
      <header>
        My Sammies
        <span
          tabIndex="0"
          aria-label="clockwise vertical arrows"
          className="orient-button"
          role="button"
          onClick={() => (orient === 'horizontal' ? setOrient('vertical') : setOrient('horizontal'))}
          onKeyPress={() => (orient === 'horizontal' ? setOrient('vertical') : setOrient('horizontal'))}
        >
          🔃
        </span>

        <span
          tabIndex="0"
          aria-label="cancel"
          className="cancel-button"
          role="button"
          onClick={handleCancelButton}
          onKeyPress={handleCancelButton}
        >
          🚫
        </span>
      </header>

      <section className={`MySammies__body ${orient}`}>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable" onClick={() => handleSammyClick('wedge')}>
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">wedge</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable" onClick={() => handleSammyClick('sub')}>
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">submarine</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable" onClick={() => handleSammyClick('hoagie')}>
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">hoagie</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable" onClick={() => handleSammyClick('grinder')}>
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">grinder</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable" onClick={() => handleSammyClick('hero')}>
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">hero</div>
        </section>

      </section>
    </div>
  );
}
