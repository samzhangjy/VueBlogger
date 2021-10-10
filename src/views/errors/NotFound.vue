<template>
  <div class="container text-center">
    <h1>404</h1>
    <hr />
    <br />
    The page you are looking for is lost in the fields.
    <div class="center">
      <vs-button size="large" @click="$router.push('/')">Go back home</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted: function () {
    this.changeTitle('404')
  }
}
</script>
