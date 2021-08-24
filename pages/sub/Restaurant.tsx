import styles from '../../styles/Restaurant.module.css';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface RestaurantProps {
  name: string;
  call: string;
  location: string;
  dong: string;
}

const Restaurant: React.FunctionComponent<RestaurantProps> = (props) => {
  return (
    <Link
      href={{
        pathname: `/detail`,
        query: {
          name: props.name,
          dong: props.dong,
        },
      }}
    >
      <a>
        <div className={classNames({ [styles.node]: true, node: true })}>
          <div className={styles.node_name}>{props.name}</div>
          <div className={styles.node_location}>{props.location}</div>
          <div className={styles.node_call}>{props.call}</div>
        </div>
      </a>
    </Link>
  );
};

export default Restaurant;
