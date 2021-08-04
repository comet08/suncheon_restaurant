import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { request } from './api/suncheon';
import { useEffect, useState } from 'react';
import Home from './home';

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
        <a>About Page</a>
      </Link>
  </footer>
    </div>
  )