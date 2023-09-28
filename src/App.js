import './App.css';
import React, {useState} from "react";
import SelectPumps from "./components/selectPumps";
import InputData from "./components/inputData";


function App() {
    const [typeOfPump, setTypeOfPump] = useState('')

    function addTypePump (pump) {
        setTypeOfPump(pump)

    }
    return (
        <div className='App'>

            <div>
                <SelectPumps addTypePump={addTypePump}/>
                <InputData pump={typeOfPump}/>
            </div>

        </div>
    )
}


export default App;
