import React, { useState, useEffect } from 'react';
import styles from '../styles/Detail.module.css';
import Router from 'next/router';
import Image from 'next/image';
import logo from '../public/imgs/newlogo.png';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

import { RestaurantObj } from './api/InterfaceAndType';
import DetailMap from './maps/detailMap';
import ReviewList from './sub/ReviewList';

interface queryObj {
  [key: string]: string | string[] | undefined;
}

const Detail: React.FunctionComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [resObj, setResObj] = useState<RestaurantObj | null>(null);
  let list = useSelector((state: any) => state.rlist.list);

  useEffect(() => {
    let query: queryObj = router.query;
    if (query['name'] && query['dong']) {
      let name: string = String(query.name);
      let dong: string = String(query.dong);
      setResObj(list[dong][name]);
    } else {
      router.push('/');
    }
    /// dispatch(routedPage(true));
  }, [router.query, list]);

  if (resObj)
    return (
      <div className="container">
        <div className="contents">
          <div className="title" onClick={() => Router.push('/')}>
            <Image className="logo" src={logo} alt="logo" width="400" height="100" />
          </div>
          <div className={styles.detail}>
            <div className={styles.detail_desc}>
              <div className={styles.detail_name}>{resObj['업  소  명']}</div>
              <div className={styles.detail_location}>{resObj['소  재  지']}</div>
              <div className={styles.detail_call}>T. {resObj['전화번호']}</div>
            </div>

            <DetailMap location={resObj['소  재  지']} name={resObj['업  소  명']} />
          </div>
          {router.query.name && <ReviewList store={router.query.name} />}
        </div>
      </div>
    );
  else return <div className="container"> Loading ... </div>;
};

export default Detail;
