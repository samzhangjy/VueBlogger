<template>
  <div class="container">
    <h1 class="text-center">Posts</h1>
    <hr />
    <br />
    <vs-row id="row">
      <vs-col
        :key="index"
        v-for="(post, index) in allPosts[curPage - 1].slice().reverse()"
        lg="4"
        sm="12"
        md="6"
        style="margin-bottom: 30px"
        id="row"
      >
        <PostCard :post="post" id="col" />
      </vs-col>
    </vs-row>
    <div class="center con-pagination">
    <vs-pagination v-model="curPage" :length="allPosts.length" not-margin progress />
    </div>
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
      allPosts: AllPosts.posts,
      curPage: 1
    }
  },
  mounted: function () {
    this.changeTitle('Posts')
    const posts = this.allPosts
    this.allPosts = []
    for (let i = 0; i < posts.length; i += 6) this.allPosts.push(posts.slice(i, i + 6))
  }
}
</script>
