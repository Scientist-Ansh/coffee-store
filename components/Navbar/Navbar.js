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
            <img src="/images/logo.svg" alt="Cafe Street Logo" />
          </a>
        </Link>

        <ul className={styles.navItems}>
          <li>
            <a href="#aboutusScroll">
              <Paragraph>About us</Paragraph>
            </a>
          </li>
          <li>
            <a href="#specialsScroll">
              <Paragraph>Specials</Paragraph>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};
