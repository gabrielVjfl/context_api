import React from 'react';
import logo from './logo.svg';
import './App.css';

import Contador from './components/Contador'

import Contador2 from './components/Contador2'

import CountContext from './context/Count'

function App() {
  return (
   <div>
<CountContext>
<Contador></Contador>

<Contador2></Contador2>
</CountContext>

    </div>
  );
}

export default App;
