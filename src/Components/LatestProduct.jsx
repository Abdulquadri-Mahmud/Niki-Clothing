import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { ProductsContext } from '../pages/Home';

export default function LatestProduct() {
  const products = useContext(ProductsContext);

  return (
    <Box maxW={{'2xl': '80%',md: '100%', base: '97%'}} mx={'auto'} my={'10vh'} px={{md: 5, base: 3}}>
      <Flex alignItems={{md: 'center', base: 'start'}} justifyContent={'space-between'} 
      flexDir={{md: 'row', base: 'column'}} borderBottomWidth={2} borderColor={'gray.600'}
      pb={5}>
        <Heading fontWeight={500} fontSize={28}>Latest Products</Heading>
        <Link to={'products'} className='font-medium text-sm pl-5 text-blue-500'>View All Products {'>'}</Link>
      </Flex>
      <Flex justifyContent={'center'} gap={5} flexWrap={'wrap'} mt={10}>
        {
          products.map((pro) => (
            <Box width={{md: '300px', base: '350px'}} rounded={5} bg={'gray.700'} color={'white'}>
              <Flex justifyContent={'center'} width={'100%'} height={'250px'}>
                <Image maxW={'100%'} height={'100%'} src={pro.img}/>
              </Flex>
              <Box mt={5} p={5}>
                <Flex justifyContent={'space-between'} alignItems={'center'} mb={3}>
                  <Heading fontSize={17} fontWeight={500}>{pro.name}</Heading>
                  <Text fontWeight={500}>${pro.price}</Text>
                </Flex>
                <Text fontWeight={500} isTruncated fontSize={14}>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</Text>
                <Flex alignItems={'center'} justifyContent={'space-between'} mt={3}>
                  <Flex alignItems={'center'}>
                    <IoStar className='text-blue-500'/>
                    <IoStar className='text-blue-500'/>
                    <IoStar className='text-blue-500'/>
                    <IoStar className='text-blue-500'/>
                    <IoStar className='text-gray-500'/>
                  </Flex>
                  <Box>
                    <Text fontSize={14} fontWeight={500} color={'blue.500'}>Reviews ({pro.reviews})</Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))
        }
      </Flex>
    </Box>
  )
}
