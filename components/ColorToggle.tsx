import { useColorMode, Button } from '@chakra-ui/react'

export const ColorToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode} size="sm">
      {colorMode === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  )
}
