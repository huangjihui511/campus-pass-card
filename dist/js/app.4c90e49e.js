(function(e){function t(t){for(var n,s,i=t[0],u=t[1],l=t[2],c=0,f=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"61867d6a"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"2ce1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Base")],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.pass?e._e():n("div",[n("h1",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.submit}},[e._v("Submit")])]),e.pass?n("div",{on:{touchmove:function(e){e.preventDefault()}}},[n("img",{attrs:{id:"base",src:r("fc34"),width:"100%"}}),n("div",{attrs:{id:"mask"}}),n("img",{attrs:{id:"profile",src:r("c3e7"),width:"30%"}}),n("Points",{attrs:{id:"points"}}),n("TimeLabel",{attrs:{id:"timeLabel"}})],1):e._e()])},i=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"time"}},[e._v(e._s(this.time))])])},l=[],c={name:"TimeLabel",data:function(){return{time:""}},methods:{timeStart:function(){this.time=setInterval(this.timer,500)},timer:function(){var e=new Date,t=e.getUTCMonth()+1,r=e.getFullYear()+"年"+t+"月"+e.getDate()+"日",n=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();this.time=r+" "+n}},created:function(){this.timeStart()}},p=c,f=(r("61bb"),r("2877")),v=Object(f["a"])(p,u,l,!1,null,"1142eb34",null),d=v.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[0===e.index?n("img",{attrs:{src:r("b0c6"),width:"50%"}}):e._e(),1===e.index?n("img",{attrs:{src:r("7862"),width:"50%"}}):e._e()])])},h=[],g={name:"Points",data:function(){return{index:0}},methods:{timeStart:function(){setInterval(this.timer,500)},timer:function(){this.index=(this.index+1)%2}},created:function(){this.timeStart()}},b=g,_=Object(f["a"])(b,m,h,!1,null,"3afa3bdb",null),w=_.exports,j={name:"Base",components:{Points:w,TimeLabel:d},data:function(){return{pass:!1,password:"",realPassword:"yes"}},methods:{submit:function(){this.password===this.realPassword&&(this.pass=!0)}}},k=j,x=(r("76a7"),Object(f["a"])(k,s,i,!1,null,"00e42b92",null)),y=x.exports,O={components:{Base:y}},P=O,E=(r("034f"),Object(f["a"])(P,o,a,!1,null,null,null)),S=E.exports,$=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},C=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},H=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],M={name:"HelloWorld",props:{msg:String}},D=M,I=(r("b2a1"),Object(f["a"])(D,L,H,!1,null,"a87ea5ee",null)),W=I.exports,A={name:"Home",components:{HelloWorld:W}},B=A,F=Object(f["a"])(B,T,C,!1,null,null,null),J=F.exports;n["a"].use($["a"]);var N=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],V=new $["a"]({routes:N}),Y=V,q=r("2f62");n["a"].use(q["a"]);var z=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:Y,store:z,render:function(e){return e(S)}}).$mount("#app")},"61bb":function(e,t,r){"use strict";r("ddcf")},"76a7":function(e,t,r){"use strict";r("f64a")},7862:function(e,t,r){e.exports=r.p+"img/pointsR.eec3b63f.png"},"85ec":function(e,t,r){},b0c6:function(e,t,r){e.exports=r.p+"img/points.9764c24b.png"},b2a1:function(e,t,r){"use strict";r("2ce1")},c3e7:function(e,t,r){e.exports=r.p+"img/profile.f5229e28.png"},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},ddcf:function(e,t,r){},f64a:function(e,t,r){},fc34:function(e,t,r){e.exports=r.p+"img/base.8cfe018e.png"}});
//# sourceMappingURL=app.4c90e49e.js.map