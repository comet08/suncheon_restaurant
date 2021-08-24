import styles from '../../styles/Restaurant.module.css';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { listObj, RestaurantObj } from '../api/InterfaceAndType';
import Restaurant from './Restaurant';

interface ResObj {
  list: Array<RestaurantObj>;
}

const RestaurantList: React.FC<ResObj> = ({ list }) => {
  return (
    <div>
      {list &&
        list.map((r) => {
          return <Restaurant key={r['업  소  명']} name={r['업  소  명']} dong={r['읍면동']} location={r['소  재  지']} call={r['전화번호']} />;
        })}
    </div>
  );
};

export default RestaurantList;
