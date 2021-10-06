<template>
  <div class="container">
    <h1 class="text-center">Tags</h1>
    <hr />
    <br />
    <vs-row>
      <vs-col
        v-for="(tag, index) in tags"
        :key="index"
        lg="4"
        sm="12"
        md="6"
        style="margin-bottom: 30px"
      >
        <router-link :to="`/tags/${tag.name}`">
          <vs-card
            type="3"
            style="max-width: 95%"
          >
            <template #title>
              <h3>{{ tag.name }}</h3>
            </template>
            <template #text>
              <p>
                {{ tag.posts.length }} posts
              </p>
            </template>
          </vs-card>
        </router-link>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'Tags'
}
</script>
