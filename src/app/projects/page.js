import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects';

function ProjectPage() {
    return (
        <ChakraProvider>
            <Box bgColor={'blue.100'}>
                <NavBar />
                <Projects/>
            </Box>
    </ChakraProvider>
    )
}

export default ProjectPage;