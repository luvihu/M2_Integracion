import style from './loginForm.module.css';
import React from 'react';
import { useState } from 'react';
import validate from '../validate/validate';

export default function LoginForm({login}) {

  let [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  let [errors, setErrors] = useState({
    email: '',
    password: '',
    });
  
  const handleChange = (e)=>{
    let valor = e.target.value;
    let nombre = e.target.name;
    e.preventDefault();

    setUserData({...userData,
    [nombre]: valor});

    setErrors(validate({...userData,
      [nombre]: valor}));
  }

  

    const handleSubmit = (event)=> {
     event.preventDefault();
       login(userData);        
    }

  return (
    
    <div className={style.fConten}>
      <div className={style.fTitle}>
       <h1>Wellcome to the website</h1>
      </div>
      <form  onSubmit={handleSubmit}>
        <div className={style.credentials}>
        <label htmlFor="email">Enter your email</label>
        <input 
        type="text"  
        name='email'
        value={userData.email}
        onChange={handleChange}/>
        {errors.email ? <span>{errors.email}</span> : null}
        </div>
        <div className={style.credentials}>
        <label htmlFor="password">Enter your password</label>
        <input 
        type="texto" 
        name='password'
        value={userData.password}
        onChange={handleChange} />
        {errors.password ? <span>{errors.password}</span> : null}
        </div>
        <button className={style.subBtn} type='submit' >LOGIN</button>
      </form>

    </div>
  )
}