import {Box, Heading, Text} from '@chakra-ui/react';

export default function Card({title, desc, link}) {
    return (
        <Box
            margin="1rem"
            padding="1.5rem"
            textAlign='left'
            color='inherit'
            textDecoration='none'
            border='1px solid #eaeaea'
            borderRadius="10px"
            transition="color 0.15s ease, border-color 0.15s ease"
            width="45%"
            as="a"
            href={link}
            >
        
            <Heading as="h2" marginBottom={2} fontSize="2xl">
            {title} {' '}&rarr;
            </Heading>
            <Text margin={0} fontSize="xl" lineHeight="1.5">
            {desc}
            </Text>
        
        
        </Box>
    );
}