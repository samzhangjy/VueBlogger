<template>
  <div class="container">
    <h1 class="text-center">Projects</h1>
    <hr />
    <ProjectDes class="text-center" />
    <br />
    <div class="grid-3_xs-1_sm-2_md-2">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col center"
      >
        <a :href="project.link" target="_blank">
          <vs-card
            type="5"
          >
            <template #title>
              <h3>{{ project.name }}</h3>
            </template>
            <template #text>
              <p>
                {{ project.des }}
              </p>
            </template>
            <template #img>
              <img :src="project.img" />
            </template>
            <template #interactions>
              <vs-tooltip right>
                <vs-button size="large" dark icon :href="project.github" blank>
                  <i class="bx bxl-github"></i>
                </vs-button>
                <template #tooltip>
                  GitHub
                </template>
              </vs-tooltip>
            </template>
          </vs-card>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDes from '@/../posts/data/project-des.md'
import ProjectsJson from '@/../posts/data/projects.json'

export default {
  name: 'Projects',
  components: {
    ProjectDes: ProjectDes.vue.component
  },
  data: function () {
    return {
      projects: ProjectsJson.projects
    }
  },
  mounted: function () {
    this.changeTitle('Projects')
  }
}
</script>
