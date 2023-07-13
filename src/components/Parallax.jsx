import React from 'react'
import nerdazul from '../assets/PEBLES-azul.png'
import nerdmorado from '../assets/PEBLES-morado.png'
import nerdrosa from '../assets/PEBLES-rosa copia.png'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export const ParallaxDiv = () => {
  return (
    <div style={{height: '100%', width: '100%', position: 'absolute'}}>
        <ParallaxProvider>
            <Parallax speed={0} translateX={['20vw', '20vw']}>
                <img className='float_nerd float_nerd_blur_6' src={nerdazul} alt="Nerd"/>
            </Parallax>
        </ParallaxProvider>
    </div>
  )
}
