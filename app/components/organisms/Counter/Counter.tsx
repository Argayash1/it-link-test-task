import { useState } from 'react';
import ButtonText from '../../molecules/ButtonText/ButtinText';

export default function Counter() {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <>
      <ButtonText
        text={index}
        buttonTextIncrease='increment'
        buttonTextDecrease='decrement'
        increaseCounter={increment}
        decreaseCounter={decrement}
      />
    </>
  );
}
