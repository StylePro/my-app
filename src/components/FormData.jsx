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
        if (pump === 'ГХ') {
            return (array.filter(s => {
                return (s.typePump !== 'ГХИ' && s.typePump !=='ГХС')
            }))
        }
        if (pump === 'ГХМ') {
            return (array.filter(s => {
                return (s.typePump !== 'ГХИ' && s.typePump !=='ГХС')
            }))
        }
        if (pump === 'ГХИ') {
            return (array.filter(s => {
                return (s.typePump !== 'ГХС')
            }))
        }
        if (pump === 'ГХС') {
            return (array.filter(s => {
                return (s.typePump !== 'ГХИ')
            }))
        } else return array
    }

    return (
        <div>
            <div>Заполните данные насоса:</div>

            {filterSpecifications(specifications).map(property => {

                return (
                    <div key={property.id}>
                        {property.viewType === 'input' &&
                            <label key={property.id}>{property.name}
                                <Input
                                    key={property.id}
                                    type={property.type}
                                    value={property.currentValue}
                                    onChange={e => inputHandler(e.target.value, property.id)}
                                ></Input>
                            </label>}
                        {property.viewType === 'select' &&
                            <label key={property.id}>{property.name}
                                <Select key={property.id}>{property.selectOptions.map(s => <option key={s.id}
                                                                                 value={s.code}>{s.code}{s.value}</option>)}</Select>
                            </label>}
                    </div>
                )
            })}
        </div>
    )
}

export default FormData;

