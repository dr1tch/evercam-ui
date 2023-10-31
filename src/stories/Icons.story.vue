<template>
  <Story
    title="Font-size"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Icon + Controls">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EIcon :icon="icon" :color="color" :size="size" />
        </div>
      </template>
      <template #controls>
        <HstText v-model="icon" title="Icon" />
        <HstText v-model="color" title="Color" />
        <HstSelect v-model="size" title="Size" :options="iconSizes" />
      </template>
    </Variant>
    <Variant title="Fa icons">
      <template #default>
        <div class="e-flex e-items-end e-space-x-2">
          <EIcon icon="user" color="e-text-rose-500" size="9xl" />
          <EIcon icon="user" color="e-text-rose-500" size="8xl" />
          <EIcon icon="user" color="e-text-rose-500" size="7xl" />
          <EIcon icon="user" color="e-text-rose-500" size="6xl" />
          <EIcon icon="user" color="e-text-rose-500" size="5xl" />
          <EIcon icon="user" color="e-text-rose-500" size="4xl" />
          <EIcon icon="user" color="e-text-rose-500" size="3xl" />
          <EIcon icon="user" color="e-text-rose-500" size="2xl" />
          <EIcon icon="user" color="e-text-rose-500" size="xl" />
          <EIcon icon="user" color="e-text-rose-500" size="lg" />
          <EIcon icon="user" color="e-text-rose-500" size="md" />
          <EIcon icon="user" color="e-text-rose-500" size="sm" />
          <EIcon icon="user" color="e-text-rose-500" size="xs" />
        </div>
      </template>
    </Variant>
  </Story>
</template>

<script>
import EIcon from "@/components/EIcon.vue"
import { TextSizeOptions } from "./stories.utils"

export default {
  name: "IconsStory",
  components: {
    EIcon,
  },
  data() {
    return {
      size: "8xl",
      icon: "fa fa-check",
      color: "e-text-rose-500",
      iconSizes: TextSizeOptions,
    }
  },
}
</script>
