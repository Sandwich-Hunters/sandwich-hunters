import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function MyGridSquare({ index, square }) {
  const {
    //
    id,
    open,
    active,
    myTable,
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
      {!open && myTable && <div className="bread" />}
      {!open && active && !myTable && <div className="bread" />}
      {!open && active && myTable && (
        <>
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
  index: PropTypes.number.isRequired,
  square: PropTypes.number.isRequired,
};
