import clsx from 'clsx';
import styles from './Button.module.css';
import { ReactElement } from 'react';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export interface IButton {
  buttonText: string | number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
  buttonType: ButtonType;
}

export const Button = ({ buttonText, onClick, buttonClassName, buttonStyle, buttonType }: IButton): ReactElement => {
  return (
    <button className={clsx(styles.button, buttonClassName)} style={buttonStyle} onClick={onClick} type={buttonType}>
      {buttonText}
    </button>
  );
};
