import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './titulo.jsx';
function App() { 
  const [contador, setContador] = useState(0)
  return (
    <>
    <Titulo nome="Lavinia" />
    <p>Esse texto veio de um componente</p>
    <h1>Contador: {contador}</h1>
    <div>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>

    </div>
    
    </>
  )
}

export default App