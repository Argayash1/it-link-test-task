import Button from '../../atoms/Button/Button';
import Text, { IText } from '../../atoms/Text/Text';

interface IButtonText extends IText {
  increaseCounter: () => void;
  decreaseCounter: () => void;
  buttonTextDecrease: string;
  buttonTextIncrease: string;
}

export default function ButtonText({
  increaseCounter,
  decreaseCounter,
  buttonTextDecrease,
  buttonTextIncrease,
  text,
}: IButtonText) {
  return (
    <>
      <Text text={text} />
      <Button buttonText={buttonTextDecrease} onClick={increaseCounter} />
      <Button buttonText={buttonTextIncrease} onClick={decreaseCounter} />
    </>
  );
}
