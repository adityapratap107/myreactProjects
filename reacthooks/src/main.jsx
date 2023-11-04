import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BackgroundChanger from './bgChanger/BackgroundChanger.jsx'
import './index.css'
import PasswordGenerator from './PasswordGenerator/PasswordGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BackgroundChanger/>
    {/* <PasswordGenerator /> */}
  </React.StrictMode>
)
