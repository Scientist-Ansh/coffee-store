import { Container } from '../../components/Container/Container';
import styles from './AboutUs.module.css';

import { Row, Col } from 'react-grid-system';
import { Heading3, Heading4, Paragraph } from '../../components/Text';
import { Spacer } from '../../components/Spacer';
import { Button } from '../../components/Button';
import ScrollAnimation from '../../components/ScrollAnimation';

export const AboutUs = ({ title, description, image, buttons }) => {
  return (
    <section className={styles.aboutus}>
      <Container>
        <Row justify="center">
          <Col
            className={styles.leftCol}
            sm={8}
            md={5}
            lg={4}
            offset={{ lg: 1, md: 1 }}
          >
            <ScrollAnimation animateIn="animate__fadeInLeftBig">
              <img src={image} alt="A Coffee image" className={styles.img} />
            </ScrollAnimation>
          </Col>
          <Col
            md={5}
            lg={5}
            offset={{ lg: 1, md: 1 }}
            className={styles.rightCol}
          >
            <ScrollAnimation animateIn="animate__fadeInRightBig">
              <Heading3>About us</Heading3>
              <Spacer size="24px" />
              <Heading4>{title}</Heading4>
              <Spacer size="16px" />
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
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
