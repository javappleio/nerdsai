import React, {useState} from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

export const Header = () => {

  const [navbar, setNavbar] = useState(false);

  const [respmenu, setRespmenu] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 200) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <div className='header'>
        <div className={navbar == true ? "header_inner_active" : "header_inner"}>
            <img className='header_logo' src={logo} alt="Logo" />
            <div className="header_menu">
                <a href="#">Home</a>
                <a href="#hiw">How it works</a>
                <a href="#gallery">Gallery</a>
            </div>
            <BiMenu className='header_menuicon' color='white' size={40} onClick={() => setRespmenu(true)} />
        </div>
        <div className={ respmenu ? "header_resp header_resp_active" : "header_resp" }>
          <AiOutlineClose className='header_resp_close' fill="white" size={30} onClick={() => setRespmenu(false)} />
          <a href="#" onClick={() => setRespmenu(false)}>Home</a>
          <a href="#hiw" onClick={() => setRespmenu(false)}>How it works</a>
          <a href="#gallery" onClick={() => setRespmenu(false)}>Gallery</a>
        </div>
    </div>
  )
}
