import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';

export default function Header() {
  return (
    <>
        <Box top={0} position={'sticky'} zIndex={100} shadow={'md'} className='bg-slate-900'>
            <Flex justifyContent={'space-between'} alignItems={'center'} p={5} px={{md: 6, base: 2}}>
                <Flex alignItems={'center'} gap={1}>
                    <Text fontWeight={700} fontSize={23} color={'white'} className='uppercase'>Niki<span className="text-blue-500"> Clothing</span></Text>
                </Flex>
                <Box display={{md: 'block', base: 'none'}} className='menu' position={'relative'}>
                    <Link to={'/'} className='font-medium py-1 text-md text-white hover:text-blue-500 duration-150 px-2'>Home</Link>
                    <Link to={'/about'} className='font-medium py-1 text-md text-white hover:text-blue-500 duration-150 px-2'>About Us</Link>
                    <Link to={'/products'} className='font-medium py-1 text-md text-white hover:text-blue-500 duration-150 px-2'>Our Products</Link>
                    <Link to={'/contact'} className='font-medium py-1 text-md text-white hover:text-blue-500 duration-150 px-2'>Contact Us</Link>
                </Box>
                <Box display={{md: 'block', base: 'none'}}>
                    <Button bg={'blue.500'} _hover={{bg: 'blue.600'}} rounded={3} color={'white'}>
                        <Link to={'/'}>Connect With Us</Link>
                    </Button>
                </Box>
                <Box display={{md: 'none', base: 'block'}}>
                    <Sidemenu/>
                </Box>
            </Flex>
        </Box>
    </>
  )
}