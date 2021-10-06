<template>
  <vs-alert class="text-center alert">
    <template #title>
      Tags
    </template>
    <div class="center-tags" v-if="postTags.length">
      <vs-button
        v-for="(tag, index) in postTags" :key="index"
        transparent
        size="large"
        :to="`/tags/${tag}`"
      >
        {{ tag }}
      </vs-button>
    </div>
    <div v-else>
      <p>This post does not have any tags yet!</p>
    </div>
  </vs-alert>
</template>

<script>
export default {
  name: 'PostTags',
  props: [
    'postTags'
  ]
}
</script>

<style scoped>
.center-tags {
  display: flex;
  align-items: center;
  justify-content: center;
}

.alert {
  margin-bottom: 50px;
  height: 100% !important;
}
</style>
