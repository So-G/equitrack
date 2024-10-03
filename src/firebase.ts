import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'equitrack-io.firebaseapp.com',
  projectId: 'equitrack-io',
  storageBucket: 'equitrack-io.appspot.com',
  messagingSenderId: '107420236327',
  appId: process.env.REACT_APP_APP_ID
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
