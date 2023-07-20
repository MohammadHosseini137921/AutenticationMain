import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles['formheader']}>
      <p className={styles['formheadtxt']}>ورود به پنل کاربران</p>
    </div>
  )
}

export default Header
