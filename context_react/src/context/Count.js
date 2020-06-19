import React, {createContext, useState, useContext} from 'react'

const CountContext =  createContext()


export default function CountProvider({children}) {
   
             const [contador, setContador] = useState(0)


             return (

        <CountContext.Provider value={{contador,  setContador}}>{children}</CountContext.Provider>
    )
}


export function useCount() {
    const context = useContext(CountContext)
    const {contador, setContador} = context
    return {contador, setContador}
}