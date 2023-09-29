import './App.css';
import React, {useState} from "react";
import SelectPumps from "./components/selectPumps";
import InputData from "./components/inputData";


function App() {

    const [pump, setPump] = useState('')

    function addPump (rt) {
        setPump(rt)
    }

    return (
        <div className='App'>

            <div>
                <SelectPumps addPump={addPump} pump={pump}/>
                <InputData pump={pump}/>
            </div>

        </div>
    )
}


export default App;
