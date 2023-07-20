import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import Logininfopage from './components/Logininfopage'
import { useState } from 'react'

function App() {
  
  const [isLoggedIn , setIsLoggedIn] = useState(false) ;
  const LoginHandler = (username , password) => {
    if(username == 'mohammad' && password == '123') {
      setIsLoggedIn(true) ;
    }
    else {
      alert("لطفا نام کاربری و رمز عبور خود را به صورت صحیح وارد نمایید")
    }
  }
  const LogoutHandler = (LogoutResult) => {
    setIsLoggedIn(LogoutResult) ;
  }

  return (
    <div className='container'>
      <div className='mainloginform'>
        <Header />
        {!isLoggedIn && <Login LoggedInCheck={LoginHandler} />}
        {isLoggedIn && <Logininfopage LoggedOutCheck={LogoutHandler}/>}
      </div>
    </div>
  )
}

export default App
