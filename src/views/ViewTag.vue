<template>
  <div class="container">
    <h1 class="text-center">Tag <code>{{ tagName }}</code></h1>
    <hr>
    <br />
    <vs-row id="row">
      <vs-col
        :key="index"
        v-for="(post, index) in tag.posts"
        lg="4"
        sm="12"
        md="6"
        style="margin-bottom: 30px"
        id="col"
      >
        <PostCard :post="post" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'ViewTag',
  components: {
    PostCard
  },
  data: function () {
    return {
      tagName: this.$route.params.tag
    }
  },
  computed: {
    tag: function () {
      for (var i = 0; i < this.tags.length; i++) { // match current tag
        if (this.tags[i].name === this.tagName) {
          return this.tags[i]
        }
      }
      return null
    }
  }
}
</script>
