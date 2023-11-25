import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BackgroundChanger from './bgChanger/BackgroundChanger.jsx'
import { UseCallbackHook } from './hooks/useCallback/UseCallbackHook.jsx'
import UseEffectHook from './hooks/useEffect/useEffectHook.jsx'
import MemoFunc from './hooks/useMemo/MemoFunc.jsx'
import UseRefHook from './hooks/useRef/UseRefHook.jsx'
import './index.css'
import PasswordGenerator from './PasswordGenerator/PasswordGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BackgroundChanger/> */}
    {/* <PasswordGenerator /> */}
    {/* <UseCallbackHook /> */}
    <MemoFunc />
    {/* <UseRefHook /> */}
    {/* <UseEffectHook/> */}
  </React.StrictMode>
)
