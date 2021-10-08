<template>
  <div class="container">
    <h1 class="text-center">Links</h1>
    <hr />
    <br />
    <vs-row id="row">
      <vs-col
        :key="index"
        v-for="(link, index) in links"
        lg="4"
        sm="12"
        md="12"
        style="margin-bottom: 30px"
        id="row"
      >
        <ExchangeLink
          :link="link.link"
          :title="link.title"
          :desc="link.desc"
          id="col"
        />
      </vs-col>
    </vs-row>
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
