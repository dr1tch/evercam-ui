<template>
  <Story
    title="Spinner"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Interactive">
      <template #default>
        <div class="e-flex e-w-full">
          <ESpinner
            :size="size"
            :animation-duration="animationDuration"
            :opacity="opacity"
            :dark="dark"
            :color="color"
          />
          <div class="e-ml-8">
            <div>
              <span class="e-title-2">animationDuration:</span>
              {{ animationDuration }}ms
            </div>
            <div><span class="e-title-2">size:</span> {{ size }}</div>
            <div><span class="e-title-2">opacity:</span> {{ opacity }}</div>
            <div><span class="e-title-2">dark:</span> {{ dark }}</div>
            <div><span class="e-title-2">color:</span> {{ color }}</div>
          </div>
        </div>
      </template>

      <template #controls>
        <HstSelect v-model="size" title="Size" :options="iconSizes" />
        <br />
        <HstSlider
          v-model="opacity"
          title="Opacity"
          :min="0"
          :max="1"
          :step="0.1"
        />
        <br />
        <HstSlider
          v-model="animationDuration"
          title="Duration"
          :min="500"
          :max="5000"
          :step="100"
        />
        <br />
        <HstCheckbox v-model="dark" title="Dark" boolean />
        <br />
        <HstCheckbox v-model="color" title="Color" boolean />
      </template>
    </Variant>

    <Variant title="Sizes">
      <template #default>
        <div
          class="e-flex e-items-center e-justify-around e-space-x-2 e-w-full"
        >
          <div v-for="s in iconSizes" :key="s.label" class="e-flex-col">
            <ESpinner :size="s.value" :animation-duration="1000" />
            <div class="e-flex e-justify-center e-mt-2">{{ s.label }}</div>
          </div>
        </div>
      </template>
    </Variant>

    <Variant title="Colors">
      <template #default>
        <div
          class="e-flex e-items-center e-justify-around e-space-x-2 e-w-full"
        >
          <div
            class="e-flex-col e-bg-neutral-800 e-justify-center e-align-center e-p-3 e-rounded-md"
          >
            <ESpinner
              size="6xl"
              :animation-duration="1000"
              color
              dark
              class="e-mx-auto"
            />
            <div class="e-flex e-justify-center e-text-white e-mt-2">
              Dark + Color
            </div>
          </div>
          <div
            class="e-flex-col e-bg-neutral-800 e-justify-center e-align-center e-p-3 e-rounded-md"
          >
            <ESpinner
              size="6xl"
              :animation-duration="1000"
              :color="false"
              dark
              class="e-mx-auto"
            />
            <div class="e-flex e-justify-center e-text-white e-mt-2">
              Dark + Grey
            </div>
          </div>
          <div
            class="e-flex-col e-bg-neutral-50 e-justify-center e-align-center e-p-3 e-rounded-md"
          >
            <ESpinner
              size="6xl"
              :animation-duration="1000"
              color
              :dark="false"
              class="e-mx-auto"
            />
            <div class="e-flex e-justify-center e-mt-2 e-text-black">
              Light + Color
            </div>
          </div>
          <div
            class="e-flex-col e-bg-neutral-50 e-justify-center e-align-center e-p-3 e-rounded-md"
          >
            <ESpinner
              size="6xl"
              :animation-duration="1000"
              :color="false"
              :dark="false"
              class="e-mx-auto"
            />
            <div class="e-flex e-justify-center e-mt-2 e-text-black">
              Light + Grey
            </div>
          </div>
        </div>
      </template>
    </Variant>

    <Variant title="Duration">
      <template #default>
        <div
          class="e-flex e-items-center e-justify-around e-space-x-2 e-w-full"
        >
          <div
            v-for="duration in [500, 1000, 3000, 5000]"
            :key="duration"
            class="e-flex-col"
          >
            <ESpinner size="6xl" :animation-duration="duration" />
            <div class="e-flex e-justify-center e-mt-2">{{ duration }}ms</div>
          </div>
        </div>
      </template>
    </Variant>
  </Story>
</template>

<script>
import ESpinner from "@/components/ESpinner.vue"
import { TextSizeOptions } from "./stories.utils"
import icon from "@/components/EIcon.vue"

export default {
  name: "SpinnerStory",
  components: {
    ESpinner,
  },
  data() {
    return {
      iconSizes: TextSizeOptions,
      animationDuration: 1000,
      size: "8xl",
      opacity: 1,
      dark: true,
      color: true,
    }
  },
  computed: {
    icon() {
      return icon
    },
  },
}
</script>
