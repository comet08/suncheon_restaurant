import styles from '../styles/Home.module.css';
import { request } from './api/suncheon';
import react, { useEffect, useState } from 'react';
import Restaurant from './sub/Restaurant';

import Menu from './menu';

const Home = () => {
  const [list, setList] = useState<Object>({});
  const [selectedList, setSelectedList] = useState<Object>({});
  const [dongList, setDongList] = useState<Array<string>>([]);

  const getList = async () => {
    await request().then((res) => {
      setList(res);
      setDongList([...Object.keys(res)]);
    });
    // 소  재  지, 업  소  명, 연번, 읍면동, 전화번호
  };

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
    getList();
  }, []);

  if (!dongList.length) {
    return <div className={styles.home_container}>Loading</div>;
  } else
    return (
      <div className={styles.home_container}>
        <div className={styles.title}> 순천 </div>
        <Menu />
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
