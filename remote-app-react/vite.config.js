import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-react-app",
      filename: "remoteEntry.js",
      exposes: {
        './style':'./src/Button.css',
        "./Button": "./src/Button",
        // "./store": "./src/store",
      },
      shared: ["react", "react-dom"],
      // shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});