import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export default function GridSquare({ i, s }) {
  const {
    //
    id,
    open,
    active,
    myTable,
  } = s;
  const dispatch = useDispatch();

  const handleUpdateGrid = (index) => {
    dispatch({ type: 'UPDATE_GRID', payload: { index } });
  };

  return (
    <span
      tabIndex="0"
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      onClick={() => handleUpdateGrid(i)}
      onKeyPress={() => handleUpdateGrid(i)}
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

GridSquare.propTypes = {
  i: PropTypes.number.isRequired,
  s: PropTypes.number.isRequired,
};
