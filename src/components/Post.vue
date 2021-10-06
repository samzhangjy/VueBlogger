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
import Posts from '@/../posts/data/posts.json'
import Avatar from '@/components/Avatar.vue'
import Config from '@/../posts/data/config.json'
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
      posts: Posts.posts,
      post: {
        title: null,
        date: [
          null,
          null,
          null
        ],
        tags: []
      },
      config: Config.config,
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
      this.postId = this.$route.path.split('posts/')[1]
      for (var i = 0; i < this.posts.length; i++) {
        if (this.posts[i].id === this.postId) {
          this.post = this.posts[i]
          this.changeTitle(this.post.title)
          try {
            if (this.posts[i - 1] !== undefined) {
              this.nextPost.title = this.posts[i - 1].title
              this.nextPost.id = this.posts[i - 1].id
            } else {
              this.nextPost.id = null
            }
            if (this.posts[i + 1] !== undefined) {
              this.prevPost.title = this.posts[i + 1].title
              this.prevPost.id = this.posts[i + 1].id
            } else {
              this.prevPost.id = null
            }
          } catch (err) {
            // Handle error
            console.log(err)
          }
          // console.log(this.nextPost, this.prevPost)
          break
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

img {
  max-width: 100%;
}
</style>
