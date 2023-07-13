import React from 'react'
import '../styles/Gallery.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import image1 from '../assets/portfolio_img_1.png'
import image2 from '../assets/portfolio_img_2.png'
import image3 from '../assets/portfolio_img_3.png'
import image4 from '../assets/portfolio_img_4.png'
import image5 from '../assets/portfolio_img_5.png'
import image6 from '../assets/portfolio_img_6.png'
import image7 from '../assets/portfolio_img_7.png'
import image8 from '../assets/portfolio_img_8.png'
import image9 from '../assets/portfolio_img_9.png'
import image10 from '../assets/portfolio_img_10.png'
import image11 from '../assets/portfolio_img_11.png'
import image12 from '../assets/portfolio_img_12.png'
import image13 from '../assets/portfolio_img_13.png'
import image14 from '../assets/portfolio_img_14.png'
import image15 from '../assets/portfolio_img_15.png'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiOutlineCloudDownload, AiOutlineShareAlt } from 'react-icons/ai'
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import {saveAs} from "file-saver";

export const Gallery = () => {
    const slogan = '<NERDS Ai Gallery>';

    const handleShare = async (imagedata) => {
      
  }

  return (
    <div className='gallery' id='gallery'>
        <h3 className='gallery_title'>The Nerdverse Is Real</h3>
        <p className='gallery_slogan'>{slogan}</p>
        <div className="gallery_splide">
          <Splide
          options={{
            direction: 'ttb',
            height   : '100vh',
            autoHeight: true,
            type: "loop",
            perPage: 3,
            gap: 25,
            drag: false,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
            },
            breakpoints: {
                640: {
                  autoScroll: {
                    speed: 0.5
                  },
                    height: '50vh',
                    perPage: 3,
                }
            }
          }}
          extensions={{AutoScroll}}
          aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image1} alt="Image 1"/>
              <p className='gallery_splide_text'>A cute creature photograph</p>
              <div className="gallery_splide_div">
                {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image1).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image1, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image2} alt="Image 2"/>
              <p className='gallery_splide_text'>A quirky and lovable alien with a unique appearance</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image2).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image2, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image3} alt="Image 3"/>
              <p className='gallery_splide_text'>A wise old sage with a long beard</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image3).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image3, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image10} alt="Image 10"/>
              <p className='gallery_splide_text'>A fuzzy creature with colorful fur</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image10).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image10, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image11} alt="Image 11"/>
              <p className='gallery_splide_text'>A cute monkey with a banana in its hand</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image11).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image11, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
          </Splide>
          <Splide
          options={{
            direction: 'ttb',
            height   : '100vh',
            autoHeight: true,
            type: "loop",
            perPage: 3,
            gap: 25,
            drag: false,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: -1,
              pauseOnHover: true,
            },
            breakpoints: {
                640: {
                  autoScroll: {
                    speed: -0.5
                  },
                    height: '50vh',
                    perPage: 3,
                }
            }
          }}
          extensions={{AutoScroll}}
          aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image4} alt="Image 4"/>
              <p className='gallery_splide_text'>A cute small robot</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image4).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image4, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image5} alt="Image 5"/>
              <p className='gallery_splide_text'>A small creature with wings and fiery eyes</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image5).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image5, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image6} alt="Image 6"/>
              <p className='gallery_splide_text'>A picturesque lush purple castle</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image6).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image6, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image12} alt="Image 12"/>
              <p className='gallery_splide_text'>A mysterious owl with piercing yellow eyes and a wise demeanor</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image12).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image12, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image13} alt="Image 13"/>
              <p className='gallery_splide_text'>A lovable robot with a big heart</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image13).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image13, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
          </Splide>
          <Splide
          options={{
            direction: 'ttb',
            height   : '100vh',
            autoHeight: true,
            type: "loop",
            perPage: 3,
            gap: 25,
            drag: false,
            arrows: false,
            pagination: false,
            autoScroll: {
              speed: 1,
              pauseOnHover: true,
            },
            breakpoints: {
                640: {
                  autoScroll: {
                    speed: 0.5
                  },
                    height: '50vh',
                    perPage: 3,
                }
            }
          }}
          extensions={{AutoScroll}}
          aria-label="My Favorite Images"
          id='splide_responsive'
          >
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image7} alt="Image 7"/>
              <p className='gallery_splide_text'>A colorful hot air balloon floating in a clear pink sky</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image7).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image7, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image8} alt="Image 8"/>
              <p className='gallery_splide_text'>A cozy cabin in the woods made of candy </p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image8).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image8, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image9} alt="Image 9"/>
              <p className='gallery_splide_text'>A colorful creature with butterfly wings and a gentle, carefree demeanor</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image9).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image9, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image14} alt="Image 14"/>
              <p className='gallery_splide_text'>Cute little zombie</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image14).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image14, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="gallery_splide_overlay"></div>
              <img src={image15} alt="Image 15"/>
              <p className='gallery_splide_text'>A mystical fairy with a delicate appearance and glittering wings</p>
              <div className="gallery_splide_div">
              {navigator.canShare ?
                <AiOutlineShareAlt  size={30} fill='white' onClick={async () => {
                  const blob = await fetch(image15).then(res => res.blob());
                  const data = {
                      title: "Shake the box & create with NERDS Candy!",
                      text: "Join NERDS Candy and start creating new worlds with your creativity.",
                      url: "https://shake-the-box.com",
                      files: [
                        new File([blob], 'nerds_ai.png', {
                          type: blob.type,
                        }),
                      ],
                  };
            
                  try {
                      await navigator.share(data);
                  } catch (err) {
                      console.log(err)
                  }
                }} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                :
                <AiOutlineCloudDownload size={30} fill='white' onClick={() => saveAs(image15, "Nerds Image")} style={{cursor: 'pointer', paddingBottom: '3px'}} />
                }
              </div>
            </SplideSlide>
          </Splide>

        </div>
    </div>
  )
}