import { Box } from '@chakra-ui/react'
import React, { createContext } from 'react'
import Hero from '../Components/Hero'
import LatestProduct from '../Components/LatestProduct'
import About from '../Components/About';
import Purchase from '../Components/Purchase';
import Banner from '../Components/Banner';

export const ProductsContext = createContext();

export default function Home() {
    const products = [
        {
          name: 'Abuja Bespoke Native',
          img: '/product_img/pro1.png',
          reviews: 24,
          price: 25.75
        },
        {
          name: 'Abuja Bespoke Native',
          img: '/product_img/pro3.png',
          reviews: 21,
          price: 30.25
        },
        {
          name: 'Abuja Bespoke Native',
          img: '/product_img/pro5.png',
          reviews: 21,
          price: 35
        },
        {
          name: 'Abuja Bespoke Native',
          img: '/product_img/pro6.png',
          reviews: 21,
          price: 32.5
        },
        {
          name: 'Abuja Bespoke Native',
          img: '/product_img/pro7.png',
          reviews: 21,
          price: 40
        },
        {
          name: 'Abuja Bespoke Native',
          img: '/product_img/pro8.png',
          reviews: 21,
          price: 40.5
        },
        // {
        //   name: 'Abuja Bespoke Native',
        //   img: '/product_img/pro9.png',
        //   reviews: 21,
        //   price: 38.25
        // },
      ]
  return (
    <Box>
        <Hero/>
        <Banner/>
        <ProductsContext.Provider value={products}>
            <LatestProduct products={products}/>
        </ProductsContext.Provider>
        <About/>
        <Purchase/>
    </Box>
  )
}
