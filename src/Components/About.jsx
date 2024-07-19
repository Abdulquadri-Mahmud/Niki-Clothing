import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import AboutList from './AboutList'

export default function About() {
  return (
    <Box maxW={{md: '90%', base: '97%'}} mx={'auto'} mb={'10vh'} px={{md: 5, base: 3}}>
        <Box textAlign={'center'} borderBottomWidth={2} borderColor={'gray.600'} pb={5}>
            <Heading textAlign={'start'} fontWeight={400} fontSize={28}>About Niki Stiches</Heading>
            {/* <Link to={'/about'} className='text-center font-medium text-sm pl-5 text-blue-500'>Read More</Link> */}
        </Box>
        <Flex justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} mt={14}>
            <Box width={{md: '46%', base: '100%'}}>
                <Text fontWeight={500} fontSize={18} bg={'blue.500'} width={'280px'} p={2}>Looking for the best products?</Text>
                <Text mt={6} fontSize={14}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi dolorem dolore esse nobis temporibus provident expedita, cupiditate dicta obcaecati iste, veritatis velit, laudantium sint aliquid ipsum itaque fuga voluptatum.
                </Text>
                <Text mt={6} fontSize={14}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi dolorem dolore esse nobis temporibus provident expedita, cupiditate dicta obcaecati iste, veritatis velit, laudantium sint aliquid ipsum itaque fuga voluptatum.
                </Text>
                <AboutList/>
            </Box>
            <Box width={{md: '48%', base: '100%'}} mt={{md: 0, base: 8}}>
                <Image width={'100%'} src='/bg1.jpg'/>
            </Box>
        </Flex>
    </Box>
  )
}
