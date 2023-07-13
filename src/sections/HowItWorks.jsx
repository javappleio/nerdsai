import React, { useState } from 'react'
import '../styles/HowItWorks.css'
import share_img from '../assets/imagine.png'
import share_img2 from '../assets/portfolio_img_17.png'
import share_img3 from '../assets/portfolio_img_25.png'
import nerd from '../assets/nerd_character_pink.png'
import nerd2 from '../assets/nerd_character_blue.png'
import nerd3 from '../assets/nerd_character_purple.png'
import nerd4 from '../assets/nerd_character_green.png'
import { BiWorld, BiPencil, BiImage, BiShareAlt } from 'react-icons/bi'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import nerdazul from '../assets/PEBLES-azul.png'
import nerdmorado from '../assets/PEBLES-morado.png'
import nerdrosa from '../assets/PEBLES-rosa copia.png'

const data = [
    {
        title: 'Imagine',
        icon: <BiWorld color="inherit" size={30} />,
        text: 'Imagine a cool world with NERDS Candy. You can use the ‘Inspire Me’ button to see more examples.'
    },
    {
        title: 'Type',
        icon: <BiPencil color="inherit" size={30} />,
        text: 'If you already have your idea just write it inside the text bar \\n .e.g. Astronaut in a galaxy \\n Be a creative master by using commas in your prompts and this formula: [Subject] [doing something] [in a place], [style of art], [resolution] \\n e.g. Astronaut floating in a galaxy, realistic, 8K'
    },
    {
        title: 'Create',
        icon: <BiImage color="inherit" size={30} />,
        text: 'Press the ‘Create’ button and wait for your image.'
    }
]

export const HowItWorks = () => {

    const [selected, setSelected] = useState(0)

    const toggle = (i) => {
        setSelected(i)
    }

  return (
    <div className='hiw' id='hiw'>
        <ParallaxProvider>
        <Parallax speed={30} style={{position: 'absolute', right: '5vw', top: '20vh', zIndex: 99}}>
            <img className='float_nerd float_nerd_blur_1_front' src={nerdrosa} alt="Nerd"/>
        </Parallax>
        <Parallax speed={10} style={{position: 'absolute', left: '5vw', top: '40vh'}}>
            <img className='float_nerd float_nerd_blur_6' src={nerdazul} alt="Nerd"/>
        </Parallax>
        <img className='float_nerd_resp float_nerd_blur_1' style={{left: '8vw', top: '16vh'}} src={nerdmorado} alt="Nerd"/>
        <img className='float_nerd_resp float_nerd_blur_6' style={{right: '8vw', bottom: '50vh', zIndex: 999}} src={nerdrosa} alt="Nerd"/>
        <h3 className='hiw_title'>Learn How To Shake The Box</h3>
        <div className='hiw_inner'>
            <div className='hiw_accordion'>
                {data.map((item, i) => (
                    <div key={i} className={selected === i ? 'hiw_accordion_item show' : 'hiw_accordion_item'}>
                        <div className={selected === i ? 'hiw_accordion_title show' : 'hiw_accordion_title'} onClick={() => toggle(i)}>
                            {item.icon}
                            <h5>{item.title}</h5>
                        </div>
                        <p className={selected === i ? 'hiw_accordion_text show' : 'hiw_accordion_text'}>{
                            item.text.split('\\n').map(c => {
                                return (<p style={{paddingBottom: '12px'}}>{c}</p>)
                            })
                        }</p>
                    </div>
                ))}
            </div>
            {selected === 0 ? <img className='hiw_image' src={share_img} alt="Share image" /> : ''}
            {selected === 1 ? <img className='hiw_image' src={share_img2} alt="Share image" /> : ''}
            {selected === 2 ? <img className='hiw_image' src={share_img3} alt="Share image" /> : ''}
            {selected === 0 ? <img src={nerd} alt="Nerd Character" className='hiw_nerd_character' /> : ''}
            {selected === 1 ? <img src={nerd2} alt="Nerd Character" className='hiw_nerd_character_2' /> : ''}
            {selected === 2 ? <img src={nerd3} alt="Nerd Character" className='hiw_nerd_character' /> : ''}
        </div>
        </ParallaxProvider>
    </div>
  )
}
