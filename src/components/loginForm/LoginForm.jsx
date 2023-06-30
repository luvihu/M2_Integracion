import style from './loginForm.module.css';
import React from 'react';
import { useState } from 'react';
import validate from '../validate/validate';

export default function LoginForm({loginHandler}) {

  let [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  let [errors, setErrors] = useState({});
    
  
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
     loginHandler(userData);        
    }

  return (
    <div className={style.fContenGlob}>
     
     <div className={style.fConten}>
       <div className={style.fTitle}>
       <h1>Wellcome</h1>
      </div>
      <form  onSubmit={handleSubmit}>
        <div className={style.credentials}>
        <label >Enter your email</label>
        <input 
        type="text"  
        name='email'
        value={userData.email}
        onChange={handleChange}/>
        {errors.email ? <span>{errors.email}</span> : null}
                
        <label >Enter your password</label>
        <input 
        type='password' 
        name='password'
        value={userData.password}
        onChange={handleChange} />
        {errors.password ? <span>{errors.password}</span> : null}
        </div>

        <button className={style.subBtn} type='submit' >Login</button>
      </form>

    </div>
    </div>
  )
}