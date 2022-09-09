import styles from './Rating.module.css';
import { Subtext } from '../Text';

export const Rating = ({ value }) => {
  return (
    <div className={styles.ratingContainer}>
      <span className={styles.rating}>
        <span>{value}</span> <img alt="a yellow star" src="/icons/star.svg" />
      </span>
    </div>
  );
};
