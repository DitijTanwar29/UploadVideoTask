import {combineReducers} from "@reduxjs/toolkit"
import languageReducer from "../slices/languageSlice"



const rootReducer = combineReducers({
    language: languageReducer,
})

export default rootReducer