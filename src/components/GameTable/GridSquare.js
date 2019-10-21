import React from 'react';

const GridSquare = ({ i, s, onClick }) => {
  const { id, open, active, myTable } = s;
  return (
    <span
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      onClick={() => onClick(i, id)}
    >
      {!open && myTable && <div className="bread"></div>}
      {!open && active && !myTable && <div className="bread"></div>}
      {!open && active && myTable && (
        <>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="bread"></div>
        </>
      )}
    </span>
  );
};

export default GridSquare;
