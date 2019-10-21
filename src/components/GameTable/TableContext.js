import React, { useState } from 'react';
import { boardMaker } from './boardMaker';
const TableContext = React.createContext({});

const coordsArray = [
  '32517',
  '32527',
  '32537',
  '32547',
  '32557',
  '32431',
  '32421',
  '32411',
  '32441',
  '32677',
  '32676',
  '32675',
  '32346',
  '32356',
  '32366',
  '32290',
  '32291'
];

const blankGrid = boardMaker(10);
const coords = coordsArray.map(c => c.slice(3));
const updateGrid = blankGrid.map(s => {
  if (coords.includes(s.id)) {
    return { ...s, open: false };
  } else return s;
});

const TableProvider = props => {
  const [state, setState] = useState({
    view: 'showTop',
    iso: 'flat',
    grid: updateGrid,
    coords: coords,
    myGingham: 'blue',
    gameGingham: 'red'
  });
  return (
    <TableContext.Provider value={[state, setState]}>
      {props.children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
