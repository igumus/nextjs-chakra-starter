import {chakra, Heading, Text, Code} from '@chakra-ui/react';

export default function Header() {
  return (
    <chakra.header>
      <Heading margin="0" fontSize="6xl">
        Welcome to{" "}
        <chakra.a href="https://nextjs.org" color="blue.700">
          Next.js!
        </chakra.a>
      </Heading>
      <Text lineHeight={6} fontSize="2xl" textAlign="center">
        Get started by editing{" "}
        <Code
          background="#fafafa"
          borderRadius="5px"
          padding="0.75rem"
          fontSize="1.1rem"
          fontFamily="Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
          Bitstream Vera Sans Mono, Courier New, monospace"
        >
          pages/index.js
        </Code>
      </Text>
    </chakra.header>
  );
}
