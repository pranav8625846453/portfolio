import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
 server: {
  host: true,   // ✅ makes Vite listen on 0.0.0.0
  port: 8080,
  allowedHosts: ["pranavatole-iq9i.onrender.com"], // ✅ your Render domain
},
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
