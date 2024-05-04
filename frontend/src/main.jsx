import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Authprovider from './Context/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <div className='dark:bg-slate-800'>
    <App />
    </div>
    </Authprovider>
  </React.StrictMode>
)

