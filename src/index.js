import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './assets/favicon-dark.svg'
import './assets/hero-drone.webp'
import './assets/hero-bg.webp'
import './assets/lines-hero.svg'
import './assets/issues-plan.png'
import './assets/git-branch-productivity.svg'
import './assets/footer-galaxy.jpg'
import './assets/astrocat.png'
import './assets/globe.jpg'
import './assets/illo-ports.png'
import './assets/illo-context-menu.png'
import './assets/illu-projects.png'

// Style imgs
import './assets/orgs/stripe.svg'
import './assets/orgs/pinterest.svg'
import './assets/orgs/pg.svg'
import './assets/orgs/telus.svg'
import './assets/orgs/mercedes.svg'
import './assets/orgs/kpmg.svg'

import './index.html'
import './styles/main.css'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
