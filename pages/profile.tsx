import React, { useState } from 'react';
import Image from 'next/image';
import router, { useRouter } from 'next/router';
import logo from '../public/imgs/newlogo.png';
import styles from '../styles/Profile.module.css';

import { updateProfile   } from 'firebase/auth';
import { authService, dbService } from '../public/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { reduxState } from '../redux/reducers';
import Menu from '../sub/menu';
import { useEffect } from 'react';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

const types=["로그인", "회원가입"];

interface myReview{
  [key : string] : Array<ReviewProp> 
}

const Profile = () => {
  const Router = useRouter();
  const user = useSelector((state:reduxState)=>state.user.userState);
  const [name, setName] = useState<string | null>(null);
  const [reviews, setReviews] = useState<myReview|null>(null);

  const onSubmit = async(e:any)=>{
      e.preventDefault();
    if(authService.currentUser && name)
        updateProfile(authService.currentUser, {
            displayName : name
        }).then(()=>{
            window.alert("업데이트 완료!")
        })
    
  }

  const onChange = (e:any)=>{
      const {name, value} = e.target;
      if(name==="name") setName(value);
  }

  const getReviews = async () =>{
    if(!user) return;
    const q = await query(collection(dbService, 'Review'), where("uid", "==", user.uid), orderBy("store"), orderBy("createdAt", "desc"));
    
    const snapshot = await onSnapshot(q, (querySnapshot)=>{
      let reviewObj : myReview= {};
  
      querySnapshot.forEach((doc: any) => {
        const data = doc.data();
        if(!reviewObj[data.store]) reviewObj[data.store] = [];
        reviewObj[data.store].push({
        id: doc.id,
        ...data,
        });
      });
      setReviews(reviewObj);
    });
  }

  useEffect(()=>{
    if(!user) Router.push('/');
    getReviews();
  }, []);
  
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
