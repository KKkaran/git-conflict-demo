import React, {useState} from 'react'
import './App.css';
import { useRenderCount } from "@uidotdev/usehooks";
import ShowName from './components/ShowName';
import SlowComponent from './components/SlowComponent';
import SearchBar from './components/SearchBar';
function App() {
  const count = useRenderCount();
  console.log("parent component rendering")
  return (
    <div className="App">
      <header className="App-header">
      <h4>Parent Component Render Count: {count}</h4>
      <SearchBar/>
        <ShowName content={<SlowComponent/>}>
        </ShowName>
      </header>
    </div>
  );
}

export default App;
