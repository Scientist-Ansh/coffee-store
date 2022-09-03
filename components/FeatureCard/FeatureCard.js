import { Heading4, Paragraph } from '../Text';
import styles from './FeatureCard.module.css';
import Image from 'next/image';
import { Spacer } from '../Spacer';

export const FeatureCard = ({
  title = 'Choose your coffee',
  description = 'there are 20+ coffees for you',
  image = '/images/cup.png',
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={image}
          alt="service"
          layout="responsive"
          height={200}
          width={200}
        />
      </div>
      <Spacer size="17px" />
      <Heading4>{title}</Heading4>
      <Spacer size="8px" />

      <Paragraph>{description}</Paragraph>
    </div>
  );
};
