import React from 'react';
import style from './CsButton.module.css';

const CsButton = ({ children, ...props }) => {
    return (
        <button className={style.csBtn} {...props}>
            {children}
        </button>
    );
};

export default CsButton;
