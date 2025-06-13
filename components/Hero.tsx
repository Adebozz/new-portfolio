// components/Hero.tsx

import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react'

export default function Hero() {
  return (
    <Box textAlign="center" py={20}>
      <Heading
        as="h1"
        size="2xl"
        mb={4}
        className="animate-fadeInUp duration-700"
      >
        Hello, I’m Adeboss 👋
      </Heading>
      <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }} mb={6}>
        A passionate web developer building beautiful and responsive web apps with modern tools.
      </Text>
      <Stack direction="row" justify="center" spacing={4}>
        <Button as="a" href="#projects" colorScheme="teal" variant="solid">
          View Projects
        </Button>
        <Button as="a" href="#contact" colorScheme="gray" variant="outline">
          Contact Me
        </Button>
      </Stack>
    </Box>
  )
}
