import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// Import your components from components/index.ts
import { components } from "../dist/index.mjs"

// Define the shape of the components object
const attributes = {}
const tags = {}

function getPropTypeString(prop) {
  return (Array.isArray(prop.type) ? prop.type : [prop.type.name])
    .map((t) => t.name?.toLowerCase() || "any")
    .join("|")
}
function camelToKebab(input) {
  return input.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
}

// Process each component to populate attributes and tags
for (const componentName in components) {
  if (components.hasOwnProperty(componentName)) {
    const component = components[componentName]

    // Extract component props and attributes
    const props = component.options.props
    if (props) {
      const attributeKeys = []
      for (const propName in props) {
        if (props.hasOwnProperty(propName)) {
          const prop = props[propName]
          const kebabPropName = camelToKebab(propName) // Keep prop name as is
          attributes[`${componentName}/${kebabPropName}`] = {
            type: getPropTypeString(prop),
            description: prop.description || "",
            default: prop.default,
          }
          attributeKeys.push(kebabPropName)
        }
      }
      tags[componentName] = {
        attributes: attributeKeys,
        description: component.description || "",
      }
    }
  }
}

// Get the current module's file path
const currentModulePath = fileURLToPath(import.meta.url)

// Define the paths for the output JSON files
const attributesPath = path.resolve(
  path.dirname(currentModulePath),
  "../dist/attributes.json"
)
const tagsPath = path.resolve(
  path.dirname(currentModulePath),
  "../dist/tags.json"
)

// Write the JSON objects to their respective files
fs.promises
  .writeFile(attributesPath, JSON.stringify(attributes, null, 2))
  .then(() => {
    console.log("Vetur attribute data generated successfully.")
  })
  .catch((error) => {
    console.error("Error generating Vetur attribute data:", error)
  })

fs.promises
  .writeFile(tagsPath, JSON.stringify(tags, null, 2))
  .then(() => {
    console.log("Vetur tags data generated successfully.")
  })
  .catch((error) => {
    console.error("Error generating Vetur tags data:", error)
  })
