import { Analytics } from '@vercel/analytics/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import AppRouter from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
    <Analytics />
  </StrictMode>,
)
