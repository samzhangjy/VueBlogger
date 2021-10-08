<template>
  <div class="container">
    <h1 class="text-center">Posts</h1>
    <hr />
    <br />
    <vs-row id="row">
      <vs-col
        :key="index"
        v-for="(post, index) in allPosts.slice().reverse()"
        lg="4"
        sm="12"
        md="6"
        style="margin-bottom: 30px"
        id="row"
      >
        <PostCard :post="post" id="col" />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import AllPosts from '@/../posts/data/posts.json'
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'Posts',
  components: {
    PostCard
  },
  data: function () {
    return {
      allPosts: AllPosts.posts
    }
  },
  mounted: function () {
    this.changeTitle('Posts')
  }
}
</script>
