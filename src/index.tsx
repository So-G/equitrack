import React from 'react'
import ReactDOM from 'react-dom/client'
import 'styles/index.scss'
import App from './App'
import './i18n'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'equitrack-io.firebaseapp.com',
  projectId: 'equitrack-io',
  storageBucket: 'equitrack-io.appspot.com',
  messagingSenderId: '107420236327',
  appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(firebaseConfig)

const storage = getStorage(app)
console.log('⚡️', storage)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
