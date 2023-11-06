<template>
  <div
    ref="videoContainer"
    class="video-container paused"
    data-volume-level="high"
  >
    <video
      ref="player"
      :controls="false"
      preload="auto"
      v-bind="videoOptions"
      @ended="handleEnded"
      @click="togglePlay"
      @loadedmetadata="getDuration"
      @timeupdate="handleTimeUpdate"
      @loadeddata="handleLoading"
      v-on="videoListeners"
    >
      <source
        v-for="source in hasMultipleSources ? sources : [{ src: sources }]"
        :key="source.src"
        :src="source.src"
        :type="source.type"
      />
    </video>
    <div v-if="isLoading" class="spinner-container">
      <ESpinner size="9xl" opacity="0.6" :dark="true" />
    </div>

    <div :class="['video-controls-container', withControls]">
      <div class="controls">
        <button
          ref="playPauseBtn"
          class="play-pause-btn fa-lg fa-solid"
          :class="{
            'fa-play': !playing,
            'fa-pause': playing,
          }"
          :title="playing ? 'pause' : 'play'"
          @click="togglePlay"
        />

        <div class="duration-container">
          <div ref="currentTimeElem" class="current-time">
            {{ currentTime }}
          </div>
          /
          <div ref="totalTimeElem" class="total-time">{{ videoLength }}</div>
        </div>
        <div
          ref="timelineContainer"
          class="timeline-container"
          @mousemove="handleTimelineUpdate"
          @mousedown="toggleScrubbing"
        >
          <div class="timeline">
            <div class="thumb-indicator"></div>
          </div>
        </div>

        <button
          ref="fullScreenBtn"
          class="full-screen-btn fa-solid"
          :class="{
            'fa-expand': !isFullscreen,
            'fa-compress': isFullscreen,
          }"
          @click="toggleFullscreenMode"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
import { makeFullScreen, exitFullScreen } from "@/utils"
import ESpinner from "@/components/ESpinner.vue"
// types:
export type VideoSources =
  | string
  | {
      type: string
      src: string
    }[]

// Helper functions
const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})

// List of events so we can bind them on mount
export const VIDEO_PLAYER_EVENTS = [
  "play",
  "pause",
  "ended",
  "loadeddata",
  "waiting",
  "playing",
  "timeupdate",
  "canplay",
  "canplaythrough",
  "statechanged",
]

const formatDuration = (time: number) => {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`
  }
}

export default Vue.extend({
  name: "VideoPlayer",
  components: {
    ESpinner,
  },
  props: {
    sources: {
      type: (Array as PropType<VideoSources>) || String,
      required: true,
    },
    videoListeners: {
      type: Object as PropType<Partial<HTMLVideoElement>>,
      default: () => ({}),
    },
    videoOptions: {
      type: Object as PropType<Partial<HTMLVideoElement>>,
      default: () => ({}),
    },
  },
  data() {
    return {
      playing: false,
      percentagePlayed: 0,
      videoLength: "0:00",
      duration: 0,
      videoDuration: 0,
      currentTime: "0:00",
      realtime: 0,
      isScrubbing: false,
      wasPaused: false,
      isFullscreen: false,
      isFinished: false,
      isLoading: true,
    }
  },
  computed: {
    hasMultipleSources() {
      return Array.isArray(this.sources)
    },
    hasStartedOrFinished(): boolean {
      return (
        (this.isFinished || this.realtime <= 0.1) &&
        !this.isLoading &&
        !this.isLooped()
      )
    },
    withControls() {
      const videoOptions = this.videoOptions as Partial<HTMLVideoElement>

      return videoOptions?.controls === false ? "hide" : ""
    },
  },
  mounted() {
    this.bindEvents()
    this.initializePlayer()
    this.initializeFullscreenListeners()
  },
  destroyed() {
    this.unbindEvents()
    this.destroyPlayer()
    this.removeFullscreenListeners()
  },

  methods: {
    bindEvents() {
      VIDEO_PLAYER_EVENTS.forEach((event) => {
        this.bindVideoEvent(event)
      })
    },
    unbindEvents() {
      VIDEO_PLAYER_EVENTS.forEach((event) => {
        this.unbindVideoEvent(event)
      })
    },
    bindVideoEvent(which: string) {
      const player = this.$refs.player as HTMLVideoElement
      const timelineContainer = this.$refs.timelineContainer as HTMLDivElement
      player.addEventListener(
        which,
        (event) => {
          if (which === "loadeddata") {
            this.videoLength = formatDuration(player.duration)
          }

          if (which === "timeupdate") {
            this.percentagePlayed = (player.currentTime / player.duration) * 100
            timelineContainer.style.setProperty(
              "--progress-position",
              this.percentagePlayed.toString()
            )
          }

          this.$emit(which, { event, player: this })
        },
        true
      )
    },
    unbindVideoEvent(which: string) {
      const player = this.$refs.player as HTMLVideoElement
      const timelineContainer = this.$refs.timelineContainer as HTMLDivElement
      player.addEventListener(
        which,
        (event) => {
          if (which === "loadeddata") {
            this.videoLength = formatDuration(player.duration)
          }

          if (which === "timeupdate") {
            this.percentagePlayed = (player.currentTime / player.duration) * 100
            timelineContainer.style.setProperty(
              "--progress-position",
              this.percentagePlayed.toString()
            )
          }

          this.$emit(which, { event, player: this })
        },
        true
      )
    },
    initializePlayer() {
      const playerRef = this.$refs.player as HTMLVideoElement
      if (!playerRef) {
        return
      }
      if (playerRef.autoplay) {
        this.setPlaying(true)
      }
      document.addEventListener("mouseup", (e) => {
        if (this.isScrubbing) {
          this.toggleScrubbing(e)
        }
      })
      document.addEventListener("keydown", this.handleKeyDown)
    },
    destroyPlayer() {
      window.removeEventListener("keydown", this.handleKeyDown)
      document.removeEventListener("mouseup", (e) => {
        if (this.isScrubbing) {
          this.toggleScrubbing(e)
        }
      })
    },
    removeFullscreenListeners() {
      if (
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
        document.removeEventListener(
          "fullscreenchange",
          this.handleFullscreenChange
        )
        document.removeEventListener(
          "webkitfullscreenchange",
          this.handleFullscreenChange
        )
        document.removeEventListener(
          "mozfullscreenchange",
          this.handleFullscreenChange
        )
        document.removeEventListener(
          "MSFullscreenChange",
          this.handleFullscreenChange
        )
      } else {
        console.log("Fullscreen API is not supported in this browser.")
      }
    },
    initializeFullscreenListeners() {
      if (
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
        document.addEventListener(
          "fullscreenchange",
          this.handleFullscreenChange
        )
        document.addEventListener(
          "webkitfullscreenchange",
          this.handleFullscreenChange
        )
        document.addEventListener(
          "mozfullscreenchange",
          this.handleFullscreenChange
        )
        document.addEventListener(
          "MSFullscreenChange",
          this.handleFullscreenChange
        )
      } else {
        console.log("Fullscreen API is not supported in this browser.")
      }
    },
    handleFullscreenChange() {
      if (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement ||
        (window.innerWidth == screen.width &&
          window.innerHeight == screen.height)
      ) {
        this.isFullscreen = true
      } else {
        this.isFullscreen = false
      }
    },

    isLooped() {
      const player = this.$refs.player as HTMLVideoElement

      return player.loop
    },

    handleEnded() {
      this.isFinished = true
      this.playing = false
    },
    handleLoading() {
      this.isLoading = false
    },
    play() {
      const playerRef = this.$refs.player as HTMLVideoElement
      if (!playerRef) {
        return
      }
      const playPromise = playerRef.play()
      if (playPromise !== undefined) {
        playerRef
          .play()
          .then(() => this.setPlaying(true))
          .catch(console.error)
      }
    },
    pause() {
      const playerRef = this.$refs.player as HTMLVideoElement
      if (!playerRef) {
        return
      }
      playerRef.pause()
      this.setPlaying(false)
    },
    togglePlay() {
      if (this.playing) {
        this.pause()
      } else {
        this.play()
      }
    },
    setPlaying(state: boolean) {
      this.playing = state
    },
    seekToPercentage(percentage: number) {
      const playerRef = this.$refs.player as HTMLVideoElement
      if (!playerRef) {
        return
      }
      const currentTime = (percentage / 100) * playerRef.duration
      playerRef.currentTime = currentTime
    },
    convertTimeToDuration(seconds: number) {
      // @ts-ignore
      return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1")
    },

    closeFullscreenMode() {
      if (document.fullscreenElement) {
        exitFullScreen().then(() => {
          this.isFullscreen = false
          console.log("Exited fullscreen")
        })

        this.isFullscreen = false
      }
    },
    openFullscreenMode() {
      const element = this.$refs.videoContainer as HTMLDivElement
      if (element) {
        makeFullScreen(element).then(() => {
          this.isFullscreen = true
        })
        this.isFullscreen = true
      }
    },
    toggleFullscreenMode() {
      if (this.isFullscreen) {
        this.closeFullscreenMode()
      } else {
        this.openFullscreenMode()
      }
    },

    getDuration() {
      const player = this.$refs.player as HTMLVideoElement
      this.videoLength = formatDuration(player.duration)
      this.videoDuration = player.duration
    },
    handleTimeUpdate() {
      const player = this.$refs.player as HTMLVideoElement
      const timelineContainer = this.$refs.timelineContainer as HTMLDivElement
      if (!player || !timelineContainer) {
        return
      }
      this.currentTime = formatDuration(player.currentTime)
      this.realtime = player.currentTime
      const percent = Number(this.realtime) / Number(this.videoDuration)
      timelineContainer.style.setProperty(
        "--progress-position",
        percent.toString()
      )
    },
    handleTimelineUpdate(e: MouseEvent) {
      const player = this.$refs.player as HTMLVideoElement
      if (!document.body.contains(player)) {
        return
      }
      const timelineContainer = this.$refs.timelineContainer as HTMLDivElement
      const rect = timelineContainer.getBoundingClientRect()
      const percent =
        Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
      timelineContainer.style.setProperty(
        "--preview-position",
        percent.toString()
      )
      if (this.isScrubbing) {
        e.preventDefault()
        timelineContainer.style.setProperty(
          "--progress-position",
          percent.toString()
        )
      }
    },
    skip(duration = 5) {
      const player = this.$refs.player as HTMLVideoElement

      player.currentTime += duration
    },
    async toggleScrubbing(e: MouseEvent) {
      const timelineContainer = this.$refs.timelineContainer as HTMLDivElement
      const videoContainer = this.$refs.videoContainer as HTMLDivElement
      const player = this.$refs.player as HTMLVideoElement
      if (!player) {
        return
      }
      const rect = timelineContainer.getBoundingClientRect()
      const percent =
        Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
      this.isScrubbing = (e.buttons & 1) === 1
      videoContainer.classList.toggle("scrubbing", this.isScrubbing)
      if (this.isScrubbing) {
        this.wasPaused = player.paused
        await player.pause()
        this.handleTimelineUpdate(e)

        return
      }
      this.realtime = percent * this.videoDuration
      player.currentTime = percent * this.videoDuration
      if (this.wasPaused) {
        return
      }
      const playPromise = player.play()
      // @see issue: https://developer.chrome.com/blog/play-request-was-interrupted/
      if (playPromise !== undefined) {
        playPromise
          .then(() => this.handleTimelineUpdate(e))
          .catch(console.error)
      }
    },

    handleKeyDown(e: KeyboardEvent) {
      const tagName = document.activeElement?.tagName.toLowerCase()
      if (tagName === "input") {
        return
      }
      switch (e.key.toLowerCase()) {
        case " ":
          if (tagName === "button") {
            return
          }
          this.togglePlay()
          break
        case "k":
          this.togglePlay()
          break
        case "escape":
          e.preventDefault()
          this.closeFullscreenMode()
          this.isFullscreen = false

          break
        case "f":
          this.openFullscreenMode()
          this.isFullscreen = true

          break
      }
    },
  },
})
</script>

<style scoped>
.spinner-container {
  position: absolute;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
}
.video-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}

.video-container.full-screen {
  max-width: initial;
  width: 100%;
}

.video-container.full-screen {
  max-height: 100vh;
}

video {
  width: 100%;
  height: inherit;
}

.video-controls-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 100;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
}
.hide {
  display: none;
}

.video-controls-container::before {
  content: "";
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  width: 100%;
  aspect-ratio: 6 / 1;
  z-index: -1;
  pointer-events: none;
}

.video-container:hover .video-controls-container,
.video-container:focus-within .video-controls-container,
.video-container.paused .video-controls-container {
  opacity: 1;
}

.video-controls-container .controls {
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  align-items: center;
  width: 100%;
}

.video-controls-container .controls button {
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  height: 32px;
  width: 32px;
  font-size: 1.35rem;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 150ms ease-in-out;
}

.video-controls-container .controls button:hover {
  opacity: 1;
}

.duration-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-grow: 1;
}

.video-container.captions .captions-btn {
  border-bottom: 3px solid red;
}

.video-controls-container .controls button.wide-btn {
  width: 50px;
}

.timeline-container {
  width: 100%;

  height: 7px;
  margin-inline: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.timeline {
  background-color: rgba(100, 100, 100, 0.5);
  height: 3px;
  width: 100%;
  position: relative;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: calc(100% - var(--preview-position) * 100%);
  background-color: rgb(150, 150, 150);
  display: none;
}

.timeline::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: calc(100% - var(--progress-position) * 100%);
  background-color: red;
}

.timeline .thumb-indicator {
  --scale: 0;
  position: absolute;
  transform: translateX(-50%) scale(var(--scale));
  height: 200%;
  top: -50%;
  left: calc(var(--progress-position) * 100%);
  background-color: red;
  border-radius: 50%;
  transition: transform 150ms ease-in-out;
  aspect-ratio: 1 / 1;
}

.video-container.scrubbing .thumbnail-img {
  display: block;
}

.video-container.scrubbing .timeline::before,
.timeline-container:hover .timeline::before {
  display: block;
}

.video-container.scrubbing .thumb-indicator,
.timeline-container:hover .thumb-indicator {
  --scale: 1;
}

.video-container.scrubbing .timeline,
.timeline-container:hover .timeline {
  height: 100%;
}
</style>
