import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import MotionBox from '../components/MotionBox';

const About = () => {
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box py={10} px={6}>
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 } as any}
        viewport={{ once: true }}
        textAlign="center"
        mb={8}
      >
        <Heading size="xl" mb={4}>About Me</Heading>
        <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
          I am Adeboss, a passionate web developer and product designer based in Nigeria.
          With a background in Computer Science and strong design sensibility, I build modern websites and engaging digital experiences.
        </Text>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {['UI/UX Design', 'Web Development', 'Graphic Design'].map((title, index) => (
          <MotionBox
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 } as any}
            viewport={{ once: true }}
            p={5}
            bg={useColorModeValue('gray.100', 'gray.700')}
            borderRadius="md"
            shadow="md"
          >
            <Heading size="md" mb={2}>{title}</Heading>
            <Text fontSize="sm">
              {title === 'UI/UX Design' && 'I create clean, intuitive, and engaging user interfaces that connect users with digital products.'}
              {title === 'Web Development' && 'Full-stack development for responsive, scalable websites using modern technologies like Next.js and Tailwind.'}
              {title === 'Graphic Design' && 'Experienced in branding and visual design using tools like Figma and Adobe Suite.'}
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default About;
