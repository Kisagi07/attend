import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|checkbox|chip|date-picker|divider|dropdown|input|link|modal|pagination|select|spinner|table|tabs|popover|user|ripple|calendar|date-input|menu|listbox|scroll-shadow|spacer|avatar).js",
    "./app/**/*.{jsx,tsx,ts,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
