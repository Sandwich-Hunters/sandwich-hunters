import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function EnemyGridSquare({ index, square }) {
  const {
    //
    id,
    empty,
    active,
  } = square;
  const dispatch = useDispatch();

  const handleClickGrid = () => {
    dispatch({ type: 'CLICK_GRID', payload: { index } });
  };

  return (
    <span
      tabIndex="0"
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      onClick={handleClickGrid}
      onKeyPress={handleClickGrid}
      role="gridcell"
    >
      {!empty && active && <div className="bread" />}
    </span>
  );
}

EnemyGridSquare.propTypes = {
  index: PropTypes.number.isRequired,
  square: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    empty: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    played: PropTypes.string.isRequired,
  }).isRequired,
};
