import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [    
    "./node_modules/@heroui/theme/dist/components/(avatar|button|calendar|card|checkbox|chip|date-input|date-picker|divider|dropdown|form|input|link|modal|pagination|progress|select|skeleton|spinner|table|tabs|popover|user|ripple|menu|listbox|scroll-shadow|spacer).js"
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
      boxShadow: {
        around: "0 0 6px -1px rgba(0,0,0,0.1), 0 0 4px -1px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [heroui()],
};
export default config;
