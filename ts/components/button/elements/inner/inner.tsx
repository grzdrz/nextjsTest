import React, { FunctionComponent } from 'react';

import IProps from './inner.types';

import styles from '../../button.module.scss';

const Inner: FunctionComponent<IProps> = (props: IProps): JSX.Element => {
  const {
    hasArrow = false,
    text = 'click me',
  } = props;

  return (
    <>
      {hasArrow ? <span className={styles.arrow}>arrow_forward</span> : null}
      <span className={`${styles.text} ${hasArrow ? styles.textWithArrow : ''}`}>{text}</span>
    </>
  );
};

export default Inner;
