import React from 'react';
import styles from '../../styles/Notice.module.css';

const Notice = () => {
  return (
    <div className={styles.container}>
      <span className={styles.notice}>오늘의 공지는</span>
    </div>
  );
};

export default Notice;
