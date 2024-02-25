import React from 'react'
import Header from "./components/header/Header"
import  { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      {/* Render the Header component */}
      <Header/>
      {/* Define the routes for the application */}
      <Routes>
       {/* Define a route for the root path ("/") */}
       <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App