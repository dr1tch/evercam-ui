import * as TailwindColors from "tailwindcss/colors"

export const BrandColors = {
  50: "#FCE3E4",
  100: "#F9CDCE",
  200: "#F39699",
  300: "#ED6368",
  400: "#E72C32",
  500: "#C4161C",
  600: "#9C1216",
  700: "#770D11",
  800: "#4E090B",
  900: "#290506",
}

const customColors = {
  onprimary: TailwindColors.white,
  warning: TailwindColors.amber,
  error: TailwindColors.rose,
  info: TailwindColors.cyan,
  success: TailwindColors.lime,
  primary: TailwindColors.sky,
  brand: BrandColors,
}

export const CustomColors = {
  ...customColors,
  // Warning
  warning: customColors.warning["500"],
  "warning-darken": customColors.warning["600"],
  "warning-lighten": customColors.warning["400"],
  // Success
  success: customColors.success["500"],
  "success-darken": customColors.success["600"],
  "success-lighten": customColors.success["400"],
  // Error
  error: customColors.error["500"],
  "error-darken": customColors.error["600"],
  "error-lighten": customColors.error["400"],
  // Info
  info: customColors.info["500"],
  "info-darken": customColors.info["600"],
  "info-lighten": customColors.info["400"],
  // Primary
  primary: customColors.primary["500"],
  "primary-darken": customColors.primary["600"],
  "primary-lighten": customColors.primary["400"],
  // Surfaces
  onsurface: TailwindColors.slate["500"],
  onbackground: TailwindColors.slate["700"],
  surface: TailwindColors.slate["50"],
  background: TailwindColors.white,
}

export default {
  prefix: "e-",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {
      colors: CustomColors,
      maxWidth: {
        "1/12": "8.333333333%",
        "2/12": "16.666666666%",
        "3/12": "25%",
        "4/12": "33.333333333%",
        "5/12": "41.666666667%",
        "6/12": "50%",
        "7/12": "58.333333334%",
        "8/12": "66.666666666%",
        "9/12": "75%",
        "10/12": "83.333333334%",
        "11/12": "91.666666666%",
        "12/12": "100%",
      },
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /e-w-(full|auto)/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-grow/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-basis-(\d{1,2}\/\d{1,2}|full|auto|0)/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /^!?e-max-w-(\d{1,2}\/\d{1,2})/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-offset-(1[0-2]|[1-9])/,
      variants: ["lg", "md", "sm", "xs", "xl"],
    },
    {
      pattern: /e-items-(start|center|end|baseline|stretch)/,
    },
    {
      pattern: /e-self-(start|center|end|baseline|stretch)/,
    },
    {
      pattern:
        /e-justify-(around|between|center|end|evenly|normal|start|stretch)/,
    },
    {
      pattern:
        /e-content-(around|baseline|between|center|end|evenly|normal|start|stretch)/,
    },
  ],
}
