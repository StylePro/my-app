import React from 'react';
import styles from './Select.module.css'

const Select = ({children, onChange, value, id}) => {
    return (
        <select className={styles.select} onChange={onChange} value={value} id={id}>
            {children}
        </select>
    );
};

export default Select;