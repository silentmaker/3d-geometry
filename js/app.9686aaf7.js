(function(t){function e(e){for(var a,s,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)s=o[l],i[s]&&p.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/3d-geometry/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var h=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},4294:function(t,e,n){t.exports=n.p+"img/default-avatar.7a87a1dd.png"},4350:function(t,e,n){"use strict";var a=n("5359"),i=n.n(a);i.a},5359:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("attendance",{attrs:{avatars:t.avatars,amount:t.amount}})},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",attrs:{id:"canvas-container"}},[n("video",{staticClass:"bg-video",attrs:{loop:"",autoplay:"",muted:"",src:"https://img2.51vj.cn/wall_activity/fs08.mp4"},domProps:{muted:!0}}),n("ul",{staticClass:"controls"},t._l(t.modes,function(e){return n("li",{key:e,class:{active:e===t.currentMode},on:{click:function(n){t.currentMode=e}}},[t._v(t._s(e.toUpperCase()))])}))])},o=[],c=(n("c5f6"),n("6c7b"),n("d4ec")),u=n("bee2"),h=function(t,e){return Math.round(Math.random()*(e-t))+t},l=function(t,e,n,a,i){switch(i){case"ease-out":return t/a*-(n-e)*(t/a-2)+e;case"ease-in":return(n-e)*Math.pow(t/a,2)+e;case"linear":default:return t*(n-e)/a+e}},p=n("4294"),f=n.n(p),d=new Image;d.src=f.a;var v=function(t){var e=t.image;return{x:0,y:0,z:0,image:e}},m=function(){function t(e){var n=e.canvas,a=e.type;Object(c["a"])(this,t),this.canvas=n,this.context=n.getContext("2d"),this.type=a,this.amount=216,this.size=64,this.timer=0,this.duration=60,this.rotation={rx:0,ry:0},this.items=this.initItems(),this.paint=this.paint.bind(this),requestAnimationFrame(this.paint)}return Object(u["a"])(t,[{key:"initItems",value:function(){for(var t=[],e=0;e<this.amount;e++){var n=v({image:d});this.resetItem(n,e,!0),t.push(n)}return t}},{key:"resetItem",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this.canvas,i=a.width,r=a.height,s=t.x,o=t.y,c=t.z;this.calcItem(t,e),t.targetX=t.x,t.targetY=t.y,t.targetZ=t.z,t.x=n?h(0,i):s,t.y=n?h(0,r):o,t.z=n?1:c}},{key:"updateItem",value:function(t){var e=t.x,n=t.y,a=t.z,i=t.targetX,r=t.targetY,s=t.targetZ,o=this.timer,c=this.duration;0===o&&(t.beginX=e,t.beginY=n,t.beginZ=a),o!==c&&(t.x=l(this.timer,t.beginX,i,c,"linear"),t.y=l(this.timer,t.beginY,r,c,"ease-in"),t.z=l(this.timer,t.beginZ,s,c,"ease-out"))}},{key:"paintItem",value:function(t){this.updateItem(t);var e=t.x,n=t.y,a=t.z,i=t.image,r=this.size,s=this.context,o=r*(1+.2*Math.sin(Date.now()/300+.01*e)),c=o/2;s.save(),s.globalAlpha=a/4+.75,s.beginPath(),s.arc(e,n,c,0,2*Math.PI,!0),s.closePath(),s.clip(),s.fillStyle="rgba(0, 0, 0, 0.2)",s.fill(),s.drawImage(i,e-c,n-c,o,o),s.restore()}},{key:"calcItem",value:function(t,e){var n=this.type;n&&this["".concat(n,"Calc")]?this["".concat(n,"Calc")](t,e):this.sphereCalc(t,e)}},{key:"planeCalc",value:function(t,e){var n=this.canvas,a=n.width,i=n.height,r=72,s=Math.floor(e%24)-11.5,o=Math.floor(e/24)-4;t.x=a/2+s*r,t.y=i/2+o*r,t.z=1}},{key:"sphereCalc",value:function(t,e){var n=this.canvas,a=n.width,i=n.height,r=this.rotation,s=r.rx,o=r.ry,c=.34*i,u=Math.acos(2*e/this.amount-1),h=Math.sqrt(this.amount*Math.PI)*u+s,l=Math.cos(h)*Math.sin(u)*c,p=Math.cos(u)*c;t.x=a/2+(l*Math.sin(o)+p*Math.cos(o)),t.y=i/2+(l*Math.cos(o)-p*Math.sin(o)),t.z=Math.sin(h)*Math.sin(u)}},{key:"cubeCalc",value:function(t,e){var n=this.canvas,a=n.width,i=n.height,r=this.rotation,s=r.rx,o=r.ry,c=84,u=e%36%6-2.5,h=Math.floor(e%36/6)-2.5,l=Math.floor(e/36)-2.5,p=u*Math.sin(o)+l*Math.cos(o),f=u*Math.cos(o)-l*Math.sin(o),d=h*Math.sin(s)+f*Math.cos(s);f=h*Math.cos(s)-f*Math.sin(s),t.x=a/2+p*c,t.y=i/2+d*c,t.z=f/2.5}},{key:"switchType",value:function(t){var e=this;this.type=t,this.items.map(function(t,n){return e.resetItem(t,n)}),this.timer=0,this.duration=60}},{key:"paint",value:function(){var t=this,e=this.context,n=this.timer,a=this.duration,i=this.canvas,r=i.width,s=i.height,o=this.rotation,c=o.rx,u=o.ry;e.clearRect(0,0,r,s),this.items.map(function(e,i){n===a&&(t.calcItem(e,i),t.rotation.rx=c>2*Math.PI?0:c+.01,t.rotation.ry=u>2*Math.PI?0:u+.01),t.paintItem(e)}),n!==a&&(this.timer+=1),requestAnimationFrame(this.paint)}},{key:"destroy",value:function(){this.paint=null}}]),t}(),y=m,g={name:"attendance",props:{avatars:Array,amount:Number},data:function(){return{type:"plane",currentMode:"auto",modes:["auto","plane","sphere","helix","cube","logo","text"]}},mounted:function(){this.setup()},watch:{currentMode:"switch"},methods:{setup:function(){this.canvas=document.createElement("canvas"),this.resize(),this.animate(),this.$refs.container.appendChild(this.canvas),window.addEventListener("resize",this.resize)},resize:function(){this.$refs.container&&(this.canvas.width=this.$refs.container.clientWidth,this.canvas.height=this.$refs.container.clientHeight)},animate:function(){var t=this.canvas,e=this.type;this.shape=new y({canvas:t,type:e})},switch:function(t){this.type!==t&&(this.type=t),this.shape.switchType(t)}}},b=g,M=(n("4350"),n("2877")),w=Object(M["a"])(b,s,o,!1,null,null,null);w.options.__file="attendance.vue";var x=w.exports,I={name:"app",components:{attendance:x},data:function(){return{avatars:[],amount:100,options:{amount:200},timer:null,rand:h}},mounted:function(){},methods:{simulate:function(){var t=this;this.timer=setTimeout(function(){var e=t.rand(2,5),n=[];console.log("simulating ".concat(e," attendances at total ").concat(t.avatars.length));while(e>0)n.push("http://i.pravatar.cc/100"),e-=1;t.avatars=t.avatars.concat(n),t.avatars.length<t.amount&&t.simulate()},1e3*this.rand(5,8))}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},_=I,k=(n("5d46"),Object(M["a"])(_,i,r,!1,null,null,null));k.options.__file="app.vue";var z=k.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(z)}}).$mount("#app")},"5d46":function(t,e,n){"use strict";var a=n("91bd"),i=n.n(a);i.a},"91bd":function(t,e,n){}});
//# sourceMappingURL=app.9686aaf7.js.map