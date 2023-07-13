import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/nerds_logo_black.png'
import '../styles/PopUp.css'

export const PopUp = () => {

    const [verified, setVerified] = useState(false)

    const overAge = () => {
        setVerified(true)
    }
    
    const underAge = () => {
        window.location.reload(true)
    }

  return (
    <div className={verified ? 'popup_disabled' : 'popup'}>
        <div className="popup_inner">
        <h2>Welcome to</h2>
        <img src={logo} alt="Nerds AI Logo" className='popup_logo' />
        <p>Please, verify your age to enter</p>
        <div className="popup_inner_btns">
            <button className='popup_btn_over' onClick={overAge}>I'm +13</button>
            <button className='popup_btn_under' onClick={underAge}>I'm under 13</button>
        </div>
        <small>(If you are not +13, you must have permission from parents or guardians)</small>
        <p>By entering this site you are agreeing to the <Link to='/legal'>Terms and Conditions</Link>.</p>
        </div>
    </div>
  )
}
