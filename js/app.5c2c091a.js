(function(e){function n(n){for(var a,r,c=n[0],s=n[1],i=n[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==o[c]&&(a=!1)}a&&(u.splice(n--,1),e=s(s.s=t[0]))}return e}var a={},r={app:0},o={app:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0286ab46":"722e86cb","chunk-18667fee":"58ae5f42","chunk-29590bba":"1c325837","chunk-2d0f0a41":"b425e98d","chunk-2d21083e":"bd664705","chunk-3893a25e":"5e3a1a3e","chunk-2d0b308b":"839edba9","chunk-2d20f743":"d4772b51","chunk-2d2176e8":"3a9a5093","chunk-2d21a3d2":"d4a0fc21","chunk-ad71c716":"436df7e8"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-3893a25e":1,"chunk-ad71c716":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0286ab46":"31d6cfe0","chunk-18667fee":"31d6cfe0","chunk-29590bba":"31d6cfe0","chunk-2d0f0a41":"31d6cfe0","chunk-2d21083e":"31d6cfe0","chunk-3893a25e":"da9e2809","chunk-2d0b308b":"31d6cfe0","chunk-2d20f743":"31d6cfe0","chunk-2d2176e8":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-ad71c716":"1406eada"}[e]+".css",o=s.p+a,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===a||l===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],f.parentNode.removeChild(f),t(u)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var u=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,t[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(t,a,function(n){return e[n]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var f=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n),t.d(n,"db",(function(){return L}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=t("2591"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e.user?t("div",[t("NavBarVendedor")],1):t("div",[t("NavBar")],1),t("router-view")],1)},u=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{},[t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t("a",{staticClass:"navbar-brand",attrs:{href:"/home"}},[e._v("Home")]),e._m(0),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[t("div",{staticClass:"navbar-nav ml-auto"},[t("a",[t("router-link",{staticClass:"active nav-link",attrs:{to:{name:"Login"}}},[e._v("Ingresar")])],1),t("a",[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"Signup"}}},[e._v("Registrar")])],1)])])])])},s=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],i={name:"NavBar"},l=i,d=(t("ed6b"),t("2877")),f=Object(d["a"])(l,c,s,!1,null,null,null),p=f.exports,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Compañia")]),e._m(0),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[t("div",{staticClass:"navbar-nav"},[t("a",[t("router-link",{staticClass:"active nav-link",attrs:{to:{name:"Home"}}},[e._v("Home")])],1),t("a",[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"Vendedores"}}},[e._v("Vendedores")])],1),t("a",[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"#"}}},[e._v("Pedidos")])],1),t("a",[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"#"}}},[e._v("Profile")])],1),t("a",[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"Add"}}},[e._v("Añadir Usuarios")])],1),t("a",[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"List"}}},[e._v("Listar Usuarios")])],1),t("button",{staticClass:"btn btn-dark btn-lg btn-block",on:{click:function(n){return e.logOut()}}},[e._v("Salir")])])])])},b=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],v=t("5530"),m=t("2f62"),g={name:"NavBarVendedor",methods:Object(v["a"])({},Object(m["b"])(["logOut"]))},k=g,y=Object(d["a"])(k,h,b,!1,null,"810ae9d6",null),_=y.exports,C={name:"App",data:function(){return{user:null}},components:{NavBar:p,NavBarVendedor:_},created:function(){var e=this;r["a"].auth().onAuthStateChanged((function(n){e.user=n||null}))}},w=C,O=Object(d["a"])(w,o,u,!1,null,null,null),A=O.exports,S=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));a["default"].use(S["a"]);var j=[{path:"*",name:"home",props:!0,component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"/",name:"Home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"/dashboard",name:"Dashboard",props:!0,component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-3893a25e")]).then(t.bind(null,"7277"))}},{path:"/signup",name:"Signup",component:function(){return t.e("chunk-0286ab46").then(t.bind(null,"fccd"))}},{path:"/login",name:"Login",component:function(){return t.e("chunk-2d20f743").then(t.bind(null,"b461"))}},{path:"/forgot-password",name:"forgot-password",component:function(){return t.e("chunk-2d2176e8").then(t.bind(null,"c764"))}},{path:"/vendedores",name:"Vendedores",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-2d21083e")]).then(t.bind(null,"b7e8"))}},{path:"/vendedores/ficha",name:"FichaVendedor",component:function(){return Promise.all([t.e("chunk-29590bba"),t.e("chunk-2d0f0a41")]).then(t.bind(null,"9cde"))}},{path:"/user",name:"Add",component:function(){return t.e("chunk-18667fee").then(t.bind(null,"1c37"))}},{path:"/list",name:"List",component:function(){return t.e("chunk-ad71c716").then(t.bind(null,"e898"))}},{path:"/edit/:id",name:"edit",component:function(){return t.e("chunk-2d0b308b").then(t.bind(null,"273c"))}}],N=new S["a"]({mode:"history",base:"/",routes:j}),x=N;a["default"].use(m["a"]);var E=new m["a"].Store({state:{user:null},mutations:{},actions:{logOut:function(){r["a"].auth().signOut().then((function(){r["a"].auth().onAuthStateChanged((function(){x.push("/home")}))}))}},modules:{}}),P=(t("4989"),t("f9e3"),t("2dd8"),t("5f5b")),M=t("b1e0");a["default"].use(P["a"]),a["default"].use(M["a"]),a["default"].config.productionTip=!1;var B={apiKey:"AIzaSyDQX2Uq7sE1QdM5pbF4cmAxD43OgSsrasU",authDomain:"proyecto-ventas-8f6a1.firebaseapp.com",projectId:"proyecto-ventas-8f6a1",storageBucket:"proyecto-ventas-8f6a1.appspot.com",messagingSenderId:"1066389884372",appId:"1:1066389884372:web:3cf4639e5d1d9f286eda41"},L=r["a"].initializeApp(B).firestore();new a["default"]({router:x,store:E,render:function(e){return e(A)}}).$mount("#app")},d5a8:function(e,n,t){},ed6b:function(e,n,t){"use strict";t("d5a8")}});
//# sourceMappingURL=app.5c2c091a.js.map