<template>
  <span class="e-badge" :class="badgeClasses">
    <span v-if="showText">{{ text }}</span>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { BaseColor, Size, TBadgeColor, TBadgeSize } from "@/types"

export default Vue.extend({
  name: "EBadge",
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String as PropType<TBadgeColor>,
      default: BaseColor.default,
    },
    size: {
      type: String as PropType<TBadgeSize>,
      default: Size.base,
    },
  },
  data() {
    return {
      colors: {
        [BaseColor.error]: "e-bg-rose-500 e-text-white",
        [BaseColor.info]: "e-bg-cyan-500 e-text-white",
        [BaseColor.warning]: "e-bg-amber-500 e-text-white",
        [BaseColor.primary]: "e-bg-sky-500 e-text-white",
        [BaseColor.default]: "e-bg-slate-300 e-text-white",
        [BaseColor.success]: "e-bg-lime-500 e-text-white",
      },
      sizes: {
        [Size.dot]: "e-w-2 e-h-2",
        [Size.xs]: "e-w-3 e-h-3",
        [Size.sm]: "e-w-4 e-h-4",
        [Size.md]: "e-w-5 e-h-5",
        [Size.lg]:
          "e-min-w-[2rem] e-max-w-[4rem] e-px-1 e-h-6 e-text-sm e-font-medium",
        [Size.xl]:
          "e-min-w-[3rem] e-max-w-[5rem] e-px-1 e-h-8 e-text-base e-font-medium",
      },
    }
  },
  computed: {
    badgeClasses(): string[] {
      const colorClasses =
        this.colors[this.color] || this.colors[BaseColor.default]
      const sizeClasses = this.sizes[this.size] || this.sizes[Size.md]

      return [
        "e-flex e-items-center e-justify-center e-rounded-full",
        colorClasses,
        sizeClasses,
      ]
    },
    showText(): boolean {
      return [Size.lg, Size.xl].includes(this.size)
    },
  },
})
</script>
