import { resolve } from "path"
import { fileURLToPath, URL } from "url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue2"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    vue({
      script: { babelParserPlugins: [["typescript", { dts: true }]] },
    }),
    dts({ insertTypesEntry: true }),
  ],
  server: {
    host: "localhost",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
  build: {
    emptyOutDir: true,
    copyPublicDir: false,
    target: "es2019",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "EvercamUI",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        sourcemap: true,
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
