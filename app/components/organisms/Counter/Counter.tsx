'use client';

import { ReactElement } from 'react';
import { Button, ButtonType } from '../../atoms/Button/Button';
import styles from './Counter.module.css';
import { ButtonText } from '../../molecules/ButtonText/ButtonText';
import useCounter from '@/app/hooks/useCounter';

interface ICounter {
  initialCount?: number;
}

export const Counter = ({ initialCount = 0 }: ICounter): ReactElement => {
  const { count, increment, decrement } = useCounter(initialCount);

  return (
    <div className={styles.counter}>
      <ButtonText text={count} buttonText='increment' onClick={increment} buttonType={ButtonType.BUTTON} />
      <Button onClick={decrement} buttonText='decrement' buttonType={ButtonType.BUTTON} />
    </div>
  );
};
