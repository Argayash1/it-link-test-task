import { useState } from 'react';
import { ButtonText } from '../../molecules/ButtonText/ButtinText';
import { Button } from '../../atoms/Button/Button';

export const Counter = () => {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <div>
      <ButtonText text={index} buttonText='increment' onClick={increment} />
      <Button onClick={decrement} buttonText='decrement' />
    </div>
  );
};
