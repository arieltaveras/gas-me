import React from 'react';
import SearchAppBar from './SearchByZip';
import FixedContainer from './MapContainer';
import ColumnGroupingTable from './GasStationsListView';
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
      <FixedContainer/>
      <ColumnGroupingTable/>
    </div>
  );
}

export default App;
