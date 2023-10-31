<template>
  <Story
    title="Font-size"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <!-- FONT SIZES -->
    <Variant title="Font sizes">
      <template #default>
        <div class="e-text-base">.text-xs</div>
        <div class="e-text-xs">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-sm</div>
        <div class="e-text-sm">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-base</div>
        <div class="e-text-base">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-lg</div>
        <div class="e-text-lg">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-xl</div>
        <div class="e-text-xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-2xl</div>
        <div class="e-text-2xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-3xl</div>
        <div class="e-text-3xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-4xl</div>
        <div class="e-text-4xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-5xl</div>
        <div class="e-text-5xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-6xl</div>
        <div class="e-text-6xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-7xl</div>
        <div class="e-text-7xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-8xl</div>
        <div class="e-text-8xl">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-9xl</div>
        <div class="e-text-9xl">{{ content }}</div>
        <br />
      </template>

      <template #controls>
        <HstText v-model="content" title="Example text" />
      </template>
    </Variant>
  </Story>
</template>

<script>
export default {
  name: "FontSizeStory",
  data() {
    return {
      content: "Hello world",
    }
  },
}
</script>
