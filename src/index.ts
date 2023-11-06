import EAvatar from "@/components/EAvatar.vue"
import EBadge from "@/components/EBadge.vue"
import EButton from "./components/EButton.vue"
import EIcon from "@/components/EIcon.vue"
import ESpinner from "@/components/ESpinner.vue"
import ERow from "@/components/ERow.vue"
import ECol from "@/components/ECol.vue"
import { VueConstructor } from "vue"

export const components = {
  EAvatar,
  EBadge,
  EButton,
  EIcon,
  ESpinner,
  ERow,
  ECol,
}

export default {
  install(Vue: VueConstructor) {
    Object.keys(components).forEach((name) => {
      // @ts-ignore
      Vue.component(name, components[name])
    })
  },
}

export { EAvatar, EBadge, EButton, EIcon, ESpinner, ERow, ECol }

export * from "@/constants"

export * from "@/types"
