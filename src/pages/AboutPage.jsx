import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import About from '../Components/About'
import OurBackground from '../Components/OurBackground'
import { IoMdSettings } from "react-icons/io";


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box top={{md: '45vh', base: ''}} bg={'#1e293b'} boxSize={33} _hover={{bg: 'blue.500'}} pl={1.5} pt={1.5} className={className}
        style={{ ...style, display: "none", borderRadius: '50%',
             right: '2vh'}}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box top={{md: '45vh', base: ''}} bg={' #1e293b'} boxSize={33} _hover={{bg: 'blue.500'}} pl={1.5} pt={1.5} className={className}
        style={{ ...style, display: "none", torderRadius: '50%', borderRadius: '50%',
         left: '2vh', zIndex: '1'}}
        onClick={onClick}/>
    );
}

export default function AboutPage() {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
        ]
    };
  return (
    <Box>
        <Flex height={'50vh'} bgImg={'/bg1.jpg'} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
            <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} flexWrap={'wrap'} color={'white'} fontWeight={400} fontSize={17} gap={3}>
                <Box width={'100%'}>
                    <Text fontWeight={500} fontSize={25} color={'blue.500'} textAlign={'center'}>ABOUT US</Text>
                    <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 45, base: 30}} mt={3}>OUR COMPANY</Heading>
                </Box>
            </Flex>
        </Flex>
        <Box my={'10vh'}>
            <OurBackground/>
        </Box>
        <Box height={{md: '80vh', base: '100%'}} bgImg={'/bg3.jpg'} bgAttachment={'fixed'} bgPos={'top'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
            <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'} py={10} flexWrap={'wrap'} color={'white'} fontWeight={400} fontSize={17} gap={3}>
                <Box width={{md: '300px', base: '350px'}} py={6} bg={'white'} height={'100%'}>
                    <Flex mt={7} justifyContent={'center'}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'100px'} rounded={'full'} height={'100px'} bg={'blue.500'}>
                            <IoMdSettings className='text-3xl'/>
                        </Flex>
                    </Flex>
                    <Text fontWeight={500} fontSize={17} textAlign={'center'} color={'blue.500'} mt={7}>Product Management</Text>
                    <Text color={'gray.600'} fontSize={14} p={2} mt={4} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nihil hic. Ex excepturi iure, amet doloribus nulla, expedita deserunt cumque doloremque, dolores praesentium eos molestiae. Expedita facilis magni libero reiciendis.
                    </Text>
                    <Flex justifyContent={'center'} my={3}>
                        <Button rounded={3} bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'}>Read More</Button>
                    </Flex>
                </Box>
                <Box width={{md: '300px', base: '350px'}} py={6} bg={'white'} height={'100%'}>
                    <Flex mt={7} justifyContent={'center'}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'100px'} rounded={'full'} height={'100px'} bg={'blue.500'}>
                            <IoMdSettings className='text-3xl'/>
                        </Flex>
                    </Flex>
                    <Text fontWeight={500} fontSize={17} textAlign={'center'} color={'blue.500'} mt={7}>Customer Relations</Text>
                    <Text color={'gray.600'} fontSize={14} p={2} mt={4} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nihil hic. Ex excepturi iure, amet doloribus nulla, expedita deserunt cumque doloremque, dolores praesentium eos molestiae. Expedita facilis magni libero reiciendis.
                    </Text>
                    <Flex justifyContent={'center'} my={3}>
                        <Button rounded={3} bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'}>Details</Button>
                    </Flex>
                </Box>
                <Box width={{md: '300px', base: '350px'}} py={6} bg={'white'} height={'100%'}>
                    <Flex mt={7} justifyContent={'center'}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'100px'} rounded={'full'} height={'100px'} bg={'blue.500'}>
                            <IoMdSettings className='text-3xl'/>
                        </Flex>
                    </Flex>
                    <Text fontWeight={500} fontSize={17} textAlign={'center'} color={'blue.500'} mt={7}>Customer Relations</Text>
                    <Text color={'gray.600'} fontSize={14} p={2} mt={4} textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nihil hic. Ex excepturi iure, amet doloribus nulla, expedita deserunt cumque doloremque, dolores praesentium eos molestiae. Expedita facilis magni libero reiciendis.
                    </Text>
                    <Flex justifyContent={'center'} my={3}>
                        <Button rounded={3} bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'}>Read More</Button>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        <Box maxW={{md: '80%', base: '97%'}} mx={'auto'} mt={'10vh'} px={{md: 5, base: 3}}>
            <Box textAlign={'center'} borderBottomWidth={2} borderColor={'gray.600'} pb={5}>
                <Heading textAlign={'start'} fontWeight={400} fontSize={28}>Happy Partners</Heading>
            </Box>
            <Box mt={10}>
                <Slider {...settings} className=''>
                    <Box m={1}>
                        <Box>
                            <Image src='/client.png' alt='client'/>
                        </Box>
                    </Box>
                    <Box m={1}>
                        <Box>
                            <Image src='/client.png' alt='client'/>
                        </Box>
                    </Box>
                    <Box m={1}>
                        <Box>
                            <Image src='/client.png' alt='client'/>
                        </Box>
                    </Box>
                    <Box m={1}>
                        <Box>
                            <Image src='/client.png' alt='client'/>
                        </Box>
                    </Box>
                </Slider>
            </Box>
        </Box>
    </Box>
  )
}
