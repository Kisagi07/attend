import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,js,tsx,jsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|date-picker|input|link|modal|pagination|select|tabs|ripple|spinner|calendar|date-input|popover|listbox|divider|scroll-shadow).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fade-up 150ms forwards",
        "fade-down": "fade-down 150ms forwards",
      },
      fontFamily: {
        sixtyfour: ["Sixtyfour", "Helvetica"],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
