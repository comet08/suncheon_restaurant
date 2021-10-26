import styles from '../styles/Home.module.css';
import { request } from '../api/suncheon';
import react, { useEffect, useState } from 'react';
import Image from 'next/image';

import Restaurant from '../sub/Restaurant';

import Menu from '../sub/menu';

import Map1 from '../maps/map1';
import Map2 from '../maps/map2';
import Map3 from '../maps/map3';

import logo from '../public/imgs/newlogo.png';
import Notice from '../sub/Notice';

import { useDispatch, useSelector } from 'react-redux';
import { getList } from '../redux/action';
import { reduxState } from '../redux/reducers/index';


const Home = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: reduxState) => state.rlist.list);
  const [selectedList, setSelectedList] = useState<Object>({});
  const [dongList, setDongList] = useState<Array<string>>([]);


  const onClick = (e) => {
    const { value } = e.target;
    //console.log(e.target.value);
    let new_list = selectedList;

    if (selectedList[value]) {
      delete new_list[value];
      e.target.style.backgroundColor = 'black';
    } else {
      e.target.style.backgroundColor = 'blue';
      new_list[value] = list[value];
    }
    setSelectedList({ ...new_list });
  };

  useEffect(() => {
    dispatch(getList());
  }, []);

  useEffect(() => {
    // 리스트가 들어오면 '동' 정보를 설정
    setDongList([...Object.keys(list)]);
  }, [list]);


  if (!dongList.length) {
    return <div className={styles.home_container}>Loading</div>;
  } else
    return (
      <div className={styles.home_container}>
        <Notice />
        <div className="title" onClick={() => Router.push('/')}>
          <Image src={logo} alt="logo" width="400" height="100" />
        </div>
        <Menu />
        <div className={styles.maps}>
            <Map1 />
            <Map2 />
            <Map3 />
          </div>
        {dongList.length ? (
          <>
            <div className={styles.Nav}>
              {dongList.map((d) => {
                return (
                  <button className={styles.dongButton} key={d} onClick={onClick} value={d}>
                    {d}
                  </button>
                );
              })}
            </div>
            <div className={styles.contents}>
              {selectedList &&
                Object.entries(selectedList).map(([key, value]) =>
                  value.map((r) => {
                    return (
                      <div key={key}>
                        <div className={styles.dong}>{key}</div>
                        <RestaurantList list={value} />
                      </div>
                    );
                  })
                )}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
};

export default Home;
