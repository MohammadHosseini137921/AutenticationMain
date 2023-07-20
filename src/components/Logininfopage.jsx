import React from 'react'
import styles from './Logininfopage.module.css'

const Logininfopage = (props) => {

    const LogoutHandler = () => {
        props.LoggedOutCheck(false)
    }
  return (
    <div className={styles['infopagecontainer']}>
        <p className={styles['usernotif']}>کاربر گرامی به پنل کاربری خوش آمدید</p>
        <div className={styles['panelmenu']}>
                <a className={styles['logoutbtn']} href='#' onClick={LogoutHandler}>خروج از حساب</a>
                <a className={styles['chngprofile']} href='#'>پروفایل</a>
                <a className={styles['totalbuy']}>تعداد خرید های شما : 12 خرید</a>
        </div>
    </div>
  )
}

export default Logininfopage