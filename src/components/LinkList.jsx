import { Box, Button } from "@chakra-ui/react";
import '../app/home.css'

function LinkList() {
    //this isn't a data structure linked list it's a list of links :)s
    return (
        <div>
            {/*TODO: ADD STATE FOR COLOR OF CURRENT TAB */}
            <Box display={"flex"} justifyContent={"space-evenly"} className="nav-button">
                <Button color={'white'} variant='ghost'> 
                    Home
                </Button>
                <Button color={'white'} variant='ghost'>
                    Resume
                </Button>
                <Button color={'white'} variant='ghost'>
                    Projects
                </Button>
                <Button color={'white'} variant='ghost'>
                    Contact
                </Button>
            </Box>
       </div> 
    )
}

export default LinkList;