import { useState, useEffect } from 'react'
import Intro from './Intro'

import './App.css'

function App() {

  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
      .then(res=> res.json())
      .the(data=> console.log(data))
  },[])

  return (
    <>
      <Intro/>
    </>
  )
}

export default App
