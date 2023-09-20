`use client`;
import HomePage from '@/components/HomePage';
import NavBar from '@/components/NavBar'
import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react';

export default function Home() {
  return (
    <ChakraProvider>
    <Box bgColor={'blue.100'}>
        <NavBar />
        <HomePage/>
    </Box>
    </ChakraProvider>
  )
}
