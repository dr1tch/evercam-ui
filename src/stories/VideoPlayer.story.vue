<template>
  <Story
    title="Video Player"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Normal">
      <template #default>
        <EVideoPlayer
          sources="
              http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4
            "
          :video-options="videoProps"
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
        description:
          "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",

        title: "For Bigger Blazes",
        controls: true,
      }
    },
  },
}
</script>
