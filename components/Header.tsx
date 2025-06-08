// components/Header.tsx
import { Flex, Heading, Spacer } from '@chakra-ui/react'
import { ColorToggle } from './ColorToggle'

export default function Header() {
  return (
    <Flex as="header" p={4} align="center" bg="gray.100" _dark={{ bg: 'gray.800' }}>
      <Heading size="md">My Portfolio</Heading>
      <Spacer />
      <ColorToggle />
    </Flex>
  )
}
