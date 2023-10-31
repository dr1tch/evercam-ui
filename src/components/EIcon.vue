<template>
  <div class="e-icon">
    <i :class="iconClasses"></i>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { IconSizes } from "@/constants"
import { BaseColor, Size, TailwindColorClass, TIconSize } from "@/types"

export default Vue.extend({
  name: "EIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String as PropType<TailwindColorClass>,
      default: BaseColor.default,
    },
    size: {
      type: String as PropType<TIconSize>,
      default: Size.sm,
    },
  },
  computed: {
    sizes(): Record<Size, string> {
      return IconSizes.reduce((acc, s) => {
        return {
          ...acc,
          [s]: `e-text-${s}`,
        }
      }, {}) as Record<Size, string>
    },
    iconClasses(): string[] {
      const sizeClasses = this.sizes[this.size] || this.sizes[Size.sm]
      const iconClasses = `${
        this.icon?.split(" ")?.length > 1 ? this.icon : `fa fa-${this.icon}`
      }`
      const color = this.color

      return [
        "e-inline-flex e-items-center e-justify-center e-rounded-full",
        color,
        iconClasses,
        sizeClasses,
      ]
    },
  },
})
</script>
