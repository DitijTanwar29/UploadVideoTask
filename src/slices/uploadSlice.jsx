import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    step : 1,

}

const uploadSlice = createSlice({
    name:"upload",
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload
        },
        resetUploadState: (state) => {
            state.step = 1
        },
    },

})

export const {
    setStep,
    resetUploadState
} = uploadSlice.actions

export default uploadSlice.reducer