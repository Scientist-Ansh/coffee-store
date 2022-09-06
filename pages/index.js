import Head from 'next/head';
import { Container } from '../components/Container/Container';
import { Navbar } from '../components/Navbar';
import { Spacer } from '../components/Spacer';
import { AboutUs } from '../sections/AboutUs/AboutUs';
import { FeaturesSection } from '../sections/FeaturesSection';
import { Footer } from '../sections/Footer';
import { HeroSection } from '../sections/HeroSection';
import { PopularNow } from '../sections/PopularNow';
import { Specials } from '../sections/Specials';
import { Testimonials } from '../sections/Testimonials';
import styles from '../styles/Home.module.css';
import { getData } from '../utils/getData';

export default function Home({
  hero,
  aboutus,
  popularNow,
  features,
  specials,
  testimonials,
}) {
  const {
    heroSection: {
      title: heroTitle,
      description: { text: heroDescription },
      image: { url: heroImage },
    },
    button: heroButtons,
  } = hero;

  const {
    aboutUsSection: {
      title: aboutusTitle,
      description: { text: aboutusDescription },
      image: { url: aboutusImage },
    },
    button: aboutusButtons,
  } = aboutus;

  const {
    title: testimonialsTitle,
    description: { text: testimonialsDescription },
    testimonials: allTestimonials,
  } = testimonials;
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
          popularSnacks={popularNow.allSnacks}
        />
        <Spacer size="80px" />

        <FeaturesSection features={features.features} />
        <AboutUs
          title={aboutusTitle}
          description={aboutusDescription}
          image={aboutusImage}
          buttons={aboutusButtons}
        />

        <Specials specialSnacks={specials.allSnacks} />
        <Spacer size="120px" />
        <Testimonials
          title={testimonialsTitle}
          description={testimonialsDescription}
          testimonials={allTestimonials}
        />
        <Spacer size="120px" />

        <Footer />
        <Spacer size="120px" />
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
      specials: data.data.specialMenus[0],
      testimonials: data.data.testimonials[0],
    },
  };
}
