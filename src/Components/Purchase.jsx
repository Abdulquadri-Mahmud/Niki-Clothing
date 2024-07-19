import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Purchase() {
  return (
    <Box maxW={{md: '90%', base: '97%'}} mx={'auto'} mb={'10vh'} px={{md: 5, base: 3}} color={'black'}>
        <Box textAlign={'center'} borderBottomWidth={2} borderColor={'gray.600'} pb={5}></Box>
        <Flex alignItems={'center'} justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'} py={12} px={10} bg={'gray.100'} rounded={5} mt={10}>
            <Box width={{base: '100%', md: '50%'}}>
                <Heading fontWeight={500} fontSize={17}>Creative & Unique Sixteen Products</Heading>
                <Text fontWeight={400} mt={4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</Text>
            </Box>
            <Box mt={{base: 5}}>
                <Button bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'} rounded={3}>Purchase Now</Button>
            </Box>
        </Flex>
    </Box>
  )
}
