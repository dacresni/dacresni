<template>
  <article  class="home">
    <h2>Projects</h2>
    <ul id='project-list'>
      <li v-for="repo in repos" :key="repo.id">
        <h3 class='name' ><a v-bind:href="repo.url">{{repo.name}} </a></h3> <p class='description'> {{repo.description}} </p>
      </li>
    </ul>
    <ul id='subscriptions-list'>
      <li v-for="sub in subs" :key="sub.id">
        <h3 class='name' ><a v-bind:href="sub.url">{{sub.name}} </a></h3> <p class='description'> {{sub.description}} </p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return { 
      repos: [
        { name: "Loading Titles", description: "Loading descriptions", url: "https://github.com/dacresni/dacresni" },
      ],
      subs: [
        { name: "Loading Titles", description: "Loading descriptions", url: "https://github.com/dacresni/dacresni" },
      ]
    }
  },
  created() {
      this.fetchRepos()
      this.fetchSubs()
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
      fetchRepos() {
           fetch("https://api.github.com/users/dacresni/repos")
             .then(response => response.json())
             .then(data =>this.repos = data )
         },
      fetchSubs() {
           fetch("https://api.github.com/users/dacresni/subscriptions")
             .then(response => response.json())
             .then(data =>this.subs = data )
         }
    }
}
</script>
