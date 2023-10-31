<template>
  <Story
    title="Font-size"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Avatar + Controls">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EAvatar
            :size="size"
            :image="sampleImg"
            :show-badge="showBadge"
            :badge-color="badgeColor"
            :badge-size="badgeSize"
            :badge-text="badgeText"
          />

          <EAvatar
            :size="size"
            :show-badge="showBadge"
            :badge-color="badgeColor"
            :badge-size="badgeSize"
            :badge-text="badgeText"
          >
            {{ text }}
          </EAvatar>
        </div>
      </template>
      <template #controls>
        <HstText v-model="text" title="Avatar text" />
        <HstSelect v-model="size" title="Avatar size" :options="avatarSizes" />
        <HstCheckbox v-model="showBadge" title="Show badge" />
        <HstText v-model="badgeText" title="Badge text" />
        <HstSelect
          v-model="badgeColor"
          title="Badge color"
          :options="badgeColors"
        />
        <HstSelect
          v-model="badgeSize"
          title="Badge size"
          :options="badgeSizes"
        />
      </template>
    </Variant>
    <Variant title="Avatar + Text">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EAvatar size="2xl"> EV </EAvatar>
          <EAvatar size="xl"> EV </EAvatar>
          <EAvatar size="lg"> EV </EAvatar>
          <EAvatar size="md"> EV </EAvatar>
          <EAvatar size="sm"> EV </EAvatar>
          <EAvatar size="xs"> EV </EAvatar>
        </div>
      </template>
    </Variant>
    <Variant title="Avatar + Text + Badge">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EAvatar
            size="2xl"
            :show-badge="true"
            badge-size="xl"
            badge-text="24"
          >
            EV
          </EAvatar>
          <EAvatar size="xl" :show-badge="true" badge-size="lg" badge-text="24">
            EV
          </EAvatar>
          <EAvatar :show-badge="true" size="lg" badge-size="md"> EV </EAvatar>
          <EAvatar :show-badge="true" size="md" badge-size="sm"> EV </EAvatar>
          <EAvatar :show-badge="true" size="sm" badge-size="xs"> EV </EAvatar>
          <EAvatar :show-badge="true" size="xs" badge-size="dot"> EV </EAvatar>
        </div>
      </template>
    </Variant>
    <Variant title="Avatar + Image + Badge">
      <template #default>
        <div class="e-flex e-items-center e-space-x-2">
          <EAvatar
            size="2xl"
            :image="sampleImg"
            :show-badge="true"
            badge-size="xl"
            badge-text="24"
          />
          <EAvatar
            size="xl"
            :image="sampleImg"
            :show-badge="true"
            badge-size="lg"
            badge-text="24"
          />
          <EAvatar
            :image="sampleImg"
            :show-badge="true"
            size="lg"
            badge-size="md"
          />
          <EAvatar
            :image="sampleImg"
            :show-badge="true"
            size="md"
            badge-size="sm"
          />
          <EAvatar
            :image="sampleImg"
            :show-badge="true"
            size="sm"
            badge-size="xs"
          />
          <EAvatar
            :image="sampleImg"
            :show-badge="true"
            size="xs"
            badge-size="dot"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>

<script>
import EAvatar from "@/components/EAvatar.vue"
import SampleImage from "/img/picture.svg"
import {
  BadgeColorOptions,
  BadgeSizeOptions,
  AvatarSizeOptions,
} from "./stories.utils"

export default {
  name: "AvatarsStory",
  components: {
    EAvatar,
  },
  data() {
    return {
      sampleImg: SampleImage,
      text: "EV",
      size: "xl",
      showBadge: true,
      badgeSize: "xl",
      badgeColor: "error",
      badgeText: "24",
      badgeColors: BadgeColorOptions,
      badgeSizes: BadgeSizeOptions,
      avatarSizes: AvatarSizeOptions,
    }
  },
}
</script>
