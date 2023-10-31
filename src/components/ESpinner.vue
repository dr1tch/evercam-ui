<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1629.32 1608.86"
    :width="computedSize"
    :height="computedSize"
    :style="{ opacity }"
    class="e-spinner e-block"
    :class="{
      'e-spinner--dark': dark,
      'e-spinner--grey': !color,
    }"
  >
    <path
      class="e-spinner__primary"
      :style="getNthPathStyle(0)"
      d="m1254.12,591.61C992.01,401.11,439.78,0,439.78,0h601.2c14.3,0,48.95,9.02,62.54,38.01,55.27,117.88,111.32,235.46,170.48,351.43,33.16,70.9-8.99,170.35-19.87,202.16"
    />
    <path
      class="e-spinner__secondary"
      :style="getNthPathStyle(1)"
      d="m1404.65,131.67c-29.37,89.94-55.8,170.95-82.25,251.93-4.05.87-8.1,1.73-12.15,2.61-40.61-83.95-81.21-167.9-123.12-254.54h217.51Z"
    />
    <path
      class="e-spinner__primary"
      :style="getNthPathStyle(2)"
      d="m1129.06,1093.51c100.75-307.98,312.75-956.75,312.75-956.75,0,0,180.36,558.53,184.75,572.14,4.39,13.59,6.45,49.34-16.96,71.19-95.21,88.81-189.88,178.28-282.06,270.2-57.29,53.34-164.86,43.8-198.48,43.21"
    />
    <path
      class="e-spinner__secondary"
      :style="getNthPathStyle(3)"
      d="m1342.3,1083.06c66.6-63.43,133.22-126.86,207.93-197.98,21.51,73.55,40.3,137.81,60.64,207.37h-263.35c-1.75-3.13-3.48-6.27-5.22-9.39"
    />
    <path
      class="e-spinner__primary"
      :style="getNthPathStyle(4)"
      d="m610.27,1137.17c324.03-.53,1006.55-1.85,1006.55-1.85,0,0-474.19,345.83-485.74,354.25-11.55,8.42-44.87,21.56-72.94,6.14-114.11-62.68-228.69-124.66-344.81-183.5-68.56-37.76-93.12-142.93-103.06-175.04"
    />
    <path
      class="e-spinner__secondary"
      :style="getNthPathStyle(5)"
      d="m938.58,1468.29c-62.81,42.58-118.35,80.24-180.28,122.23-28.35-87.22-54.62-168.03-80.89-248.86,2.62-2.92,5.26-5.85,7.9-8.76,81.89,43.78,163.79,87.56,253.26,135.39"
    />
    <path
      class="e-spinner__primary"
      :style="getNthPathStyle(6)"
      d="m413.07,652.86c101.35,307.77,314.99,956,314.99,956,0,0-476.23-343.04-487.83-351.39-11.58-8.36-34.44-35.93-28.52-67.4,24.07-127.96,47.3-256.13,67.09-384.8,14.54-76.9,106.84-132.96,134.28-152.42"
    />
    <path
      class="e-spinner__secondary"
      :style="getNthPathStyle(7)"
      d="m197.48,1068.8c-62.36-47.73-115.99-88.79-176.78-135.33,75.54-54.91,146.18-106.24,216.83-157.57,3.73,2.24,7.45,4.47,11.19,6.71-16.36,91.3-32.7,182.61-51.25,286.19"
    />
    <path
      class="e-spinner__primary"
      :style="getNthPathStyle(8)"
      d="m813.58,314.41C551.63,505.15,0,907.07,0,907.07c0,0,180.68-558.4,185.09-572.01,4.39-13.59,23.65-43.78,55.41-47.8,129.19-16.29,258.32-33.41,386.86-53.99,77.67-9.72,159.3,60.97,186.22,81.13"
    />
    <path
      class="e-spinner__secondary"
      :style="getNthPathStyle(9)"
      d="m635.14,199.78c-91.99,12.38-183.97,24.77-288.07,38.76,25.77-73.18,48.3-137.14,73.8-209.53,76.56,55.41,147.27,106.58,217.97,157.75-1.23,4.34-2.46,8.68-3.69,13.02"
    />
  </svg>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { Size } from "@/types"
import { TextSizes, Colors } from "@/constants"

export default Vue.extend({
  name: "ESpinner",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    color: {
      type: Boolean,
      default: true,
    },
    animationDuration: {
      type: [Number, String],
      default: 1000,
    },
    size: {
      type: String as PropType<Size>,
      default: Size.base,
    },
    opacity: {
      type: [String, Number],
      default: 1,
    },
  },
  data() {
    return {
      sizes: TextSizes,
      colors: Colors,
    }
  },
  computed: {
    computedSize(): number {
      return this.sizes[Size[this.size]] || this.size || this.sizes[Size.base]
    },
    fill(): { primary: string; secondary: string } {
      let fill = {
        primary: this.colors.brand[500],
        secondary: this.colors.neutral[300],
      }

      if (this.dark && !this.color) {
        fill = {
          primary: this.colors.neutral[100],
          secondary: this.colors.neutral[100],
        }
      }

      if (!this.dark && this.color) {
        fill = {
          primary: this.colors.brand[500],
          secondary: this.colors.neutral[950],
        }
      }

      if (!this.dark && !this.color) {
        fill = {
          primary: this.colors.neutral[200],
          secondary: this.colors.neutral[200],
        }
      }

      return fill
    },
  },
  methods: {
    getNthPathStyle(index: number) {
      const animationDuration =
        typeof this.animationDuration === "string"
          ? Number.parseInt(this.animationDuration)
          : this.animationDuration

      return {
        animationDuration: `${this.animationDuration}ms`,
        animationDelay: `${(index / 10) * animationDuration}ms`,
        fill: `${this.fill[index % 2 === 0 ? "primary" : "secondary"]}`,
      }
    },
  },
})
</script>

<style scoped>
.e-spinner {
  vertical-align: center;
}
.e-spinner__primary,
.e-spinner__secondary {
  stroke-width: 0;
  animation: fade;
  animation-iteration-count: infinite;
}

@keyframes fade {
  0% {
    fill-opacity: 0;
  }
  50% {
    fill-opacity: 1;
  }
  100% {
    fill-opacity: 0;
  }
}
</style>
