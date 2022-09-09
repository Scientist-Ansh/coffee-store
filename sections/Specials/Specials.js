import { Row, Col } from 'react-grid-system';
import { Container } from '../../components/Container/Container';
import styles from './Specials.module.css';
import { DishCard } from '../../components/DishCard';
import { Heading3 } from '../../components/Text';
import { Spacer } from '../../components/Spacer';
import ScrollAnimation from '../../components/ScrollAnimation';

export const Specials = ({ specialSnacks }) => {
  const getDelay = (index) => {
    const value = index % 3;
    switch (value) {
      case 0:
        return 0;
        break;
      case 1:
        return 100;
        break;
      case 2:
        return 200;
        break;
    }
  };
  return (
    <section className={styles.specials} id="specials">
      <Container>
        <Heading3>
          Special menu <u>for you</u>
        </Heading3>

        <Spacer size="32px" />
        <Row className={styles.row} justify="center">
          {specialSnacks.slice(0, 6).map(({ singleSnack }, index) => {
            const delay = getDelay(index);
            return (
              <Col key={singleSnack.id} md={6} lg={4} className={styles.col}>
                <ScrollAnimation animateIn="animate__fadeInUp" delay={delay}>
                  <DishCard
                    title={singleSnack.title}
                    description={singleSnack.description}
                    rating={singleSnack.rating}
                    image={singleSnack.image.url}
                    served={singleSnack.served}
                    type={1}
                  />
                </ScrollAnimation>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
