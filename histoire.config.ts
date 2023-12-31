import { defineConfig, ServerTreeFile } from "histoire"
import { HstVue } from "@histoire/plugin-vue2"
import path from "path"
import { BrandColors } from "./config"

function prettifyFilename(filename: string): string {
  const words = filename.split(/(?=[A-Z])|(?=_)/)

  return words
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word.charAt(0).toLowerCase() + word.slice(1)
      }
    })
    .join(" ")
}

function getSidebarStoriesTree(file: ServerTreeFile): string[] {
  if (file.path.indexOf("Tailwind") > -1) {
    return ["Tailwind"]
  }

  const normalizedFilePath = path.normalize(file.path)
  const pathSegments = normalizedFilePath.split(path.sep)
  const storiesFolderIndex = pathSegments.indexOf("stories") + 1

  return pathSegments
    .slice(storiesFolderIndex)
    .map((filename: string) =>
      prettifyFilename(filename.split(".story.vue")[0])
    )
}

export default defineConfig({
  setupFile: "/histoire.setup.ts",
  setupCode: ["import '/src/style/main.css'"],
  plugins: [HstVue()],
  vite: {
    resolve: {
      alias: [
        {
          find: "@/",
          replacement: "/src/",
        },
      ],
    },
  },
  theme: {
    title: "Evercam UI",
    colors: {
      primary: BrandColors,
    },
    logo: {
      square: "./img/logo.svg",
      light: "./img/evercam-ui-light.png",
      dark: "./img/evercam-ui-dark.png",
    },
    favicon: "./public/favicon.png",
  },
  tree: {
    file: getSidebarStoriesTree,
  },
})
