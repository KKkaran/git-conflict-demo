import React, { useEffect, useState } from "react";
import { useRenderCount } from "@uidotdev/usehooks";

const SlowComponent = ()=>{
    const [loading, setLoading] = useState(true);
    const count = useRenderCount();
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },4000)
    },[])
    console.log("Slow component rendering")
    return <>
    <h4>SlowComponent Render Count: {count}</h4>
        {
            loading ? (<p>Loading...</p>) : <>
            <h3>Some Content is here</h3>
            </>
        }
       </> 

}


export default SlowComponent;