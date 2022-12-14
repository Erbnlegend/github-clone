import React from 'react'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='navbar'>
        <img src='./imgs/favicon-dark.svg' />
        <div className='flex-items'>Product <ChevronDown className='chevDown'/></div>
        <div className='flex-items'>Solutions <ChevronDown className='chevDown'/></div>
        <div className='flex-items'>Open Source <ChevronDown className='chevDown'/></div>
        <div className='flex-items'>Pricing <ChevronDown className='chevDown'/></div>
      </div>
      <div className='signin'>
          <input
            placeholder='Search Github'
          />
          <div>Sign in</div>
          <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
