<template>
  <div>
    <vs-navbar shadow-scroll fixed center-collapsed v-model="active" not-line>
      <template #left>
        <vs-button flat icon style="margin-right: 20px" class="menu-btn" @click="activeSidebar = !activeSidebar">
          <i class='bx bx-menu'></i>
        </vs-button>
        <router-link to="/" class="navbar-link">
          <h3>{{ config.blogTitle }}</h3>
        </router-link>
      </template>
      <vs-navbar-item
        v-for="(link, index) in links"
        :key="index"
        :active="active.name === link.name"
        :to="link.url"
        @click="active = link"
      >
        {{ link.name }}
      </vs-navbar-item>
      <template #right>
        <vs-navbar-item>
          <vs-switch
            @click="changeTheme()"
          >
            <template #on>
                <i class='bx bxs-sun'></i>
            </template>
            <template #off>
              <i class='bx bxs-moon'></i>
            </template>
          </vs-switch>
        </vs-navbar-item>
      </template>
    </vs-navbar>
      <vs-sidebar
        v-model="activeItem"
        :open.sync="activeSidebar"
      >
        <template #logo>
          <h3>{{ config.blogTitle }}</h3>
        </template>
        <vs-sidebar-item
          v-for="(link, index) in links"
          :key="index"
          :to="link.url"
          :id="link.name"
        >
          {{ link.name }}
        </vs-sidebar-item>
      </vs-sidebar>
    <div style="margin-bottom: 100px"></div>
  </div>
</template>

<script>
import Config from '@/../posts/data/config.json'

export default {
  name: 'Navbar',
  data: () => {
    return {
      active: {
        name: 'Home',
        url: '/'
      },
      activeItem: 'Home',
      activeSidebar: false,
      config: Config.config,
      dark: false,
      links: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Projects',
          url: '/projects'
        },
        {
          name: 'Tags',
          url: '/tags'
        },
        {
          name: 'About',
          url: '/about'
        }
      ]
    }
  },
  methods: {
    initialize: function () {
      console.log(this.active)
      const cur = this.$route.path
      this.active = {
        name: null,
        url: null
      }
      for (var i = 0; i < this.links.length; i++) {
        if (this.links[i].url === cur) this.active = this.links[i]
      }
    },
    changeTheme: function () {
      if (this.dark) {
        document.getElementsByTagName('body')[0].setAttribute('vs-theme', 'light')
        this.dark = false
      } else {
        document.getElementsByTagName('body')[0].setAttribute('vs-theme', 'dark')
        this.dark = true
      }
      this.initialize()
    }
  },
  created: function () {
    this.initialize()
  },
  watch: {
    $route (to, from) {
      const cur = this.$route.path
      this.active = {
        name: null,
        url: null
      }
      for (var i = 0; i < this.links.length; i++) {
        if (this.links[i].url === cur) this.active = this.links[i]
      }
    }
  }
}
</script>
