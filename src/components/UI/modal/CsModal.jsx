import React from 'react';
import styles from './CsModal.module.css';

const CsModal = ({ children, visible, setVisible }) => {
    const rootClasses = [styles.csModal];
    if (visible) {
        rootClasses.push(styles.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.csModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default CsModal;
