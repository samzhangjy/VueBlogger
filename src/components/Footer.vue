<template>
  <div class="footer">
    <div class="container text-center">
      <h3>{{ config.blogTitle }}</h3>
      <p><i>{{ config.description }}</i></p>
      <br />
      <p v-if="curYear === config.blogStartYear">
        &copy; {{ curYear }} {{ config.name }}.&nbsp;
        Powered by <a href="https://github.com/samzhangjy/VueBlogger" target="_blank">VueBlogger</a>.
      </p>
      <p v-else>
        &copy; {{ config.blogStartYear }} - {{ curYear }} {{ config.name }}.&nbsp;
        Powered by <a href="https://github.com/samzhangjy/VueBlogger" target="_blank">VueBlogger</a>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: function () {
    return {
      config: this.getConfig().config,
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
