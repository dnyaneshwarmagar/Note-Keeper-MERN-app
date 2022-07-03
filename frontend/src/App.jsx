import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingPage from './screens/LandingPage/LandingPage'

function App() {


  return (
    <>
    <Header/>
   
    <LandingPage></LandingPage>
    <Footer/>
    </>
  )
}

export default App
