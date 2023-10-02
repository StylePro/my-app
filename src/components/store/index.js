import {configureStore} from "@reduxjs/toolkit";
import pumpReducer from './pumpSlice'


export default configureStore ({
    reducer: {
        pump: pumpReducer,
    }
});