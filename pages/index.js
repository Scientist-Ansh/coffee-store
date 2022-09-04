import Head from 'next/head';
import { Container } from '../components/Container/Container';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../sections/HeroSection';
import styles from '../styles/Home.module.css';
import { getData } from '../utils/getData';

export default function Home({ hero, aboutus, popularNow, features }) {
  console.log(hero);
  const {
    heroSection: {
      title: heroTitle,
      description: { text: heroDescription },
      image: { url: heroImage },
    },
    button: heroButtons,
  } = hero;
  return (
    <div>
      <Head>
        <title>Cafe Street</title>
        <meta
          name="Cafe Street"
          content="Your online coffee shop in barcelona. Order your coffee here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          image={heroImage}
          buttons={heroButtons}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await getData();
  const data = await res.json();

  return {
    props: {
      hero: data.data.heroSections[0],
      aboutus: data.data.aboutuses[0],
      features: data.data.deliveryServices[0],
      popularNow: data.data.popularNows[0],
    },
  };
}
