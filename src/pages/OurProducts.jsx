import React, { createContext } from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Products from '../Components/Products';

export const ProductsContext = createContext();

export default function OurProducts() {
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
  ]

  return (
    <Box>
      <Flex height={'50vh'} bgImg={'/bg1.jpg'} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
        <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} flexWrap={'wrap'} color={'white'} fontWeight={400} fontSize={17} gap={3}>
            <Box width={'100%'}>
                <Text fontWeight={500} fontSize={25} color={'blue.500'} textAlign={'center'}>NEW ARRIVAL</Text>
                <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 45, base: 30}} mt={3}>NIKI PRODUCTS</Heading>
            </Box>
        </Flex>
      </Flex>
      <Box>
        <ProductsContext.Provider value={products}>
          <Products products={products}/>
        </ProductsContext.Provider>
      </Box>
    </Box>
  )
}
