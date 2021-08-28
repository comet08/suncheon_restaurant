import React from 'react';
import styles from '../styles/Home.module.css';
import Router from 'next/router';
import Link from 'next/link';

const Menu: React.FunctionComponent = () => {
  return (
    <div className={styles.Navi}>
      <Link href="/">
        <a className={styles.Navi_link}>Home</a>
      </Link>{' '}
      <Link href="/about">
        <a className={styles.Navi_link}>About</a>
      </Link>
      <Link href="/about">
        <a className={styles.Navi_link}>About</a>
      </Link>
    </div>
  );
};

export default Menu;
