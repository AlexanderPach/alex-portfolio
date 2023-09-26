import { Box, ChakraProvider } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects';
import style from '../projects/style.css'

function ProjectPage() {
    return (
        <ChakraProvider>
            <Box bg={'blue.100'}>
                <NavBar />
                <div className="project-container">
                    <Projects/>
                </div>
            </Box>
    </ChakraProvider>
    )
}

export default ProjectPage;