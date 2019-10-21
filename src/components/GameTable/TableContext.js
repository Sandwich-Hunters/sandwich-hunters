import React, { useState } from 'react';

const TableContext = React.createContext({ view: 'green' });

const coords = [
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

const TableProvider = props => {
  const [state, setState] = useState({
    view: 'green',
    coords: coords,
    iso: true
  });
  return (
    <TableContext.Provider value={[state, setState]}>
      {props.children}
    </TableContext.Provider>
  );
};

export { TableContext, TableProvider };
