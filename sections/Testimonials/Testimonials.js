import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Row } from 'react-grid-system';
import { Spacer } from '../../components/Spacer';
import { Heading3, Paragraph } from '../../components/Text';
import styles from './Testimonials.module.css';
import { DishCard } from '../../components/DishCard';

import 'swiper/css';
import { FeatureCard } from '../../components/FeatureCard/FeatureCard';

SwiperCore.use([Navigation]);

export const Testimonials = ({ title, description, testimonials }) => {
  const swiper = useRef(null);

  console.log(testimonials, title, description);
  return (
    <section className={styles.testimonials}>
      <div className={styles.bg}></div>

      <Row>
        <Col xs={11} md={8} lg={4} className={styles.colLeft}>
          <Heading3>{title}</Heading3>
          <Spacer size="16px" />
          <Paragraph>{description}</Paragraph>
        </Col>
        <Col offset={{ lg: 1 }} lg={7}>
          <Swiper
            ref={swiper}
            className={styles.swiper}
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            freeMode={true}
            loop={true}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.title} className={styles.swiperSlide}>
                <div className={styles.testimonial}>
                  <Paragraph>&quot;{item.description}&quot;</Paragraph>
                  <span>{item.title}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};
