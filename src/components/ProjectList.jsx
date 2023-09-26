"use client"

import projectData from "@/data/projectData"
import ProjectCard from "./ProjectCard"
import { Box, Card, CardHeader, Heading, Stack, CardBody, Divider, Text, CardFooter, ButtonGroup, Button} from "@chakra-ui/react"
import Link from "next/link";

function ProjectList() {
    const data = projectData;
  return (
    <Box style={{maxWidth: "800px", margin: "0 auto"}}>
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={'center'}>
            {projectData.map((item) => (
                    <Card maxW='sm' style={{ margin: "5px"}}>
                    <CardBody>
                      <Stack mt='6' spacing='3'>
                            <Heading size='md'>{item.project_name}</Heading>
                        <Text>
                          {item.project_description}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            <Link href={item.project_link}>Repo Link</Link>
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
            ))}

      </Box>
      </Box>
    )
  
}

export default ProjectList