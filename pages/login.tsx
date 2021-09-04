import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../public/imgs/newlogo.png';
import styles from '../styles/Login.module.css';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { authService } from '../public/firebase/firebase';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/action';

const types=["로그인", "회원가입"];

const Login = () => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [pw, setPw] = useState<string | null>(null);
  const [type, setType] = useState<number>(0);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'id') setId(value);
    else if (name === 'pw') setPw(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (type === 0) onLogin();
    else if (type === 1) onRegister();
  };

  const onLogin = async () => {
    //Firebase login
    if(id && pw){
      await signInWithEmailAndPassword (authService, id, pw)
      .then((userCredential)=>{
        const user = userCredential.user;
        
        dispatch(fetchUser(user));
        window.alert("어서오세요! 순천이야기입니다.")
        Router.push('/');
      })
      .catch((err)=>{
        console.log(err.message);
        console.log(err)
        window.alert("잘못된 아이디 혹은 비밀번호입니다. 다시 시도해주세요.");
      })}
      else{
        window.alert("아이디와 비밀번호를 입력해주세요!");
      }
  };

  const onRegister =async  () => {
    if(id && pw){
      await createUserWithEmailAndPassword(authService, id, pw)
      .then((userCredential)=>{
        const user = userCredential.user;
        window.alert("회원가입에 성공하였습니다!")
        Router.push("/");
      })
      .catch((err)=>{
        if(err.code.includes("weak-password"))
          window.alert("8자리 이상의 비밀번호를 만들어주세요!")
        else
          window.alert("회원가입에 실패하였습니다.")
      })}
      else{
        window.alert("아이디와 비밀번호를 입력해주세요!");
      }
  };

  return (
    <div className="container">
    <div className="contents">
      <div className="title" onClick={() => Router.push('/')}>
        <Image className="logo" src={logo} alt="logo" width="400" height="100" />
      </div>
      <form id={styles.form} onSubmit={onSubmit}>
        <div id={styles.title}>로그인 및 회원가입</div>
        <input className={styles.input} type="text" placeholder="Email" name="id" onChange={onChange} required />
        <input className={styles.input} type="password" placeholder="password" name="pw" onChange={onChange} required />
        <button id={styles.button} type="submit">{types[type]}</button>
        <div id={styles.change} onClick={()=>setType(type?0:1)}>{types[type?0:1]}</div>
      </form>
    </div>
    </div>
  );
};

export default Login;
