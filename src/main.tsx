import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as AppRoutes } from 'react-router-dom'
import { App } from './App'
import './sass/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes basename="/">
      <App />
    </AppRoutes>
  </React.StrictMode>
)
