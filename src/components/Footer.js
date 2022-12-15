import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='call-to-action'>
          <div className='title subText-lg relative pull-up-sm'>The place for anyone from anywhere to build anything</div>
          <div className='subText'>Whether you&apos;re scaling your startup or just learning how to code, GitHub is your home. Join the world&apos;s largest developer platform to build the innovations that empower humanity. Let&apos;s build from here.</div>
          <div className='hero-signup'>
            <form>
              <input type='email'
                placeholder='Email address'
              />
              <button className='email'>Sign up for Github</button>
            </form>
              <div className='style-line'></div>
              <button className='enterprise'>Start a free enterprise trial</button>
          </div>
        </div>
        <img className='astrocat' src='./imgs/astrocat.png' />
      </div>
    </div>
  )
}

export default Footer
