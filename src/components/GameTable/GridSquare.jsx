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

  const handleClickGrid = (index) => {
    dispatch({ type: 'CLICK_GRID', payload: { index } });
  };

  return (
    <span
      tabIndex="0"
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      onClick={() => handleClickGrid(i)}
      onKeyPress={() => handleClickGrid(i)}
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
