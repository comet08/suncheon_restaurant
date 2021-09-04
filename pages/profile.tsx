import React, { useState } from 'react';
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import logo from '../public/imgs/newlogo.png';
import styles from '../styles/Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { reduxState } from '../redux/reducers';
import Menu from './menu';

const types=["로그인", "회원가입"];

interface myReview{
  [key : string] : Array<ReviewProp> 
}

const Profile = () => {
  const Router = useRouter();
  const user = useSelector((state:reduxState)=>state.user.userState);
  const [name, setName] = useState<string | null>(null);

  return (
      <div className="container">
    <div className="contents">
      <div className="title" onClick={() => Router.push('/')}>
        <Image className="logo" src={logo} alt="logo" width="400" height="100" />
      </div>
      <Menu />
      <div id={styles.profile}>
          <form id={styles.form} onSubmit={onSubmit}>
          <input className={styles.input} type="text" name="name" onChange={onChange} placeholder={user.displayName? user.displayName : "닉네임을 설정해주세요!"}/>
          <button className={styles.button} type="submit">등록</button>
          </form>
      </div>
    </div>
    </div>
  );
};

export default Profile;
