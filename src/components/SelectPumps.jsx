import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {addPump, removePump} from "./store/pumpSlice";
import {useDispatch, useSelector} from "react-redux";


function SelectPumps () {

    const dispatch = useDispatch();
    const pumpUnit = useSelector(state=> state.pump)

    function pumpTypeAdd (pump) {
        dispatch(addPump(pump))
    }
    function removeType () {
        dispatch(removePump(''))
    }

    return(
        <div>
            <label>Выберите агрегат:</label>
            <FormControl fullWidth>
                <InputLabel id="pumpName">Тип</InputLabel>
                <Select
                    labelId="pumpName"
                    id="pumpName"
                    value={pumpUnit.pump}
                    label="pumpName"
                    onChange={(e)=> pumpTypeAdd(e.target.value)}
                >
                    <MenuItem value={'ГХ'}>ГХ</MenuItem>
                    <MenuItem value={'ГХМ'}>ГХМ</MenuItem>
                    <MenuItem value={'ГХС'}>ГХС</MenuItem>
                    <MenuItem value={'ГХИ'}>ГХИ</MenuItem>
                </Select>
            </FormControl>
            <button onClick={removeType}>Очистить</button>
        </div>
    )
}

export default SelectPumps