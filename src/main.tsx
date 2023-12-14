import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as AppRoutes } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { App } from './App'
import store from './store'
import './sass/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppRoutes basename="/">
        <App />
      </AppRoutes>
    </ReduxProvider>
  </React.StrictMode>
)
