import { Flex, Box, Text } from '@chakra-ui/react'
import { ColorToggle } from './ColorToggle'

const Header = () => {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      px={6}
      py={4}
      bg="transparent"
      position="absolute"
      w="100%"
    >
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          MyLogo
        </Text>
      </Box>

      <ColorToggle />
    </Flex>
  )
}

export default Header
