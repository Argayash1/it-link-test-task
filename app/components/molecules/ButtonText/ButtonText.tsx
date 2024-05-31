import clsx from 'clsx';
import { Button, IButton } from '../../atoms/Button/Button';
import { Text, IText } from '../../atoms/Text/Text';
import styles from './ButtonText.module.css';
import { ReactElement } from 'react';

interface IButtonText extends IText, IButton {
  buttonTextClassName?: string;
  buttonTextStyle?: React.CSSProperties;
}

export const ButtonText = ({
  buttonText,
  onClick,
  text,
  textClassName,
  textStyle,
  buttonClassName,
  buttonStyle,
  buttonType,
  buttonTextStyle,
  buttonTextClassName,
}: IButtonText): ReactElement => {
  return (
    <div className={clsx(styles.buttonText, buttonTextClassName)} style={buttonTextStyle}>
      <Text text={text} textClassName={textClassName} textStyle={textStyle} />
      <Button
        buttonText={buttonText}
        onClick={onClick}
        buttonClassName={buttonClassName}
        buttonStyle={buttonStyle}
        buttonType={buttonType}
      />
    </div>
  );
};
