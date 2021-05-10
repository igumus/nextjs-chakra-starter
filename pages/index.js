import Head from "next/head";
import Image from "next/image";
import { chakra, Flex, Text, Code, Heading } from "@chakra-ui/react";

import Card from "components/Card";
import Footer from "components/Footer";
import Header from "components//Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App with ChakraUI</title>
      </Head>

      <Header />
      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        maxWidth="800px"
        mt="3rem"
        as="main"
        flex={3}
      >
        <Card
          title="Documentation"
          desc="Find in-depth information about Next.js features and API."
          link="https://nextjs.org/docs"
        />
        <Card
          title="Learn"
          desc="Learn about Next.js in an interactive course with quizzes!"
          link="https://nextjs.org/learn"
        />
        <Card
          title="Examples"
          desc="Discover and deploy boilerplate example Next.js projects."
          link="https://github.com/vercel/next.js/tree/master/examples"
        />
        <Card
          title="ChakraUI"
          desc="ChakraUI is a component library  to build your React applications."
          link="https://chakra-ui.com/docs/getting-started"
        />
      </Flex>
      
    </>
  );
}
