import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    useDisclosure,
    Button,
    Input,
    Flex,
    Image,
    Text,
    Stack,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoMdMenu } from "react-icons/io";

import { Link } from 'react-router-dom';

export default function Sidemenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();
    const [placement, setPlacement] = useState('top');

  return (
    <Box>
        <Button ref={btnRef} bg='transparent' _hover={{bg: 'transparent'}} onClick={onOpen}><IoMdMenu className='text-3xl text-white'/></Button>
        <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton borderWidth={2} borderColor={'black'}/>
            <DrawerHeader>
                <Flex alignItems={'center'} gap={1}>
                <Text fontWeight={700} fontSize={23} color={'black'} className='uppercase'>Niki<span className="text-blue-500"> Clothing</span></Text>
                </Flex>
            </DrawerHeader>
            <DrawerBody>
              <Stack my={10}>
                <Link to={'/'} className='font-medium py-1 text-md text-black hover:text-blue-500 duration-150 px-2'>Home</Link>
                <Link to={'/about'} className='font-medium py-1 text-md text-black hover:text-blue-500 duration-150 px-2'>About Us</Link>
                <Link to={'/products'} className='font-medium py-1 text-md text-black hover:text-blue-500 duration-150 px-2'>Our Products</Link>
                <Link to={'/contact'} className='font-medium py-1 text-md text-black hover:text-blue-500 duration-150 px-2'>Contact Us</Link>
              </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
