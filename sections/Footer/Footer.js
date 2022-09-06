import { Button } from '../../components/Button';
import { Container } from '../../components/Container/Container';
import { Spacer } from '../../components/Spacer';
import { Heading3 } from '../../components/Text';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
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
    </footer>
  );
};
