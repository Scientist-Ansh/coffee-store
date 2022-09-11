import { Button } from '../../components/Button';
import { Container } from '../../components/Container/Container';
import { Spacer } from '../../components/Spacer';
import { Heading3, Paragraph } from '../../components/Text';
import styles from './Footer.module.css';
import emailjs from '@emailjs/browser';

import { Player } from '@lottiefiles/react-lottie-player';

export const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const {
      email: { value },
    } = form.elements;

    const templateParams = {
      voucher: 'CafeStreetSept50',
      email: value,
    };

    emailjs
      .send(
        'service_r7pewah',
        'template_c5ay7km',
        templateParams,
        'bC1dE4KpYy3HWpIyC'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };
  return (
    <>
      <section className={styles.section}>
        <Container>
          <div className={styles.container}>
            <Heading3>Subscribe to get 50% discount price</Heading3>
            <Spacer size="26px" />
            <form onSubmit={handleSubmit} className={styles.inputContainer}>
              <input
                type="email"
                className={styles.input}
                placeholder="Enter your email"
                required={true}
                name="email"
                id="email"
              />
              <Button
                styleType="solid"
                text="Subscribe"
                className={styles.button}
                type="submit"
              >
                Subscribe
              </Button>
            </form>
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
