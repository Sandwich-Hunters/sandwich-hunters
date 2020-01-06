import React from 'react';
import PropTypes from 'prop-types';

export default function MyGridSquare({ square }) {
  const {
    //
    id,
    empty,
    active,
  } = square;

  return (
    <span
      tabIndex="0"
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      role="gridcell"
    >
      {!empty && !active && <div className="bread" />}
      {!empty && active && (
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
  square: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    empty: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    played: PropTypes.string.isRequired,
  }).isRequired,
};
