import "./App.css"
import React from "react"
import { useSelector } from "react-redux"

import Switch from "./components/containers/Switch"
import Number from "./components/containers/Number"
import Boolean from "./components/containers/Boolean"
import Result from "./components/containers/Result"
import Header from "./components/presentationals/Header"

function App() {
  const shaft = useSelector(s => s.shaft)
  return (
    <div className="wrapper">
      <Header />
      <form className="filters">
        <Number shaft={shaft} />
        <Switch shaft={shaft} />
        <Boolean shaft={shaft} />
      </form>
      <Result shaft={shaft} />
    </div>
  )
}

export default App
