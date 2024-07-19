import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

import bg1 from '/bg1.jpg';
import bg2 from '/bg2.jpg';
import bg3 from '/bg3.jpg';

import Header from './Header';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box top={{md: '45vh', base: ''}} className={className}
        style={{ ...style, display: "block", borderRadius: '50%',
             right: '2vh'}}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box top={{md: '45vh', base: ''}} className={className}
        style={{ ...style, display: "block", torderRadius: '50%',
         left: '2vh', zIndex: '1'}}
        onClick={onClick}/>
    );
}

export default function Hero() {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

  return (
    <Box height={{md:'90vh', base: '100vh'}}>
        <Slider {...settings}>
            <Flex height={{md:'90vh', base: '100vh'}} bgImg={`url(${bg3})`} bgPos={'top'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Flex justifyContent={'center'} alignItems={'center'} height={'100%'} width={'full'}>
                    <Box width={{md: '50%', base: '95%'}}>
                        <Heading textAlign={'center'} pb={4} fontWeight={500} fontSize={{md: 30, base: 25}} color={'blue.500'}>BEST OFFER</Heading>
                        <Heading textAlign={'center'} pb={4}  fontWeight={500} fontSize={{md: 50, base: 30}} color={'white'}>NEW ARRIVAL ON SALE</Heading>
                        <Text textAlign={'center'} color={'white'} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut qui, deleniti asperiores dicta placeat quos animi rem quae quasi, officiis, ad non! Error, aliquam vero sint vitae dolor incidunt.</Text>
                        <Flex justifyContent={'center'} mt={6} gap={5} width={'100%'}>
                            <Button rounded={3} bg={'blue.500'} color={'white'}>Shop Now</Button>
                            <Button rounded={3} bg={'black'} color={'white'}>Read More</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Flex height={{md:'90vh', base: '100vh'}} bgImg={`url(${bg1})`} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Flex justifyContent={'center'} alignItems={'center'} height={'100%'} width={'full'}>
                    <Box width={{md: '50%', base: '95%'}}>
                        <Heading textAlign={'center'} pb={4} fontWeight={500} fontSize={{md: 30, base: 25}} color={'blue.500'}>BEST OFFER</Heading>
                        <Heading textAlign={'center'} pb={4}  fontWeight={500} fontSize={{md: 50, base: 30}} color={'white'}>NEW ARRIVAL ON SALE</Heading>
                        <Text textAlign={'center'} color={'white'} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut qui, deleniti asperiores dicta placeat quos animi rem quae quasi, officiis, ad non! Error, aliquam vero sint vitae dolor incidunt.</Text>
                        <Flex justifyContent={'center'} mt={6} gap={5} width={'100%'}>
                            <Button rounded={3} bg={'blue.500'} color={'white'}>Shop Now</Button>
                            <Button rounded={3} bg={'black'} color={'white'}>Read More</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} height={{md:'90vh', base: '100vh'}} bgImg={`url(${bg2})`} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Flex justifyContent={'center'} alignItems={'center'} height={'100%'} width={'full'}>
                    <Box width={{md: '50%', base: '95%'}}>
                        <Heading textAlign={'center'} pb={4} fontWeight={500} fontSize={{md: 30, base: 25}} color={'blue.500'}>BEST OFFER</Heading>
                        <Heading textAlign={'center'} pb={4}  fontWeight={500} fontSize={{md: 50, base: 30}} color={'white'}>GET uo to 30% Off <br /> New Arrival</Heading>
                        <Text textAlign={'center'} color={'white'} fontSize={14}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aut qui, deleniti asperiores dicta placeat quos animi rem quae quasi, officiis, ad non! Error, aliquam vero sint vitae dolor incidunt.</Text>
                        <Flex justifyContent={'center'} mt={6} gap={5} width={'100%'}>
                            <Button rounded={3} bg={'blue.500'} color={'white'}>Shop Now</Button>
                            <Button rounded={3} bg={'black'} color={'white'}>Read More</Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Slider>
    </Box>
  )
}
