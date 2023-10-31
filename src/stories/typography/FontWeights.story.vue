<template>
  <Story
    title="Font-weight"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <!-- FONT WEIGHTS -->
    <Variant title="Font weights">
      <template #default>
        <div class="e-text-base">.text-lg .font-light</div>
        <div class="e-text-lg e-font-light">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-lg .font-normal</div>
        <div class="e-text-lg e-font-normal">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-lg font-medium</div>
        <div class="e-text-lg e-font-medium">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-lg .font-semibold</div>
        <div class="e-text-lg e-font-semibold">{{ content }}</div>
        <br />
        <div class="e-text-base">.text-lg .font-bold</div>
        <div class="e-text-lg e-font-bold">{{ content }}</div>
      </template>

      <template #controls>
        <HstText v-model="content" title="Example text" />
      </template>
    </Variant>
  </Story>
</template>

<script>
export default {
  name: "FontWeightStory",
  data() {
    return {
      content: "Hello world",
    }
  },
}
</script>
