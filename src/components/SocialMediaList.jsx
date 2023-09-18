'use client';

import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, IconName } from "react-icons/fa";

function openLinkedInProfile() {
    const linkedInURL = 'https://www.linkedin.com/in/bigmiami/';
    window.open(linkedInURL, '_blank');
}
  
function openGithub() {
    const githubURL = 'https://github.com/AlexanderPach';
    window.open(githubURL, '_blank')
}

function SocialMediaList() {

    return (
        <div>
            <ButtonGroup gap={'4'} p={4}>
                <Button variant={'link'} size={'lg'} onClick={openGithub}><FaGithub /></Button>
                <Button variant={'link'} size={'lg'} onClick={openLinkedInProfile}><FaLinkedin /></Button>
            </ButtonGroup>
        </div>
    )
}

export default SocialMediaList