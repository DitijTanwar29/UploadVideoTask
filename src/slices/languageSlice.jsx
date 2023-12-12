import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    language : localStorage.getItem("language") || "English",
    id: 0,
    // loading: false
};

const languageSlice = createSlice({
    name:"language",
    initialState: initialState,
    reducers:{
        setLanguage(state, value) {
            localStorage.setItem("language",value.payload);
            state.language = value.payload;

        },
    },
});

export const {setLanguage} = languageSlice.actions;
export default languageSlice.reducer;

