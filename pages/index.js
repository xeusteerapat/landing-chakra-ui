import { useState } from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const MenuItems = ({ children }) => {
  return (
    <Text mt={{ base: 4, md: 0 }} mr={6} display='block' fontSize='2xl'>
      {children}
    </Text>
  );
};

export default function Home(props) {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => setShowMenu(!showMenu);
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg='blue.300'
      color='white'
      {...props}
    >
      {/* menu item list */}
      <Flex align='center' mr={6}>
        <Heading as='h1' size='lg'>
          Achilles TP
        </Heading>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill='white'
          width='12px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>
      <Box
        display={{ sm: showMenu ? 'block' : 'none', md: 'flex' }}
        width={{
          sm: 'full',
          md: 'auto',
        }}
        alignItems='center'
        flexGrow={1}
      >
        <MenuItems>Blog</MenuItems>
        <MenuItems>About</MenuItems>
        <MenuItems>Contact</MenuItems>
      </Box>
    </Flex>
  );
}
