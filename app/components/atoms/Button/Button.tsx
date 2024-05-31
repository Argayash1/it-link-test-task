export interface IButton {
  buttonText: string | number;
  onClick: () => void;
}

export default function Button({ onClick, buttonText }: IButton) {
  return <button onClick={onClick}>{buttonText}</button>;
}
