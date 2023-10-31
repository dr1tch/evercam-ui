<template>
  <div class="e-col" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { FlexAlignSelf } from "@/types"

export default Vue.extend({
  props: {
    alignSelf: {
      type: String as PropType<FlexAlignSelf>,
      default: "auto",
    },
    cols: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined,
    },
    lg: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined,
    },
    md: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined,
    },
    offset: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
    offsetLg: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
    offsetMd: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
    offsetSm: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
    offsetXs: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
    offsetXl: {
      type: [String, Number] as PropType<string | number>,
      default: undefined,
    },
    sm: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined,
    },
    xs: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined,
    },
    xl: {
      type: [Boolean, String, Number] as PropType<boolean | string | number>,
      default: undefined,
    },
  },
  computed: {
    colClasses(): Record<string, boolean> {
      return {
        // Align self
        ...(this.alignSelf ? { [`e-self-${this.alignSelf}`]: true } : {}),

        // cols="auto"
        [this.autoClasses("xs:", this.xs)]: this.isSizePropAuto(this.xs),
        [this.autoClasses("sm:", this.sm)]: this.isSizePropAuto(this.sm),
        [this.autoClasses("md:", this.md)]: this.isSizePropAuto(this.md),
        [this.autoClasses("lg:", this.lg)]: this.isSizePropAuto(this.lg),
        [this.autoClasses("xl:e", this.xl)]: this.isSizePropAuto(this.xl),
        [this.autoClasses("", this.cols)]: this.isSizePropAuto(this.cols, true),

        // cols="12"
        "xs:e-basis-full xs:!e-max-w-12/12": this.xs === 12 || this.xs === "12",
        "sm:e-basis-full sm:!e-max-w-12/12": this.sm === 12 || this.sm === "12",
        "md:e-basis-full md:!e-max-w-12/12": this.md === 12 || this.md === "12",
        "lg:e-basis-full lg:!e-max-w-12/12": this.lg === 12 || this.lg === "12",
        "xl:e-basis-full xl:!e-max-w-12/12": this.xl === 12 || this.xl === "12",
        "e-basis-full e-max-w-12/12": this.cols === 12 || this.cols === "12",

        // cols="n"
        [`xs:e-basis-${this.xs}/12 xs:!e-max-w-${this.xs}/12`]:
          this.isSizePropertyNumeric(this.xs),
        [`sm:e-basis-${this.sm}/12 sm:!e-max-w-${this.sm}/12`]:
          this.isSizePropertyNumeric(this.sm),
        [`md:e-basis-${this.md}/12 md:!e-max-w-${this.md}/12`]:
          this.isSizePropertyNumeric(this.md),
        [`lg:e-basis-${this.lg}/12 lg:!e-max-w-${this.lg}/12`]:
          this.isSizePropertyNumeric(this.lg),
        [`xl:e-basis-${this.xl}/12 xl:!e-max-w-${this.xl}/12`]:
          this.isSizePropertyNumeric(this.xl),
        [`e-basis-${this.cols}/12 !e-max-w-${this.cols}/12`]:
          this.isSizePropertyNumeric(this.cols),

        // offset="n"
        [`xs:e-offset-${this.offsetXs}`]: this.offsetXs !== undefined,
        [`sm:e-offset-${this.offsetSm}`]: this.offsetSm !== undefined,
        [`md:e-offset-${this.offsetMd}`]: this.offsetMd !== undefined,
        [`lg:e-offset-${this.offsetLg}`]: this.offsetLg !== undefined,
        [`xl:e-offset-${this.offsetXl}`]: this.offsetXl !== undefined,
        [`e-offset-${this.offset}`]: this.offset !== undefined,
      }
    },
  },
  methods: {
    autoClasses(prefix: string, value: boolean | string | number) {
      const basis = value === "auto" ? "auto" : "0"
      const grow = value === "auto" ? "-0" : ""
      const width = value === "auto" ? "auto" : "full"

      return `${prefix}e-basis-${basis} ${prefix}e-grow${grow} ${prefix}e-w-${width}`
    },
    isSizePropAuto(
      prop: boolean | string | number | undefined,
      acceptUndefined = false
    ) {
      return (
        prop === "auto" ||
        prop === 0 ||
        prop === "0" ||
        (acceptUndefined && !prop)
      )
    },
    isSizePropertyNumeric(prop: boolean | string | number | undefined) {
      const n = Number.parseInt(prop as string)

      return prop !== "auto" && !isNaN(n) && n >= 1 && n < 12
    },
  },
})
</script>

<style>
.e-col {
  padding: 0.75rem;
}
</style>
