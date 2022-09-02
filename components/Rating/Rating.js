import styles from './Rating.module.css';
import { Subtext } from '../Text';

export const Rating = ({ value }) => {
  return (
    <div className={styles.ratingContainer}>
      <span className={styles.rating}>
        <span>{value}</span> <img src="/icons/star.svg" />
      </span>
    </div>
  );
};
