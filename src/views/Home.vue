<template>
  <article  class="home">
    <h2> Projects </h2>
    <ol id='project-list'>
      <li v-for="repo in repos" :key="repo.id">
        <p class='name' > {{repo.name}} </p>
        <p class='description'> {{repo.description}} </p>
      </li>
    </ol>
  </article>
</template>

<script>
export default {
  data() {
    return {
          repos: []
    }
  },
  created() {
     this.fetchData()
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
         fetchData() {
         }
  }
} 
</script>
