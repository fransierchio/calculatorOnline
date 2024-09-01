import {createContext, useState } from "react";

export const CalContext = createContext()

const CalculatorProvider = ({children}) => {
    const [calc, setCalc] = useState({
        sign : "",
        num: "0",
        sec: 0,
    });
  
    const providerValue = 
    {
        calc, setCalc
    }
    return (
        <CalContext.Provider value={providerValue}>
            {children}
        </CalContext.Provider>
    
  )
}

export default CalculatorProvider
