<template>
  <Story
    title="Rows and columns"
    :layout="{
      type: 'grid',
      width: '98%',
    }"
  >
    <Variant title="Cols">
      <template #default>
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-border-2 e-border-dashed e-rounded-lg bg-stripes-gray e-pb-2 e-px-1"
        >
          <ERow class="e-font-mono e-text-sm e-font-bold e-w-full">
            <ECol cols="12" class="e-h-5 e-justify-center e-items-center">
              row
            </ECol>
          </ERow>

          <ERow
            v-for="cols in Array.from({ length: 12 }, (_, index) => index + 1)"
            :key="cols"
            class="e-w-full"
          >
            <ECol :cols="cols">
              <div
                class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-brand-300 e-text-black e-shadow-lg e-justify-center e-items-center"
              >
                cols = {{ cols }}
              </div>
            </ECol>
            <ECol v-if="cols < 12">
              <div
                class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
              ></div>
            </ECol>
          </ERow>
        </ERow>
      </template>
    </Variant>

    <Variant title="Gutters">
      <template #default>
        :no-gutters="false" (default)
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
        >
          <ECol class="e-border-2 e-border-dashed">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol class="e-border-2 e-border-dashed">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
        </ERow>
        <br />
        :no-gutters="true"
        <ERow
          no-gutters
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
        >
          <ECol class="e-border-2 e-border-dashed">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol class="e-border-2 e-border-dashed">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
        </ERow>
      </template>
    </Variant>

    <Variant title="Align">
      <template #default>
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
        >
          <ECol>
            <ERow align="start" class="e-h-24">
              <div
                class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
              >
                align="start" (default)
              </div>
            </ERow>
          </ECol>

          <ECol>
            <ERow align="center" class="e-h-24">
              <div
                class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
              >
                align="center"
              </div>
            </ERow>
          </ECol>

          <ECol>
            <ERow align="end" class="e-h-24">
              <div
                class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
              >
                align="end"
              </div>
            </ERow>
          </ECol>
        </ERow>
      </template>
    </Variant>

    <Variant title="Justify">
      <template #default>
        justify="between"
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
          justify="between"
        >
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
        </ERow>
        <br />
        justify="around"
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
          justify="around"
        >
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
        </ERow>
        <br />
        justify="center"
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
          justify="center"
        >
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
        </ERow>
        <br />
        justify="start" (default)
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
        >
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
        </ERow>
        <br />
        justify="end"
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-rounded-lg bg-stripes-gray e-w-full"
          justify="end"
        >
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
          <ECol cols="2">
            <div
              class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-gray-800 e-shadow-lg e-text-white e-justify-center e-items-center"
            >
              col
            </div>
          </ECol>
        </ERow>
      </template>
    </Variant>

    <Variant title="Auto cols">
      <template #default>
        <ERow
          class="e-font-mono e-text-sm e-font-bold e-leading-6 e-border-2 e-border-dashed e-rounded-lg bg-stripes-gray e-pb-2 e-px-1 e-w-full"
        >
          <ERow class="e-font-mono e-text-sm e-font-bold e-w-full">
            <ECol cols="12" class="e-h-5 e-justify-center e-items-center">
              row
            </ECol>
          </ERow>

          <ERow
            v-for="row in Array.from({ length: 12 }, (_, i) => i + 1)"
            :key="row"
            class="e-w-full"
          >
            <ECol
              v-for="col in Array.from(
                { length: row },
                (_, index) => index + 1
              )"
              :key="col"
            >
              <div
                class="e-flex e-h-10 e-w-full e-rounded-lg e-bg-brand-300 e-text-black e-shadow-lg e-justify-center e-items-center"
              >
                col (auto)
              </div>
            </ECol>
          </ERow>
        </ERow>
      </template>
    </Variant>
  </Story>
</template>

<script>
import ERow from "@/components/ERow.vue"
import ECol from "@/components/ECol.vue"

export default {
  name: "GridStory",
  components: {
    ERow,
    ECol,
  },
  data() {
    return {}
  },
}
</script>
