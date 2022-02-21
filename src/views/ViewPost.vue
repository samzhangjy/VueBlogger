<template>
  <div>
    <img :src="post.cover" class="cover" />
    <div class="container">
      <div class="text-center">
        <h1 class="headline">{{ post.title }}</h1>
        <p>
          Posted on: {{ `${post.date[0]}/${post.date[1]}/${post.date[2]}` }}
        </p>
        <div class="center">
          <Avatar />
          <span class="margin">
            {{ config.username }}
          </span>
        </div>
      </div>
      <hr>
      <router-view class="post"></router-view>
      <PostTags :postTags="post.tags" />
      <PostNavBtn :prev="prevPost" :next="nextPost" />
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import PostNavBtn from '@/components/PostNavBtn.vue'
import PostTags from '@/components/PostTags.vue'

export default {
  name: 'ViewPost',
  components: {
    Avatar,
    PostNavBtn,
    PostTags
  },
  data: function () {
    return {
      postId: this.$route.path.split('posts/')[1],
      posts: this.getConfig('posts.json').posts,
      post: {
        title: null,
        date: [
          null,
          null,
          null
        ],
        tags: []
      },
      config: this.getConfig().config,
      prevPost: {
        title: null,
        id: null
      },
      nextPost: {
        title: null,
        id: null
      }
    }
  },
  methods: {
    getPost: function () {
      // because of markdown file rendering, can't use the triditional dynamic route matching
      this.postId = this.$route.path.split('posts/')[1]
      const curPostIdx = this.posts.findIndex((post) => post.id === this.postId)
      if (curPostIdx >= 0) { // post found
        this.post = this.posts[curPostIdx]
        this.changeTitle(this.post.title)
        try {
          if (curPostIdx > 0) { // has a previous post (not the first one)
            this.nextPost.title = this.posts[curPostIdx - 1].title
            this.nextPost.id = this.posts[curPostIdx - 1].id
          } else {
            this.nextPost.id = null
          }
          if (curPostIdx < this.posts.length - 1) { // has a next post (not the last one)
            this.prevPost.title = this.posts[curPostIdx + 1].title
            this.prevPost.id = this.posts[curPostIdx + 1].id
          } else {
            this.prevPost.id = null
          }
        } catch (err) {
          console.log(err) // Handle error
        }
      }
    }
  },
  mounted: function () {
    this.getPost()
  },
  watch: {
    $route (to, from) {
      this.getPost()
    }
  }
}
</script>

<style>
.cover {
  width: 100vw;
}

.margin {
  margin-left: 20px;
}

.post img {  /* limit image max width to 100vw in a post */
  max-width: 100%;
}
</style>
