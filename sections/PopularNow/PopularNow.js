import { Container } from '../../components/Container/Container';
import { Heading3 } from '../../components/Text';
import { Row, Col, Hidden } from 'react-grid-system';
import styles from './PopularNow.module.css';
import { DishCard } from '../../components/DishCard';
import { Spacer } from '../../components/Spacer';

export const PopularNow = ({ popularSnacks }) => {
  return (
    <section className={styles.PopularNow}>
      <Container>
        <div>
          <Heading3>
            Popular <u>Now</u>
          </Heading3>
        </div>

        <Spacer size="32px" />
        <div className={styles.rowContainer}>
          <Row className={styles.row} justify="center">
            {popularSnacks.slice(0, 3).map(({ id, singleSnack }) => (
              <Col key={id} md={6} lg={4} className={styles.col}>
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
      <Hidden xs sm>
        <div className={styles.bg}></div>
      </Hidden>
    </section>
  );
};
