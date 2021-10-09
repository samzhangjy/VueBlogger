<template>
  <div>
    <div class="container">
      <div class="text-center">
        <div class="center">
          <Avatar size="300" home="true" />
        </div>
        <h1>{{ config.name }}</h1>
        <h4 style="color: #666666">{{ config.username }}</h4>
        <p>{{ config.description }}</p>
      </div>
      <h2>Latest Posts</h2>
      <hr/>
      <br />
      <vs-row id="row">
        <vs-col
          :key="index"
          v-for="(post, index) in posts.slice(Math.max(posts.length - 6, 0)).reverse()"
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
  </div>
</template>

<script>
import Posts from '@/../posts/data/posts.json'
import Config from '@/../posts/data/config.json'
import Avatar from '@/components/Avatar.vue'
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'Index',
  components: {
    Avatar,
    PostCard
  },
  data: function () {
    return {
      posts: Posts.posts,
      config: Config.config
    }
  },
  mounted: function () {
    this.changeTitle('Home')
  }
}
</script>
