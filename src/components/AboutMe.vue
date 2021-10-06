<template>
  <div class="container text-center">
    <h1>
      About Me
    </h1>
    <hr />
    <About />
  </div>
</template>

<script>
import About from '@/../posts/data/about.md'

export default {
  name: 'AboutMe',
  components: {
    About: About.vue.component
  }
}
</script>
