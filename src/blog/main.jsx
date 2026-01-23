import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Blog from './Blog.jsx'
import './styles.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
)
