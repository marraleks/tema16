import React from 'react'
import Fullscreen from "./screens/Fullscreen";
import Cursor from "./assets/Cursor"
import "./App.css";
import Card from './components/Card/Card'

const App = () => {
  const hover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.add("grow")
  }

  const unHover = e => {
    const cursor = document.querySelector(".cursor")
    cursor.classList.remove("grow")
  }

  return(
    <div className="App"
      onMouseMove={e => {
        const cursor = document.querySelector(".cursor")
        cursor.style.left = `${e.pageX}px`
        cursor.style.top = `${e.pageY}px`
      }}
      > 
      <Cursor/>
      <Fullscreen 
        hover={hover} 
        unHover={unHover} 
        />
    </div>
  )
}

export default App