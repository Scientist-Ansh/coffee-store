import styles from './Features.module.css';
import { Container } from '../../components/Container/Container';
import { Row, Col } from 'react-grid-system';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';
import { Heading3 } from '../../components/Text';
import { Spacer } from '../../components/Spacer';

export const FeaturesSection = ({ features }) => {
  return (
    <section className={styles.features}>
      <Container>
        <Heading3>
          How to use delivery <u>service</u>
        </Heading3>
        <Spacer size="32px" />
        <Row>
          {features.map((feature) => (
            <Col key={feature.title} md={4}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                image={feature.image.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
