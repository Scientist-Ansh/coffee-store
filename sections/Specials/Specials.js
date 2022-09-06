import { Row, Col } from 'react-grid-system';
import { Container } from '../../components/Container/Container';
import styles from './Specials.module.css';
import { DishCard } from '../../components/DishCard';
import { Heading3 } from '../../components/Text';
import { Spacer } from '../../components/Spacer';

export const Specials = ({ specialSnacks }) => {
  return (
    <section className={styles.specials}>
      <Container>
        <Heading3>
          Special menu <u>for you</u>
        </Heading3>
        <Spacer size="32px" />
        <Row className={styles.row} justify="center">
          {specialSnacks.slice(0, 6).map(({ singleSnack }) => (
            <Col key={singleSnack.id} md={6} lg={4} className={styles.col}>
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
      </Container>
    </section>
  );
};
