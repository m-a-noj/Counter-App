import { useRef } from "react";
import { useDispatch } from "react-redux";
import Toggle from "./Toggle";

const ButtonFunction =()=>{
    const inputElement =useRef();
  const dispatch = useDispatch();
  const handleOnIncreatement=()=>{
    dispatch({type:"INCREATEMENT"})
  }
  const handleOnDecreatment=()=>{
    dispatch({type:"DECREATEMENT"})
  }
  const handleOnAdd=()=>{
    dispatch({type:"ADD",payload:{
        value:inputElement.current.value
    }})
    inputElement.current.value="";
  }
  const handleOnMinus=()=>{
    dispatch({type:"MINUS",payload:{
        value:inputElement.current.value
    }})
    inputElement.current.value="";
  }
  const handleOnToggle =()=>{
    dispatch({type:"TOGGLE"})
  }

    return(<>
        <div >
        <button type="button" className="btn btn-primary"style={{margin: "15px"}} onClick={handleOnIncreatement}>
            +1
        </button>
        <button type="button" className="btn btn-primary"style={{margin: "15px"}} onClick={handleOnDecreatment}>
         -1
        </button>
        </div>
        <div className="input-group mb-3">    
        <input  ref ={inputElement} type="number" className="form-control" placeholder="Enter your Number" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div >
        <button type="button" className="btn btn-primary"style={{margin: "0px 20px 10px 0px"}} onClick={handleOnAdd}>
            Add
        </button>
        <button type="button" className="btn btn-primary"style={{margin: "0 0 10px 0"}} onClick={handleOnMinus}>
         Minus
        </button>
        </div>
        <button type="button" className="btn btn-primary"style={{margin: "15px"}} onClick={handleOnToggle}>
        Privacy
        </button>
        </>
    )
}
export default ButtonFunction;