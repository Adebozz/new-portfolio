import { Box, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box className="min-h-screen flex items-center justify-center bg-blue-100">
      <Button colorScheme="teal" size="lg">
        Hello from Chakra
      </Button>
    </Box>
  );
}
