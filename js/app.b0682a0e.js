(function(t){function e(e){for(var i,s,o=e[0],c=e[1],h=e[2],l=0,f=[];l<o.length;l++)s=o[l],n[s]&&f.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,h||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/3d-geometry/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4294:function(t,e,a){t.exports=a.p+"img/default-avatar.7a87a1dd.png"},4350:function(t,e,a){"use strict";var i=a("5359"),n=a.n(i);n.a},5359:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("attendance",{attrs:{avatars:t.avatars,amount:t.amount}})},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"container",attrs:{id:"canvas-container"}},[a("video",{staticClass:"bg-video",attrs:{loop:"",autoplay:"",muted:"",src:"https://img2.51vj.cn/wall_activity/fs08.mp4"},domProps:{muted:!0}}),a("ul",{staticClass:"controls"},t._l(t.modes,function(e){return a("li",{key:e,class:{active:e===t.currentMode},on:{click:function(a){t.currentMode=e}}},[t._v(t._s(e.toUpperCase()))])}))])},o=[],c=(a("c5f6"),a("9c29"),a("6c7b"),a("d4ec")),h=a("bee2"),u=function(t,e){return Math.round(Math.random()*(e-t))+t},l=function(t,e,a,i,n){if(0===t)return e;if(t===i)return a;switch(n){case"ease-out":return t/i*-(a-e)*(t/i-2)+e;case"ease-in":return(a-e)*Math.pow(t/i,2)+e;case"linear":default:return t*(a-e)/i+e}},f=a("4294"),p=a.n(f),m=a("ee3e"),d=a.n(m),v=function(t){var e=t.image;return{x:0,y:0,z:0,image:e}},y=new Image;y.src=p.a;var g=function(){function t(e){var a=e.canvas,i=e.type,n=e.text,r=e.logo;Object(c["a"])(this,t);var s=new Image;s.src=r||d.a,this.canvas=a,this.context=a.getContext("2d"),this.type=i,this.text=n||"乐享",this.logo=s,this.amount=216,this.size=64,this.timer=0,this.duration=60,this.rotation={rx:0,ry:0},this.translate={tx:0,ty:0,direction:1},this.items=this.initItems(),this.paint=this.paint.bind(this),requestAnimationFrame(this.paint)}return Object(h["a"])(t,[{key:"initItems",value:function(){for(var t=[],e=0;e<this.amount;e++){var a=v({image:y});this.resetItem(a,e,!0),t.push(a)}return t}},{key:"resetItem",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this.canvas,n=i.width,r=i.height,s=t.x,o=t.y,c=t.z;this.calcItem(t,e),t.targetX=t.x,t.targetY=t.y,t.targetZ=t.z,t.x=a?u(0,n):s,t.y=a?u(0,r):o,t.z=a?1:c}},{key:"updateItem",value:function(t){var e=t.x,a=t.y,i=t.z,n=t.targetX,r=t.targetY,s=t.targetZ,o=this.timer,c=this.duration,h=this.type;0===o&&(t.beginX=e,t.beginY=a,t.beginZ=i),o===c&&"text"!==h&&"logo"!==h||(t.x=l(o,t.beginX,n,c,"linear"),t.y=l(o,t.beginY,r,c,"linear"),t.z=l(o,t.beginZ,s,c,"linear"))}},{key:"paintItem",value:function(t){this.updateItem(t);var e=t.x,a=t.y,i=t.z,n=t.image,r=this.size,s=this.context,o=r*(1+.2*Math.sin(Date.now()/300+.01*e)),c=o/2;s.save(),s.globalAlpha=i/4+.75,s.beginPath(),s.arc(e,a,c,0,2*Math.PI,!0),s.closePath(),s.clip(),s.fillStyle="rgba(0, 0, 0, 0.3)",s.fill(),s.drawImage(n,e-c,a-c,o,o),s.restore()}},{key:"calcItem",value:function(t,e){var a=this.type;a&&this["".concat(a,"Calc")]?this["".concat(a,"Calc")](t,e):this.planeCalc(t,e)}},{key:"planeCalc",value:function(t,e){var a=this.canvas,i=a.width,n=a.height,r=72,s=Math.floor(e%24)-11.5,o=Math.floor(e/24)-4;t.x=i/2+s*r,t.y=n/2+o*r,t.z=1}},{key:"sphereCalc",value:function(t,e){var a=this.canvas,i=a.width,n=a.height,r=this.rotation,s=r.rx,o=r.ry,c=.34*n,h=Math.acos(2*e/this.amount-1),u=Math.sqrt(this.amount*Math.PI)*h+s,l=Math.cos(u)*Math.sin(h)*c,f=Math.cos(h)*c;t.x=i/2+(l*Math.sin(o)+f*Math.cos(o)),t.y=n/2+(l*Math.cos(o)-f*Math.sin(o)),t.z=Math.sin(u)*Math.sin(h)}},{key:"helixCalc",value:function(t,e){var a=this.amount,i=this.canvas,n=i.width,r=i.height,s=this.rotation,o=s.rx,c=s.ry,h=this.translate,u=h.ty,l=h.direction,f=30,p=100,m=.3*r,d=e%f/f*2*Math.PI-o;t.x=n/2+Math.cos(d)*m,t.y=r/2+e/f*p-10*c-u,t.z=Math.sin(d),(e===a-1&&t.y<r/2||0===e&&t.y>r/2)&&(this.translate.direction=-l)}},{key:"cubeCalc",value:function(t,e){var a=this.canvas,i=a.width,n=a.height,r=this.rotation,s=r.rx,o=r.ry,c=84,h=e%36%6-2.5,u=Math.floor(e%36/6)-2.5,l=Math.floor(e/36)-2.5,f=h*Math.sin(o)+l*Math.cos(o),p=h*Math.cos(o)-l*Math.sin(o),m=u*Math.sin(s)+p*Math.cos(s);p=u*Math.cos(s)-p*Math.sin(s),t.x=i/2+f*c,t.y=n/2+m*c,t.z=p/2.5}},{key:"switchType",value:function(t){var e=this;this.type=t,this.timer=0,"text"===t||"logo"===t?(this.size=24,this.duration=120):(this.size=64,this.items.map(function(t,a){return e.resetItem(t,a)}),this.duration=60)}},{key:"initPixelItems",value:function(){var t=this.type,e=this.context,a=this.text,i=this.logo,n=this.size,r=this.canvas,s=r.width,o=r.height;if("text"!==t||this.textBuffer)"logo"!==t||this.logoBuffer||(e.drawImage(i,s/4,o/4,s/2,o/2),this.logoBuffer=new Uint32Array(e.getImageData(0,0,s,o).data.buffer),e.clearRect(0,0,s,o));else{var c=s/(a.length+1);e.textAlign="center",e.font="bold ".concat(c,"px arial"),e.fillText(a,s/2,c+100),this.textBuffer=new Uint32Array(e.getImageData(0,0,s,o).data.buffer),e.clearRect(0,0,s,o)}var h=this["".concat(t,"Buffer")];this["".concat(t,"Items")]=[];for(var l=0;l<o;l+=n)for(var f=0;f<s;f+=n)if(h[l*s+f]){var p=v({image:y});p.targetX=f,p.targetY=l,p.targetZ=1,p.x=u(0,s),p.y=u(0,o),p.z=1,this["".concat(t,"Items")].push(p)}}},{key:"paint",value:function(){var t=this,e=this.context,a=this.timer,i=this.duration,n=this.type,r=this.canvas,s=r.width,o=r.height,c=this.rotation,h=c.rx,u=c.ry;e.clearRect(0,0,s,o),"text"===n||"logo"===n?(this["".concat(n,"Items")]||this.initPixelItems(),this["".concat(n,"Items")].map(function(e){return t.paintItem(e)})):this.items.map(function(e,n){a===i&&t.calcItem(e,n),t.paintItem(e)}),this.rotation.rx=h>2*Math.PI?0:h+.01,this.rotation.ry=u>2*Math.PI?0:u+.01,"helix"===n&&(this.translate.tx+=1*this.translate.direction,this.translate.ty+=1*this.translate.direction),a!==i&&(this.timer+=1),requestAnimationFrame(this.paint)}},{key:"destroy",value:function(){this.paint=null}}]),t}(),x=g,b={name:"attendance",props:{avatars:Array,amount:Number},data:function(){return{type:"plane",currentMode:"auto",modes:["auto","plane","sphere","helix","cube","logo","text"],timer:null}},mounted:function(){this.setup(),this.switch("auto")},watch:{currentMode:"switch"},methods:{setup:function(){this.canvas=document.createElement("canvas"),this.resize(),this.animate(),this.$refs.container.appendChild(this.canvas),window.addEventListener("resize",this.resize)},resize:function(){this.$refs.container&&(this.canvas.width=this.$refs.container.clientWidth,this.canvas.height=this.$refs.container.clientHeight)},animate:function(){var t=this.canvas,e=this.type;this.shape=new x({canvas:t,type:e})},switch:function(t){var e=this;"auto"===t?this.timer=setTimeout(function(){e.type=e.modes[e.modes.indexOf(e.type)+1],e.type&&"auto"!==e.type||(e.type="plane"),e.shape.switchType(e.type),e.switch("auto")},1e4):this.type!==t&&(this.type=t,this.shape.switchType(this.type)),"auto"!==t&&this.timer&&clearTimeout(this.timer)}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},M=b,w=(a("4350"),a("2877")),I=Object(w["a"])(M,s,o,!1,null,null,null);I.options.__file="attendance.vue";var z=I.exports,k={name:"app",components:{attendance:z},data:function(){return{avatars:[],amount:100,options:{amount:200},timer:null,rand:u}},mounted:function(){},methods:{simulate:function(){var t=this;this.timer=setTimeout(function(){var e=t.rand(2,5),a=[];console.log("simulating ".concat(e," attendances at total ").concat(t.avatars.length));while(e>0)a.push("http://i.pravatar.cc/100"),e-=1;t.avatars=t.avatars.concat(a),t.avatars.length<t.amount&&t.simulate()},1e3*this.rand(5,8))}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},_=k,P=(a("5d46"),Object(w["a"])(_,n,r,!1,null,null,null));P.options.__file="app.vue";var O=P.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(O)}}).$mount("#app")},"5d46":function(t,e,a){"use strict";var i=a("91bd"),n=a.n(i);n.a},"91bd":function(t,e,a){},ee3e:function(t,e,a){t.exports=a.p+"img/default-logo.ab662743.png"}});
//# sourceMappingURL=app.b0682a0e.js.map