import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { glslify } from "vite-plugin-glslify";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glslify({
      include: [/\.jsx$/],
    }),
  ],
});
