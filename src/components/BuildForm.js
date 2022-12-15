import React from 'react'

const BuildForm = () => {
  return (
      <div>
        <div className='drone-container'>
          <img className='drone' src='./imgs/hero-drone.webp' />
        </div>
        <div>
          <div className='title'><h1>Let&apos;s build from here</h1></div>
          <div className='mission subText'>
            Harnessed for productivity. Designed for collaboration. Celebrated for built-in security. Welcome to the platform developers love.
          </div>
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
      </div>
  )
}

export default BuildForm
