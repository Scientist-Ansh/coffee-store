import styles from './HeroSection.module.css';
import { Row, Col } from 'react-grid-system';
import { Container } from '../../components/Container/Container';
import { Heading1, Paragraph } from '../../components/Text';
import { Button } from '../../components/Button';
import Image from 'next/image';
import { Spacer } from '../../components/Spacer';
import { PopularNow } from '../PopularNow';

export const HeroSection = ({
  title,
  description,
  image,
  buttons,
  popularSnacks,
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="/images/beans.png"
        alt="coffee beans "
        className={styles.beansRight}
        loading="eager"
      />
      <img
        src="/images/beans.png"
        alt="coffee beans"
        className={styles.beansLeft}
        loading="eager"
      />
      <section className={styles.hero}>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col md={5} className={styles.colLeft}>
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
            <Col
              md={6}
              lg={5}
              offset={{ md: 1, lg: 2 }}
              className={styles.colRight}
            >
              <div>
                <img
                  loading="eager"
                  alt="Cappucino coffee cup"
                  src={image}
                  className={styles.image}
                  decode="sync"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Spacer size="142px" />
      <PopularNow popularSnacks={popularSnacks} />
    </div>
  );
};
