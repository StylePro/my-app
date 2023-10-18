import React from 'react';
import styles from './Input.module.css'

const Input = ({children, onChange, value, type, step, max}) => {
    return (
        <input className={styles.input} onChange={onChange} value={value} type={type} step={step} max={max}>
            {children}
        </input>
    );
};

export default Input;