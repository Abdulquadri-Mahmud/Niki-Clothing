import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Banner() {
  return (
    <Box mt={16} maxW={{md: '90%', base: '97%'}} mx={'auto'} className='grid gap-5 md:grid-cols-3 grid-cols-1 place-items-center'>
        <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.700'} p={3} position={'relative'}>
            <Image w={'100%'} src='/men.jpg' alt='banner'/>
            <Flex justifyContent={'center'} alignItems={'center'} width={'120px'} bg={'gray.100'} position={'absolute'} p={2}>
                <Text color={'black'} fontWeight={500}>Men's Wear</Text>
            </Flex>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.700'} p={3} position={'relative'}>
            <Image w={'100%'} src='/women.jpg' alt='banner'/>
            <Flex justifyContent={'center'} alignItems={'center'} width={'140px'} bg={'gray.100'} position={'absolute'} p={2}>
                <Text color={'black'} fontWeight={500}>Women's Wear</Text>
            </Flex>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.700'} p={3} position={'relative'}>
            <Image w={'100%'} src='/kid.jpg' alt='banner'/>
            <Flex justifyContent={'center'} alignItems={'center'} width={'120px'} bg={'gray.100'} position={'absolute'} p={2}>
                <Text color={'black'} fontWeight={500}>Kid's Wear</Text>
            </Flex>
        </Flex>
    </Box>
  )
}
