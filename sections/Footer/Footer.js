import { Button } from '../../components/Button';
import { Container } from '../../components/Container/Container';
import { Spacer } from '../../components/Spacer';
import { Heading3, Paragraph } from '../../components/Text';
import styles from './Footer.module.css';

import { Player } from '@lottiefiles/react-lottie-player';

export const Footer = () => {
  return (
    <>
      <section className={styles.section}>
        <Container>
          <div className={styles.container}>
            <Heading3>Subscribe to get 50% discount price</Heading3>
            <Spacer size="26px" />
            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your email"
              />
              <Button
                styleType="solid"
                text="Subscribe"
                className={styles.button}
                type="submit"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <Spacer size="50px" />

      <footer className={styles.footer}>
        <Container className={styles.footerContainer}>
          <div>
            <Paragraph>
              Made with <span className={styles.heart}>💓</span> by{' '}
              <a href="https://scientist-ansh.github.io/">Ansh</a>
            </Paragraph>
          </div>
          <div className={styles.socialIcons}>
            <Player src="/icons/instagram.json" hover />
            <Player src="/icons/twitter.json" hover />
          </div>
          <div>
            <a href="mailto:info@cafeStreet">Email Us</a>
          </div>
        </Container>
      </footer>
    </>
  );
};
