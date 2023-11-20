import React from 'react';
import SearchAppBar from './SearchByZip';
import ColumnGroupingTable from './GasStationsListView';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <ColumnGroupingTable/>
    </div>
  );
}

export default App;
