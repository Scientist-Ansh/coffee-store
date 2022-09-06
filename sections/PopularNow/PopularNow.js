import { Container } from '../../components/Container/Container';
import { Heading3 } from '../../components/Text';
import { Row, Col } from 'react-grid-system';
import styles from './PopularNow.module.css';
import { DishCard } from '../../components/DishCard';
import { Spacer } from '../../components/Spacer';

export const PopularNow = ({ popularSnacks }) => {
  return (
    <section className={styles.PopularNow}>
      <Container>
        <Heading3>
          Popular <u>Now</u>
        </Heading3>

        <Spacer size="32px" />
        <div className={styles.rowContainer}>
          <Row className={styles.row}>
            {popularSnacks.slice(0, 3).map(({ id, singleSnack }) => (
              <Col key={id} md={4} className={styles.col}>
                <DishCard
                  title={singleSnack.title}
                  description={singleSnack.description}
                  rating={singleSnack.rating}
                  image={singleSnack.image.url}
                  served={singleSnack.served}
                  type={1}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <div className={styles.bg}></div>
    </section>
  );
};
