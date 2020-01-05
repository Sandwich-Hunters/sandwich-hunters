import React from 'react';
import PropTypes from 'prop-types';

export default function MyGridSquare({ square }) {
  const {
    //
    id,
    open,
    active,
  } = square;


  return (
    <span
      tabIndex="0"
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      role="gridcell"
    >
      {!open && !active && (<div className="bread" />)}
      {!open && active && (
        <>
          <div className="bread" />
          <span />
          <span />
          <span />
          <span />
          <div className="bread" />
        </>
      )}
    </span>
  );
}

MyGridSquare.propTypes = {
  square: PropTypes.number.isRequired,
};
