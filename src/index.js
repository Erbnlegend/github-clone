import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/favicon-dark.svg'
import './assets/hero-drone.webp'
import './assets/hero-bg.webp'

import './index.html'
import './styles/main.css'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
