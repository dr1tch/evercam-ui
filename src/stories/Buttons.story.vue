<template>
  <Story
    title="Buttons"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Playground">
      <template #default>
        <div
          class="e-flex e-items-center e-justify-start e-gap-12 e-flex-wrap e-w-full"
        >
          <div class="e-flex e-flex-col e-items-start e-gap-1">
            <span class="e-text-xl e-text-emerald-400 e-mb-3"
              >Play with it</span
            >
            <EButton
              :text="text"
              :size="size"
              :color="color"
              :variant="variant"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
              :prepend-icon="
                prependIconDisplayed === false ? false : prependIcon
              "
              :append-icon="appendIconDisplayed === false ? false : appendIcon"
            />
          </div>
          <div class="e-flex e-flex-col e-items-start e-gap-1">
            <span class="e-text-xl e-text-emerald-400 e-mb-3">Left Icon</span>
            <EButton
              :text="text"
              :size="size"
              :color="color"
              :variant="variant"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
              :prepend-icon="prependIcon"
            />
          </div>
          <div class="e-flex e-flex-col e-items-start e-gap-1">
            <span class="e-text-xl e-text-emerald-400 e-mb-3">Right Icon</span>
            <EButton
              :text="text"
              :size="size"
              :color="color"
              :variant="variant"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
              :append-icon="appendIcon"
            />
          </div>
          <div class="e-flex e-flex-col e-items-start e-gap-1">
            <span class="e-text-xl e-text-emerald-400 e-mb-3"
              >Left and Right Icons</span
            >
            <EButton
              :text="text"
              :size="size"
              :color="color"
              :variant="variant"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
              :append-icon="prependIcon"
              :prepend-icon="appendIcon"
            />
          </div>
          <div class="e-flex e-flex-col e-items-start e-gap-1">
            <span class="e-text-xl e-text-emerald-400 e-mb-3"
              >Loading Button</span
            >
            <EButton
              :text="text"
              :size="size"
              :color="color"
              :variant="variant"
              :is-disabled="isDisabled"
              :is-loading="true"
            />
          </div>
        </div>
      </template>
      <template #controls>
        <HstText v-model="text" title="Button text" />
        <HstSelect v-model="size" title="Button size" :options="buttonSizes" />
        <HstSelect
          v-model="color"
          title="Button color"
          :options="buttonColor"
        />
        <HstSelect
          v-model="variant"
          title="Button variant"
          :options="buttonVariants"
        />
        <HstCheckbox v-model="isLoading" title="isLoading" />
        <HstSelect
          v-model="prependIcon"
          title="Left Side Icon"
          :options="icons"
        />
        <HstSelect
          v-model="appendIcon"
          title="Right Side Icon"
          :options="icons"
        />
        <HstCheckbox
          v-model="prependIconDisplayed"
          title="Left Side Icon Displayed?"
        />
        <HstCheckbox
          v-model="appendIconDisplayed"
          title="Right Side Icon Displayed?"
        />
      </template>
    </Variant>
    <Variant title="Primary">
      <template #default>
        <div class="e-flex e-flex-wrap e-justify-start e-gap-4 e-items-end">
          <div>
            <h1 class="e-text-base">solid-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'primary'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'primary'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'primary'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>

          <div>
            <h1 class="e-text-base">outlined-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'primary'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'primary'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'primary'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'primary'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'primary'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'primary'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </template>
    </Variant>
    <Variant title="Default">
      <template #default>
        <div class="e-flex e-flex-wrap e-justify-start e-gap-4 e-items-end">
          <div>
            <h1 class="e-text-base">solid-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'default'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'default'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'default'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>

          <div>
            <h1 class="e-text-base">outlined-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'default'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'default'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'default'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'default'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'default'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'default'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </template>
    </Variant>
    <Variant title="Success">
      <template #default>
        <div class="e-flex e-flex-wrap e-justify-start e-gap-4 e-items-end">
          <div>
            <h1 class="e-text-base">solid-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'success'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'success'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'success'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>

          <div>
            <h1 class="e-text-base">outlined-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'success'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'success'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'success'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'success'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'success'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'success'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </template>
    </Variant>
    <Variant title="Info">
      <template #default>
        <div class="e-flex e-flex-wrap e-justify-start e-gap-4 e-items-end">
          <div>
            <h1 class="e-text-base">solid-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'info'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'info'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'info'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>

          <div>
            <h1 class="e-text-base">outlined-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'info'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'info'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'info'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'info'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'info'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'info'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </template>
    </Variant>
    <Variant title="Error">
      <template #default>
        <div class="e-flex e-flex-wrap e-justify-start e-gap-4 e-items-end">
          <div>
            <h1 class="e-text-base">solid-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'error'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'error'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'error'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>

          <div>
            <h1 class="e-text-base">outlined-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'error'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'error'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'error'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'error'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'error'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'error'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </template>
    </Variant>
    <Variant title="Warning">
      <template #default>
        <div class="e-flex e-flex-wrap e-justify-start e-gap-4 e-items-end">
          <div>
            <h1 class="e-text-base">solid-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'warning'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'warning'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'warning'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>

          <div>
            <h1 class="e-text-base">outlined-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'warning'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'warning'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'warning'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'warning'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'warning'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'warning'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </template>
    </Variant>
    <Variant title="White">
      <template #default>
        <div class="e-flex e-flex-wrap e-justify-start e-gap-4 e-items-end">
          <div>
            <h1 class="e-text-base">solid-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'white'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'white'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">solid-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'white'"
              :variant="'solid'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>

          <div>
            <h1 class="e-text-base">outlined-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'white'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'white'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">outlined-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'white'"
              :variant="'outlined'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-sm</h1>
            <EButton
              :text="text"
              :size="'sm'"
              :color="'white'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-md</h1>
            <EButton
              :text="text"
              :size="'md'"
              :color="'white'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
          <div>
            <h1 class="e-text-base">link-lg</h1>
            <EButton
              :text="text"
              :size="'lg'"
              :color="'white'"
              :variant="'link'"
              :is-disabled="isDisabled"
              :is-loading="isLoading"
            />
          </div>
        </div>
      </template>
    </Variant>
  </Story>
</template>

<docs lang="md">
# EButton

customized button component

## Props

| name          | Description                                                                                           | type                | default   |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------------------- | --------- |
| `text`        | text inside the button                                                                                | `string`            | `""`      |
| `color`       | color of the button: `'default'`, `'info'`, `'primary'`,`'success'`,`'warning'`, `'error'`, `'white'` | `string`            | `default` |
| `size`        | color of the button: `'sm'`, `'md'`, `'lg'`                                                           | `string`            | `md`      |
| `variant`     | variant of the button: `'solid'`, `'outlined'`, `'link'`                                              | `string`            | `solid`   |
| `isDisabled`  | whether the button is disabled or not                                                                 | `boolean`           | `false`   |
| `isLoading`   | whether the button is loading or not                                                                  | `boolean`           | `false`   |
| `prependIcon` | icon for the left side of the button                                                                  | `string or boolean` | `false`   |
| `prependIcon` | icon for the right side of the button                                                                 | `string or boolean` | `false`   |

## Example

```ts
<template>
  <EButton
    :text="text"
    :size="size"
    :color="color"
    :variant="variant"
    :is-disabled="isDisabled"
    :is-loading="isLoading"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
  />
</template>

<script>
import EButton from "@/components/EButton.vue"
export default {
  name: "Button",
  components: {
    EButton,
  },
  data() {
    return {
      text: "Click Me",
      size: "sm",
      color: "default",
      variant: "solid",
      isDisabled: false,
      isLoading: false,
      prependIcon: "fak fa-evercam-logo",
      appendIcon: "fak fa-evercam-logo",
    }
  },
}
</script>
```
</docs>

<script>
import EButton from "@/components/EButton.vue"
import {
  ButtonVariantsOptions,
  ButtonSizeOptions,
  ButtonColorsOptions,
  IconsOptions,
} from "./stories.utils"
export default {
  name: "ButtonsStory",
  components: {
    EButton,
  },
  data() {
    return {
      text: "Click Me",
      size: "sm",
      color: "default",
      variant: "solid",
      isDisabled: false,
      isLoading: false,
      prependIcon: "fak fa-evercam-logo",
      appendIcon: "fak fa-evercam-logo",
      prependIconDisplayed: false,
      appendIconDisplayed: false,
      buttonColor: ButtonColorsOptions,
      buttonSizes: ButtonSizeOptions,
      buttonVariants: ButtonVariantsOptions,
      icons: IconsOptions,
    }
  },
}
</script>
