(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],d=0,p=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({output:"output"}[e]||e)+"."+{output:"c50162f5"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={output:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({output:"output"}[e]||e)+"."+{output:"4a7d8287"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===c))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],d=s.getAttribute("data-href");if(d===r||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],l.parentNode.removeChild(l),n(a)},l.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var p=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}c[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="versed/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var l=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1957:function(e,t,n){e.exports=n.p+"img/house-door.23f15fc7.svg"},"2fe3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"view-layout"};function c(e,t,n,c,a,u){var i=Object(r["z"])("Header"),s=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(i),Object(r["h"])("div",o,[Object(r["j"])(s)])],64)}var a=n("1957"),u=n.n(a),i=n("abd3"),s=n.n(i),d=n("9db5"),p=n.n(d),l=function(e){return Object(r["v"])("data-v-a1fdd858"),e=e(),Object(r["t"])(),e},f={class:"header"},b={class:"header__left"},g=l((function(){return Object(r["h"])("img",{src:u.a,alt:"Bootstrap",width:"32",height:"32"},null,-1)})),O=l((function(){return Object(r["h"])("img",{src:s.a,alt:"Bootstrap",width:"32",height:"32"},null,-1)})),h=Object(r["i"])("Login"),v=Object(r["i"])("Register"),j=l((function(){return Object(r["h"])("img",{src:p.a,alt:"Bootstrap",width:"32",height:"32"},null,-1)})),m=[j];function y(e,t,n,o,c,a){var u=Object(r["z"])("router-link");return Object(r["s"])(),Object(r["g"])("div",f,[Object(r["h"])("div",b,[Object(r["j"])(u,{to:"/"},{default:Object(r["F"])((function(){return[g]})),_:1}),c.isLoggedIn?(Object(r["s"])(),Object(r["e"])(u,{key:0,to:"/verses"},{default:Object(r["F"])((function(){return[O]})),_:1})):Object(r["f"])("",!0),c.isLoggedIn?Object(r["f"])("",!0):(Object(r["s"])(),Object(r["e"])(u,{key:1,to:"/login"},{default:Object(r["F"])((function(){return[h]})),_:1})),c.isLoggedIn?Object(r["f"])("",!0):(Object(r["s"])(),Object(r["e"])(u,{key:2,to:"/register"},{default:Object(r["F"])((function(){return[v]})),_:1}))]),c.isLoggedIn?(Object(r["s"])(),Object(r["g"])("a",{key:0,class:"header__right",onClick:t[0]||(t[0]=Object(r["H"])((function(){return a.signOut&&a.signOut.apply(a,arguments)}),["prevent"]))},m)):Object(r["f"])("",!0)])}var _=n("1da1"),E=(n("ac1f"),n("5319"),n("96cf"),n("ea7b")),w=n("260b"),A={apiKey:"AIzaSyB1aKO6Yial7CluAObTBBD7nMFEqGYUiV4",authDomain:"verseed.firebaseapp.com",projectId:"verseed",storageBucket:"verseed.appspot.com",messagingSenderId:"149138909843",appId:"1:149138909843:web:6898c1f8ccc83d8b46bb66"};w["initializeApp"](A);var I=Object(E["b"])(),S={name:"Header",data:function(){return{isLoggedIn:!1}},methods:{signOut:function(){return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E["e"])(I);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}},mounted:function(){var e=this;Object(E["c"])(I,(function(t){if(t){e.isLoggedIn=!0;var n=t.uid;console.log(n)}else e.isLoggedIn=!1,e.$router.replace({name:"Login"})}))}},L=(n("a2b0"),n("6b0d")),N=n.n(L);const k=N()(S,[["render",y],["__scopeId","data-v-a1fdd858"]]);var B=k,D={name:"App",components:{Header:B}};n("60d4");const x=N()(D,[["render",c]]);var P=x,R=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),T={class:"home"};function C(e,t,n,o,c,a){return Object(r["s"])(),Object(r["g"])("div",T," Home ")}var U={name:"Home"};n("8dd3");const H=N()(U,[["render",C]]);var V=H,M=[{path:"/",name:"Home",component:V},{path:"/login",name:"Login",component:function(){return n.e("output").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("output").then(n.bind(null,"73cf"))}},{path:"/verses",name:"Verses",component:function(){return n.e("output").then(n.bind(null,"1518"))}}],z=Object(R["a"])({history:Object(R["b"])(),routes:M}),F=z,K=n("5502"),q=Object(K["a"])({state:{},mutations:{},actions:{},modules:{}}),G={apiKey:Object({NODE_ENV:"production",BASE_URL:"versed/"}).API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:"versed/"}).AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",BASE_URL:"versed/"}).PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:"versed/"}).STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"versed/"}).MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",BASE_URL:"versed/"}).APP_ID};w["initializeApp"](G),Object(r["d"])(P).use(q).use(F).mount("#app").use(w)},"60d4":function(e,t,n){"use strict";n("f540")},"8dd3":function(e,t,n){"use strict";n("b406")},"9db5":function(e,t,n){e.exports=n.p+"img/box-arrow-in-right.34e20ac3.svg"},a2b0:function(e,t,n){"use strict";n("2fe3")},abd3:function(e,t,n){e.exports=n.p+"img/pencil-square.9780a190.svg"},b406:function(e,t,n){},f540:function(e,t,n){}});
//# sourceMappingURL=app.525e9afd.js.map