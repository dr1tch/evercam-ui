<template>
  <div class="e-avatar e-relative" :class="avatarClasses">
    <slot name="default">
      <img
        v-if="image"
        :src="image"
        class="e-avatar__image e-w-full e-h-full e-object-cover e-rounded-full"
      />
    </slot>
    <div v-if="showBadge" class="e-avatar__badge e-absolute e-top-0 e-right-0">
      <slot name="badge">
        <Badge :text="badgeText" :color="badgeColor" :size="badgeSize" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import Badge from "@/components/EBadge.vue"
import { BaseColor, Size, TAvatarSize, TBadgeColor, TBadgeSize } from "@/types"

export default Vue.extend({
  name: "EAvatar",
  components: {
    Badge,
  },
  props: {
    size: {
      type: String as PropType<TAvatarSize>,
      default: Size.md,
    },
    showBadge: {
      type: Boolean,
      default: false,
    },
    badgeColor: {
      type: String as PropType<TBadgeColor>,
      default: BaseColor.error,
    },
    badgeText: {
      type: String,
      default: "",
    },
    badgeSize: {
      type: String as PropType<TBadgeSize>,
      default: Size.md,
    },
    image: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      sizes: {
        [Size.xs]: "e-w-8 e-h-8 e-text-xs",
        [Size.sm]: "e-w-10 e-h-10 e-text-sm",
        [Size.md]: "e-w-14 e-h-14 e-text-base",
        [Size.lg]: "e-w-20 e-h-20 e-text-2xl",
        [Size.xl]: "e-w-28 e-h-28 e-text-3xl",
        [Size["2xl"]]: "e-w-36 e-h-36 e-text-5xl",
      },
    }
  },
  computed: {
    avatarClasses(): string[] {
      const sizeClasses = this.sizes[this.size] || this.sizes[Size.xs]

      return [
        "e-flex e-items-center e-justify-center e-rounded-full e-bg-purple-500 e-text-white e-font-medium",
        sizeClasses,
      ]
    },
  },
})
</script>
