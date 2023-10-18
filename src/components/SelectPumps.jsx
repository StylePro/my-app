import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPump, removePump} from "./store/pumpSlice";
import Button from "../UI/Button/Button";
import Select from "../UI/Select/Select";
import pumpOptions from "../data/Data";


function SelectPumps() {

    const dispatch = useDispatch()
    const state = useSelector(state => state.pump)

    function onChangeHandlerPump(e) {
        dispatch(addPump(e.target.value))
    }

    function clearPump() {
        dispatch(removePump(''))
    }

    return (
        <div>
            <h2>Выберите насос:</h2>
            <Select
                onChange={e => onChangeHandlerPump(e)}
                value={state.pump}
            >
                {pumpOptions.map(pump => <option key={pump.id} value={pump.name}>{pump.name}</option>)}
            </Select>
            <Button onClick={clearPump}>Очистить</Button>
        </div>
    )
}

export default SelectPumps;