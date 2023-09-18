import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import { Routes, Route } from 'react-router-dom'
import LinkList from '@/components/LinkList'
import { Box, ChakraProvider } from '@chakra-ui/react'
import HomePage from '@/components/HomePage'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ChakraProvider>
    <Box bgColor={'blue.100'}>
        <NavBar />
        <HomePage />
    </Box>
    </ChakraProvider>
  )
}
