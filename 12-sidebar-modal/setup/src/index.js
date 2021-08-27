import React from 'react'
import ReactDOM from 'react-dom'
import {AppKaProvider} from './context'
import './index.css'
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <AppKaProvider>
      <App />
    </AppKaProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
