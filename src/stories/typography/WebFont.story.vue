<template>
  <Story
    title="Font-weight"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <!-- WEB FONT -->
    <Variant title="Web font">
      <template #default>
        <div class="e-body">.tiny</div>
        <div class="e-tiny">{{ content }}</div>
        <br />

        <div class="e-body">.caption</div>
        <div class="e-caption">{{ content }}</div>
        <br />

        <div class="e-body">body</div>
        <div class="e-body">{{ content }}</div>
        <br />

        <div class="e-body">.title-2</div>
        <div class="e-title-2">{{ content }}</div>
        <br />

        <div class="e-body">.title-1</div>
        <div class="e-title-1">{{ content }}</div>
        <br />

        <div class="e-body">h6</div>
        <h6>{{ content }}</h6>
        <br />

        <div class="e-body">h5</div>
        <h5>{{ content }}</h5>
        <br />

        <div class="e-body">h4</div>
        <h4>{{ content }}</h4>
        <br />

        <div class="e-body">h3</div>
        <h3>{{ content }}</h3>
        <br />

        <div class="e-body">h2</div>
        <h2>{{ content }}</h2>
        <br />

        <div class="e-body">h1</div>
        <h1>{{ content }}</h1>
        <br />

        <div class="e-body">.display-3</div>
        <div class="e-display-3">{{ content }}</div>
        <br />

        <div class="e-body">.display-2</div>
        <div class="e-display-2">{{ content }}</div>
        <br />

        <div class="e-body">.display-1</div>
        <div class="e-display-1">{{ content }}</div>
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
  name: "FontWeightStory",
  data() {
    return {
      content: "Hello world",
    }
  },
}
</script>
