import React from 'react';

import IProps from './button.types';

import styles from './button.module.scss';

const Button = (props: IProps): JSX.Element => {
  const {
    isHollow = false,
    hasArrow = false,
    basis = 'a',
    text = 'click me',
    url = 'https://error.com/',
    isOuterRef = true,
    buttonType = 'button',
  } = props;

  const buttonInner = (
    <>
      {hasArrow ? <span className={styles.arrow}>arrow_forward</span> : null}
      <span className={`${styles.text} ${hasArrow ? styles.textWithArrow : ''}`}>{text}</span>
    </>
  );

  return (
    <div className={`${styles.button} ${isHollow ? styles.buttonHollow : ''}`}>
      <div className={styles.background}>
        {basis === 'a' && isOuterRef ? (
          <a className={styles.basis} href={url} target="_blank" rel="noopener noreferrer">
            {buttonInner}
          </a>
        ) : basis === 'a' && !isOuterRef ? (
          <a className={styles.basis} href={url}>
            {buttonInner}
          </a>
        ) : basis === 'button' ? (
          <button className={`${styles.basis} ${isHollow ? styles.buttonHollow : ''}`} type={buttonType}>
            {buttonInner}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Button;
