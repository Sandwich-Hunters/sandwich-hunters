import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TableContext } from './TableContext';

export default function GridSquare({ i, s }) {
  const [state, setState] = useContext(TableContext);
  const { grid } = state;
  const {
    id, open, active, myTable,
  } = s;

  const handleClick = (index) => {
    const newGrid = [...grid];
    newGrid[index].active = true;
    setState({ ...state, grid: newGrid });
  };

  return (
    <span
      tabIndex="0"
      key={id}
      className={active ? 'GridSquare active' : 'GridSquare'}
      onClick={() => handleClick(i)}
      onKeyPress={() => handleClick(i)}
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
