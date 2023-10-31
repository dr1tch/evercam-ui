<template>
  <Story
    title="Font-size"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Badge + Controls">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EBadge :text="text" :color="color" :size="size" />
        </div>
      </template>
      <template #controls>
        <HstText v-model="text" title="Text" />
        <HstSelect v-model="color" title="Color" :options="badgeColors" />
        <HstSelect v-model="size" title="Size" :options="badgeSizes" />
      </template>
    </Variant>
    <Variant title="Error">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EBadge text="42" color="error" size="xl" />
          <EBadge text="42" color="error" size="lg" />
          <EBadge text="" color="error" size="md" />
          <EBadge text="" color="error" size="sm" />
          <EBadge text="" color="error" size="xs" />
          <EBadge text="" color="error" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Info">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EBadge text="42" color="info" size="xl" />
          <EBadge text="42" color="info" size="lg" />
          <EBadge text="" color="info" size="md" />
          <EBadge text="" color="info" size="sm" />
          <EBadge text="" color="info" size="xs" />
          <EBadge text="" color="info" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Success">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EBadge text="42" color="success" size="xl" />
          <EBadge text="42" color="success" size="lg" />
          <EBadge text="" color="success" size="md" />
          <EBadge text="" color="success" size="sm" />
          <EBadge text="" color="success" size="xs" />
          <EBadge text="" color="success" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Warning">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EBadge text="42" color="warning" size="xl" />
          <EBadge text="42" color="warning" size="lg" />
          <EBadge text="" color="warning" size="md" />
          <EBadge text="" color="warning" size="sm" />
          <EBadge text="" color="warning" size="xs" />
          <EBadge text="" color="warning" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Primary">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EBadge text="42" color="primary" size="xl" />
          <EBadge text="42" color="primary" size="lg" />
          <EBadge text="" color="primary" size="md" />
          <EBadge text="" color="primary" size="sm" />
          <EBadge text="" color="primary" size="xs" />
          <EBadge text="" color="primary" size="dot" />
        </div>
      </template>
    </Variant>
    <Variant title="Default">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EBadge text="42" color="default" size="xl" />
          <EBadge text="42" color="default" size="lg" />
          <EBadge text="" color="default" size="md" />
          <EBadge text="" color="default" size="sm" />
          <EBadge text="" color="default" size="xs" />
          <EBadge text="" color="default" size="dot" />
        </div>
      </template>
    </Variant>
  </Story>
</template>

<script>
import EBadge from "@/components/EBadge.vue"
import { BadgeColorOptions, BadgeSizeOptions } from "./stories.utils"

export default {
  name: "BadgesStory",
  components: {
    EBadge,
  },
  data() {
    return {
      text: "24",
      size: "xl",
      color: "error",
      badgeColors: BadgeColorOptions,
      badgeSizes: BadgeSizeOptions,
    }
  },
}
</script>
