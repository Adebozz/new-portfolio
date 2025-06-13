import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  Button,
  HStack,
  useColorModeValue,
  Link,
  chakra,
  shouldForwardProp
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { isValidMotionProp, motion } from 'framer-motion';

// Wrap Framer Motion with Chakra
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const projectData = [
  {
    title: 'E-commerce Website',
    description:
      'An e-commerce site built with Next.js, Tailwind CSS, React.js, and PostgreSQL.',
    image: '/images/ecommerce-preview.png',
    github: 'https://github.com/yourusername/ecommerce-site',
    demo: 'https://ecommerce-site-demo.vercel.app',
  },
  {
    title: 'PDF Converter',
    description:
      'A PDF file converter built with React.js, Tailwind CSS, and MongoDB.',
    image: '/images/pdf-converter-preview.png',
    github: 'https://github.com/yourusername/pdf-converter',
    demo: 'https://pdf-converter-demo.vercel.app',
  },
  {
    title: 'Food Delivery App',
    description:
      'An online food ordering platform built using React.js, Tailwind CSS, REST API, and MongoDB.',
    image: '/images/food-delivery-preview.png',
    github: 'https://github.com/yourusername/food-delivery',
    demo: 'https://food-delivery-demo.vercel.app',
  },
];

const Projects = () => {
  const cardBg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box py={10} px={4}>
      <Heading size="xl" mb={8} textAlign="center">
        Projects
      </Heading>

      <Text mb={10} textAlign="center" fontSize="lg" maxW="3xl" mx="auto">
        Explore some of my featured projects including frontend and full-stack applications.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {projectData.map((project, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 } as any}
            viewport={{ once: true }}
            bg={cardBg}
            p={5}
            borderRadius="lg"
            shadow="md"
            _hover={{ transform: 'scale(1.02)', shadow: 'lg' }}
          >
            <VStack spacing={4} align="start">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                borderRadius="md"
                objectFit="cover"
                w="100%"
                h="160px"
              />
              <Heading size="md">{project.title}</Heading>
              <Text>{project.description}</Text>
              <HStack spacing={4}>
                <Link href={project.demo} isExternal>
                  <Button size="sm" colorScheme="blue" leftIcon={<FaExternalLinkAlt />}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={project.github} isExternal>
                  <Button size="sm" variant="outline" leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </Link>
              </HStack>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
