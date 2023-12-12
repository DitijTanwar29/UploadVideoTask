import React, { useState } from "react"
import Upload from "./Upload";
import {Link, Navigate, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../slices/languageSlice"
// import setLanguage from ""; 

const LanguageBtn = () => {
    const navigate = useNavigate();
    const LanguageList = [{ id:1,lang:"English"}, 
    {id:2,lang:"English"},
    {id:3,lang:"English"},
    {id:4,lang:"English"},
    {id:5,lang:"English"},
    {id:6,lang:"English"},
    {id:7,lang:"English"},
    {id:8,lang:"punjabi"},
    {id:9,lang:"hindi"}]

    const {language} = useSelector((state) => state.language );
    const dispatch = useDispatch();
    // const [selectedLang, setSelectedLang] = useState("");

    // console.log("value of language in slice ", language);
// console.log("selected language : ",selectedLang)
//set language in reducer 
//then use it in upload wala componenet
    const clickHandler = () => {
        console.log("inside click handler");
        navigate("/upload");
        
    }
    // console.log("selectedLang - ",selectedLang);  
    console.log("language ki value -", language);          

    return (
        <>

            <div className="w-[80%] flex flex-wrap items-evenly justify-around gap-10">
                {

                    LanguageList.map( ( element,key ) => {
                        return (
                            <button key={element.id} className={`${language == element.lang ? " bg-cyan-500" :  "bg-gray-600" }  w-[10rem] rounded-md p-4 text-white text-lg font-bold uppercase btnclick`} 
                            onClick={() => {
                                // element && setSelectedLang(element.lang)
                                dispatch(setLanguage(element.lang));
                            console.log("element - ",element);
                                
                            }}      
                            >
                                {element.lang}
                            </button>
                        )
                    })
                }

                <div className="flex items-center justify-between gap-40  mt-10  text-white text-lg font-bold">
                    <button className="bg-gray-600 w-[10rem] p-4 rounded-md uppercase">Back</button>
                    <button className="bg-cyan-500 w-[10rem] p-4 rounded-md uppercase"
                        onClick={() => {clickHandler()}}    
                        
                    >
                        Next
                    </button>
                </div>
            </div>

        </>
    )
}

export default LanguageBtn