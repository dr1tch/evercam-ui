import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const packageJsonPath = path.resolve(
  fileURLToPath(import.meta.url),
  "../../package.json"
)
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
const libraryName = packageJson.name
const libraryVersion = packageJson.version

// Import your components from components/index.ts
import { components } from "../dist/index.mjs"

function camelToKebab(input) {
  return input.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
}

function getPropType(prop) {
  const getFormatName = (t) => camelToKebab(t.name) || "any"

  return Array.isArray(prop.type)
    ? prop.type.map(getFormatName)
    : getFormatName(prop.type)
}

function getPropDeclaration(prop) {
  return {
    name: camelToKebab(prop.name),
    description: prop.description,
    "doc-url": "https://www.npmjs.com/package/@evercam/ui",
    default: `${prop.default}`,
    value: {
      kind: "expression",
      type: getPropType(prop),
    },
  }
}

function getComponentDeclaration(component) {
  return {
    name: component.name,
    source: {
      module: `./src/components/${component.name}.vue`,
      symbol: component.name,
    },
    description: component.description || "",
    "doc-url": "https://ui.evercam.io/",
    attributes: Object.entries(component.options.props).map(([name, prop]) =>
      getPropDeclaration({ ...prop, name })
    ),
  }
}

const webTypesDeclaration = {
  $schema: "http://json.schemastore.org/web-types",
  framework: "vue",
  name: libraryName,
  version: libraryVersion,
  contributions: {
    html: {
      "types-syntax": "typescript",
      "description-markup": "markdown",
      tags: Object.entries(components).map(([name, component]) =>
        getComponentDeclaration({ ...component, name })
      ),
    },
  },
}

const webTypesPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../dist/web-types.json"
)

fs.promises
  .writeFile(webTypesPath, JSON.stringify(webTypesDeclaration, null, 2))
  .then(() => {
    console.log("Web types declaration generated successfully")
  })
  .catch((error) => {
    console.error("Error generating Web Types declaration:", error)
  })
