import * as React from "react";
import { ChakraProvider, ColorModeProvider, Flex } from "@chakra-ui/react";

import { GlobalStyles } from "components/global";
import customTheme from "theme/theme";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: false,
        }}
      >
        <GlobalStyles>
          <Component {...pageProps} />
          <Footer />
        </GlobalStyles>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
