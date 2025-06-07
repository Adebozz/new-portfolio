// components/Hero.tsx
import { Box, Heading, Text, Button, useColorMode } from '@chakra-ui/react'

const Hero = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      className="home-content"
      px={8}
      py={16}
      textAlign="left"
      bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}
    >
      <Heading fontSize="6xl">Hi, I'm Your Name</Heading>
      <Text mt={4}>I'm a web developer building beautiful UIs</Text>
      <Button mt={6} colorScheme="teal">Explore More</Button>
    </Box>
  )
}

export default Hero
