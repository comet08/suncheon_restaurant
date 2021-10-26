import React from 'react';
import Link from 'next/link';

import { authService } from '../public/firebase/firebase';
import { signOut } from '@firebase/auth';

import { useDispatch, useSelector } from 'react-redux';

import { reduxState } from '../redux/reducers';

const Menu: React.FC= () => {
  const dispatch = useDispatch();
  const user = useSelector((state:reduxState)=>state.user.userState);

  const onLogout = () =>{
    signOut(authService);
    window.alert("안녕히 가세요!");
  }

  return (
    <div className="Navi">
      <Link href="/">
        <a className="Navi_link">Home</a>
      </Link>{' '}
      <Link href="/about">
        <a className="Navi_link">About</a>
      </Link>
      {
        !user ? 
      <Link href="/login">
        <a className="Navi_link">Login</a>
      </Link>
      :
      <>
      <Link href="/profile">
        <a className="Navi_link">Profile</a>
      </Link>
        <div className="Navi_link" onClick={()=>onLogout()}>Logout</div>
    </>
    }
    </div>
  );
};

export default Menu;
