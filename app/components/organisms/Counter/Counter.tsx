'use client';

import { ReactElement, useState } from 'react';
import { Button, ButtonType } from '../../atoms/Button/Button';
import styles from './Counter.module.css';
import { ButtonText } from '../../molecules/ButtonText/ButtonText';

export const Counter = (): ReactElement => {
  const [index, setIndex] = useState<number>(0);
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <div className={styles.counter}>
      <ButtonText text={index} buttonText='increment' onClick={increment} buttonType={ButtonType.BUTTON} />
      <Button onClick={decrement} buttonText='decrement' buttonType={ButtonType.BUTTON} />
    </div>
  );
};
