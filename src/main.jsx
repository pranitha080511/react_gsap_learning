import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gsap from './Gsap.jsx'
import UseState from './UseState.jsx'
import ScrollGsap from './ScrollGsap.jsx'
import GsapText from './GsapText.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GsapText />
  </StrictMode>,
)
