import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  Text,
  Flex,
  useColorModeValue,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'

// Chakra-compatible motion div
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

export default function Contact() {
  const cardBg = useColorModeValue('white', 'gray.800')
  const sectionBg = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box py={20} px={6} id="contact" bg={sectionBg}>
      <Heading size="xl" mb={10} textAlign="center">
        Contact Me
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW="6xl"
        mx="auto"
        gap={12}
      >
        {/* Animated Contact Form */}
        <MotionBox
          flex={1}
          p={8}
          bg={cardBg}
          rounded="xl"
          shadow="lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 } as any}
        >
          <VStack spacing={5}>
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" type="email" />
            <Textarea placeholder="Your Message" rows={6} />
            <Button colorScheme="teal" alignSelf="flex-start">
              Send Message
            </Button>
          </VStack>
        </MotionBox>

        {/* Animated Contact Info */}
        <MotionBox
          flex={1}
          mt={{ base: 10, md: 0 }}
          p={8}
          bg={cardBg}
          rounded="xl"
          shadow="lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 } as any } 
        >
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Let's connect
          </Text>
          <Text fontSize="md" mb={3}>
            <strong>Email:</strong> adeigbeademola03@gmail.com
          </Text>
          <Text fontSize="md" mb={3}>
            <strong>Phone:</strong> 08022767313
          </Text>
          <Text fontSize="md">
            <strong>Location:</strong> Lagos, Nigeria
          </Text>
        </MotionBox>
      </Flex>
    </Box>
  )
}
