import clsx from 'clsx';
import styles from './Button.module.css';
import { ReactElement } from 'react';

export interface IButton {
  buttonText: string | number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
}

export const Button = ({ buttonText, onClick, buttonClassName, buttonStyle }: IButton): ReactElement => {
  return (
    <button className={clsx(styles.button, buttonClassName)} style={buttonStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
};
