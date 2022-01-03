import React from 'react';
import styles from './CsSelect.module.css';

const CsSelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select className={styles.csSelect} value={value} onChange={(event) => onChange(event.target.value)}>
            <option disabled value=''>
                {defaultValue}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default CsSelect;
