import React from 'react'


import {useCount} from '../context/Count'


let Contador = () => {

    const {contador, setContador} = useCount(0) // contador = 0

    
return (
    <div>
        <h1>contador</h1>
       <h2>Vc Clicou {contador} vezes</h2>
        <button onClick={() => setContador(contador === 100 ? contador = 100 : contador + 1)}>Inc</button>
        <button onClick={() => setContador(contador === 0 ? contador = 0 : contador - 1)}>Dec</button>
    </div>
)
}
export default Contador