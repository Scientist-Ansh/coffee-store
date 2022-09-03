import { Rating } from '../Rating/Rating';
import styles from './DishCard.module.css';
import Image from 'next/image';
import { Heading4, Subtext } from '../Text';
import { Button } from '../Button';
import { Spacer } from '../Spacer';
import { SubtextBold } from '../Text/Text';

export const DishCard = ({
  title = 'Sandwich',
  description = 'bread with meat and vegetables',
  rating = 4.5,
  image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG',
  served = ['hot'],
  type = 2,
}) => {
  return (
    <div className={styles.DishCard}>
      <div className={styles.DishCardHeader}>
        <span className={styles.rating}>
          <Rating value={rating} />
        </span>
        <img decode="async" alt="Coffee" src={image} />
      </div>
      <div className={styles.DishCardBody}>
        <div className={styles.bodyLeft}>
          <Heading4>{title}</Heading4>

          {(type === 1 || type === 3) && description && (
            <>
              <Spacer size="0.2rem" />
              <SubtextBold>{description}</SubtextBold>
            </>
          )}
          <Spacer size="0.75rem" />
          {(type === 2 || type === 3) && description && (
            <div className={styles.buttons}>
              <Button
                styleType={'outlined'}
                text="Hot"
                disabled={!served.includes('hot')}
              />
              <Button
                styleType={'outlined'}
                text="Cold"
                disabled={!served.includes('cold')}
              />
            </div>
          )}
        </div>
        <div className={styles.bodyRight}>
          <Heading4>12k</Heading4>
          <img
            className={styles.cartIcon}
            src="/icons/shopping-cart.svg"
            alt="shopping-cart"
          />
        </div>
      </div>
    </div>
  );
};
