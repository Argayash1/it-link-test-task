import { Button, IButton } from '../../atoms/Button/Button';
import { Text, IText } from '../../atoms/Text/Text';

interface IButtonText extends IText, IButton {}

export const ButtonText = ({
  buttonText,
  onClick,
  text,
  textClassName,
  textStyle,
  buttonClassName,
  buttonStyle,
}: IButtonText) => {
  return (
    <>
      <Text text={text} textClassName={textClassName} textStyle={textStyle} />
      <Button buttonText={buttonText} onClick={onClick} buttonClassName={buttonClassName} buttonStyle={buttonStyle} />
    </>
  );
};
