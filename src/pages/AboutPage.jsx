import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import About from '../Components/About'
import OurBackground from '../Components/OurBackground'
import { IoMdSettings } from "react-icons/io";

export default function AboutPage() {
  return (
    <Box>
        <Flex height={'50vh'} bgImg={'/bg1.jpg'} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
            <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} flexWrap={'wrap'} color={'white'} fontWeight={400} fontSize={17} gap={3}>
                <Box width={'100%'}>
                    <Text fontWeight={500} fontSize={25} color={'blue.500'} textAlign={'center'}>ABOUT US</Text>
                    <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 45, base: 30}} mt={3}>Get To Know About Us</Heading>
                </Box>
            </Flex>
        </Flex>
        <Box my={'15vh'}>
            <OurBackground/>
        </Box>
        <Box height={'80vh'} bgImg={'/bg3.jpg'} bgAttachment={'fixed'} bgPos={'top'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
            <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'} py={10} flexWrap={'wrap'} color={'white'} fontWeight={400} fontSize={17} gap={3}>
                <Box width={{md: '300px', base: '350px'}} bg={'white'} height={'100%'}>
                    <Flex mt={12} justifyContent={'center'}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'100px'} rounded={'full'} height={'100px'} bg={'blue.500'}>
                            <IoMdSettings className='text-3xl'/>
                        </Flex>
                    </Flex>
                    <Text fontWeight={500} fontSize={17} textAlign={'center'} color={'blue.500'} mt={7}>Product Management</Text>
                    <Text color={'gray.600'} fontSize={14} p={2} mt={4} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nihil hic. Ex excepturi iure, amet doloribus nulla, expedita deserunt cumque doloremque, dolores praesentium eos molestiae. Expedita facilis magni libero reiciendis.
                    </Text>
                    <Flex justifyContent={'center'} mt={3}>
                        <Button rounded={3} bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'}>Read More</Button>
                    </Flex>
                </Box>
                <Box width={{md: '300px', base: '350px'}} bg={'white'} height={'100%'}>
                    <Flex mt={12} justifyContent={'center'}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'100px'} rounded={'full'} height={'100px'} bg={'blue.500'}>
                            <IoMdSettings className='text-3xl'/>
                        </Flex>
                    </Flex>
                    <Text fontWeight={500} fontSize={17} textAlign={'center'} color={'blue.500'} mt={7}>Customer Relations</Text>
                    <Text color={'gray.600'} fontSize={14} p={2} mt={4} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nihil hic. Ex excepturi iure, amet doloribus nulla, expedita deserunt cumque doloremque, dolores praesentium eos molestiae. Expedita facilis magni libero reiciendis.
                    </Text>
                    <Flex justifyContent={'center'} mt={3}>
                        <Button rounded={3} bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'}>Read More</Button>
                    </Flex>
                </Box>
                <Box width={{md: '300px', base: '350px'}} bg={'white'} height={'100%'}>
                    <Flex mt={12} justifyContent={'center'}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'100px'} rounded={'full'} height={'100px'} bg={'blue.500'}>
                            <IoMdSettings className='text-3xl'/>
                        </Flex>
                    </Flex>
                    <Text fontWeight={500} fontSize={17} textAlign={'center'} color={'blue.500'} mt={7}>Customer Relations</Text>
                    <Text color={'gray.600'} fontSize={14} p={2} mt={4} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nihil hic. Ex excepturi iure, amet doloribus nulla, expedita deserunt cumque doloremque, dolores praesentium eos molestiae. Expedita facilis magni libero reiciendis.
                    </Text>
                    <Flex justifyContent={'center'} mt={3}>
                        <Button rounded={3} bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'}>Read More</Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}
