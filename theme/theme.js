import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

import customBreakPoints from "./breakpoint";
import { customColors } from "./color";
import { customFonts, customFontSizes, customFontWeights } from "./font";

const overrides = {
  ...chakraTheme,
  fonts: customFonts,
  breakpoints: customBreakPoints,
  fontWeights: customFontWeights,
  fontSizes: customFontSizes,
  colors: customColors,
};

const customTheme = extendTheme(overrides);

export default customTheme;
