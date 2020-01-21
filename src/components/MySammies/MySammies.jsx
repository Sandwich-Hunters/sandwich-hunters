/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/MySammies.scss';

export default function MySammies() {
  const dispatch = useDispatch();
  const playerGingham = useSelector((state) => state.playerGingham);
  const [holding, setHolding] = useState({
    type: null,
    orient: 'horizontal',
  });

  const handleCancelButton = () => {
    const cancelHolding = {
      type: null, // wedge, sub, hoagie, grinder, hero
      orient: 'horizontal', // vertical or horizontal
    };
    setHolding(cancelHolding);
  };

  const handleSammyClick = (type) => {
    setHolding({ ...holding, type });
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
          onClick={() => (holding.orient === 'horizontal' ? setHolding({ ...holding, orient: 'vertical' }) : setHolding({ ...holding, orient: 'horizontal' }))}
          onKeyPress={() => (holding.orient === 'horizontal' ? setHolding({ ...holding, orient: 'vertical' }) : setHolding({ ...holding, orient: 'horizontal' }))}
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

      <section className="MySammies__body">

        <section className="MySammies__sammy__container">
          <div
            className={`MySammies__sammy--draggable ${holding.type === 'wedge' ? 'active' : ''} ${holding.orient}`}
            onClick={() => handleSammyClick('wedge')}
          >
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">wedge</div>
        </section>

        <section className="MySammies__sammy__container">
          <div
            className={`MySammies__sammy--draggable ${holding.type === 'sub' ? 'active' : ''} ${holding.orient}`}
            onClick={() => handleSammyClick('sub')}
          >
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">submarine</div>
        </section>

        <section className="MySammies__sammy__container">
          <div
            className={`MySammies__sammy--draggable ${holding.type === 'hoagie' ? 'active' : ''} ${holding.orient}`}
            onClick={() => handleSammyClick('hoagie')}
          >
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">hoagie</div>
        </section>

        <section className="MySammies__sammy__container">
          <div
            className={`MySammies__sammy--draggable ${holding.type === 'grinder' ? 'active' : ''} ${holding.orient}`}
            onClick={() => handleSammyClick('grinder')}
          >
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">grinder</div>
        </section>

        <section className="MySammies__sammy__container">
          <div
            className={`MySammies__sammy--draggable ${holding.type === 'hero' ? 'active' : ''} ${holding.orient}`}
            onClick={() => handleSammyClick('hero')}
          >
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
