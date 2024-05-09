import { Fragment } from 'react';
import Link from 'next/link';

import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for Nextlevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href='/community'>Join the Community</Link>
            <Link href='/meals'>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food simplifies the art of recipe sharing and discovery.
            Create a profile, share your favorite recipes with detailed
            instructions and visuals, explore diverse cuisines from global
            contributors, connect with fellow foodies, and get inspired to take
            your culinary skills to new heights.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            Dive into a culinary community that goes beyond mere recipe sharing.
            With a global fusion of flavors, NextLevel Food empowers creators,
            encourages interaction, provides continuous learning opportunities,
            and offers inspiration for every palate.
          </p>
          <p>
            It&apos;s not just a platform; it&apos;s a vibrant celebration of
            diverse tastes and shared passion for exceptional food.
          </p>
        </section>
      </main>
    </Fragment>
  );
}
