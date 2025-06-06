'use client';

import { Box, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box className="min-h-screen bg-blue-100 flex items-center justify-center">
      <Button colorScheme="teal" size="lg">
        Chakra Button
      </Button>
    </Box>
  );
}
