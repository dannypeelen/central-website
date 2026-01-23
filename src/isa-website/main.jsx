import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)

