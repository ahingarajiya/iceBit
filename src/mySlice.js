import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pageInitial : 1
}

export const mySlice = createSlice(
    {
        name : "pageSlice",
        initialState,
        reducers:{
            pageChangeReducer : (state, action)=>{
                state.pageInitial = action.payload
            }
        }
    }
)

export const {pageChangeReducer} = mySlice.actions

export default mySlice.reducer