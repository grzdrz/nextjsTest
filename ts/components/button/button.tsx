import React from 'react';

import IProps from './button.types';
import Basis from './elements/basis/basis';
import Inner from './elements/inner/inner';
import { BasisType } from './elements/basis/basis.types';

import styles from './button.module.scss';

const Button = (props: IProps): JSX.Element => {
  const {
    isHollow = false,
    hasArrow = false,
    text = 'click me',
    basisType = BasisType.outerRef,
    buttonType = 'button',
    url = 'https://error.com/',
  } = props;

  return (
    <div className={`${styles.button} ${isHollow ? styles.buttonHollow : ''}`}>
      <div className={styles.background}>
        <Basis
          basisType={basisType}
          buttonType={buttonType}
          url={url}
        >
          <Inner
            hasArrow={hasArrow}
            text={text}
          />
        </Basis>
      </div>
    </div>
  );
};

export default Button;
