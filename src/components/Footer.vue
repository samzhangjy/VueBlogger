<template>
  <div class="footer">
    <div class="container text-center">
      <h3>{{ config.blogTitle }}</h3>
      <p><i>{{ config.description }}</i></p>
      <br />
      <p v-if="curYear === config.blogStartYear">
        &copy; {{ curYear }} {{ config.name }}
      </p>
      <p v-else>
        &copy; {{ config.blogStartYear }} - {{ curYear }} {{ config.name }}.&nbsp;
        Powered by VueBlogger.
      </p>
    </div>
  </div>
</template>

<script>
import Config from '@/../posts/data/config.json'

export default {
  name: 'Footer',
  data: function () {
    return {
      config: Config.config,
      curYear: new Date().getFullYear()
    }
  },
  methods: {
    getYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>
