import React, {useState} from 'react'
import { useRenderCount } from "@uidotdev/usehooks";

function SearchBar() {
  const count = useRenderCount();
  const[userInput, setUserInput] = useState("");
  console.log("search component rendering")
  return (
    <div>
        <input type="text" 
        placeholder='type name' 
        onChange={
            (e)=>setUserInput(e.target.value)
            } />
        <h3>{userInput}</h3>
    </div>
  );
}

export default SearchBar;
