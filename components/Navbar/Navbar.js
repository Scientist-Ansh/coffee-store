import { Paragraph } from '../Text';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { Container } from '../Container/Container';

export const Navbar = () => {
  return (
    <Container className={styles.container}>
      <nav className={styles.navbar}>
        <Link href="/style">
          <a className={styles.logo}>
            <img src="/images/logo.svg" />
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li>
            <Paragraph>About us</Paragraph>
          </li>
          <li>
            <Paragraph>Specials</Paragraph>
          </li>
          <li>
            <Paragraph>Popular</Paragraph>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
