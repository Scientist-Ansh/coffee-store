import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Spacer } from "../components/Spacer";
import { AboutUs } from "../sections/AboutUs/AboutUs";
import { FeaturesSection } from "../sections/FeaturesSection";
import { Footer } from "../sections/Footer";
import { HeroSection } from "../sections/HeroSection";
import { Specials } from "../sections/Specials";
import { Testimonials } from "../sections/Testimonials";
import { Cart } from "../components/Cart";

import { getData } from "../utils/getData";

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
      <Cart />

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
        <Spacer id="aboutusScroll" size="200px" />
        <AboutUs
          title={aboutusTitle}
          description={aboutusDescription}
          image={aboutusImage}
          buttons={aboutusButtons}
        />
        <Spacer id="specialsScroll" size="120px" />

        <Specials specialSnacks={specials.allSnacks} />
        <Spacer size="120px" />
        <Testimonials
          title={testimonialsTitle}
          description={testimonialsDescription}
          testimonials={allTestimonials}
        />
        <Spacer size="120px" />

        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await getData();
    const data = await res.json();

    // Verify data exists before returning
    if (!data?.data) {
      throw new Error("No data received");
    }

    return {
      props: {
        hero: data.data.heroSections[0] || {
          heroSection: {
            title: "Welcome to Cafe Street",
            description: { text: "Your favorite coffee shop" },
            image: { url: "/default-hero.jpg" },
          },
          button: [],
        },
        aboutus: data.data.aboutuses[0] || {
          aboutUsSection: {
            title: "About Us",
            description: { text: "Coffee shop with a story" },
            image: { url: "/default-about.jpg" },
          },
          button: [],
        },
        features: data.data.deliveryServices[0] || {
          features: [],
        },
        popularNow: data.data.popularNows[0] || {
          allSnacks: [],
        },
        specials: data.data.specialMenus[0] || {
          allSnacks: [],
        },
        testimonials: data.data.testimonials[0] || {
          title: "What Our Customers Say",
          description: { text: "Testimonials" },
          testimonials: [],
        },
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return fallback data if fetch fails
    return {
      props: {
        hero: {
          heroSection: {
            title: "Welcome to Cafe Street",
            description: { text: "Your favorite coffee shop" },
            image: { url: "/default-hero.jpg" },
          },
          button: [],
        },
        aboutus: {
          aboutUsSection: {
            title: "About Us",
            description: { text: "Coffee shop with a story" },
            image: { url: "/default-about.jpg" },
          },
          button: [],
        },
        features: {
          features: [],
        },
        popularNow: {
          allSnacks: [],
        },
        specials: {
          allSnacks: [],
        },
        testimonials: {
          title: "What Our Customers Say",
          description: { text: "Testimonials" },
          testimonials: [],
        },
      },
    };
  }
}
