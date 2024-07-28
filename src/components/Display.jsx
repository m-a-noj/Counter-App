import { useSelector } from "react-redux";
import ButtonFunction from "./ButtonFunction";
import { useState } from "react";
import Toggle from "./Toggle";

const Display = ()=>{
    const value = useSelector((value)=>value.counter);
    const status = useSelector(value=>value.privacy);
    

        return(
            <center>
    <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
        <h5 className="card-title">Counter App</h5>
        {status?<Toggle/>:<p>counter value is : {value}</p>}
        
       <ButtonFunction></ButtonFunction>
    </div>
    
</div>
</center>
    )
}
export default Display;