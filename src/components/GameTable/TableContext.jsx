import React, { useState } from 'react';
import PropTypes from 'prop-types';

import boardMaker from '../../game_functions/boardMaker';
import randomSandwichPlacer from '../../game_functions/randomSandwichPlacer';

const TableContext = React.createContext({});

// EXAMPLE DATA from randomSandwichPlacer
// const coordsArray = [
//   '32517',
//   '32527',
//   '32537',
//   '32547',
//   '32557',
//   '32431',
//   '32421',
//   '32411',
//   '32441',
//   '32677',
//   '32676',
//   '32675',
//   '32346',
//   '32356',
//   '32366',
//   '32290',
//   '32299'
// ];

const blankGrid = boardMaker(10);
const coordsArray = randomSandwichPlacer();

// grab the coordinates and map them to the grid
const coords = coordsArray.map((c) => c.slice(3));
const updateGrid = blankGrid.map((s) => {
  if (coords.includes(s.id)) {
    return { ...s, open: false };
  }
  return s;
});

const TableProvider = ({ children }) => {
  const [state, setState] = useState({
    view: 'showTop',
    iso: 'flat',
    grid: updateGrid,
    coords,
    allGingham: ['green', 'red', 'black', 'blue'],
    myGingham: 'blue',
    gameGingham: 'red',
  });
  return (
    <TableContext.Provider value={[state, setState]}>
      {children}
    </TableContext.Provider>
  );
};

TableProvider.propTypes = {
  children: PropTypes.func,
};

TableProvider.defaultProps = {
  children: () => null,
};

export { TableContext, TableProvider };
