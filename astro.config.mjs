import { defineConfig } from "astro/config";
import htmx from "astro-htmx";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    htmx(),
    tailwind(),
    icon({
      include: {
        mdi: ["*"], // (Default) Loads entire Material Design Icon set
        lucide: ["*"], // Loads entire Lucide Icon set
      },
    }),
  ],
  output: "server",
  plugins: ["prettier-plugin-astro"],
});
