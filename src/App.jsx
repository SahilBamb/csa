import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex gap-5 flex-col justify-center items-center w-full h-screen">
      <img src={viteLogo} alt="React Logo" className="w-10 h-10" />
      <p className="font-pixeled animate-pulse gradient-text">Sahil's Test Website (w/ tailwindcss)</p>
    </div>
  )
}

export default App
