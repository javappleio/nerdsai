import React from 'react'
import { Background } from './components/Background'
import { PopUp } from './components/PopUp'
import { Tutorial } from './components/Tutorial'
import { Footer } from './sections/Footer'
import { Gallery } from './sections/Gallery'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'

export const Home = () => {
  return (
    <div>
        <Tutorial />
        <div className='innerDiv' id='innerDiv'>
          <PopUp />
          <Header />
          <Background />
          <Hero />
          <HowItWorks />
          <Gallery />
          <Footer />
        </div>
    </div>
  )
}
