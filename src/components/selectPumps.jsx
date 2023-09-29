import React from "react";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";


function SelectPumps ({addPump, pump}) {

    function pumpTypeAdd (e) {
        addPump(e.target.value)
    }

    return(
        <div>
            <label>Выберите агрегат:</label>

            <FormControl fullWidth>
                <InputLabel id="pumpName">Тип</InputLabel>
                <Select
                    labelId="pumpName"
                    id="pumpName"
                    value={pump}
                    label="pumpName"
                    onChange={pumpTypeAdd}
                >
                    <MenuItem value={'ГХ'}>ГХ</MenuItem>
                    <MenuItem value={'ГХМ'}>ГХМ</MenuItem>
                    <MenuItem value={'ГХС'}>ГХС</MenuItem>
                    <MenuItem value={'ГХИ'}>ГХИ</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectPumps