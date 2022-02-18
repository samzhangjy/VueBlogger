<template>
  <div class="w-full">
    <a :href="link" target="_blank" class="w-full">
      <vs-card type="3" class="w-full">
        <template #title>
          <h3>{{ title }}</h3>
        </template>
        <template #text>
          <p>{{ desc }}</p>
          <h5 class="subtitle">{{ link }}</h5>
        </template>
      </vs-card>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ExchangeLink',
  props: ['title', 'desc', 'link'],
  mounted: function () {
    this.changeTitle('Links')
  }
}
</script>

<style scoped>
.card-cover {
  width: 220px !important;
  height: 200px;
  background-size: 10% 10% !important;
  overflow: hidden;
}

.subtitle {
  text-align: right;
  margin: 0px 10px 10px 0px;
}
</style>
