import React from 'react'
import './components/styles/app.css'
import { MantineProvider } from '@mantine/core';
import Header from './components/JSX/Header'
import MainVP from './components/JSX/MainVP'
import Footer from './components/JSX/Footer'

function App() {

  return (
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <Header />
    <MainVP />
    <Footer />
  </MantineProvider>
  )
}

export default App
