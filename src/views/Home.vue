<template>
  <article  class="home">
    <h2> Projects </h2>
  <ProjectList/>
  </article>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'Projects',
  components: {
    ProjectList
  }
}
</script>
