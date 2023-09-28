import React from "react";

function SelectPumps ({addTypePump}) {
    const pumpName = [
        {id: 0, name: '-'},
        {id: 1, name: 'ГХ'},
        {id: 2, name: 'ГХМ'},
        {id: 3, name: 'ГХС'},
        {id: 4, name: 'ГХИ'}
    ]

    function pumpTypeAdd (e) {
        addTypePump(e.target.value)
    }
    return(
        <div>
            <label>Выберите агрегат:</label>
            <select onChange={(e)=> pumpTypeAdd(e)}>
                {pumpName.map(pump => {
                    return <option key={pump.id}>{pump.name}</option>
                })}
            </select>
        </div>
    )
}

export default SelectPumps