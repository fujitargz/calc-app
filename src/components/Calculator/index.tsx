import { useState } from 'react';
import { Button } from '../Button';
import { Display } from '../Display';
import styles from './Calculator.module.scss';

export const Calculator = () => {
  const [exp, setExp] = useState('');
  const numbers = new Array(10).fill(0).map((_, index) => (index).toString());
  const operators = ['+', '-', '*', '/', '%', '=', '+/-'];
  const misc = ['.', 'C'];
  const keys = [...numbers, ...operators, ...misc];
  return (
    <div>
      <Display exp={exp} />
      <div className={styles['keys-wrapper']}>
        {keys.map((key) => {
          return (
            <Button
              key={key}
              label={key}
              onClick={()=> {
                return setExp((prevExp) => {
                  switch (key){
                    case '=': return eval(prevExp);
                    case 'C': return '';
                    default: return prevExp + key;
                  }
                })
              }}
            />
          );
        })}
      </div>
    </div>
  );
}