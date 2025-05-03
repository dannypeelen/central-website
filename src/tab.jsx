import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tabs from './Tabs.jsx'
import './styles.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tabs />
  </StrictMode>,
)
