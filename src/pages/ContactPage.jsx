import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaClock, FaFacebookF, FaLinkedinIn, FaLocationPin, FaPhone, FaTwitter } from 'react-icons/fa6'
import { RiInstagramLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <Box>
      <Flex height={'50vh'} bgImg={'/bg1.jpg'} bgPos={'center'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
        <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} flexWrap={'wrap'} color={'white'} fontWeight={400} fontSize={17} gap={3}>
            <Box width={'100%'}>
                <Text fontWeight={500} fontSize={25} color={'blue.500'} textAlign={'center'}>CONTACT US</Text>
                <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 45, base: 30}} mt={3}>LET'S US GET IN TOUCH</Heading>
            </Box>
        </Flex>
      </Flex>
      <Box mt={12} textAlign={'center'} borderBottomWidth={2} borderColor={'gray.600'} pb={5}>
        <Heading textAlign={'center'} fontWeight={400} fontSize={28}>Our Location On Maps</Heading>
      </Box>
      <Flex justifyContent={'center'} flexWrap={'wrap'} gap={6} mt={14}>
        <Box width={{md:'45%', base: '100%'}} height={'100%'} px={{md: 0, base: 5}}>
          <iframe width={'100%'} style={{height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.467927614716!2d3.524071474081166!3d6.588611922405158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee4740bd527b%3A0xb19235da2044f4d9!2s1%20Akin%20Ogunlewe%20Rd%2C%20Ikorodu%2C%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1721227419085!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        <Box width={{md:'45%', base: '100%'}}>
            <Text fontWeight={500} fontSize={18} color={'blue.500'} mb={6}>About our office</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.
            </Text>
            <Text my={5}>
              Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.
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
      <Box width={{md:'60%', base: '100%'}} mx={'auto'} mt={14} p={{md: 0, base: 5}}>
          <form>
              <Flex flexWrap={'wrap'} gap={5}>
                  <input type="text" className='md:w-[47%] w-[100%] p-3 bg-slate-800 rounded-md font-medium text-white outline-none' placeholder='Full name'/>
                  <input type="email" className='md:w-[47%] w-[100%] p-3 bg-slate-800 rounded-md font-medium text-white outline-none' placeholder='Example@gmail.com'/>
              </Flex>
              <Flex flexWrap={'wrap'} gap={5} mt={8}>
                  <input type="tel" className='md:w-[47%] w-[100%] p-3 bg-slate-800 rounded-md font-medium text-white outline-none' placeholder='Phone'/>
                  <input type="text" className='md:w-[47%] w-[100%] p-3 bg-slate-800 rounded-md font-medium text-white outline-none' placeholder='subject'/>
              </Flex>
              <textarea name="" id="" className='w-full p-4 bg-slate-800 rounded-md font-medium text-white outline-none mt-10 h-[200px]' placeholder='Write Your Message Here...'></textarea>
              <Flex justifyContent={{md: 'space-between', base: 'center'}} flexWrap={'wrap'} alignItems={'center'} mt={5}>
                  <Button py={'25px'} width={'200px'} bg={'gray.700'} color={'white'} rounded={3} _hover={{bg: 'blue.400'}}>Send Message</Button>
                  <Text color={'gray.500'}>(We will Recieve Your Message)</Text>
              </Flex>
            </form>
        </Box>
      <Flex mt={'10vh'} flexWrap={'wrap'} gap={5} justifyContent={'center'} maxW={{md: '90%', base: '100%'}} mx={'auto'} px={3}>
        <Flex alignItems={'center'} justifyContent={'center'} width={{md:'30%', base: '97%'}} color={'white'} rounded={4} p={10} gap={4} className='bg-slate-800'>
            <FaPhone className='text-4xl'/>
            <Stack fontWeight={500}>
                <Link to={'tel:+23447594667'}>(+234)-4759-4667</Link>
                <Link to={'mailto:info@company.com'}>info@company.com</Link>
            </Stack>
        </Flex>
        <Flex alignItems={'center'} justifyContent={'center'} width={{md:'30%', base: '97%'}} color={'white'} rounded={4} p={10} gap={4} className='bg-slate-800'>
            <FaLocationPin className='text-4xl'/>
            <Box>
                <Text fontWeight={500} fontSize={20}>1 Akin Ogunlewe Road</Text>
                <Text fontWeight={400} fontSize={16}>Ikorodu, Lagos, Nigeria</Text>
            </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
