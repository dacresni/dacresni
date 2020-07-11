<template>
  <article  class="home">
    <h2>Projects</h2>
    <ul id='project-list'>
      <li v-for="repo in repos" :key="repo.id">
        <h3 class='name' ><a v-bind:href="repo.url">{{repo.name}} </a></h3> <p class='description'> {{repo.description}} </p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return {
      repos: [
        {name: "Loading Titles", description: "Loading descriptions", url: "https://github.com/dacresni/dacresni" },
      ]
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
           fetch("https://api.github.com/users/dacresni/repos")
             .then(response => response.json())
             .then(data =>this.repos = data )
         }
  }
} 
</script>
