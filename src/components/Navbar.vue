<template>
  <div>
    <vs-navbar shadow-scroll fixed center-collapsed not-line>
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
        :to="active.name === link.name ? null : link.url"
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
let Config = null
try {
  Config = require('@/../posts/data/config.json')
} catch (e) {
  Config = require('@/defaults/config.json')
}

export default {
  name: 'Navbar',
  data: () => {
    return {
      config: Config.config,
      activeItem: 'Home',
      activeSidebar: false,
      dark: false,
      links: [
        {
          name: 'Home',
          url: '/'
        },
        {
          name: 'Posts',
          url: '/posts'
        },
        {
          name: 'Projects',
          url: '/projects'
        },
        {
          name: 'Links',
          url: '/links'
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
    changeTheme: function () {
      if (this.dark) {
        document.getElementsByTagName('body')[0].setAttribute('vs-theme', 'light')
        this.dark = false
      } else {
        document.getElementsByTagName('body')[0].setAttribute('vs-theme', 'dark')
        this.dark = true
      }
    }
  },
  computed: {
    active: function () {
      const cur = this.$route.path
      var ret = {
        name: null,
        url: null
      }
      for (var i = 0; i < this.links.length; i++) {
        if (this.links[i].url === cur) ret = this.links[i]
      }
      return ret
    }
  }
}
</script>
