/**
 * Application entry point. Mounts the React app into #root and wraps it in StrictMode
 * for development-time checks (e.g. deprecated APIs, side effects).
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
