(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{fd3f:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"Blog"}},[n("ul",{attrs:{id:"post-list"}},[n("h2",[t._v(t._s(t.blog.name))]),t._l(t.posts,(function(e){return n("li",{key:e.id},[n("h3",[n("a",{attrs:{href:e.url,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])]),n("p",[t._v(" Author :"+t._s(e.author.displayName)+" Published:"+t._s(e.published))])])}))],2)])},s=[],r=(n("d3b7"),{data:function(){return{posts:[],blog:{}}},created:function(){this.fetchBlog(),this.fetchTitles()},watch:{$route:"fetchData"},methods:{fetchTitles:function(){var t=this;fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/posts?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk").then((function(t){return t.json()})).then((function(e){return t.posts=e.items})).then((function(e){return t.nextToken=e.nextPageToken})).then((function(e){return t.selfLink=e.selfLink}))},fetchBlog:function(){var t=this;fetch("https://www.googleapis.com/blogger/v3/blogs/6205685541397557767/?key=AIzaSyArcKKnRP2Eb-I9laF1uTjhS3qa8xvVtXk").then((function(t){return t.json()})).then((function(e){return t.blog=e}))}}}),i=r,l=n("2877"),u=Object(l["a"])(i,o,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=blog.19e00086.js.map