// components/BackToTopButton.tsx
import { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

export default function BackToTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return show ? (
    <Button
      position="fixed"
      bottom="6"
      right="6"
      zIndex="overlay"
      colorScheme="teal"
      onClick={scrollToTop}
    >
      <ArrowUpIcon />
    </Button>
  ) : null
}
