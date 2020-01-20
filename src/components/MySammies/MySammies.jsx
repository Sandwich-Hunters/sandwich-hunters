import React from 'react';
import { useSelector } from 'react-redux';
import '../../scss/MySammies.scss';

export default function MySammies() {
  const playerGingham = useSelector((state) => state.playerGingham);
  return (
    <div className="MySammies">
      <section className={`MySammies__body ${playerGingham}`}>
        <header>My Sammies</header>
        <div className="MySammies__sammy bread wedge left" />
        <div className="MySammies__sammy bread wedge right" />
        <div className="MySammies__sammy wedge label">wedge</div>
        <div className="MySammies__sammy bread sub left" />
        <div className="MySammies__sammy bread sub mid" />
        <div className="MySammies__sammy bread sub right" />
        <div className="MySammies__sammy sub label">submarine</div>
        <div className="MySammies__sammy bread hoagie left" />
        <div className="MySammies__sammy bread hoagie mid" />
        <div className="MySammies__sammy bread hoagie right" />
        <div className="MySammies__sammy hoagie label">hoagie</div>
        <div className="MySammies__sammy bread grinder left" />
        <div className="MySammies__sammy bread grinder mid-1" />
        <div className="MySammies__sammy bread grinder mid-2" />
        <div className="MySammies__sammy bread grinder right" />
        <div className="MySammies__sammy grinder label">grinder</div>
        <div className="MySammies__sammy bread hero left" />
        <div className="MySammies__sammy bread hero mid-1" />
        <div className="MySammies__sammy bread hero mid-2" />
        <div className="MySammies__sammy bread hero mid-3" />
        <div className="MySammies__sammy bread hero right" />
        <div className="MySammies__sammy hero label">hero</div>
      </section>
    </div>
  );
}
