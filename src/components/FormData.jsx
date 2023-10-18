import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import {addInput} from "./store/proprtiesPumpSlice";


const FormData = () => {


    const dispatch = useDispatch()

    function inputHandler (value, id) {
        dispatch(addInput({value, id}))
    }

    const pump = useSelector(state => state.pump.pump)

    const specifications = useSelector(state => state.propertiesPumps.property)

    function filterSpecifications(array) {
        if (pump === 'ГХИ') {
            return (array.filter(s => {
                return s.typePump === 'ALLPUMPS' || 'ГХИ'
            }))
        }
        if (pump === 'ГХ' || 'ГХМ') {
            return (array.filter(s => s.typePump !== 'ГХИ'))
        }
    }

    return (
        <div>
            <div>Заполните данные насоса:</div>

            {filterSpecifications(specifications).map(property => {

                return (
                    <div key={property.id}>
                        {property.viewType === 'input' &&
                            <label>{property.name}
                                <Input
                                    type={property.type}
                                    value={property.currentValue}
                                    onChange={e => inputHandler(e.target.value, property.id)}
                                ></Input>
                            </label>}
                        {property.viewType === 'select' &&
                            <label>{property.name}
                                <Select>{property.selectOptions.map(s => <option key={s.id}
                                                                                 value={s.code}>{s.code}</option>)}</Select>
                            </label>}
                    </div>
                )
            })}
        </div>
    )
}

export default FormData;

