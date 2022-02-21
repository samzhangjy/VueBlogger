<template>
  <div class="container">
    <h1 class="text-center">Links</h1>
    <hr />
    <div class="grid-3_xs-1_sm-2_md-2" v-if="links.length">
      <div
        :key="index"
        v-for="(link, index) in links"
        class="col w-full"
      >
        <ExchangeLink
          :link="link.link"
          :title="link.title"
          :desc="link.desc"
          class="center"
        />
      </div>
    </div>
    <Nothing v-else />
  </div>
</template>

<script>
import ExchangeLink from '@/components/ExchangeLink.vue'
import Nothing from '@/components/Nothing.vue'

export default {
  name: 'Links',
  data: function () {
    return {
      links: this.getConfig('links.json').links
    }
  },
  components: {
    ExchangeLink,
    Nothing
  }
}
</script>
