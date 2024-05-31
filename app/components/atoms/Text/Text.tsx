import clsx from 'clsx';
import styles from './Text.module.css';
import { ReactElement } from 'react';

export interface IText {
  text: string | number;
  textClassName?: string;
  textStyle?: React.CSSProperties;
}

export const Text = ({ text, textClassName, textStyle }: IText): ReactElement => {
  return (
    <span className={clsx(styles.text, textClassName)} style={textStyle}>
      {text}
    </span>
  );
};
