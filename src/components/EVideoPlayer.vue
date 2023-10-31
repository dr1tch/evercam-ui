<template>
  <div
    ref="videoContainer"
    class="video-container paused"
    data-volume-level="high"
  >
    <video
      v-if="!hasMultipleSources"
      ref="player"
      :src="sources"
      :controls="false"
      preload="auto"
      v-bind="videoOptions"
      :volume="volume"
      @ended="handleEnded"
      @click="togglePlay"
      @loadedmetadata="getDuration"
      @timeupdate="handleTimeUpdate"
      @loadeddata="handleLoading"
      v-on="videoListeners"
    />
    <video
      v-else
      ref="player"
      :controls="false"
      preload="auto"
      v-bind="videoOptions"
      :volume="volume"
      @ended="handleEnded"
      @click="togglePlay"
      @loadedmetadata="getDuration"
      @timeupdate="handleTimeUpdate"
      @loadeddata="handleLoading"
      v-on="videoListeners"
    >
      <source
        v-for="source in sources"
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
          class="play-pause-btn"
          :title="playing ? 'pause' : 'play'"
          @click="togglePlay"
        >
          <svg v-if="!playing" class="play-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
          <svg v-else class="pause-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </svg>
        </button>
        <button class="fsBtn fa fa-fast-backward" @click="skip(-5)"></button>
        <button class="fsBtn fa fa-fast-forward" @click="skip(5)"></button>
        <div class="volume-container">
          <button
            ref="muteBtn"
            class="mute-btn"
            :title="videoMuted ? 'Unmute' : 'Mute'"
            @click="toggleMute"
          >
            <svg
              v-if="volume > 0.5 && !videoMuted"
              class="volume-high-icon"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
              />
            </svg>
            <svg
              v-if="volume <= 0.5 && !videoMuted"
              class="volume-low-icon"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
              />
            </svg>
            <svg
              v-if="videoMuted"
              class="volume-muted-icon"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
              />
            </svg>
          </button>
          <input
            ref="volumeSlider"
            class="volume-slider"
            type="range"
            min="0"
            max="1"
            step="any"
            :value="volume"
            @input="handleVolumeChange"
          />
        </div>
        <div class="duration-container">
          <div ref="currentTimeElem" class="current-time">
            {{ currentTime }}
          </div>
          /
          <div ref="totalTimeElem" class="total-time">{{ videoLength }}</div>
        </div>
        <!-- ############# Suggestion one: custom timeline ######### -->
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
        <!--
            ############# Suggestion 2: input range timeline ######### 
            <VideoTrack
              :percentage="percentagePlayed"
              @seek="seekToPercentage"
            /> 
        -->
        <button
          ref="speedBtn"
          class="speed-btn wide-btn"
          @click="changePlaybackSpeed"
        >
          {{ playbackRate }}
        </button>
        <button
          ref="miniPlayerBtn"
          class="mini-player-btn"
          title="Picture in picture"
          @click="toggleMiniPlayerMode"
        >
          <svg class="picture-on-picture" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
            />
          </svg>
        </button>

        <button
          ref="fullScreenBtn"
          class="full-screen-btn"
          @click="toggleFullscreenMode"
        >
          <svg v-if="!isFullscreen" class="open" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
            />
          </svg>
          <svg v-else class="close" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue"
// import VideoTrack from "@/components/EVideoPlayer/EVideoPlayerTrack.vue"
import { makeFullScreen, exitFullScreen, isFullScreen } from "@/utils"
import ESpinner from "@/components/ESpinner.vue"
// types:
export type IVideoSources =
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
export const EVENTS = [
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
    // VideoTrack
  },
  props: {
    sources: {
      type: (Array as PropType<IVideoSources>) || String,
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
      isSeeking: false,
      playing: false,
      percentagePlayed: 0,
      videoMuted: false,
      videoLength: "0:00",
      duration: 0,
      videoDuration: 0,
      currentTime: "0:00",
      realtime: 0,
      isScrubbing: false,
      wasPaused: false,
      volume: 1,
      isFullscreen: false,
      isFinished: false,
      isLoading: true,
      playbackRate: "1x",
      isMiniPlayerMode: false,
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

      return this.videoOptions &&
        Object.keys(this.videoOptions).includes("controls") &&
        videoOptions.controls === false
        ? "hide"
        : ""
    },
  },
  mounted() {
    this.bindEvents()
    const playerRef = this.$refs.player as HTMLVideoElement
    if (playerRef && playerRef.muted) {
      this.setMuted(true)
    }
    if (playerRef)
      document.addEventListener("mouseup", (e) => {
        if (this.isScrubbing) this.toggleScrubbing(e)
      })
    window.addEventListener("keydown", this.handleKeyDown)
    if (isFullScreen()) {
      document.addEventListener("fullscreenchange", this.handleFullscreenChange)
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
  destroyed() {
    window.removeEventListener("keydown", this.handleKeyDown)
    document.removeEventListener("mouseup", (e) => {
      if (this.isScrubbing) this.toggleScrubbing(e)
    })
    if (isFullScreen()) {
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

  methods: {
    bindEvents() {
      EVENTS.forEach((event) => {
        this.bindVideoEvent(event)
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

    handleFullscreenChange() {
      if (
        isFullScreen() ||
        (window.innerWidth == screen.width &&
          window.innerHeight == screen.height)
      )
        this.isFullscreen = true
      else this.isFullscreen = false
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
      if (this.$refs.player) {
        const playerRef = this.$refs.player as HTMLVideoElement
        const playPromise = playerRef.play()
        if (playPromise !== undefined)
          playerRef
            .play()
            .then(() => this.setPlaying(true))
            .catch(console.error)
      }
    },
    handleVolumeChange(e: Event) {
      const player = this.$refs.player as HTMLVideoElement
      const inputTarget = e.target as HTMLInputElement
      player.volume = Number(inputTarget.value)
      player.muted = Number(inputTarget.value) === 0
      this.setVolume(Number(inputTarget.value))
      this.setMuted(Number(inputTarget.value) === 0)
    },
    setVolume(state: number) {
      this.volume = state
    },
    pause() {
      if (this.$refs.player) {
        const playerRef = this.$refs.player as HTMLVideoElement
        playerRef.pause()
        this.setPlaying(false)
      }
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
      if (this.$refs.player) {
        const playerRef = this.$refs.player as HTMLVideoElement
        const currentTime = (percentage / 100) * playerRef.duration
        playerRef.currentTime = currentTime
      }
    },
    convertTimeToDuration(seconds: number) {
      // @ts-ignore
      return [parseInt((seconds / 60) % 60, 10), parseInt(seconds % 60, 10)]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1")
    },
    // buffering() {
    //   const playerRef = this.$refs.player as HTMLVideoElement
    //   const timelineContainer = this.$refs.timelineContainer as HTMLDivElement
    //   const bufferEnd = playerRef.buffered.end(playerRef.buffered.length - 1)
    //   const duration = playerRef.duration
    //   if (duration > 0) {
    //     const value = (bufferEnd / duration) * 100
    //     console.log({ bufferedValue: value })
    //     this.bufferingValue = value
    //     timelineContainer.style.setProperty(
    //       "--preview-position",
    //       value.toString()
    //     )
    //   }
    // },
    mute() {
      if (this.$refs.player) {
        const playerRef = this.$refs.player as HTMLVideoElement
        playerRef.muted = true
        this.setMuted(true)
      }
    },
    unmute() {
      if (this.$refs.player) {
        const playerRef = this.$refs.player as HTMLVideoElement
        playerRef.muted = false
        this.setMuted(false)
      }
    },
    toggleMute() {
      if (this.videoMuted) {
        this.unmute()
      } else {
        this.mute()
      }
    },
    setMuted(state: boolean) {
      this.videoMuted = state
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
      if (this.isFullscreen) this.closeFullscreenMode()
      else this.openFullscreenMode()
    },
    toggleMiniPlayerMode() {
      const player = this.$refs.player as HTMLVideoElement
      if (this.isMiniPlayerMode) {
        document.exitPictureInPicture()
        this.isMiniPlayerMode = false
      } else {
        player.requestPictureInPicture()
        this.isMiniPlayerMode = true
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
      if (player && timelineContainer) {
        this.currentTime = formatDuration(player.currentTime)
        this.realtime = player.currentTime
        const percent = Number(this.realtime) / Number(this.videoDuration)
        timelineContainer.style.setProperty(
          "--progress-position",
          percent.toString()
        )
      }
    },
    handleTimelineUpdate(e: MouseEvent) {
      const player = this.$refs.player as HTMLVideoElement
      if (document.body.contains(player)) {
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
      if (player) {
        const rect = timelineContainer.getBoundingClientRect()
        const percent =
          Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
        this.isScrubbing = (e.buttons & 1) === 1
        videoContainer.classList.toggle("scrubbing", this.isScrubbing)
        if (this.isScrubbing) {
          this.wasPaused = player.paused
          await player.pause()
          this.handleTimelineUpdate(e)
        } else {
          this.realtime = percent * this.videoDuration
          player.currentTime = percent * this.videoDuration
          if (!this.wasPaused) {
            const playPromise = player.play()
            // @see issue: https://developer.chrome.com/blog/play-request-was-interrupted/
            if (playPromise !== undefined) {
              playPromise
                .then(() => this.handleTimelineUpdate(e))
                .catch(console.error)
            }
          }
        }
      }
    },

    changePlaybackSpeed() {
      const player = this.$refs.player as HTMLVideoElement

      let newPlaybackRate = player.playbackRate + 0.25
      if (newPlaybackRate > 2) newPlaybackRate = 0.25
      if (this.$refs.player) player.playbackRate = newPlaybackRate
      this.playbackRate = `${newPlaybackRate}x`
    },
    handleKeyDown(e: KeyboardEvent) {
      const tagName = document.activeElement?.tagName.toLowerCase()
      if (tagName === "input") return
      switch (e.key.toLowerCase()) {
        case " ":
          if (tagName === "button") return
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
        case "i":
          this.toggleMiniPlayerMode()
          break
        case "m":
          this.toggleMute()
          break
        case "arrowleft":
        case "j":
          this.skip(-5)
          break
        case "arrowright":
        case "l":
          this.skip(5)
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
  /* background-color: black; */
}

.video-container.theater,
.video-container.full-screen {
  max-width: initial;
  width: 100%;
}

.video-container.theater {
  max-height: 90vh;
}

.video-container.full-screen {
  max-height: 100vh;
}

video {
  width: 100%;
  height: inherit;
  object-fit: cover;
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
  padding: 0.25rem;
  align-items: center;
  width: 100%;
}

.video-controls-container .controls button {
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  height: 24px;
  width: 24px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 0.85;
  transition: opacity 150ms ease-in-out;
}

.video-controls-container .controls button:hover {
  opacity: 1;
}

.pause-icon,
.play-icon,
.picture-on-picture,
.open,
.close,
.speed-btn.wide-btn {
  height: 24px;
  width: 24px;
}

.video-container.theater .tall {
  display: none;
}

.video-container:not(.theater) .wide {
  display: none;
}

.volume-container {
  display: flex;
  align-items: center;
}

.volume-slider {
  width: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: width 150ms ease-in-out, transform 150ms ease-in-out;
}

.volume-container:hover .volume-slider,
.volume-slider:focus-within {
  width: 100px;
  transform: scaleX(1);
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
