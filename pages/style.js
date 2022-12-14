import Head from 'next/head';
import Image from 'next/image';
import { Button } from '../components/Button';
import { DishCard } from '../components/DishCard';
import { FeatureCard } from '../components/FeatureCard';
import { Navbar } from '../components/Navbar';
import { Rating } from '../components/Rating/Rating';
import { Spacer } from '../components/Spacer';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Paragraph,
  Subtext,
} from '../components/Text';
import { SubtextBold } from '../components/Text/Text';
import styles from '../styles/Home.module.css';

export default function Style() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Style Guide</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
        <Spacer size="40px" />
        <Paragraph>This is a paragraph</Paragraph>
        <Subtext>This is a subtext</Subtext>
        <SubtextBold>This is bold subtext</SubtextBold>
        <Spacer size="40px" />
        <Button styleType="solid" text="Solid Button" />
        <Spacer size="10px" />

        <Button styleType="outlined" text="Outlined Button" />
        <Spacer size="10px" />

        <Button styleType="text" text="Solid Button" />
        <Spacer size="10px" />

        <Spacer size="40px" />
        <Rating value={4.8} />
        <Spacer size="40px" />

        <FeatureCard />

        <Spacer size="40px" />

        <DishCard />
      </main>
    </div>
  );
}
