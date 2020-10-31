<template>
  <article id="Picts" class='row'>
    <ul id='photo-list' style='text-align:right;' >
    <h2>Photo Data</h2>
      <li v-for="photo in photoset_metadata.photo" :key="photo.id">
        <p class='placeholder'> {{photo.id}} </p>
        <p class='placeholder'> {{photo.secret}} </p>
        <p class='placeholder'> {{photo.server}} </p>
        <p class='placeholder'> {{photo.farm}} </p>
        <p class='placeholder'> {{photo.title}} </p>
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
      fetchPicts(){
        fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=fc565292eb5726468f699db7943d3f08&photoset_id=72157716667933323&user_id=11745666%40N00&format=json&nojsoncallback=1") 
        .then(response => response.json())
          .then(data => this.photoset_metadata= data.photoset )
          .then(data => this.picts = data.photoset.photo )
         },
    }
}
</script>
