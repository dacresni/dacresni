<template>
  <article id="Blog" >
    <ul id='post-list'  >
    <h2>{{blog.name}}</h2>
      <li v-for="post in posts" :key="post.id">
        <h3>Title: {{post.title}} </h3>
        <p>
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
      this.fetchPicts()
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
      fetchPosts(){
        fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/posts?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk") 
        .then(response => response.json())
          .then(data => this.posts= data.items)
      },
      fetchBlog(){
        fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk") 
        .then(response => response.json())
          .then(data => this.blog= data)
         }
    }
}
// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
</script>
