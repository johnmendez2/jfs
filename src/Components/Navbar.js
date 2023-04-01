import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Config/config';
import './styles.css';

export const Navbar = ({ user, totalProducts }) => {
  const history = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.reload()
    })
  }

  return (
    <div className='navbar'>
      <div className='leftside'>
        <div className='logo'>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className='rightside'>
        {!user && <>
          <div><Link id='navlink' className='animated fadeInRight' to={"/signup"}>Sign up</Link></div>
          <div><Link id='navlink' className='animated fadeInRight' to={"/login"}>Login</Link></div>
        </>}
        {user && <>
          <h1 id='label2' className='animated fadeInRight'> Hi, {user}</h1>

          <div className='btn btn-danger btn-md animated fadeInRight'
            onClick={handleLogout}>LOGOUT</div>
        </>}
        <div><Link id='navlink' className='animated fadeInRight' to={"/FAQ"}>FAQ's</Link></div>

      </div>
    </div>
  )
}