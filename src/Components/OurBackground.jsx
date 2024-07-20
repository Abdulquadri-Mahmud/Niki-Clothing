import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export default function OurBackground() {
  return (
    <Box maxW={{md: '90%', base: '97%'}} mx={'auto'} mb={'5vh'} px={{md: 5, base: 3}}>
        <Box textAlign={'center'} borderBottomWidth={2} borderColor={'gray.600'} pb={5}>
            <Heading textAlign={'start'} fontWeight={400} fontSize={28}>Our Background</Heading>
        </Box>
        <Flex justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} mt={14}>
          <Box width={{md: '45%', base: '100%'}} mt={{md: 0, base: 0}}>
            <Image width={'100%'} src='/bg1.jpg'/>
          </Box>
          <Box width={{md: '46%', base: '100%'}}>
            <Text fontWeight={500} fontSize={18} bg={'blue.500'} width={'280px'} p={2}>Who we are & What we do?</Text>
            <Text mt={6} fontSize={14}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Text>
            <Text mt={6} fontSize={14}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.
            </Text>
            <Flex gap={3} mt={8}>
              <Flex justifyContent={'center'} alignItems={'center'} boxSize={50} color={'white'} bg={'gray.700'} rounded={3} >
                <FaFacebookF/>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'} boxSize={50} color={'white'} bg={'gray.700'} rounded={3} >
                <FaTwitter/>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'} boxSize={50} color={'white'} bg={'gray.700'} rounded={3} >
                <RiInstagramLine/>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'} boxSize={50} color={'white'} bg={'gray.700'} rounded={3} >
                <FaLinkedinIn/>
              </Flex>
            </Flex>
          </Box>
        </Flex>
    </Box>
  )
}
