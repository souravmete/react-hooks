
import { useState } from "react";
import { createContext } from "react";

// step 1
export const DataContext=createContext()


// step 2
export const CounterApp= ({children})=>{
    const [count,setCount]=useState(0)
    function handeladd(){
        setCount(count+1)
    }
    function handelSub(){
        if(count <= 0)  return count
        setCount(count-1)
    }
    return(
        <>
            <DataContext.Provider value={{count,handelSub,handeladd}}>
                {children}
            </DataContext.Provider>
        </>
    )
}