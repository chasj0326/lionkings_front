import "./index.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Signup from "./pages/signup"

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App