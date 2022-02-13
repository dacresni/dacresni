(function(t){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],l=0,h=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function s(t){return a.p+"js/"+({about:"about",blog:"blog",picts:"picts"}[t]||t)+"."+{about:"6615edbb",blog:"bae0fcaa",picts:"736949e4"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=s(t);var c=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/photos"}},[t._v("Photos")]),t._v(" | "),n("router-link",{attrs:{to:"/posts"}},[t._v("Blog")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},i=[],s=(n("034f"),n("2877")),a={},u=Object(s["a"])(a,o,i,!1,null,null,null),c=u.exports,l=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"row",attrs:{id:"home"}},[n("ul",{staticStyle:{"text-align":"right"},attrs:{id:"project-list"}},[n("h2",[t._v("Projects")]),t._l(t.repos,(function(e){return n("li",{key:e.id},[n("h3",{staticClass:"name"},[n("a",{attrs:{href:e.html_url}},[t._v(t._s(e.name)+" ")])]),t._v(" "),n("p",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")])])}))],2),n("ul",{staticStyle:{"text-align":"left"},attrs:{id:"subscriptions-list"}},[n("h2",[t._v("Watching")]),t._l(t.subs,(function(e){return n("li",{key:e.id},[n("h3",{staticClass:"name"},[n("a",{attrs:{href:e.html_url}},[t._v(t._s(e.name)+" ")])]),t._v(" "),n("p",{staticClass:"description"},[t._v(" "+t._s(e.description)+" ")])])}))],2)])},h=[],f={data:function(){return{repos:[{name:"Loading Titles",description:"Loading descriptions",html_url:"https://github.com/dacresni/dacresni"}],subs:[{name:"Loading Titles",description:"Loading descriptions",html_url:"https://github.com/dacresni/dacresni"}]}},created:function(){this.fetchRepos(),this.fetchSubs()},watch:{$route:"fetchData"},methods:{fetchRepos:function(){var t=this;fetch("https://api.github.com/users/dacresni/repos").then((function(t){return t.json()})).then((function(e){return t.repos=e}))},fetchSubs:function(){var t=this;fetch("https://api.github.com/users/dacresni/subscriptions").then((function(t){return t.json()})).then((function(e){return t.subs=e}))}}},d=f,m=Object(s["a"])(d,p,h,!1,null,null,null),b=m.exports;r["a"].use(l["a"]);var v=[{path:"/",name:"Home",component:b,meta:{title:"Nehemiah's Project Dashboard"}},{path:"/about",name:"About",meta:{title:"About Nehemiah's Awesome Website"},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/photos",name:"Photography",meta:{title:"About Nehemiah's Awesome Photography"},component:function(){return n.e("picts").then(n.bind(null,"0af3"))}},{path:"/posts",name:"Blog",meta:{title:"About Nehemiah's Awesome Blog"},component:function(){return n.e("blog").then(n.bind(null,"fd3f"))}}],g=new l["a"]({routes:v}),_=g;r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.b90a0214.js.map