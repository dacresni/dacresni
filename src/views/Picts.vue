<template>
  <article id="Picts" class='row'>
    <ul id='photo-list' style='text-align:right;' >
    <h2>Projects</h2>
      <li v-for="repo in repos" :key="repo.id">
        <h3 class='name' ><a v-bind:href="repo.html_url">{{repo.name}} </a></h3> <p class='description'> {{repo.description}} </p>
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  data() {
    return { 
      repos: [
        { name: "Loading Pictures", description: "Loading Pictures", html_url: "https://github.com/dacresni/dacresni" },
      ],
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
      //URL: https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=fc565292eb5726468f699db7943d3f08&user_id=11745666%40N00&format=json&nojsoncallback=1  all picts 
      //URL: https://www.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=fc565292eb5726468f699db7943d3f08&photoset_id=72157716667933323&user_id=11745666%40N00&format=json&nojsoncallback=1 st pual matadata 
      // URL: https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=fc565292eb5726468f699db7943d3f08&photoset_id=72157716667933323&user_id=11745666%40N00&format=json&nojsoncallback=1 st paul pictures
         fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=fc565292eb5726468f699db7943d3f08&photoset_id=72157716667933323&user_id=11745666%40N00&format=json&nojsoncallback=1") 
             .then(response => response.json())
             .then(data =>this.picts= data )
         },
    }
}

// URL: https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=fc565292eb5726468f699db7943d3f08&photoset_id=72157716667933323&user_id=11745666%40N00&format=json&nojsoncallback=1
// https://live.staticflickr.com/{server-id}/{id}_{secret}.jpg
// { "photoset": { "id": "72157716667933323", "primary": "50545043812", "owner": "11745666@N00", "ownername": "dacresni",
//    "photo": [
//      { "id": "50544177843", "secret": "5d5e6859c0", "server": "65535", "farm": 66, "title": "7B27A7F1-9484-4883-BF48-00FF7A367370_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50545049332", "secret": "991245ed0e", "server": "65535", "farm": 66, "title": "BBF7E27C-4B30-4C6A-AF10-28F2AD349522_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50544908041", "secret": "9b25c4002f", "server": "65535", "farm": 66, "title": "680D06E1-CAF5-4E70-B6B4-9DC4E2122C64_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50545047807", "secret": "01d5953279", "server": "65535", "farm": 66, "title": "B1B34665-FD30-4AD0-8F2D-10003F166724_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50544912126", "secret": "5eaa5f94dd", "server": "65535", "farm": 66, "title": "0B8BD32C-7E83-4A7E-A1AF-4B53B53CA764_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50544906986", "secret": "cd56f28ce8", "server": "65535", "farm": 66, "title": "E4B3C947-B648-426C-B3E7-F6E15CB9E47B_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50544906201", "secret": "a825fb6163", "server": "65535", "farm": 66, "title": "D3168671-6FE3-4114-AB4A-252C8928048B_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50545043812", "secret": "a22158819c", "server": "65535", "farm": 66, "title": "616733F5-FC47-4E95-87DC-CA372D51EC95_1_105_c", "isprimary": 1, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50545041942", "secret": "6d59b75910", "server": "65535", "farm": 66, "title": "B28E4459-E114-44A2-A270-29063CE00775_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50545041037", "secret": "b4e3fed0ed", "server": "65535", "farm": 66, "title": "20730299-293C-4463-9D66-57AE0836D4DA_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50544171088", "secret": "339535cce2", "server": "65535", "farm": 66, "title": "2CE88156-DF91-456C-B7DB-364E01C4DD41_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50544898686", "secret": "70a5b33f4b", "server": "65535", "farm": 66, "title": "8EC28E7C-88C2-4DC5-9578-F629997BE38C_1_105_c", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 },
//      { "id": "50545906146", "secret": "b522c895b1", "server": "65535", "farm": 66, "title": "skyline", "isprimary": 0, "ispublic": 1, "isfriend": 0, "isfamily": 0 }
//    ], "page": 1, "per_page": "500", "perpage": "500", "pages": 1, "title": "Photos of St. Paul", "total": 13 }, "stat": "ok" }
//
</script>
