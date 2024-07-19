import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Box>
      <Box borderBottomWidth={1} borderColor={'gray.700'} pb={10}></Box>
      <Text fontSize={13} textAlign={'center'} py={10}>COPYRIGHT &copy;2024 NIKI STICHES CO.LTD. DESIGNED: ADEYEMICODES</Text>
    </Box>
  )
}
