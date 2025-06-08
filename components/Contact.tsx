// components/Contact.tsx

import { Box, Heading, Input, Textarea, Button, VStack } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Box id="contact" py={16}>
      <Heading size="xl" mb={6} className="animate-fadeIn">
        Get In Touch
      </Heading>
      <VStack spacing={4} maxW="lg">
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" type="email" />
        <Textarea placeholder="Your Message" />
        <Button colorScheme="teal">Send Message</Button>
      </VStack>
    </Box>
  )
}
