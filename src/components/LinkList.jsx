import { Box, Button } from "@chakra-ui/react";
import '../app/home.css'
import Link from "next/link";

function LinkList() {
    //this isn't a data structure linked list it's a list of links :)s
    return (
        <div>
            {/*TODO: ADD STATE FOR COLOR OF CURRENT TAB */}
            <Box display={"flex"} justifyContent={"space-evenly"} className="nav-button">
                <Button color={'white'} variant='ghost' href> 
                    <Link href={'/'}>Home</Link>
                </Button>
                <Button color={'white'} variant='ghost'>
                    <Link href={'/resume'}>Resume</Link>
                </Button>
                <Button color={'white'} variant='ghost'>
                    <Link href={'/projects'}>Projects</Link>
                </Button>
                <Button color={'white'} variant='ghost'>
                    <Link href={'/contact'}>Contact</Link>
                </Button>
            </Box>
       </div> 
    )
}

export default LinkList;