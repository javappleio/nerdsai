import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import video from '../assets/nerds_intro.mp4'
import video2 from '../assets/nerds_intro_vert.mp4'
import '../styles/Tutorial.css'

export const Tutorial = () => {

    // state for mouse position
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const videoEl = useRef(null);
  const videoEl2 = useRef(null);

  const attemptPlay = () => {
    videoEl.current.play();
    const cursorPointer = document.getElementById('cursorPointer');
    cursorPointer.style.display = 'none'
    const cursorPointer2 = document.getElementById('cursorPointer2');
    cursorPointer2.style.display = 'none'
  };
  
  const attemptPlay2 = () => {
    videoEl2.current.play();
    const cursorPointer = document.getElementById('cursorPointer');
    cursorPointer.style.display = 'none'
    const cursorPointer2 = document.getElementById('cursorPointer2');
    cursorPointer2.style.display = 'none'
  };
  
  const close = () => {
    const innerDiv = document.getElementById('innerDiv');
    innerDiv.style.display = 'block';
    setTimeout(() => {
        const tutorialDiv = document.getElementById('tutorial');
        tutorialDiv.style.display = 'none';
        videoEl2.current.pause();
        videoEl.current.pause();
        const htmlDiv = document.getElementById('html');
        htmlDiv.style.overflowY = 'visible'
      }, 100)
  };

  useEffect(() => {
    videoEl2.current
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      }, []);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  // Set cursor variant to change color on hover text
  const [cursorVariant, setCursorVariant] = useState("default");

  // Variant animation
  const variants = {

  // default animation (applies onMouseLeave)
    default: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },

  // text animation (applies onMouseEnter) 
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  };

  return (
    <div className='tutorial' id='tutorial'>
        <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        id='cursorPointer'
        >
            <p>Play</p>
        </motion.div>
        <video onClick={() => {attemptPlay()}} className='video_d' ref={videoEl} autoPlay loop preload='auto' playsInline controls={false}>
            <source src={video} type="video/mp4" />
        </video>
        <video className='video_m' ref={videoEl2} autoPlay loop preload='auto' playsInline controls={false}>
            <source src={video2} type="video/mp4" />
        </video>
        <div className='cursor_m' id='cursorPointer2' onClick={() => {attemptPlay2()}}>Play</div>
        <button className='btn_skip' onClick={() => {close()}}>SKIP</button>

    </div>
  )
}
