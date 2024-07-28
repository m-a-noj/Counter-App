import {createStore} from "redux";
 const INITAL_VALUE ={counter:0,privacy:false}   
const reducer = ( newstore = INITAL_VALUE,action)=>{
    
    
    if (action.type === "INCREATEMENT"){
        console.log(newstore)
      return{...newstore,counter: newstore.counter+1}
    }
    else if(action.type === "DECREATEMENT"){
         newstore ={...newstore, counter :newstore.counter -1}
    }
    else if(action.type === "ADD"){
       return{...newstore,  counter :newstore.counter +Number(action.payload.value)}
    }
    else if(action.type === "ADD"){
      return{...newstore,  counter :newstore.counter -Number(action.payload.value)}

    }
    else if(action.type === "TOGGLE"){
    return{...newstore, privacy:!newstore.privacy}
        
    }
   

    return newstore;

}

const counterstore =createStore(reducer);
export default counterstore;