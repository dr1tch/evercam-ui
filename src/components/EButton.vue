<template>
  <button :class="classNames" :disabled="isDisabled">
    <EIcon v-show="isLoading" icon="fa-duotone fa-spinner-third fa-spin" />
    <EIcon v-if="prependIcon" :size="size" :icon="prependIcon" :color="color" />
    {{ text }}
    <EIcon v-if="appendIcon" :size="size" :icon="appendIcon" :color="color" />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import {
  BaseColor,
  Size,
  TButtonColor,
  TButtonSize,
  EButtonVariants,
  TFontAwesomeIconCode,
} from "@/types"
import { buttonStyles } from "./styles/button.style"
import EIcon from "@/components/EIcon.vue"

/**
 * props:
 * variants: 'solid', 'outlined', 'link'
 * isDisabled: boolean
 * isLoading: boolean
 * isActive: boolean
 * dark: boolean
 * colorScheme: BaseColor
 * leftIcon: Icon
 * rightIcon: Icon
 * size: 'sm', 'md' ,'lg'
 * spinnerPlacement: 'start', 'end'
 *
 */
export default Vue.extend({
  name: "EButton",
  components: {
    EIcon,
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String as PropType<TButtonColor>,
      default: BaseColor.default,
    },
    size: {
      type: String as PropType<TButtonSize>,
      default: Size.md,
    },
    variant: {
      type: String as PropType<EButtonVariants>,
      default: EButtonVariants.solid,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: [Boolean, String] as PropType<boolean | TFontAwesomeIconCode>,
      default: false,
    },
    appendIcon: {
      type: [Boolean, String] as PropType<boolean | TFontAwesomeIconCode>,
      default: false,
    },
  },
  data() {
    return {
      style: buttonStyles,
    }
  },
  computed: {
    classNames(): string[] {
      return [
        this.style[this.variant]["colors"][this.color],
        this.style[this.variant]["sizes"][this.size],
        "e-flex e-justify-center e-items-center e-rounded-[0.25rem] e-font-medium",
      ]
    },
    loadingColor(): string[] {
      return [
        "e-animate-spin -e-ml-1 e-h-5 e-w-5 e-bg-transparent e-border-0",
        this.style[this.variant]["colors"][this.color],
      ]
    },
    prependIconCode() {
      return this.prependIcon
    },
    appendIconCode() {
      return this.appendIcon
    },
  },
})
</script>
