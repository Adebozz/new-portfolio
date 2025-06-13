import React from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';
import MotionBox from '../components/MotionBox';

const skills = [
  { name: 'JavaScript', image: '/images/jasp.jpg' },
  { name: 'PHP', image: '/images/PHP-logo.svg.png' },
  { name: 'HTML', image: '/images/icons8-html-5-480.png' },
  { name: 'CSS', image: '/images/icons8-css3-240.png' },
  { name: 'WordPress', image: '/images/Wordpress_Blue_logo.png' },
  { name: 'MySQL', image: '/images/sql.jpg' },
  { name: 'Figma', image: '/images/icons8-figma-512.png' },
  { name: 'Next.js', image: '/images/icons8-visual-studio-code-2019-480.png' },
  { name: 'Tailwind CSS', image: '/images/sql.jpg' },
  { name: 'TypeScript', image: '/images/typescript.png' },
  { name: 'Vercel', image: '/images/vercel.png' },
  { name: 'GitHub', image: '/images/github (1).png' }
];

const Skills = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box py={10} px={4} textAlign="center">
      <Heading size="xl" mb={10}>
        Skills
      </Heading>

      <Wrap spacing={6} justify="center">
        {skills.map((skill, index) => (
          <WrapItem key={index}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 } as any}
              viewport={{ once: true }}
              bg={bgColor}
              p={4}
              borderRadius="lg"
              shadow="md"
              w="120px"
              _hover={{ transform: 'scale(1.05)', shadow: 'lg' }}
            >
              <VStack spacing={2}>
                <Image src={skill.image} alt={skill.name} boxSize="60px" objectFit="contain" />
                <Text fontSize="sm" fontWeight="semibold">{skill.name.toUpperCase()}</Text>
              </VStack>
            </MotionBox>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Skills;
