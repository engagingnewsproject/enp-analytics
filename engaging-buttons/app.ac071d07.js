(function(t){function s(s){for(var e,c,r=s[0],a=s[1],u=s[2],d=0,f=[];d<r.length;d++)c=r[d],o[c]&&f.push(o[c][0]),o[c]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);l&&l(s);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,s=0;s<i.length;s++){for(var n=i[s],e=!0,r=1;r<n.length;r++){var a=n[r];0!==o[a]&&(e=!1)}e&&(i.splice(s--,1),t=c(c.s=n[0]))}return t}var e={},o={1:0},i=[];function c(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=e,c.d=function(t,s,n){c.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,s){if(1&s&&(t=c(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)c.d(n,e,function(s){return t[s]}.bind(null,e));return n},c.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(s,"a",s),s},c.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=s,r=r.slice();for(var u=0;u<r.length;u++)s(r[u]);var l=a;i.push([11,0]),n()})({"0HNW":function(t,s,n){"use strict";var e=n("fAVh"),o=n.n(e);o.a},11:function(t,s,n){t.exports=n("Vtdi")},"37OB":function(t,s,n){},"4WWr":function(t,s,n){"use strict";var e=n("a+JI"),o=n.n(e);o.a},"8hm5":function(t,s,n){"use strict";var e=n("BP5q"),o=n.n(e);o.a},BFHo:function(t,s,n){},BP5q:function(t,s,n){},FBRY:function(t,s,n){},Se3u:function(t,s,n){"use strict";var e=n("37OB"),o=n.n(e);o.a},Vtdi:function(t,s,n){"use strict";n.r(s);n("VRzm");var e=n("Kw5r"),o=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"app",class:{"app--error":t.error,"app--loading":t.loading},attrs:{id:"app"}},[n("header",{staticClass:"container"},[n("h1",{staticClass:"app__title"},[t._v("Engaging Button Data")]),n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/sites"}},[t._v("Sites")]),n("router-link",{attrs:{to:"/buttons"}},[t._v("Buttons")]),n("router-link",{attrs:{to:"/clicks"}},[t._v("Clicks")])],1)]),n("div",{staticClass:"visually-hidden",staticStyle:{position:"absolute",width:"0",height:"0"}},[n("svg",{staticStyle:{display:"none"}},[n("symbol",{attrs:{id:"icon-up",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),n("symbol",{attrs:{id:"icon-down",width:"24px",height:"24px",viewBox:"0 0 24 24","enable-background":"new 0 0 24 24","xml:space":"preserve"}},[n("path",{attrs:{d:"M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"}}),n("path",{attrs:{fill:"none",d:"M0,0h24v24H0V0z"}})])])]),t.error?n("main",{staticClass:"main container"},[n("p",[t._v("Error")])]):t._e(),n("main",{staticClass:"main container"},[n("router-view")],1)])},i=[],c=n("yT7P"),r=n("L2JU"),a={components:{},computed:Object(c["a"])({},Object(r["b"])(["loading","error"]))},u=a,l=(n("nNx0"),n("KHd+")),d=Object(l["a"])(u,o,i,!1,null,null,null),f=d.exports,h=n("jE9Z"),p=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"home-view"},[n("Buttons"),n("Clicks")],1)},b=[],g=function(){var t=this,s=t.$createElement,n=t._self._c||s;return 0==t.loading?n("div",{staticClass:"view view--buttons"},[n("section",{staticClass:"buttons"},t._l(t.buttons,function(t){return n("ButtonData",{key:t.slug,attrs:{button:t}})}))]):t.loading?n("Loader"):t._e()},v=[],_=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"button"},[n("h3",{staticClass:"button__name"},[n("router-link",{staticClass:"button__link",attrs:{to:{name:"button",params:{buttonSlug:t.button.slug}}}},[t._v(t._s(t.button.name))])],1),n("table",{staticClass:"button__table"},[n("tbody",t._l(t.button.data,function(s){return n("tr",[n("th",[t._v(t._s(s.key))]),n("td",[t._v(t._s(s.value))])])}))])])},k=[],C={name:"ButtonData",props:{button:Object}},m=C,y=(n("0HNW"),Object(l["a"])(m,_,k,!1,null,"0827bfaa",null)),B=y.exports,w=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"loader"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none","stroke-width":"2","stroke-miterlimit":"10"}})])])},x=[],S={name:"Loader",props:{}},O=S,j=(n("gpZ9"),Object(l["a"])(O,w,x,!1,null,"e9e9d07a",null)),P=j.exports,L={name:"Buttons",data:function(){return{loading:!0}},components:{ButtonData:B,Loader:P},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;return this.loading=!0,this.$store.dispatch("fetchButtons").then(function(){return t.loading=!1})}},computed:Object(c["a"])({},Object(r["b"])(["error","buttons"]))},$=L,E=(n("gW0H"),Object(l["a"])($,g,v,!1,null,"82fe7628",null)),D=E.exports,I=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"view view--clicks"},[n("h2",[t._v("Raw Click Log")]),0==t.loading?n("div",{staticClass:"view__inner"},[n("p",{staticClass:"row-count"},[t._v("Showing rows 0 - "+t._s(t.clicks.length))]),n("section",{staticClass:"clicks"},[n("ClickInfo",{attrs:{clicks:t.clicks,sortBy:t.getSort}}),n("div",{staticClass:"clicks__status"},[n("p",{staticClass:"row-count"},[t._v("Showing Rows 0 - "+t._s(t.clicks.length))]),!1===t.allClicks?n("div",{staticClass:"clicks__add-rows"},[n("button",{staticClass:"btn btn--add-clicks",on:{click:function(s){t.fetchMoreClicks(100,s)}}},[t._v("100 More")]),n("button",{staticClass:"btn btn--add-clicks",on:{click:function(s){t.fetchMoreClicks("all",s)}}},[t._v("All")])]):t._e()])],1)]):t.loading?n("Loader"):t._e()],1)},U=[],R=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"click-info"},[n("table",[n("thead",[n("th",[t._v("Button\n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortClicksBy("button","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortClicksBy("button","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("Post Type\n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortClicksBy("post_type","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortClicksBy("post_type","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("Clicks\n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortClicksBy("clicks","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortClicksBy("clicks","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("Updated\n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortClicksBy("updated","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortClicksBy("updated","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("URL\n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortClicksBy("button_url","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortClicksBy("button_url","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])])]),n("tbody",t._l(t.clicks,function(s){return n("tr",[n("td",[t._v(t._s(s.button))]),n("td",[t._v(t._s(s.post_type))]),n("td",[t._v(t._s(s.clicks))]),n("td",[t._v(t._s(s.updated))]),n("td",{staticClass:"td__url"},[n("a",{attrs:{href:s.button_url}},[t._v(t._s(s.button_url))])])])}))])])},H=[],M=(n("Vd3H"),{name:"ClickInfo",props:{clicks:Array,sortBy:Object},created:function(){this.clicks&&this.sortClicks(this.sortBy.field,this.sortBy.order)},methods:{sortClicksBy:function(t,s){this.sortBy.field===t&&this.sortBy.order===s||this.sortClicks(t,s)},sortClicks:function(t,s){this.clicks.sort(this.compareValues(t,s)),this.sortBy.field=t,this.sortBy.order=s},compareValues:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,e){if(!n.hasOwnProperty(t)||!e.hasOwnProperty(t))return 0;var o="string"===typeof n[t]?n[t].toUpperCase():n[t],i="string"===typeof e[t]?e[t].toUpperCase():e[t],c=0;return o>i?c=1:o<i&&(c=-1),"desc"==s?-1*c:c}}},computed:Object(c["a"])({},Object(r["b"])(["loading","error"]))}),V=M,F=(n("4WWr"),Object(l["a"])(V,R,H,!1,null,"3f67ba96",null)),W=F.exports,T={name:"Clicks",data:function(){return{page:0,count:100,allClicks:!1,loading:!0}},components:{ClickInfo:W,Loader:P},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;return this.loading=!0,this.$store.dispatch("fetchClicks",this.count).then(function(){return t.loading=!1})},fetchMoreClicks:function(t,s){var n=this;this.loading=!0;var e=this.clicks.length;this.$store.dispatch("fetchClicks",this.count).then(function(){e!==n.clicks.length?"all"===t?n.fetchMoreClicks("all",s):n.loading=!1:(console.log("all clicks found"),n.allClicks=!0,n.loading=!1)})},clicksSlice:function(){return this.clicks.slice(this.page,(this.page+1)*this.count)}},computed:Object(c["a"])({getSort:function(){return{field:"date",order:"desc"}}},Object(r["b"])(["error","clicks"]))},z=T,J=(n("Zlsz"),Object(l["a"])(z,I,U,!1,null,"3e7ec719",null)),N=J.exports,Z={name:"home",components:{Buttons:D,Clicks:N},computed:Object(c["a"])({},Object(r["b"])(["loading","error","sites","site"]))},A=Z,K=(n("8hm5"),Object(l["a"])(A,p,b,!1,null,"22817d26",null)),q=K.exports,Y=function(){var t=this,s=t.$createElement,n=t._self._c||s;return 0==t.loading?n("div",{staticClass:"view view--sites"},[n("div",{staticClass:"filter"},[n("label",[t._v("Search Sites"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"filter__input",attrs:{type:"text"},domProps:{value:t.search},on:{input:function(s){s.target.composing||(t.search=s.target.value)}}})])]),t.filteredSites.length>0?n("section",{staticClass:"sites"},t._l(t.filteredSites,function(t){return n("SitePreview",{key:t.id,attrs:{site:t}})})):n("section",{staticClass:"no-sites"},[t._v('\n    No sites found for search "'+t._s(t.search)+'"\n  ')])]):t.loading?n("Loader"):t._e()},G=[],Q=(n("OG14"),function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"site"},[n("h3",{staticClass:"site__url"},[n("router-link",{staticClass:"site__link",attrs:{to:{name:"site",params:{siteEncodedURL:t.site.encodedURL}}}},[t._v(t._s(t.site.url))])],1),n("div",{staticClass:"site__buttons"},[n("table",{staticClass:"site__button"},[t._m(0),n("tbody",t._l(t.site.buttons,function(s,e){return n("tr",{key:e},[n("td",[t._v(t._s(s.slug))]),n("td",[t._v(t._s(s.clicks))])])}))])])])}),X=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("thead",[n("th",[t._v("Button")]),n("th",[t._v("Clicks")])])}],tt={name:"SitePreview",props:{site:Object}},st=tt,nt=(n("uWEB"),Object(l["a"])(st,Q,X,!1,null,"40876be8",null)),et=nt.exports,ot={name:"sites",data:function(){return{search:"",loading:!0}},components:{SitePreview:et,Loader:P},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;return this.loading=!0,this.$store.dispatch("fetchSites").then(function(){return t.loading=!1})}},computed:Object(c["a"])({filteredSites:function(){return this.filterSites(this.search)}},Object(r["b"])(["error","sites","server","filterSites"]))},it=ot,ct=(n("Se3u"),Object(l["a"])(it,Y,G,!1,null,"52971064",null)),rt=ct.exports,at=function(){var t=this,s=t.$createElement,n=t._self._c||s;return 0==t.loading?n("SiteInfo",{key:t.getSite.id,attrs:{site:t.getSite,sortBy:t.getSort}}):t.loading?n("Loader"):t._e()},ut=[],lt=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"site-info"},[n("h2",{staticClass:"site__title"},[n("a",{attrs:{href:t.site.url}},[t._v(t._s(t.site.url))])]),n("table",[n("thead",[n("th",[t._v("Button \n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortPostsBy("button","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortPostsBy("button","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("Type \n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortPostsBy("post_type","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortPostsBy("post_type","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("Clicks \n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortPostsBy("clicks","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortPostsBy("clicks","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])])]),n("tbody",t._l(t.site.posts,function(s){return n("tr",{key:s.id},[n("td",[n("a",{attrs:{href:s.button_url}},[t._v(t._s(s.button))])]),n("td",[t._v(t._s(s.post_type))]),n("td",[t._v(t._s(s.clicks))])])}))])])},dt=[],ft={name:"SiteInfo",props:{site:Object,sortBy:Object},created:function(){this.site.posts&&this.sortPosts(this.sortBy.field,this.sortBy.order)},methods:{sortPostsBy:function(t,s){this.sortBy.field===t&&this.sortBy.order===s||this.sortPosts(t,s)},sortPosts:function(t,s){this.site.posts.sort(this.compareValues(t,s)),this.sortBy.field=t,this.sortBy.order=s},compareValues:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,e){if(!n.hasOwnProperty(t)||!e.hasOwnProperty(t))return 0;var o="string"===typeof n[t]?n[t].toUpperCase():n[t],i="string"===typeof e[t]?e[t].toUpperCase():e[t],c=0;return o>i?c=1:o<i&&(c=-1),"desc"==s?-1*c:c}}}},ht=ft,pt=(n("cpJm"),Object(l["a"])(ht,lt,dt,!1,null,"6e320be3",null)),bt=pt.exports,gt={name:"site",data:function(){return{loading:!0}},components:{SiteInfo:bt,Loader:P},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;return this.loading=!0,console.log("fetching data"),this.$store.dispatch("fetchSitePosts",this.$route.params.siteEncodedURL).then(function(){t.loading=!1,console.log("eftched")})}},computed:Object(c["a"])({getSite:function(){return this.site(this.$route.params.siteEncodedURL)},getSort:function(){return{field:"clicks",order:"desc"}}},Object(r["b"])(["error","sites","site"]))},vt=gt,_t=Object(l["a"])(vt,at,ut,!1,null,null,null),kt=_t.exports,Ct=function(){var t=this,s=t.$createElement,n=t._self._c||s;return 0==t.loading?n("ButtonInfo",{key:t.getButton.id,attrs:{button:t.getButton,sortBy:t.getSort}}):t.loading?n("Loader"):t._e()},mt=[],yt=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"button-info"},[n("h2",{staticClass:"button__name"},[t._v(t._s(t.button.name))]),n("table",[n("thead",[n("th",[t._v("URL\n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortButtonsBy("button_url","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortButtonsBy("button_url","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("Post Type \n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortButtonsBy("post_type","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortButtonsBy("post_type","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])]),n("th",[t._v("Date \n          "),n("span",{staticClass:"order-wrap"},[n("button",{staticClass:"btn--icon up",on:{click:function(s){t.sortButtonsBy("date","asc")}}},[n("svg",{staticClass:"icon-up"},[n("use",{attrs:{"xlink:href":"#icon-up"}})])]),n("button",{staticClass:"btn--icon down",on:{click:function(s){t.sortButtonsBy("date","desc")}}},[n("svg",{staticClass:"icon-down"},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])])])]),n("tbody",t._l(t.button.clicks,function(s){return n("tr",[n("td",{staticClass:"td__url"},[n("a",{attrs:{href:s.button_url}},[t._v(t._s(s.button_url))])]),n("td",[t._v(t._s(s.post_type))]),n("td",[t._v(t._s(s.date))])])}))])])},Bt=[],wt={name:"ButtonInfo",props:{button:Object,sortBy:Object},created:function(){this.button.clicks&&this.sortButtons(this.sortBy.field,this.sortBy.order)},methods:{sortButtonsBy:function(t,s){this.sortBy.field===t&&this.sortBy.order===s||this.sortButtons(t,s)},sortButtons:function(t,s){this.button.clicks.sort(this.compareValues(t,s)),this.sortBy.field=t,this.sortBy.order=s},compareValues:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(n,e){if(!n.hasOwnProperty(t)||!e.hasOwnProperty(t))return 0;var o="string"===typeof n[t]?n[t].toUpperCase():n[t],i="string"===typeof e[t]?e[t].toUpperCase():e[t],c=0;return o>i?c=1:o<i&&(c=-1),"desc"==s?-1*c:c}}}},xt=wt,St=(n("eBTb"),Object(l["a"])(xt,yt,Bt,!1,null,"4b010907",null)),Ot=St.exports,jt={name:"theButton",data:function(){return{loading:!0}},components:{ButtonInfo:Ot,Loader:P},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;return this.loading=!0,this.$store.dispatch("fetchButtonClicks",this.$route.params.buttonSlug).then(function(){return t.loading=!1})}},computed:Object(c["a"])({getButton:function(){return this.button(this.$route.params.buttonSlug)},getSort:function(){return{field:"date",order:"desc"}}},Object(r["b"])(["error","buttons","button"]))},Pt=jt,Lt=Object(l["a"])(Pt,Ct,mt,!1,null,null,null),$t=Lt.exports;e["a"].use(h["a"]);var Et=new h["a"]({routes:[{path:"/",name:"Home",component:q},{path:"/clicks",name:"Clicks",component:N},{path:"/buttons",name:"Buttons",component:D},{path:"/buttons/:buttonSlug",name:"button",component:$t},{path:"/sites",name:"sites",component:rt},{path:"/sites/:siteEncodedURL",name:"site",component:kt}]}),Dt=(n("f3/d"),n("Z2Ku"),n("L9s1"),n("dRSK"),n("vDqi")),It=n.n(Dt);e["a"].use(r["a"]);var Ut=It.a.create({baseURL:(!1===/(?:localhost:8080|.+\.test)/.test(window.location.host)?"https://data.mediaengagement.org":"https://cme-data.test")+"/engaging-buttons/api/v1",timeout:5e3}),Rt=new r["a"].Store({state:{server:Ut,loading:!0,fetching:!1,error:!1,sites:void 0,buttons:void 0,clicks:[]},mutations:{setError:function(t,s){t.error=s},setLoading:function(t,s){t.loading=s},setFetching:function(t,s){t.fetching=s},setClicks:function(t,s){console.log("clicks set"),t.clicks=s},setButtons:function(t,s){console.log("buttons set"),t.buttons=s},setButtonClicks:function(t,s){t.buttons[s.buttonIndex].clicks=s.button.clicks},setSites:function(t,s){console.log("sites set"),t.sites=s},setSitePosts:function(t,s){t.sites[s.siteIndex].posts=s.site.posts}},getters:{loading:function(t){return t.loading},fetching:function(t){return t.fetching},error:function(t){return t.error},server:function(t){return t.server},clicks:function(t){return t.clicks},buttons:function(t){return t.buttons},button:function(t,s){return function(t){return s.buttons.find(function(s){return s.slug===t})}},buttonIndexBy:function(t,s){return function(t,n){return s.indexBy(s.buttons,t,n)}},sites:function(t){return t.sites},filterSites:function(t){return function(s){return""==s?t.sites:t.sites.filter(function(t){return t.url.includes(s)})}},site:function(t,s){return function(t){return s.sites.find(function(s){return s.encodedURL===t})}},siteIndexBy:function(t,s){return function(t,n){return s.indexBy(s.sites,t,n)}},indexBy:function(){return function(t,s,n){for(var e=0;e<t.length;e++)if(t[e][s]==n)return e}}},actions:{error:function(t,s){t.commit("setError",s)},loading:function(t,s){t.commit("setLoading",s)},fetching:function(t,s){t.commit("setFetching",s)},sitePosts:function(t,s){t.commit("setSitePosts",s)},fetchClicks:function(t,s){console.log("fetching clicks"),t.dispatch("fetching",!0);var n=0;void 0===s&&(s=100);var e=t.getters.clicks;return e.length&&(n=Math.ceil(e.length/s)),t.getters.server("/clicks?count="+s+"&page="+n).then(function(s){console.log("fetched clicks");var n=s.data;console.log(n);for(var o=0;o<n.length;o++)n[o].key=e.length+o+1;e=e.concat(n),t.commit("setClicks",e)}).catch(function(s){console.error(s),t.dispatch("error",!0)}).finally(function(){t.dispatch("fetching",!1)})},fetchButtons:function(t){return console.log("fetching buttons"),t.dispatch("fetching",!0),t.getters.server("/buttons").then(function(s){console.log("fetched buttons");for(var n=s.data,e=0;e<n.length;e++)n[e].key=e,n[e].clicks=void 0;t.commit("setButtons",n)}).catch(function(s){console.error(s),t.dispatch("error",!0)}).finally(function(){t.dispatch("fetching",!1)})},fetchButtonClicks:function(t,s){return void 0===t.getters.sites?t.dispatch("fetchButtons").then(function(){t.dispatch("asyncFetchButtonClicks",s)}):t.dispatch("asyncFetchButtonClicks",s)},asyncFetchButtonClicks:function(t,s){return console.log("fetching button clicks"),t.dispatch("fetching",!0),t.getters.server.get("/buttons/"+s).then(function(n){console.log("fetched button clicks"),console.log("clicks",n.data),t.commit("setButtonClicks",{button:n.data,buttonIndex:t.getters.buttonIndexBy("slug",s)})}).catch(function(s){console.error(s),t.dispatch("error",!0)}).finally(function(){t.dispatch("fetching",!1)})},fetchSites:function(t){return console.log("fetching sites"),t.dispatch("fetching",!0),t.getters.server("/sites").then(function(s){console.log("fetched sites");for(var n=s.data,e=0;e<n.length;e++)n[e].key=e,n[e].encodedURL=encodeURIComponent(n[e].url),n[e].posts=void 0;t.commit("setSites",n)}).catch(function(s){console.error(s),t.dispatch("error",!0)}).finally(function(){t.dispatch("fetching",!1)})},fetchSitePosts:function(t,s){return void 0===t.getters.sites?t.dispatch("fetchSites").then(function(){t.dispatch("asyncFetchSitePosts",s)}):t.dispatch("asyncFetchSitePosts",s)},asyncFetchSitePosts:function(t,s){return console.log("fetching site posts"),t.dispatch("fetching",!0),t.getters.server.get("/sites/"+s).then(function(n){console.log("fetched site posts"),console.log("posts",n.data),t.commit("setSitePosts",{site:n.data,siteIndex:t.getters.siteIndexBy("encodedURL",s)})}).catch(function(s){console.error(s),t.dispatch("error",!0)}).finally(function(){t.dispatch("fetching",!1)})}}});e["a"].config.productionTip=!1,new e["a"]({router:Et,store:Rt,render:function(t){return t(f)}}).$mount("#app")},Zlsz:function(t,s,n){"use strict";var e=n("FBRY"),o=n.n(e);o.a},"a+JI":function(t,s,n){},boi5:function(t,s,n){},cWgw:function(t,s,n){},cpJm:function(t,s,n){"use strict";var e=n("cWgw"),o=n.n(e);o.a},eBTb:function(t,s,n){"use strict";var e=n("BFHo"),o=n.n(e);o.a},fAVh:function(t,s,n){},gW0H:function(t,s,n){"use strict";var e=n("iLt2"),o=n.n(e);o.a},gpZ9:function(t,s,n){"use strict";var e=n("xiH1"),o=n.n(e);o.a},iLt2:function(t,s,n){},nNx0:function(t,s,n){"use strict";var e=n("boi5"),o=n.n(e);o.a},oDns:function(t,s,n){},uWEB:function(t,s,n){"use strict";var e=n("oDns"),o=n.n(e);o.a},xiH1:function(t,s,n){}});
//# sourceMappingURL=app.ac071d07.js.map