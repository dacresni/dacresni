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
      //URL: https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=fc565292eb5726468f699db7943d3f08&user_id=11745666%40N00&format=json&nojsoncallback=1
         fetch("https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=fc565292eb5726468f699db7943d3f08&user_id=11745666%40N00&format=json&nojsoncallback=1")
             .then(response => response.json())
             .then(data =>this.picts= data )
         },
    }
}
</script>
/*
  { "photos": { "page": 1, "pages": 2, "perpage": 100, "total": "114",
    "photo": [
      { "id": "50545906146", "owner": "11745666@N00", "secret": "b522c895b1", "server": "65535", "farm": 66, "title": "skyline", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545178983", "owner": "11745666@N00", "secret": "0a623dee44", "server": "65535", "farm": 66, "title": "train_lights", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545888231", "owner": "11745666@N00", "secret": "e913b58b4a", "server": "65535", "farm": 66, "title": "DSC00378", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545159498", "owner": "11745666@N00", "secret": "9a345ee883", "server": "65535", "farm": 66, "title": "DSC00381", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50546026602", "owner": "11745666@N00", "secret": "9ffc752487", "server": "65535", "farm": 66, "title": "DSC00396", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545156568", "owner": "11745666@N00", "secret": "f64e1fe49d", "server": "65535", "farm": 66, "title": "DSC00428", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50546024812", "owner": "11745666@N00", "secret": "cdba7f4587", "server": "65535", "farm": 66, "title": "DSC00424", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545883811", "owner": "11745666@N00", "secret": "0918a86e74", "server": "65535", "farm": 66, "title": "DSC00422", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545875871", "owner": "11745666@N00", "secret": "1a1406334a", "server": "65535", "farm": 66, "title": "DSC00434", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545147628", "owner": "11745666@N00", "secret": "fe0cd5683b", "server": "65535", "farm": 66, "title": "DSC00435", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545147068", "owner": "11745666@N00", "secret": "4ab53c79d1", "server": "65535", "farm": 66, "title": "DSC00448", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50544912126", "owner": "11745666@N00", "secret": "5eaa5f94dd", "server": "65535", "farm": 66, "title": "0B8BD32C-7E83-4A7E-A1AF-4B53B53CA764_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545049952", "owner": "11745666@N00", "secret": "e5529bd1e9", "server": "65535", "farm": 66, "title": "CCFEE785-8EE4-4B13-88B5-8A180D78804C_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545049332", "owner": "11745666@N00", "secret": "991245ed0e", "server": "65535", "farm": 66, "title": "BBF7E27C-4B30-4C6A-AF10-28F2AD349522_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50544908041", "owner": "11745666@N00", "secret": "9b25c4002f", "server": "65535", "farm": 66, "title": "680D06E1-CAF5-4E70-B6B4-9DC4E2122C64_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545047807", "owner": "11745666@N00", "secret": "01d5953279", "server": "65535", "farm": 66, "title": "B1B34665-FD30-4AD0-8F2D-10003F166724_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50544906986", "owner": "11745666@N00", "secret": "cd56f28ce8", "server": "65535", "farm": 66, "title": "E4B3C947-B648-426C-B3E7-F6E15CB9E47B_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50544177843", "owner": "11745666@N00", "secret": "5d5e6859c0", "server": "65535", "farm": 66, "title": "7B27A7F1-9484-4883-BF48-00FF7A367370_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50544906201", "owner": "11745666@N00", "secret": "a825fb6163", "server": "65535", "farm": 66, "title": "D3168671-6FE3-4114-AB4A-252C8928048B_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545043812", "owner": "11745666@N00", "secret": "a22158819c", "server": "65535", "farm": 66, "title": "616733F5-FC47-4E95-87DC-CA372D51EC95_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545041942", "owner": "11745666@N00", "secret": "6d59b75910", "server": "65535", "farm": 66, "title": "B28E4459-E114-44A2-A270-29063CE00775_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50545041037", "owner": "11745666@N00", "secret": "b4e3fed0ed", "server": "65535", "farm": 66, "title": "20730299-293C-4463-9D66-57AE0836D4DA_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50544171088", "owner": "11745666@N00", "secret": "339535cce2", "server": "65535", "farm": 66, "title": "2CE88156-DF91-456C-B7DB-364E01C4DD41_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "50544898686", "owner": "11745666@N00", "secret": "70a5b33f4b", "server": "65535", "farm": 66, "title": "8EC28E7C-88C2-4DC5-9578-F629997BE38C_1_105_c", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4588430578", "owner": "11745666@N00", "secret": "6309eb50c3", "server": "4027", "farm": 5, "title": "fixe brons (pink) building", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168318066", "owner": "11745666@N00", "secret": "5b1c0fe125", "server": "2796", "farm": 3, "title": "Image0024.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168317932", "owner": "11745666@N00", "secret": "c64c55a24a", "server": "2654", "farm": 3, "title": "Image0023.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168317808", "owner": "11745666@N00", "secret": "9f58556d0f", "server": "2504", "farm": 3, "title": "Image0022.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168317636", "owner": "11745666@N00", "secret": "bd39b4a0e6", "server": "2670", "farm": 3, "title": "Image0021.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168317492", "owner": "11745666@N00", "secret": "8f88294957", "server": "2560", "farm": 3, "title": "Image0020.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168317342", "owner": "11745666@N00", "secret": "5594554bb7", "server": "2788", "farm": 3, "title": "Image0019.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167555495", "owner": "11745666@N00", "secret": "a43e0a9a9c", "server": "2591", "farm": 3, "title": "Image0018.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168317060", "owner": "11745666@N00", "secret": "7ed5065ae7", "server": "2752", "farm": 3, "title": "Image0017.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167555229", "owner": "11745666@N00", "secret": "0326b0ed6f", "server": "2756", "farm": 3, "title": "Image0016.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168316804", "owner": "11745666@N00", "secret": "4a57827b18", "server": "2495", "farm": 3, "title": "Image0015.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168316688", "owner": "11745666@N00", "secret": "8fd8b0870c", "server": "2503", "farm": 3, "title": "Image0014.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167554881", "owner": "11745666@N00", "secret": "f18f260f93", "server": "2601", "farm": 3, "title": "Image0013.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168316556", "owner": "11745666@N00", "secret": "13b4bf2cc0", "server": "2543", "farm": 3, "title": "Image0012.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167554693", "owner": "11745666@N00", "secret": "e287bb444a", "server": "2490", "farm": 3, "title": "Image0011.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167554527", "owner": "11745666@N00", "secret": "0d080eb5db", "server": "2776", "farm": 3, "title": "Image0010.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168316006", "owner": "11745666@N00", "secret": "51e031e5ee", "server": "4002", "farm": 5, "title": "Image0009.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167554027", "owner": "11745666@N00", "secret": "9444564caf", "server": "2696", "farm": 3, "title": "Image0008.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167553857", "owner": "11745666@N00", "secret": "143e471c42", "server": "2534", "farm": 3, "title": "Image0007.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167553647", "owner": "11745666@N00", "secret": "410d41fa97", "server": "2614", "farm": 3, "title": "Image0006.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167553499", "owner": "11745666@N00", "secret": "2b8ecfc67d", "server": "2671", "farm": 3, "title": "Image0005.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167553319", "owner": "11745666@N00", "secret": "2d154b567e", "server": "2772", "farm": 3, "title": "Image0004.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167553199", "owner": "11745666@N00", "secret": "43bc42da52", "server": "2722", "farm": 3, "title": "Image0003.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167553039", "owner": "11745666@N00", "secret": "112b027edc", "server": "2563", "farm": 3, "title": "Image0002.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167552885", "owner": "11745666@N00", "secret": "d08be4274f", "server": "2487", "farm": 3, "title": "Image0001.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4168314458", "owner": "11745666@N00", "secret": "3ce207e9a9", "server": "2730", "farm": 3, "title": "Image0000.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "4167552559", "owner": "11745666@N00", "secret": "b08fe2a756", "server": "2586", "farm": 3, "title": "Image0000#1.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "3496256294", "owner": "11745666@N00", "secret": "c55c8b6c2d", "server": "3623", "farm": 4, "title": "Blood Fronteer", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "3492591451", "owner": "11745666@N00", "secret": "7d8fa20867", "server": "3603", "farm": 4, "title": "SauerbratenScreenSnapz001", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "3115055770", "owner": "11745666@N00", "secret": "73921e53d6", "server": "3152", "farm": 4, "title": "12-16-08 My Computer", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2965460255", "owner": "11745666@N00", "secret": "7597739415", "server": "3145", "farm": 4, "title": "blackAppleGenious", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2618175964", "owner": "11745666@N00", "secret": "2c1663629a", "server": "3099", "farm": 4, "title": "diablosplash", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2495074701", "owner": "11745666@N00", "secret": "c0a88957f4", "server": "3241", "farm": 4, "title": "Walgreens uses QT", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2481205683", "owner": "11745666@N00", "secret": "a46cb284be", "server": "3268", "farm": 4, "title": "djangoError", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2459747757", "owner": "11745666@N00", "secret": "bd2596de8e", "server": "3289", "farm": 4, "title": "finished_example", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2459737153", "owner": "11745666@N00", "secret": "871cfd46b2", "server": "2075", "farm": 3, "title": "view_options", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2459737115", "owner": "11745666@N00", "secret": "b39f4787c0", "server": "2146", "farm": 3, "title": "terminal", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2459736967", "owner": "11745666@N00", "secret": "0de68671ef", "server": "3259", "farm": 4, "title": "example", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2370637660", "owner": "11745666@N00", "secret": "0a54616d96", "server": "2315", "farm": 3, "title": "rudolph", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2346097648", "owner": "11745666@N00", "secret": "2a39c2570a", "server": "3225", "farm": 4, "title": "banner-logo-big-car-right.gif", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2319512123", "owner": "11745666@N00", "secret": "79eeac0f33", "server": "3115", "farm": 4, "title": "robotech", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222566066", "owner": "11745666@N00", "secret": "2aa4e3d1d0", "server": "2277", "farm": 3, "title": "01-26-08_2204.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565920", "owner": "11745666@N00", "secret": "466690f5f8", "server": "2102", "farm": 3, "title": "01-26-08_2153.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565878", "owner": "11745666@N00", "secret": "cbd7e272bd", "server": "2408", "farm": 3, "title": "01-26-08_2151.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2221775201", "owner": "11745666@N00", "secret": "2e2df1a714", "server": "2127", "farm": 3, "title": "01-26-08_2128.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2221775107", "owner": "11745666@N00", "secret": "40d814ff98", "server": "2130", "farm": 3, "title": "01-26-08_2116.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565690", "owner": "11745666@N00", "secret": "e6d066eea9", "server": "2042", "farm": 3, "title": "01-26-08_2115.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565648", "owner": "11745666@N00", "secret": "cfc39809f5", "server": "2008", "farm": 3, "title": "01-26-08_2110.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2221774979", "owner": "11745666@N00", "secret": "00d8afb642", "server": "2037", "farm": 3, "title": "01-26-08_2108.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2221774955", "owner": "11745666@N00", "secret": "ef0b227b48", "server": "2419", "farm": 3, "title": "01-26-08_2041.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2221774889", "owner": "11745666@N00", "secret": "fea97c3a82", "server": "2146", "farm": 3, "title": "01-26-08_2029.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565534", "owner": "11745666@N00", "secret": "9a01d83a19", "server": "2107", "farm": 3, "title": "01-26-08_1935.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565504", "owner": "11745666@N00", "secret": "0f60d439e3", "server": "2301", "farm": 3, "title": "01-26-08_1932.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565482", "owner": "11745666@N00", "secret": "c55178598c", "server": "2007", "farm": 3, "title": "01-26-08_1925.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2221774677", "owner": "11745666@N00", "secret": "6d8236b8f0", "server": "2080", "farm": 3, "title": "01-24-08_1331.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2222565208", "owner": "11745666@N00", "secret": "0f5769c0cd", "server": "2414", "farm": 3, "title": "01-01-08_2224.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2197768409", "owner": "11745666@N00", "secret": "04fd9881ac", "server": "2108", "farm": 3, "title": "phonetapped.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2198551904", "owner": "11745666@N00", "secret": "891e6694ae", "server": "2324", "farm": 3, "title": "11-09-07_1510.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2198551534", "owner": "11745666@N00", "secret": "420d42c5b2", "server": "2304", "farm": 3, "title": "11-09-07_0756.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2198551308", "owner": "11745666@N00", "secret": "435d4847b5", "server": "2077", "farm": 3, "title": "CrackinGrand Bridge.jpg", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "2105345747", "owner": "11745666@N00", "secret": "1fd5df2612", "server": "2126", "farm": 3, "title": "Stupid error", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "1588563926", "owner": "11745666@N00", "secret": "ec869bc92e", "server": "2318", "farm": 3, "title": "under bridge", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "1552617060", "owner": "11745666@N00", "secret": "844cc27a0c", "server": "2251", "farm": 3, "title": "kde theme ripping off mac", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "1470003122", "owner": "11745666@N00", "secret": "c47186fd00", "server": "1149", "farm": 2, "title": "gold-macbook-pro-2_48", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "1346953371", "owner": "11745666@N00", "secret": "c2d4c67dbf", "server": "1208", "farm": 2, "title": "focusedSelected", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "1346953355", "owner": "11745666@N00", "secret": "d53f708c1a", "server": "1078", "farm": 2, "title": "focused", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "1346953329", "owner": "11745666@N00", "secret": "7d01a8bed5", "server": "1212", "farm": 2, "title": "unfocused", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "1100048751", "owner": "11745666@N00", "secret": "fb4443bf6b", "server": "1316", "farm": 2, "title": "Adium window", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "676835441", "owner": "11745666@N00", "secret": "482fdec7e6", "server": "1302", "farm": 2, "title": "vlcscreen", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "439772880", "owner": "11745666@N00", "secret": "aaed1f3750", "server": "171", "farm": 1, "title": "tux swatter", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "398341589", "owner": "11745666@N00", "secret": "5920586bbb", "server": "154", "farm": 1, "title": "ObjC garbageCollection in Xcode 2.4", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "384728975", "owner": "11745666@N00", "secret": "7578188764", "server": "177", "farm": 1, "title": "Valentine-04", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "366602027", "owner": "11745666@N00", "secret": "aad46e1253", "server": "157", "farm": 1, "title": "sshFSscreen", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "317194488", "owner": "11745666@N00", "secret": "1b7573c167", "server": "109", "farm": 1, "title": "machall(hardcode)", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "317182372", "owner": "11745666@N00", "secret": "f860844c99", "server": "104", "farm": 1, "title": "snowFlake", "ispublic": 1, "isfriend": 0, "isfamily": 0 },
      { "id": "317182371", "owner": "11745666@N00", "secret": "0d5c9563f4", "server": 100, "farm": 1, "title": "ps3 grill", "ispublic": 1, "isfriend": 0, "isfamily": 0 }
    ] }, "stat": "ok" }
*/ 


