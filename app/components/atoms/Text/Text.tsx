export interface IText {
  text: string | number;
}

export default function Text({ text }: IText) {
  return <span>{text}</span>;
}
