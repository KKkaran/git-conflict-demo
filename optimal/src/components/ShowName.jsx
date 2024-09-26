import React, {useState} from 'react'
import { useRenderCount } from "@uidotdev/usehooks";
//props are unaffected by state change

function ShowName({content}) {
  const count = useRenderCount();
  const [showName, setShowName] = useState(false);
  console.log("ShowName component rendering")
  return (
    <div>
        <p>Sub-Parent Component Render Count: {count}</p>
        <button onClick={()=>setShowName(!showName)}>Show Name</button>
        <p style={{display: showName ? "block" : "none"}}>Karan Sodhi </p>
        
        <div style={{display: showName ? "block" : "none"}}>{content}</div>
    </div>
  );
}

export default ShowName;
