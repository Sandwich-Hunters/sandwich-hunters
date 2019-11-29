import React from 'react';
import GameTable from './components/GameTable/GameTable';
import { TableProvider } from './components/GameTable/TableContext';
import './scss/App.scss';

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
