/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { colors, gradients } from '../../assets/constants.styles';

interface PropTypes {
  isHollow?: boolean;
  hasArrow?: boolean;
}

const borderRadius = '1.375rem';

const Background = styled.div`
  z-index: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: ${borderRadius};
  background: ${gradients.purpleToBlue};
`;

const Button = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover {
    ${Background} {
      background: ${gradients.purpleToBlue50};
    }
  }
`;

const RefBasis = styled.a<PropTypes>`
  z-index: 2;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  text-decoration: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: ${borderRadius};
  background: ${(props) => (props.isHollow ? 'white' : 'transparent')};
  ${(props) => (props.isHollow ? 'background-clip: padding-box;' : '')};
  ${(props) => (props.isHollow ? 'border: solid 0.125rem transparent;' : '')};
`;

const ButtonBasis = styled.button<PropTypes>`
  z-index: 2;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  text-decoration: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: ${borderRadius};
  background: ${(props) => (props.isHollow ? 'white' : 'transparent')};
  ${(props) => (props.isHollow ? 'background-clip: padding-box;' : '')};
  ${(props) => (props.isHollow ? 'border: solid 0.125rem transparent;' : '')};
`;

const Text = styled.span<PropTypes>`
  cursor: pointer;
  width: 100%;
  margin: 0rem ${(props) => (props.hasArrow ? '2.5rem' : '1rem')};
  text-align: center;
  background: transparent;
  color: ${(props) => (props.isHollow ? colors.purple : 'white')};
  font-family: Montserrat, Arial, sans-serif;
  font-weight: bold;
  font-size: 0.75rem;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
`;

const Arrow = styled.span<PropTypes>`
  cursor: pointer;
  position: absolute;
  right: 0.7rem;
  font-family: Material Icons;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => (props.isHollow ? colors.purple : 'white')};
`;

export {
  Button, Background, RefBasis, ButtonBasis, Text, Arrow,
};
