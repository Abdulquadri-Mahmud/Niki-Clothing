import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { IoStar } from 'react-icons/io5'
import { ProductsContext } from '../pages/OurProducts';

export default function Products() {
  const products = useContext(ProductsContext);

  return (
    <Box mt={'10vh'}>
        <Flex justifyContent={'center'} gap={4}>
            <Box>
                <Text fontWeight={500} fontSize={14} color={'blue.500'} _hover={{color: 'blue.500'}}>ALL PRODUCTS</Text>
            </Box>
            <Box>
                <Text fontWeight={500} fontSize={14} _hover={{color: 'blue.500'}}>FEATURED</Text>
            </Box>
            <Box>
                <Text fontWeight={500} fontSize={14} _hover={{color: 'blue.500'}}>FLASH DEALS</Text>
            </Box>
        </Flex>
    <Flex justifyContent={'center'} gap={5} flexWrap={'wrap'} mt={10}>
        {
          products.map((pro) => (
            <Box width={{md: '300px', base: '350px'}} rounded={5} color={'white'} className='bg-slate-800 shadow-lg'>
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
