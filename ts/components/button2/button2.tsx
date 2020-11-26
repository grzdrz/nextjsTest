import React from 'react';

import IProps from './button2.types';

/* import styles from './button.module.scss'; */
import * as SC from './button.styles';

const Button2 = (props: IProps): JSX.Element => {
  const {
    isHollow = false,
    hasArrow = false,
    basis = 'a',
    text = 'click me',
    url = 'https://error.com/',
    isOuterRef = true,
    buttonType = undefined,
  } = props;

  const buttonInner = (
    <>
      {hasArrow ? <SC.Arrow isHollow={isHollow}>arrow_forward</SC.Arrow> : null}
      <SC.Text hasArrow={hasArrow} isHollow={isHollow}>{text}</SC.Text>
    </>
  );

  return (
    <SC.Button>
      <SC.Background>
        {basis === 'a' && isOuterRef ? (
          <SC.RefBasis href={url} target="_blank" rel="noopener noreferrer" isHollow={isHollow}>
            {buttonInner}
          </SC.RefBasis>
        ) : basis === 'a' && !isOuterRef ? (
          <SC.RefBasis href={url} isHollow={isHollow}>
            {buttonInner}
          </SC.RefBasis>
        ) : basis === 'button' ? (
          <SC.ButtonBasis type={buttonType} isHollow={isHollow}>
            {buttonInner}
          </SC.ButtonBasis>
        ) : null}
      </SC.Background>
    </SC.Button>
  );
};

export default Button2;
