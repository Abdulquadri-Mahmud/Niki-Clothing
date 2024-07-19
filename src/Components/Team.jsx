import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Team() {
  return (
    <Box maxW={{md: '90%', base: '97%'}} mx={'auto'} mb={'10vh'} px={{md: 5, base: 3}}>
        <Box textAlign={'center'} borderBottomWidth={2} borderColor={'gray.600'} pb={5}>
            <Heading textAlign={'start'} fontWeight={400} fontSize={28}>Our Team Members</Heading>
        </Box>
        <Box width={{md: '300px', base: '350px'}} rounded={5} bg={'gray.700'} color={'white'}>
            <Flex justifyContent={'center'} width={'100%'} height={'250px'}>
                <Image maxW={'100%'} height={'100%'} src={pro.img}/>
            </Flex>
            <Box mt={5} p={5}>
                <Flex justifyContent={'space-between'} alignItems={'center'} mb={3}>
                    <Heading fontSize={17} fontWeight={500}>{pro.name}</Heading>
                    <Text fontWeight={500}>${pro.price}</Text>
                </Flex>
                <Text>Jhonny Willaim</Text>
                <Text>CO</Text>
                <Text fontWeight={500} isTruncated fontSize={14}>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</Text>
            </Box>
        </Box>
    </Box>
  )
}
