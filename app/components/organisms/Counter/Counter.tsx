'use client';

import { ReactElement, useState } from 'react';
import { Button, ButtonType } from '../../atoms/Button/Button';
import styles from './Counter.module.css';
import { ButtonText } from '../../molecules/ButtonText/ButtonText';
import useCounter from '@/app/hooks/useCounter';

export const Counter = (): ReactElement => {
  const { count, increment, decrement } = useCounter();

  return (
    <div className={styles.counter}>
      <ButtonText text={count} buttonText='increment' onClick={increment} buttonType={ButtonType.BUTTON} />
      <Button onClick={decrement} buttonText='decrement' buttonType={ButtonType.BUTTON} />
    </div>
  );
};
