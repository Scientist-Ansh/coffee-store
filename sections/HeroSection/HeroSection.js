import styles from './HeroSection.module.css';
import { Row, Col } from 'react-grid-system';
import { Container } from '../../components/Container/Container';
import { Heading1, Paragraph } from '../../components/Text';
import { Button } from '../../components/Button';
import Image from 'next/image';
import { Spacer } from '../../components/Spacer';

export const HeroSection = ({ title, description, image, buttons }) => {
  console.log(
    'title',
    title,
    'description',
    description,
    'image',
    image,
    'buttons',
    buttons
  );
  return (
    <Container className={styles.container}>
      <img src="/images/beans.png" alt="beans" className={styles.beansRight} />

      <Row className={styles.row}>
        <Col md={5}>
          <Heading1>{title}</Heading1>
          <Spacer size="24px" />
          <Paragraph>{description}</Paragraph>
          <Spacer size="32px" />
          <div className={styles.buttons}>
            {buttons.map((button) => (
              <Button
                key={button.text}
                text={button.text}
                styleType={button.type}
              />
            ))}
          </div>
        </Col>
        <Col md={5} offset={{ md: 2 }}>
          <div>
            <img src={image} className={styles.image} decode="sync" />
          </div>
        </Col>
      </Row>
      <Spacer size="35px" />
      <img src="/images/beans.png" alt="beans" className={styles.beansLeft} />
    </Container>
  );
};
