import React from "react"
import Language from './components/Language';
import Upload from './components/Upload';
import Layout from "./components/Layout";

import "./App.css"
import {  Routes, Route } from "react-router-dom"

const App = () => {
  return(
    <div className="bg-black ">
      <div className="w-[100%] h-[100%] min-h-screen">
    <Routes>
          <Route path="/" element={<Language />}>
      

            
          </Route>
          <Route path="/layout" element={<Layout/>} />
        </Routes>
      {/* <h3 className="">Hello world</h3> */}
        {/* <Language/> */}
        {/* <Upload/> */}

      </div>
    </div>
  )
}


export default App