import React, { useState, useRef, useEffect } from 'react'
import nerdsai_logo from '../assets/nerdsai_logo.png'
import nerdazul from '../assets/PEBLES-azul.png'
import nerdmorado from '../assets/PEBLES-morado.png'
import nerdrosa from '../assets/PEBLES-rosa copia.png'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

import '../styles/Prompt.css'
import img_loading from '../assets/caja-shake-stop-mo.gif'
import nerd from '../assets/nerd_character_orange.png'
import '../styles/Hero.css'

export const Hero = () => {



    const myRef = useRef(null)

    const slogan = 'Shake the box to unleash your imagination and start creating with';

    const prompts = [
        {
            text: "A cute creature photograph"
        },
        {
            text: "A quirky and lovable alien with a unique appearance"
        },
        {
            text: "A wise old sage with a long beard"
        },
        {
            text: "A cute small robot"
        },
        {
            text: "A small creature with wings and fiery eyes"
        },
        {
            text: "A colorful creature with open wings"
        },
        {
            text: "A fuzzy creature with colorful fur"
        },
        {
            text: "A mysterious owl with piercing yellow eyes and intrinsic feathers"
        },
        {
            text: "A lovable robot with a big heart "
        },
        {
            text: "Cute little zombie"
        },
        {
            text: "A friendly fairy with a delicate appearance and glitter"
        },
        {
            text: "A majestic phoenix with stunning feathers"
        },
        {
            text: "Cute little llama with colorful fur"
        },
        {
            text: "A magical mermaid with shimmering scales and flowing"
        },
        {
            text: "A cow on the moon"
        },
        {
            text: "A cute axolotl"
        },
        {
            text: "A dragon with shimmering purple scales and fiery breath"
        },
        {
            text: "A pop star with lots of jewelry"
        },
        {
            text: "A sloth with colorful dyed fur"
        },
        {
            text: "A cute Aztec small creature with feathered wings"
        },
        {
            text: "A majestic small dragon with colorful scales"
        },
        {
            text: "Barbie elegant glamorous doll"
        },
        {
            text: "A beaded superhero suit"
        },
        {
            text: "A beaded steampunk outfit"
        },
        {
            text: "A beaded space suit"
        },
        {
            text: "A beaded fearless dragon"
        },
        {
            text: "A beaded knight's armor with metallic colorful accents"
        },
        {
            text: "Young king with beaded colorful crown"
        }
    ]

    const [index, setIndex] = useState();

    const [message, setMessage] = useState('Cute little llama with colorful fur');
    
    const [isText, setIsText] = useState(true);
    
    const generate = () => {
        const index = Math.floor(Math.random() * prompts.length);
        setIndex(index);

        setMessage(prompts[index].text)

        const buttonshake = document.getElementById('buttonshake')
        buttonshake.classList.remove('hero_promptshake_div_disabled')
        buttonshake.classList.add('hero_promptshake_div')
        setIsText(true)
    };

    const handleChange = event => {
        const btn_inspire = document.getElementById('btn_inspire')
        btn_inspire.classList.remove('hero_prompt_first')
        setMessage(event.target.value);
        const buttonshake = document.getElementById('buttonshake')
        if (event.target.value.trim().length > 0) {
            setIsText(true)
            buttonshake.classList.remove('hero_promptshake_div_disabled')
            buttonshake.classList.add('hero_promptshake_div')
          } else {
            setIsText(false)
            buttonshake.classList.add('hero_promptshake_div_disabled')
            buttonshake.classList.remove('hero_promptshake_div')
          }
    }

    const [uid, setId] = useState('');
    const [ready, setReady] = useState();
    const [data, setData] = useState(null);
    const [pct, setPct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imageMain, setImageMain] = useState("/portfolio_img_1.png")
    const [shareBTN, isShareBTN] = useState(false);

    
    // setInterval(() => {
    //     if (isLoading === true) {
    //         if (pct == 100) {
    //             console.log("Finish");
    //             setIsLoading(false);
    //         }
    //         axios.get(`https://nerds-ai.web.app/api/predictionStatus?id=${id}`)
    //         .then(response2 => {
    //             setPct(response2.data.pctComplete);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    //     }
    // }, 1000)

    const callAPI = async () => {
        setIsLoading(true);
        myRef.current.scrollIntoView()
        setReady(false)
        const msgstr = message.split(' ').join('+').split(',').join('');
        fetch(`https://nerds-ai.web.app/api/predict?prompt=${msgstr}`)
        .then(response => response.json())
        .then(data => {
            if(data.status === "failed") {
                alert(data.error + '. Please try again.')
                setIsLoading(false);
            } else {
                setId(data.id)
                console.log(data.id)
            }
        })
        .catch(error => {
            console.error(error)
        })
        // await axios.get(`https://nerds-ai.web.app/api/predict?prompt=${msgstr}`)
        //   .then(response => {
        //     console.log(response.data.id);
        //     setId(response.data.id);
        // })
        // .catch(error => {
        //     console.error(error);
        // })
    };

    if(isLoading) {
        const intervalApi = setInterval(() => {
            fetch(`https://nerds-ai.web.app/api/predictionStatus?id=${uid}`)
            .then(response => response.json())
            .then(data => {
                if(data.status === "failed") {
                    alert(data.error + '. Please try again.')
                    clearInterval(intervalApi);
                    setIsLoading(false);
                }
                if(data.pctComplete === 100) {
                    setImageMain(data.output[0])
                    clearInterval(intervalApi);
                    setIsLoading(false);
                    setReady(true)
                }
            })
        }, 3000)
    }



    // const intervalApi = setInterval(() => {
    //     axios.get(`https://nerds-ai.web.app/api/predictionStatus?id=${id}`)
    //     .then(response => {
    //         setPct(response.data.pctComplete)
    //         console.log(response.data.pctComplete)
    //         if(response.data.pctComplete === 100) {
    //             clearInterval(intervalApi);
    //             setIsLoading(false);
    //         }
    //     })
    // }, 1000)

    // const callAPI = () => {
    //     setImageMain("https://nerds-ai.web.app/api/image?id=pe5kb7wdubgspfzneoqdsvgik4&uri=0.png")
    //     setImage("https://nerds-ai.web.app/api/image?id=pe5kb7wdubgspfzneoqdsvgik4&uri=0.png")
    //     setImage2("https://nerds-ai.web.app/api/image?id=pe5kb7wdubgspfzneoqdsvgik4&uri=1.png")
    //     setImage3("https://nerds-ai.web.app/api/image?id=pe5kb7wdubgspfzneoqdsvgik4&uri=2.png")
    //     setImage4("https://nerds-ai.web.app/api/image?id=pe5kb7wdubgspfzneoqdsvgik4&uri=3.png")
    //     myRef.current.scrollIntoView()
    //     setIsLoading(true)
    //     setTimeout(() => {
    //         isShareBTN(true)
    //         setIsLoading(false)
    //     }, 4000)
    // }

  return (
    <>
        <div className='hero'>
            <ParallaxProvider>
                <Parallax speed={2} style={{position: 'absolute', left: '10vw', top: '26vh'}}>
                    <img className='float_nerd float_nerd_blur_6' src={nerdazul} alt="Nerd"/>
                </Parallax>
                <Parallax speed={6} style={{position: 'absolute', right: '4vw', top: '74vh'}}>
                    <img className='float_nerd float_nerd_blur_6' src={nerdazul} alt="Nerd"/>
                </Parallax>
                <Parallax speed={6} style={{position: 'absolute', right: '20vw', top: '18vh'}}>
                    <img className='float_nerd float_nerd_blur_1' src={nerdmorado} alt="Nerd"/>
                </Parallax>
                <Parallax speed={35} style={{position: 'absolute', left: '20vw', bottom: '34vh'}}>
                    <img className='float_nerd float_nerd_blur_1' src={nerdrosa} alt="Nerd"/>
                </Parallax>
                <img className='float_nerd_resp float_nerd_blur_6' style={{right: '20vw', top: '12vh'}} src={nerdazul} alt="Nerd"/>
                <img className='float_nerd_resp float_nerd_blur_1' style={{left: '10vw', bottom: '40vh'}} src={nerdrosa} alt="Nerd"/>
                <img className='float_nerd_resp float_nerd_blur_1' style={{right: '10vw', bottom: '22vh'}} src={nerdmorado} alt="Nerd"/>
                {/* <h2 className='hero_h2'>Welcome To</h2> */}
                <p className='hero_slogan'>{slogan}</p>
                <img src={nerdsai_logo} alt="Nerds AI Logo" className='hero_nerdsai' />
                <div className='hero_promptdiv'>
                    <h4 className='hero_promptdiv_h4'>What's in your box today?</h4>
                    <input onChange={handleChange} type="text" name="prompt" id="hero_promptinput" placeholder='Type / An astronaut in the Nerds space station' value={message} />
                    <div className='hero_prompts' id='prompt' ref={myRef}>
                        <button id="btn_inspire" className='hero_prompt' onClick={generate}>Inspire Me</button>
                        <div id="buttonshake" className='hero_promptshake_div' onClick={isText ? callAPI : undefined}>
                            <p className='hero_promptshake'>Create</p>
                            <svg className='hero_promptshake_nerd' width="68" height="52" viewBox="0 0 68 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6817 32.9261C5.40903 31.2689 4.16255 28.9148 8.02015 19.6507L18.7434 8.05674L25.7211 7.05919L30.7932 21.295L24.4813 31.8135L10.6817 32.9261Z" fill="#7A81FF" stroke="#231F20" stroke-width="3"/>
                                <path d="M40.4673 11.0368C40.4673 16.7142 36.9045 20.7454 31.0588 20.7454C25.2131 20.7454 18.1222 19.6033 18.1222 11.0368C18.1222 5.35951 23.449 0.186035 29.2947 0.186035C37.5272 0.186035 40.4673 5.35951 40.4673 11.0368Z" fill="#231F20"/>
                                <ellipse cx="30.1485" cy="11.1952" rx="8.88831" ry="8.37187" fill="white"/>
                                <ellipse cx="32.9755" cy="14.0528" rx="3.11022" ry="3.25984" fill="#231F20"/>
                                <path d="M58.9497 20.1385C63.6353 28.2541 60.8895 38.6114 52.8168 43.2721C40.9212 50.1401 31.8002 44.9359 29.7161 37.0166C25.0305 28.901 27.7763 18.5437 35.849 13.883C43.9216 9.22225 53.3387 10.4199 58.9497 20.1385Z" fill="#231F20"/>
                                <path d="M56.2587 21.3045C60.2054 28.1404 57.4179 37.1387 50.0325 41.4026C39.1497 47.6858 31.1341 43.4943 29.5139 36.7456C25.5672 29.9096 28.3547 20.9113 35.7401 16.6474C43.1255 12.3835 51.5324 13.1182 56.2587 21.3045Z" fill="url(#paint0_radial_14_3086)"/>
                                <path d="M56.6336 26.844C47.9254 10.5797 37.1994 17.982 33.5809 19.5007L33.5809 19.1371C43.8514 9.94113 56.7563 16.133 56.6336 26.844Z" fill="#BBB8DC"/>
                                <path d="M28.8952 14.548C28.8952 20.8409 25.1756 25.3093 19.0725 25.3093C12.9695 25.3093 5.56635 24.0433 5.56635 14.548C5.56635 8.25512 11.1278 2.52071 17.2308 2.52071C25.8256 2.52071 28.8952 8.25512 28.8952 14.548Z" fill="#231F20"/>
                                <circle cx="18.1222" cy="14.7236" r="9.2796" fill="white"/>
                                <ellipse cx="20.83" cy="17.8902" rx="3.78642" ry="4.21337" fill="#231F20"/>
                                <defs>
                                <radialGradient id="paint0_radial_14_3086" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.3073 25.4679) rotate(30.292) scale(7.26268 7.9543)">
                                <stop stop-color="#CCC9E3"/>
                                <stop offset="1" stop-color="#7A81FF"/>
                                </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </ParallaxProvider>
        </div>

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
                    <h3 className={ready ? 'prompt_ready_text' : 'prompt_ready_text_disabled'}>YOUR CREATION IS READY!</h3>
                    {isLoading ? <img className='prompt_img prompt_img_loading' src={img_loading} alt="Loading" /> : <img className='prompt_img' src={imageMain} alt="Nerds AI Prompt Image" />}
                    <img src={nerd} alt="Nerd Character Orange" className={isLoading ? 'prompt_nerd_character_disabled' : 'prompt_nerd_character'} />
                    {/* <div className='prompt_share_div'>
                        <FiShare onClick={downloadImage} className='prompt_share' color='white' size={30} />
                        <FaFacebookF className='prompt_share' color='white' size={30} />
                        <FaInstagram className='prompt_share' color='white' size={30} />
                        <FaTwitter className='prompt_share' color='white' size={30} />
                    </div> */}
                </div>
            </ParallaxProvider>
            {/* {shareBTN ? <button className='prompt_share_resp_btn'>Share</button> : ''} */}
            {/* <button className='prompt_share_resp_btn'>Share</button> */}
            {/* <div className={isLoading ? "prompt_images_disabled" : "prompt_images"}>
                <img onClick={changeImg1} className='prompt_images_div' src={image} alt="" />
                <img onClick={changeImg2} className='prompt_images_div' src={image2} alt="" />
                <img onClick={changeImg3} className='prompt_images_div' src={image3} alt="" />
                <img onClick={changeImg4} className='prompt_images_div' src={image4} alt="" />
            </div> */}
        </div>
    </>
  )
}
