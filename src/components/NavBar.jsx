import { Box, Button, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import LinkList from "./LinkList";

function NavBar() {
    
    return (
        <>
            <Box bg={'blue.900'} w={'100%'} p={4} h='20' display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                <Box>
                    <Box fontWeight={"bold"} color={'lavenderblush'}>Portfolio</Box>
                </Box>
                <Box>
                    <LinkList />
                </Box>
                
            </Box>
        </>
    )
}

export default NavBar;