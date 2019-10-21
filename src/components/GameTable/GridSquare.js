import React from 'react';

const GridSquare = ({ s }) => {
  return (
    <span key={s.id} className={s.active ? 'active' : ''}>
      {!s.open && <div className="bread"></div>}
    </span>
  );
};

export default GridSquare;
