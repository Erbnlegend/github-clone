import React from 'react'
import BuildForm from './BuildForm'
import Organizations from './Organizations'
import Lines from './Lines'
import Productivity from './Productivity'
import Codespaces from './Codespaces'
import GraphLines from './GraphLines'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <div className='content-container'>
          <Lines />
          <div className='content'>
            <BuildForm />
            <Organizations />
            <Productivity />
          </div>
        </div>
        <div className='content-container'>
        <GraphLines />
        <div className='content'>
          <Codespaces />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
