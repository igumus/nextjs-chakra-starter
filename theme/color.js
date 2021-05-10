import {theme as chakraTheme} from "@chakra-ui/react";

// renk scalasi : [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
// default values : https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/foundations/colors.ts

export const customColors = {
  ...chakraTheme.colors,
  primary: "#FF0000",
  brand: {
    100: "#f7fafc",
    // ...
    900: "#1a202c",
  },
};


