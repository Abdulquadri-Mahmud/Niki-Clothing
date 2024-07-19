import React from 'react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Box,
} from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from 'react-icons/md'

export default function AboutList() {
  return (
    <Box mt={8}>
        <List spacing={3}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='blue.500' />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='blue.500' />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='blue.500' />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
        </List>
    </Box>
  )
}
