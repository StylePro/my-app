import React, {useState} from 'react';

const InputData = ({pump}) => {
    const [formData, setFormData] = useState({supply: '', pressure: '', materialCode: '', density: '', explosionProtection: ''})
    console.log(pump)
    console.log(formData)
    function handleChange (event) {
        const {name, value} = event.target
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    function handleSubmit (event) {
        event.preventDefault();
    }

    if (pump) {
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>Заполните данные для подбора насоса:</div>
                        <div>
                            <label htmlFor="supply">Подача, м3/ч: </label>
                            <input type="number" step='any' id='supply' name='supply' value={formData.supply}
                                   onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="pressure">Напор, м: </label>
                            <input type="number" step='any' id='pressure' name='pressure' value={formData.pressure}
                                   onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="materialCode">Код материала: </label>
                            <select value={formData.materialCode} name="materialCode" id="materialCode"
                                    onChange={handleChange}>
                                <option value="-">-</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="02">02</option>
                                <option value="70">70</option>
                                <option value="82">82</option>
                                <option value="85">85</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="density">Плотность, кг/м3: </label>
                            <input type="number" step='any' id='density' name='density' value={formData.density}
                                   onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="explosionProtection">Наличие взрывозащиты: </label>
                            <select value={formData.explosionProtection} name="explosionProtection" id="explosionProtection"
                                    onChange={handleChange}>
                                <option value="-">-</option>
                                <option value="Yes">Да</option>
                                <option value="No">Нет</option>
                            </select>
                        </div>

                        <div>
                            <button type='submit'>
                                Сформировать код насоса
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default InputData;