import React  from 'react'

import {useCount} from '../context/Count'


let Contador2 = () => {

const {contador} = useCount(0)


    return (
        <div>
            <h1>contador</h1>
              <h2>Vc Clicou  {contador} vezes </h2>
   
        </div>
    )
}
 export default Contador2
