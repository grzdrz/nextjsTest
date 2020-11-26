export enum BasisType {
  outerRef,
  innerRef,
  button,
}

export interface IProps {
  basisType?: BasisType;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
  url?: string;
}
