import { Global, css } from "@emotion/react";

export const GlobalStyles = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }

          html {
            /* min-width: 356px; */
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: "white";
          }

          #chakra-toast-portal {
            height: 2px;
            background-color: yellow;
          }
        `}
      />
      {children}
    </>
  );
};
