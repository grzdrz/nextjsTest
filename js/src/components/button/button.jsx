import React from 'react';

/* import './button.css'; */
/* import styles from './button.module.css'; */
/* import './button.scss'; */

function Button() {
  const [isYellow, setIsYellow] = React.useState(true);

  const handleButtonClick = () => {
    setIsYellow(!isYellow);
  };

  /* console.log(styles);
  debugger; */

  return (
    <button className={`button ${isYellow ? 'button_color_yellow' : ''}`}/* {`${styles.button} ${isYellow ? styles.buttonYellow : ''}`} */ onClick={handleButtonClick}>
      <p className='button__text'/* {styles.button__text} */>QWERTY</p>
    </button>
  );
}

export default Button;
