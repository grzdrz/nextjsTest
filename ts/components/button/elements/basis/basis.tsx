import React, { FunctionComponent } from 'react';

import { BasisType, IProps } from './basis.types';

import styles from '../../button.module.scss';

const Basis: FunctionComponent<IProps> = (props): JSX.Element => {
  const {
    basisType = BasisType.button,
    buttonType = 'button',
    url = 'https://error.com/',
    children,
  } = props;

  switch (basisType) {
    case BasisType.outerRef: {
      return (
        <a className={styles.basis} href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    case BasisType.innerRef: {
      return (
        <a className={styles.basis} href={url}>
          {children}
        </a>
      );
    }
    default: {
      return (
        <button className={`${styles.basis}`} type={buttonType}>
          {children}
        </button>
      );
    }
  }
};

export default Basis;
