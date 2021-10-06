<template>
  <div>
    <vs-row justify="space-between">
      <vs-col w="2" v-if="next.id">
        <vs-button
          size="large"
          block
          border
          :to="`/posts/${next.id}`"
        >
          <i class="bx bx-left-arrow-alt" style="margin-right: 10px"></i>
          {{ next.title }}
        </vs-button>
      </vs-col>
      <vs-col w="2"></vs-col>
      <vs-col w="2" v-if="prev.id" class="align-right">
        <vs-button
          size="large"
          block
          border
          :to="`/posts/${prev.id}`"
        >
          {{ prev.title }}
          <i class="bx bx-right-arrow-alt" style="margin-left: 10px"></i>
        </vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'PostNavBtn',
  props: [
    'next',
    'prev'
  ]
}
</script>

<style scoped>
.align-right {
  text-align: right !important;
}
</style>
