import React, { useEffect, useState } from 'react'
import '../styles/Footer.css'
import logo from '../assets/logo.png'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export const Footer = () => {

  const [country, setCountry] = useState(null)

  useEffect(() =>{
    fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => setCountry(data.country_name))
    .catch(error => {
      console.error(error)
    });
  },[])


  return (
    <div className='footer'>
        <div className="footer_inner">
            <img className='footer_logo' src={logo} alt="Logo" />
            <p className="footer_copy">© 2023 Nerds. All Rights Reserved.</p>
            <div className="footer_social">
                <a href="https://www.facebook.com/nerdscandyinternational/" target='_blank'><FaFacebookF className='footer_social_icon' color='white' size={20} /></a>
                {(() => {
                  switch (country) {
                    case 'United Kingdom':
                      return <a href="https://www.instagram.com/nerdscandies_uk/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Australia':
                      return <a href="https://www.instagram.com/nerdscandiesaus/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Germany':
                      return <a href="https://www.instagram.com/nerdscandies_de/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'France':
                      return <a href="https://www.instagram.com/nerdscandiesfr/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Italy':
                      return <a href="https://www.instagram.com/nerdscandies_it/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Spain':
                      return <a href="https://www.instagram.com/nerdscandies_es/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Mexico':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Argentina':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Bolivia':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Brazil':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Chile':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Colombia':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Costa Rica':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Cuba':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Ecuador':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'El Salvador':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Guatemala':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Honduras':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Nicaragua':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Panama':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Paraguay':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Peru':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Uruguay':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Venezuela':
                      return <a href="https://www.instagram.com/nerdscandies_latam/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Puerto Rico':
                      return <a href="https://www.instagram.com/nerdscandies_puertorico/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'South Korea':
                      return <a href="https://www.instagram.com/nerdscandieskorea/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'North Korea':
                      return <a href="https://www.instagram.com/nerdscandieskorea/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Bahrain':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Iran':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Iraq':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Israel':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Jordan':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Kuwait':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Qatar':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'Saudi Arabia':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    case 'United Arab Emirates':
                      return <a href="https://www.instagram.com/nerdscandymideast/" target='_blank'><FaInstagram className='footer_social_icon' color='white' size={24} /></a>
                    default:
                      return ''
                  }
                })()}
                <a href="https://www.nerdscandyinternational.com" target='_blank' className='footer_btn'>BUY NERDS</a>
            </div>
        </div>
    </div>
  )
}
