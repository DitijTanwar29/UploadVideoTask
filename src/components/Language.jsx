import React from "react"
import img1 from "../Assets/img1.png"
import Rectangleimg from "../Assets/Rectangleimg.png"
import LanguageBtn from "./LanguageBtn"

const Language = () => {
    return(
        <div className=" w-screen h-screen bg-black overflow-hidden ">

            <div className=" flex relative">

                <div className=" w-[45%] relative flex flex-row" >

                    <h2 className="absolute mt-10 ml-10 text-white font-bold z-10 text-4xl uppercase ">Language page</h2>
                    <img src={Rectangleimg} className="absolute"></img>
                    <img src={img1} className="absolute mt-72 ml-3 " ></img>

                </div>

                <div className="w-full bg-black flex items-center justify-center h-screen ">
                    <LanguageBtn/>

                </div>
            </div>
        </div>
    )
}

export default Language