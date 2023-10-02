import './App.css';
import React from "react";
import SelectPumps from "./components/selectPumps";
import InputData from "./components/inputData";


function App() {

    return (
        <div className='App'>
            <div>
                <SelectPumps/>
                <InputData/>
            </div>

        </div>
    )
}


export default App;
