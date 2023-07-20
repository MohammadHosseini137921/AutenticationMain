import React, { useEffect, useState } from 'react'
import styles from './Login.module.css'

const Login = (props) => {
    
    const [userData , setUserData] = useState({username : '' , password : ''}) ;
    const [disable , setDisable] = useState(true)
    const chngUserHander = (event) => {
      setUserData(prevState => ({...prevState , username : event.target.value})) ;
    }
    const chngPassHandler = (event) => {
      setUserData(prevState =>({...prevState , password : event.target.value})) ;
    }
    const btnClickHandler = (event) => {
      event.preventDefault() ;
      props.LoggedInCheck(userData.username,userData.password)
      setUserData(prevState => ({...prevState , username : ""})) ;
      setUserData(prevState => ({...prevState , password : ""})) ;
    }
    useEffect(() => {
      const Timer = setTimeout(() =>{
        setDisable(userData.username.trim().length == 0 || userData.password.trim().length == 0)
      },500) 
      return (() => {
        clearTimeout(Timer)
      })
    },[userData])

  return (
    <div className={styles['loginform']}>

        <div className={styles['usernamepart']}>
            <label htmlFor='usernameinput' className={styles['usernamelabel']}>نام کاربری</label>
            <input type='text' className={styles['usernameinput']} autoComplete='off' onChange={chngUserHander} value={userData.username}/>
        </div>

        <div className={styles.passowrdpart}>
            <label htmlFor='passwordinput' className={styles['passwordlabel']}>رمز عبور</label>
            <input type='password' className={styles['passwordinput']} autoComplete='off' onChange={chngPassHandler} value={userData.password}/>
        </div>

        <div className={styles['submitbtnpart']}>
            <button 
            className={styles['submitbtn']} 
            type='submit' 
            onClick={btnClickHandler} 
            disabled={disable} 
            style={{backgroundColor:!disable?"#65a482":"" , color:!disable?"black":""}}> 
            ورود</button>
        </div>
        
    </div>
  )
}

export default Login
