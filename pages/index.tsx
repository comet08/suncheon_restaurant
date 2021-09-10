import Head from 'next/head';
import Link from 'next/link';
import Home from './home';

import '../public/firebase/firebase';

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>순천 맛집✔</title>
        <meta name="description" content="전라남도 순천시 맛집 리스트" />
        <link rel="icon" href="/favicon.ico" />
        <script src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`} async />
      </Head>
      <Home />
      <footer>
        <div>&copy {new Date().getFullYear()} suncheon restaurant</div>
      </footer>
    </div>
  );
}
