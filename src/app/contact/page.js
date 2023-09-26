"use client"

import {
    Box, ChakraProvider,
    Card, CardHeader,
    CardBody, CardFooter,
    Heading, Text,
    Button,
    FormControl,
    FormLabel,
    Input, FormHelperText,
    FormErrorMessage, Textarea,
    useToast 
} from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
import Link from 'next/link';
import { useState } from 'react';
import contacts from '../contact/contacts.css'


const API_KEY = process.env.API_KEY;

function ContactPage() {
    //TODO: Add a nice background and maybe a header introducing User to contact page
    const [input, setInput] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('');
    const toast = useToast();

    const handleBodyChange = (e) => setBody(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleSubjectChange = (e) => setSubject(e.target.value);

    const isError = input === ''


    //Web3Forms API request
    const handleSubmit = async (event) => {

        event.preventDefault();
        
        const formData = new FormData();

        //API KEY
        formData.append("access_key", '3c72585e-8175-4c3e-b3a7-465623170fe2');

        //Email Data
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('body', body);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        if (email && body) {
            const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
            }).then((res) => res.json());
            
            if (res.success) {
                console.log("Success", res);
                toast({
                    title: 'Email Sent',
                    description: "We've sent the email to Alex",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        } else {
            toast({
                title: 'Could not Send Email',
                description: 'Email Fields are Missing',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }


        


    }

    return (
        <ChakraProvider>
            <Box>
                <div className='contact-page'>
                <NavBar />
                <Box bg={'blue.100'} p={4} maxW="sm" mx="auto">
                <FormControl>
                    <FormControl>
                    <FormLabel> Email </FormLabel>
                    <Input type='email' value={email} onChange={handleEmailChange} bg={'white'} placeholder='Email'></Input>
                    {!isError ? (
                    <FormHelperText>
                        Enter the email you would like for me to respond back to.
                    </FormHelperText>
                    ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                </FormControl>
                <FormControl>
                    <FormLabel>Subject</FormLabel>
                    <Input placeholder='Subject' bg={'white'} onChange={handleSubjectChange} value={subject}/>
                </FormControl>
                <FormControl>
                    <FormLabel>Body</FormLabel>
                    <Textarea placeholder='Body' onChange={handleBodyChange}  bg={'white'} value={body}/>
                </FormControl>
                <FormControl>
                    <Button bg={'blue.200'} onClick={handleSubmit}>Submit</Button>
                </FormControl>
                </FormControl>
                </Box>
                </div>
            </Box>
        </ChakraProvider>
    )
}

export default ContactPage;