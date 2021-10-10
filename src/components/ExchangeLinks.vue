<template>
  <div class="container">
    <h1 class="text-center">Links</h1>
    <hr />
    <div class="grid-3_xs-1_sm-2_md-2">
      <div
        :key="index"
        v-for="(link, index) in links"
        class="col"
      >
        <ExchangeLink
          :link="link.link"
          :title="link.title"
          :desc="link.desc"
          class="center"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ExchangeLink from '@/components/ExchangeLink.vue'
import Links from '../../posts/data/links.json'

export default {
  name: 'ExchangeLinks',
  data: function () {
    return {
      links: Links.links
    }
  },
  components: {
    ExchangeLink
  }
}
</script>
