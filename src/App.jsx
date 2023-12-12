import React from "react"
import Language from './components/Language';
import Upload from './components/Upload';
import "./App.css"
import {  Routes, Route } from "react-router-dom"

const App = () => {
  return(
    <div className="bg-black ">
      <div className="w-[100%] h-[100%]">
    <Routes>
          <Route path="/" element={<Language />}>
      

            
          </Route>
          <Route path="/upload" element={<Upload/>} />
        </Routes>
      {/* <h3 className="">Hello world</h3> */}
        {/* <Language/> */}
        {/* <Upload/> */}

      </div>
    </div>
  )
}


export default App