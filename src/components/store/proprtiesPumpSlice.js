import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const ALLPUMPS = 'ALLPUMPS';


const initialState = {
    property: [
        {
            id: uuidv4(),
            name: 'Подача, м3/ч: ',
            viewType: 'input',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'number'},
        {id: uuidv4(),
            name: 'Напор, м: ',
            viewType: 'input',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'number'},
        {
            id: uuidv4(),
            name: 'Код материала: ',
            viewType: 'select',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'string',
            selectOptions: [
                {id: uuidv4(), code: ''},
                {id: uuidv4(), code: '13'},
                {id: uuidv4(), code: '14'},
                {id: uuidv4(), code: '02'},
                {id: uuidv4(), code: '82'},
                {id: uuidv4(), code: '85'},
            ]
        },
        {
            id: uuidv4(),
            name: 'Плотность, кг/м3: ',
            viewType: 'input',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'number'
        },
        {
            id: uuidv4(),
            name: 'Рабочая температура, град С (max): ',
            viewType: 'input',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'number'
        },
        {
            id: uuidv4(),
            name: 'Тип уплотнения: ',
            viewType: 'select',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'string',
            selectOptions: [
                {id: uuidv4(), code: 'Герметичный экран'},
                {},
            ]
        },
        {
            id: uuidv4(),
            name: 'Глубина погружения, м: ',
            viewType: 'input',
            currentValue: '',
            typePump: 'ГХИ',
            type: 'number'
        },
        {
            id: uuidv4(),
            name: 'Опорная плита: ',
            viewType: 'select',
            currentValue: '',
            typePump: 'ГХИ',
            type: 'string',
            selectOptions: [
                {id: uuidv4(), code: ''},
                {id: uuidv4(), code: '600-6-01-1-B'},
                {id: uuidv4(), code: '700-6-01-1-B'},
                {id: uuidv4(), code: '800-6-01-1-B'},
            ]
        },
        {
            id: uuidv4(),
            name: 'Твердые частицы: ',
            viewType: 'select',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'string',
            selectOptions: [
                {id: uuidv4(), code: ''},
                {id: uuidv4(), code: 'Отсутствуют'},
                {id: uuidv4(), code: 'до 0,5% размером до 0,2мм'},
                {id: uuidv4(), code: 'до 1 % размером до 1 мм'},
            ]
        },
        {
            id: uuidv4(),
            name: 'Климатическое исполнение: ',
            viewType: 'select',
            currentValue: '',
            typePump: ALLPUMPS,
            type: 'string',
            selectOptions: [
                {id: uuidv4(), code: '', value: ''},
                {id: uuidv4(), code: "УХЛ3", value:'[-60...+40]'},
                {id: uuidv4(), code: 'У2.5', value:'[-45...+40]'},
                {id: uuidv4(), code: 'У1', value:'[-45...+40]'},
                {id: uuidv4(), code: 'УХЛ2', value:'[-60...+40]'},
                {id: uuidv4(), code: 'УХЛ1', value:'[-60...+40]'},
            ]
        },
        {
            id: uuidv4(),
            name: 'Высота всасывания, м: ',
            viewType: 'input',
            currentValue: '',
            typePump: 'ГХС',
            type: 'number'
        },
        {
            id: uuidv4(),
            name: 'Длина всасывающего трубопровода, м: ',
            viewType: 'input',
            currentValue: '',
            typePump: 'ГХС',
            type: 'number'
        },
        {
            id: uuidv4(),
            name: 'Диаметр всасывающего трубопровода, м: ',
            viewType: 'input',
            currentValue: '',
            typePump: 'ГХС',
            type: 'number'
        },
    ]
}


const propertiesPumpSlice = createSlice({
    name: 'propertiesPumps',
    initialState,
    reducers: {
        addInput(state, action) {
            const {id, value} = action.payload
            const inputText = state.property.find((item => item.id === id))
            inputText.currentValue = value
        }
    }
})

export const {addInput} = propertiesPumpSlice.actions;
export default propertiesPumpSlice.reducer