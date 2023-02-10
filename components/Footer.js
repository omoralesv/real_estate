import { Box, Flex,HStack } from "@chakra-ui/react";
import {AiOutlineMail, AiOutlineFacebook, AiOutlineInstagram,AiOutlinePhone} from 'react-icons/ai'

const Footer = () =>(
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100' fontSize='lg'>
        2023 Jim Boonie&apos;s &quot;Free&quot; Real Estate, Inc
        <HStack spacing='10px' justifyContent='center'>
            <AiOutlineMail />
            <AiOutlineFacebook/> 
            <AiOutlineInstagram/> 
            <AiOutlinePhone/>
        </HStack>
    </Box>
)

export default Footer 