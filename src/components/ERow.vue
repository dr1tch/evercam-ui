<template>
  <div class="e-row e-flex e-flex-wrap" :class="rowClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { FlexAlignContent, FlexAlignItems, FlexJustifyContent } from "@/types"

export default Vue.extend({
  props: {
    align: {
      type: String as PropType<FlexAlignItems>,
      default: undefined,
    },
    alignContent: {
      type: String as PropType<FlexAlignContent>,
      default: undefined,
    },
    justify: {
      type: String as PropType<FlexJustifyContent>,
      default: undefined,
    },
    noGutters: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {
    rowClasses(): Record<string, boolean> {
      return {
        ...(this.align ? { [`e-items-${this.align}`]: true } : {}),
        ...(this.alignContent
          ? { [`e-content-${this.alignContent}`]: true }
          : {}),
        ...(this.justify ? { [`e-justify-${this.justify}`]: true } : {}),
        ...(this.noGutters ? { ["e-row--no-gutters"]: true } : {}),
      }
    },
  },
})
</script>

<style>
.e-row.e-row--no-gutters {
  margin: 0;
}
.e-row.e-row--no-gutters > .e-col {
  padding: 0;
}
</style>
