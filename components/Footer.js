import { chakra } from "@chakra-ui/react";
import Image from 'next/image';

export default function Footer() {
  return (
    <chakra.footer
      width="100%"
      height="10px"
      borderTop="1px solid #eaeaea"
      display="flex"
      justifyContent="center"
      alignItems="center"
      background="red"
      flex={0}
      >
      <chakra.a
        display="flex"
        justifyContent="center"
        alignItems="center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
      Powered by{' '}
        <chakra.span height="1em" marginLeft="0.5rem">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        
        </chakra.span>
      </chakra.a>
    </chakra.footer>
  );
}
