import React from 'react';

import styles from './ActionButtons.module.css';

const ActionButtons = (props) => {
  const handleReset = () => {
    props.onReset();
  };
  return (
    <p className={styles.actions}>
      <button type='reset' className={styles.buttonAlt} onClick={handleReset}>
        Reset
      </button>
      <button
        type='submit'
        className={styles.button}>
        Calculate
      </button>
    </p>
  );
};

export default ActionButtons;
