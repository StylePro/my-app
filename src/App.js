import './App.css';
import React, {useState} from "react";
import SelectPumps from "./components/selectPumps";
import InputData from "./components/inputData";


function App(props) {
    const [typeOfPump, setTypeOfPump] = useState('FD')

    function addTypePump (pump) {
        setTypeOfPump(pump)

    }
    return (
        <div className='App'>

            <div>
                <SelectPumps addTypePump={addTypePump}/>
                <div style={{color: 'red'}}>{typeOfPump}</div>  {/*Поле для проверки*/}
                <div>Заполните данные насоса:</div>
                <InputData io = {props.typeOfPump}/>
            </div>

        </div>
    )
}


export default App;
