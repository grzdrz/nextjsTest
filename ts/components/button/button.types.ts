import { BasisType } from './elements/basis/basis.types';

interface IProps {
  isHollow?: boolean,
  hasArrow?: boolean,
  text?: string,
  basisType?: BasisType,
  buttonType?: 'button' | 'submit' | 'reset',
  url?: string,
}

export default IProps;
