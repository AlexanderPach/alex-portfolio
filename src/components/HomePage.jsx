import { Box, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import LinkList from "./LinkList";
import Head from "next/head";
import '../app/home.css'
import SocialMediaList from "./SocialMediaList";

function HomePage() {
    return (
        <div>
            <Box p={6} borderRadius="md" display={'flex'} justifyContent={'center'}>
                <Grid templateColumns="500px 500px" templateRows={'614px'} gap={4}>
                    <GridItem display={'flex'} flexDirection={'column'} justifyContent={'center'} >
                        {/* Maybe replace with Stack */}
                            <Heading as={'h1'}>Alexander Pacheco</Heading>
                            <Heading as={'h1'} size={'md'}>(Pah-check-oh)</Heading>
                            <Text fontSize={'2xl'} className="test">A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</Text>

                            <SocialMediaList />
                    </GridItem>
                    <GridItem display='flex' justifyContent='center'><Image borderRadius='full' boxSize='500px' src='https://res.cloudinary.com/dsra2icfe/image/upload/f_auto,q_auto/pjrjyzvlejrpwl2qfn5i'/></GridItem>
                </Grid>
            </Box>
        </div>
    )
}

export default HomePage;