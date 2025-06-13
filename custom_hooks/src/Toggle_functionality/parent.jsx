import { useState } from "react";
import Child from "./child";

const Parent=()=>{
    const [isVisible, setIsVisible]=useState(false);

    const toggleVisibility=()=>{
        setIsVisible(!isVisible);
    };
    return(
        <>
        <h1>Toggle visibility</h1>
        <Child isVisible={isVisible} toggleVisibility={toggleVisibility}/>
        </>
    )
}
export default Parent;