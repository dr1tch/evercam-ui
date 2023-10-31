<template>
  <Story
    title="Video Player"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Normal VIDEO PLAYER">
      <template #default>
        <EVideoPlayer
          sources="
              https://d2of6bhnpl91ni.cloudfront.net/cms/Tutorial-video-maker-3a570d8068.mp4
            "
          :video-props="videoProps"
        />
      </template>
    </Variant>
  </Story>
</template>

<script lang="ts">
import EVideoPlayer from "@/components/EVideoPlayer.vue"

export default {
  name: "VideoPlayerStory",
  components: {
    EVideoPlayer,
  },
  data() {
    return {
      time: 0,
    }
  },
  computed: {
    videoProps() {
      return {
        poster:
          "https://images.unsplash.com/photo-1583024011792-b165975b52f5?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        controls: true,
      }
    },
  },
}
</script>
