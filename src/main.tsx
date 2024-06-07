import Store from '@/components/store/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './variables.css'

const store = new Store()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>,
)
