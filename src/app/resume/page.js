import { Box, ChakraProvider, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
import Link from 'next/link';

function ResumePage() {
    return (
        <ChakraProvider>
            <Box bg={'blue.100'}>
                <NavBar />
                <Box>
                <Card align='center'>
                    <CardHeader>
                        <Heading size='md'> In Progress</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Page is currently being worked on</Text>
                    </CardBody>
                    <CardFooter>
                            <Button colorScheme='blue'><Link href={'/'}>Go Home</Link></Button>
                    </CardFooter>
                </Card>
                </Box>
            </Box>
        </ChakraProvider>
    )
}

export default ResumePage;