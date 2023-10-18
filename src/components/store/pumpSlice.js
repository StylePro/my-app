import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    pump: ''
}

const pumpSlice = createSlice ({
    name: 'pump',
    initialState,
    reducers: {
        addPump (state, action) {
            state.pump = action.payload
        },
        removePump (state, action) {
            state.pump = action.payload
        }
    }
})

export const {addPump, removePump} = pumpSlice.actions;
export default pumpSlice.reducer