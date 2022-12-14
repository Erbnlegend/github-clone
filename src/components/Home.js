import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  AOS.init()
  return (
    <div>
      <img className='drone' src='./imgs/hero-drone.webp' />
      Let&apos;s build from here
    </div>
  )
}

export default Home
