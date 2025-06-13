// pages/index.tsx

import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import BackToTopButton from '@/components/BackToTopButton'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'


export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio built with Next.js, Chakra UI, and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

     
      <Box as="main" bg="gray.50" _dark={{ bg: 'gray.900' }} minH="100vh">
        {/* Top Navbar/Header with Color Toggle */}
        <Header />
        
        {/* Main Page Content */}
        <Container maxW="7xl" px={4} py={10} position="relative" zIndex={1}>
          
          <section id="hero" className="animate-fadeIn duration-1000">
            <Hero />
          </section>

          <section id="about" className="mt-20 animate-fadeInUp duration-1000">
            <About />
          </section>

          <section id="skills" className="mt-20 animate-fadeInUp duration-1000">
            <Skills />
          </section>

          <section id="projects" className="mt-20 animate-fadeInUp duration-1000">
            <Projects />
          </section>

          <section id="contact" className="mt-20 animate-fadeInUp duration-1000">
            <Contact />
          </section>
          
        </Container>

        {/* Scroll to Top */}
        <BackToTopButton />
      </Box>
    </>
  )
}
