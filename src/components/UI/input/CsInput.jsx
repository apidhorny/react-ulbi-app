import React from 'react';
import styles from './CsInput.module.css';

const CsInput = (props) => {
    return <input className={styles.csInput} {...props} />;
};

export default CsInput;
