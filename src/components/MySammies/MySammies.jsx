import React from 'react';
import { useSelector } from 'react-redux';
import '../../scss/MySammies.scss';

export default function MySammies() {
  const playerGingham = useSelector((state) => state.playerGingham);
  return (
    <div className={`MySammies ${playerGingham}`}>
      <header>My Sammies</header>

      <section className="MySammies__body">

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable">
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">wedge</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable">
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">submarine</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable">
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">hoagie</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable">
            <div className="MySammies__sammy bread left" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread mid" />
            <div className="MySammies__sammy bread right" />
          </div>
          <div className="MySammies__sammy label">grinder</div>
        </section>

        <section className="MySammies__sammy__container">
          <div className="MySammies__sammy--draggable">
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
