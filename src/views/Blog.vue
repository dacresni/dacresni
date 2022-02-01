<template>
  <article id="Blog" >
    <ul id='post-list'  >
    <h2>{{blog.name}}</h2>
      <li v-for="post in posts" :key="post.id">
        <h3>Post:<a v-bind:href="post.url" > {{post.title}} </a></h3>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return { 
      photoset_metadata: {} //photoset 
    }
  },
  created() {
      this.fetchBlog()
      this.fetchTitles()
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
      fetchTitles(){
        fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/posts?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk") 
        .then(response => response.json())
          .then(data => this.posts = data.items)
            .then(data => this.nextToken = data.nextPageToken)
      },
      fetchBlog(){
        fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk") 
        .then(response => response.json())
          .then(data => this.blog = data)
         }
    }
}
// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>
