import {configureStore} from "@reduxjs/toolkit";
import pumpReducer from './pumpSlice'
import proprtiesPumpsReducer from './proprtiesPumpSlice'



export default configureStore ({
    reducer: {
        pump: pumpReducer,
        propertiesPumps: proprtiesPumpsReducer,
    }
});