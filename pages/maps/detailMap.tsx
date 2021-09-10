import React, { useEffect } from 'react';
import styles from '../../styles/Detail.module.css';
interface mapObj {
  location: string;
  name: string;
}

declare global {
  interface Window {
    kakao: any;
  }
}

const DetailMap: React.FunctionComponent<mapObj> = ({ location, name }) => {
  const kakaoMap = React.useRef<HTMLDivElement>(null);

  const mapping = async () => {
    const container = kakaoMap.current;

    const scriptonload = () => {
      window.kakao.maps.load(() => {
        const geo = new window.kakao.maps.services.Geocoder();
        geo.addressSearch(location, (res: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            {
              let options = {
                center: new window.kakao.maps.LatLng(res[0].y, res[0].x),
                level: 3,
              };

              let link: HTMLAnchorElement | null = document.querySelector('#mapLink');
              if (link) link.href = `https://map.kakao.com/link/to/${name},${res[0].y},${res[0].x}`;
              var iwContent = `<div style="padding:5px;">${name}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new window.kakao.maps.LatLng(res[0].y, res[0].x), //인포윈도우 표시 위치입니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

              // 인포윈도우를 생성하고 지도에 표시합니다

              const map = new window.kakao.maps.Map(container, options);
              var infowindow = new window.kakao.maps.InfoWindow({
                map: map, // 인포윈도우가 표시될 지도
                position: iwPosition,
                content: iwContent,
                removable: iwRemoveable,
              });
              var mapTypeControl = new window.kakao.maps.MapTypeControl();

              // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
              // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
              map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

              // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
              var zoomControl = new window.kakao.maps.ZoomControl();
              map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
            }
          } else return null;
        });
      });
    };
    scriptonload();

    //script.addEventListener("load", scriptonload);
    //const map = new (window as any).kakao.maps.Map(divs, options); //지도 생성 및 객체 리턴
  };

  useEffect(() => {
    mapping();
  }, [location]);

  return <div id="map" className={styles.detail_map} ref={kakaoMap}></div>;
};

export default DetailMap;
