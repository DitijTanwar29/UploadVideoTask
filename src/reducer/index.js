import {combineReducers} from "@reduxjs/toolkit"
import languageReducer from "../slices/languageSlice"
import uploadReducer from "../slices/uploadSlice"


const rootReducer = combineReducers({
    language: languageReducer,
    upload: uploadReducer,
})

export default rootReducer