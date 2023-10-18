import './App.css';
import './index.css';
import React from "react";
import SelectPumps from "./components/SelectPumps";
import FormData from "./components/FormData";
import {useSelector} from "react-redux";


function App() {
    const pump = useSelector(state => state.pump.pump)
    return (

        <div className='App'>
            <div>
                <SelectPumps/>
                {pump && <FormData/>}
            </div>
        </div>
    )
}


export default App;
