// components/About.tsx

import { Box, Heading, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <Box id="about" py={16}>
      <Heading size="xl" mb={6} className="animate-fadeIn">
        About Me
      </Heading>
      <Text fontSize="md" color="gray.700" _dark={{ color: 'gray.300' }} maxW="3xl">
        I’m a self-taught developer with experience in building responsive websites using 
        modern JavaScript frameworks like React and Next.js. I love combining clean UI 
        design with robust functionality to deliver compelling user experiences.
      </Text>
    </Box>
  )
}
