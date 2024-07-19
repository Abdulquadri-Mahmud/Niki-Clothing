import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../pages/Home';
import Footer from '../Components/Footer';
import { Box } from '@chakra-ui/react';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import OurProducts from '../pages/OurProducts';

export default function PagesRoute() {
  return (
    <Box color={'white'} className='bg-slate-900'>
      <Router>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/products' element={<OurProducts/>}/>
        </Routes>
        <Footer/>
    </Router>
    </Box>
  )
}
