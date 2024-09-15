import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as AppRoutes } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { App } from './App'
import store from '@/store/store'
import 'react-toastify/dist/ReactToastify.css'
import './sass/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppRoutes basename="/">
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </AppRoutes>
    </ReduxProvider>
  </React.StrictMode>,
)
