import React from 'react';
import GameTable from './GameTable';
import { TableProvider } from './TableContext';
import '../../scss/App.scss';

function App() {
  return (
    <div className="App">
      <TableProvider>
        <GameTable />
      </TableProvider>
    </div>
  );
}

export default App;
