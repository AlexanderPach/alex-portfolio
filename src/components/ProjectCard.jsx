import { Box } from "@chakra-ui/react"

function ProjectCard({data}) {
    return (
        <Box>
            <div>{data.project_name}</div>
        </Box>
    )
}

export default ProjectCard