import React, { useState } from 'react';
import ActionButtons from '../UI/ActionButtons';

import styles from './InvestForm.module.css';

const InvestForm = (props) => {
  const [userInput, setUserInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onCalculate(userInput);
  };

  const handleReset = () => {
    setUserInput(null);

  };

  const handleInputChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            onChange={(e) =>
              handleInputChange('current-savings', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            onChange={(e) =>
              handleInputChange('yearly-contribution', e.target.value)
            }
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            onChange={(e) =>
              handleInputChange('expected-return', e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            onChange={(e) => handleInputChange('duration', e.target.value)}
          />
        </p>
      </div>
      <ActionButtons onReset={handleReset} onCalculate={props.onCalculate} />
    </form>
  );
};

export default InvestForm;
