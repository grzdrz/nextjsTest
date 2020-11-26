import Button from '../../../components/button/button';
import Button2 from '../../../components/button2/button2';

import styles from './components.module.scss';

function ComponentsPage(): JSX.Element {
  return (
    <div className={styles.components}>
      <h1>Components Page</h1>
      <div className={styles.button}>
        <Button />
      </div>
      <div className={styles.button}>
        <Button
          isHollow
        />
      </div>
      <div className={styles.submitButton}>
        <Button
          hasArrow
        />
      </div>
      <div className={styles.submitButton}>
        <Button
          isHollow
          hasArrow
        />
      </div>

      <div className={styles.button}>
        <Button2 />
      </div>
      <div className={styles.button}>
        <Button2
          isHollow
        />
      </div>
      <div className={styles.submitButton}>
        <Button2
          hasArrow
        />
      </div>
      <div className={styles.submitButton}>
        <Button2
          isHollow
          hasArrow
        />
      </div>
    </div>
  );
}

export default ComponentsPage;
