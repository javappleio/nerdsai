import React from 'react'
import '../styles/Prompt.css'
import prompt_img from '../assets/nerds_1.png'
import nerd from '../assets/nerd_character_orange.png'
import { FiShare } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import {saveAs} from "file-saver";
import nerdazul from '../assets/PEBLES-azul.png'
import nerdmorado from '../assets/PEBLES-morado.png'
import nerdrosa from '../assets/PEBLES-rosa copia.png'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
// import { FacebookShareButton, TwitterShareButton } from 'react-share';

export const Prompt = () => {

  const downloadImage = ()=>{
      let url = prompt_img
      saveAs(url, "Nerds AI - Prompt");
  }

  return (
    <div className='prompt'>
      <ParallaxProvider>
        <Parallax speed={8} style={{position: 'absolute', left: '5vw', top: '26vh'}}>
            <img className='float_nerd float_nerd_blur_6' src={nerdrosa} alt="Nerd"/>
        </Parallax>
        <Parallax speed={14} style={{position: 'absolute', right: '20vw', top: '56vh'}}>
            <img className='float_nerd float_nerd_blur_6' src={nerdmorado} alt="Nerd"/>
        </Parallax>
        <img className='float_nerd_resp float_nerd_blur_6' style={{left: '25vw', top: '-6vh'}} src={nerdazul} alt="Nerd"/>
        <img className='float_nerd_resp float_nerd_blur_1' style={{right: '3vw', bottom: '8vh', zIndex: 999}} src={nerdrosa} alt="Nerd"/>
        <div style={{position: 'relative'}}>
          <img className='prompt_img' src={prompt_img} alt="An astronaut in the Nerds space station" />
          <div className='prompt_share_div'>
            <img src={nerd} alt="Nerd Character Orange" className='prompt_nerd_character' />
            {/* <p className='prompt_share_p'>Share</p> */}
            <FiShare onClick={downloadImage} className='prompt_share' color='white' size={30} />
            {/* <FacebookShareButton url={'https://www.example.com'} quote={'Dummy text!'} hashtag="#muo">
              <FaFacebookF className='prompt_share' color='white' size={30} />
            </FacebookShareButton> */}
            <FaFacebookF className='prompt_share' color='white' size={30} />
            <FaInstagram className='prompt_share' color='white' size={30} />
            <FaTwitter className='prompt_share' color='white' size={30} />
          </div>
        </div>
      </ParallaxProvider>
    </div>
  )
}
