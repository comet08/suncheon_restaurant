import Head from 'next/head';
import Link from 'next/link';
import Home from './home';

import '../public/firebase/firebase';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>순천 맛집✔</title>
        <meta name="description" content="전라남도 순천시 맛집 리스트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <footer className={styles.footer}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <div>&copy {new Date().getFullYear()} suncheon restaurant</div>
      </footer>
    </div>
  );
}
