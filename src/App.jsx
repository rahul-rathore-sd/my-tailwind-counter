import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget the CSS!

function App() {
  
let [Counter, setCounter] = useState(0)

function addvalue(){
  if(Counter<20){
    setCounter(Counter + 1)
  }else{
    alert("Counter cannot be more than 20")
  }
}
function removevalue(){
  if(Counter>0){
    setCounter(Counter - 1)
  }else{
    alert("Counter cannot be less than 0")
  }
}

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React = Counter project</h1>
      <div className="card">
        <button className="btn" onClick={addvalue} >Increase me {Counter}</button> <br /> <br />
        <button className="btn btn-primary" onClick={removevalue} >Decrease me {Counter}</button>
      </div>
    </>
  )
}

export default App
