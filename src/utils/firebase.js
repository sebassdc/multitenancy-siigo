import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA5jffTgh4NByzZxwMzgVgNCV634fwrBz0',
  authDomain: 'multitenancy-siigo.firebaseapp.com',
  databaseURL: 'https://multitenancy-siigo.firebaseio.com',
  projectId: 'multitenancy-siigo',
  storageBucket: 'multitenancy-siigo.appspot.com',
  messagingSenderId: '154212073064',
  appId: '1:154212073064:web:4c64bb7722ed12086185dd',
  measurementId: 'G-405YC10KR1',
}

firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore()
export const auth = firebase.auth()
