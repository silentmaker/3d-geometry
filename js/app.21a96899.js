(function(t){function e(e){for(var n,r,o=e[0],h=e[1],c=e[2],l=0,p=[];l<o.length;l++)r=o[l],a[r]&&p.push(a[r][0]),a[r]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var h=i[o];0!==a[h]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/3d-geometry/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=h;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},4350:function(t,e,i){"use strict";var n=i("5359"),a=i.n(n);a.a},5359:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("attendance",{attrs:{avatars:t.avatars,amount:t.amount}})},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",attrs:{id:"canvas-container"}},[i("video",{staticClass:"bg-video",attrs:{loop:"",autoplay:"",muted:"",src:"https://img2.51vj.cn/wall_activity/fs08.mp4"},domProps:{muted:!0}}),i("ul",{staticClass:"controls"},t._l(t.modes,function(e){return i("li",{key:e,class:{active:e===t.currentMode},on:{click:function(i){t.currentMode=e}}},[t._v(t._s(e.toUpperCase()))])}))])},o=[],h=(i("c5f6"),i("6c7b"),i("9c29"),i("d4ec")),c=i("bee2"),u=function(t,e){return Math.round(Math.random()*(e-t))+t},l=function(t,e,i,n,a){if(0===t)return e;if(t===n)return i;switch(a){case"ease-out":return t/n*-(i-e)*(t/n-2)+e;case"ease-in":return(i-e)*Math.pow(t/n,2)+e;case"linear":default:return t*(i-e)/n+e}},p=i("7f3e"),f=i.n(p),m=i("ee3e"),d=i.n(m),v=function(){return{x:0,y:0,z:0,image:null}},g=function(t,e){var i=u(0,t.length-1);while(t[i].image)i>=t.length-1&&(i=0),i+=1;t[i].image=e},y=new Image;y.src=f.a;var x=function(){function t(e){var i=this,n=e.canvas,a=e.type,s=e.amount,r=e.text,o=e.logo;Object(h["a"])(this,t);var c=new Image;c.onload=function(){return i.initPixelItems("logo")},c.src=o||d.a,this.canvas=n,this.context=n.getContext("2d"),this.type=a,this.amount=s,this.text=r||"乐享",this.logo=c,this.size=64,this.timer=0,this.duration=60,this.rotation={rx:0,ry:0},this.translate={tx:0,ty:0,direction:1},this.popup={images:[],timer:0,duration:120,count:0},this.items=[],this.logoBuffer=[],this.textBuffer=[],this.logoItems=[],this.textItems=[],this.randUpdate=g,this.createItem=v,this.initItems(),this.paint=this.paint.bind(this),requestAnimationFrame(this.paint)}return Object(c["a"])(t,[{key:"initItems",value:function(){for(var t=[],e=0;e<this.amount;e++){var i=this.createItem();this.resetItem(i,e,!0),t.push(i)}this.items=t,this.initPixelItems("text")}},{key:"initPixelItems",value:function(t){var e=this,i=this.items;this.initPixelBuffer(t),this["".concat(t,"Buffer")].map(function(n,a){var s=i[a]||e.createItem();e["".concat(t,"Items")].push(s)})}},{key:"initPixelBuffer",value:function(t){var e=this.text,i=this.logo,n=this.canvas,a=n.width,s=n.height,r=document.createElement("canvas"),o=r.getContext("2d"),h=24;if(r.width=a,r.height=s,"text"===t){var c=a/(e.length+1);o.textAlign="center",o.textBaseline="middle",o.font="bold ".concat(c,"px arial"),o.fillText(e,a/2,s/2)}else if("logo"===t){var u=i.width/i.height,l=.6*s,p=l*u;o.drawImage(i,a/2-p/2,s/2-p/2,l,p)}for(var f=new Uint32Array(o.getImageData(0,0,a,s).data.buffer),m=0;m<s;m+=h)for(var d=0;d<a;d+=h)f[m*a+d]&&this["".concat(t,"Buffer")].push({x:d,y:m,z:1})}},{key:"resetItem",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=this.canvas,a=n.width,s=n.height,r=t.x,o=t.y,h=t.z;this.calcItem(t,e),t.targetX=t.x,t.targetY=t.y,t.targetZ=t.z,t.x=i?u(0,a):r,t.y=i?u(0,s):o,t.z=i?1:h}},{key:"tweenItem",value:function(t){var e=t.x,i=t.y,n=t.z,a=t.targetX,s=t.targetY,r=t.targetZ,o=this.timer,h=this.duration,c=this.type;0===o&&(t.beginX=e,t.beginY=i,t.beginZ=n),o===h&&"text"!==c&&"logo"!==c||(t.x=l(o,t.beginX,a,h,"ease-in"),t.y=l(o,t.beginY,s,h,"ease-in"),t.z=l(o,t.beginZ,r,h,"ease-in"))}},{key:"paintItem",value:function(t){this.tweenItem(t);var e=t.x,i=t.y,n=t.z,a=t.image,s=this.size,r=this.context,o=s*(1+.2*Math.sin(Date.now()/300+.01*e)),h=o/2;r.save(),r.globalAlpha=n/4+.75,r.beginPath(),r.arc(e,i,h,0,2*Math.PI,!0),r.closePath(),r.clip(),r.fillStyle="rgba(0, 0, 0, 0.3)",r.fill(),r.drawImage(a||y,e-h,i-h,o,o),r.restore()}},{key:"calcItem",value:function(t,e){var i=this.type;"logo"===i||"text"===i?(t.x=this["".concat(i,"Buffer")][e].x,t.y=this["".concat(i,"Buffer")][e].y,t.z=this["".concat(i,"Buffer")][e].z):i&&this["".concat(i,"Calc")]&&this["".concat(i,"Calc")](t,e)}},{key:"planeCalc",value:function(t,e){var i=this.canvas,n=i.width,a=i.height,s=72,r=Math.floor(e%24)-11.5,o=Math.floor(e/24)-4;t.x=n/2+r*s,t.y=a/2+o*s,t.z=1}},{key:"sphereCalc",value:function(t,e){var i=this.canvas,n=i.width,a=i.height,s=this.rotation,r=s.rx,o=s.ry,h=.34*a,c=Math.acos(2*e/this.amount-1),u=Math.sqrt(this.amount*Math.PI)*c+r,l=Math.cos(u)*Math.sin(c)*h,p=Math.cos(c)*h;t.x=n/2+(l*Math.sin(o)+p*Math.cos(o)),t.y=a/2+(l*Math.cos(o)-p*Math.sin(o)),t.z=Math.sin(u)*Math.sin(c)}},{key:"helixCalc",value:function(t,e){var i=this.amount,n=this.canvas,a=n.width,s=n.height,r=this.rotation,o=r.rx,h=r.ry,c=this.translate,u=c.ty,l=c.direction,p=30,f=100,m=.3*s,d=e%p/p*2*Math.PI-o;t.x=a/2+Math.cos(d)*m,t.y=s/2+e/p*f-10*h-u,t.z=Math.sin(d),(e===i-1&&t.y<s/2||0===e&&t.y>s/2)&&(this.translate.direction=-l)}},{key:"cubeCalc",value:function(t,e){var i=this.canvas,n=i.width,a=i.height,s=this.rotation,r=s.rx,o=s.ry,h=84,c=e%36%6-2.5,u=Math.floor(e%36/6)-2.5,l=Math.floor(e/36)-2.5,p=c*Math.sin(o)+l*Math.cos(o),f=c*Math.cos(o)-l*Math.sin(o),m=u*Math.sin(r)+f*Math.cos(r);f=u*Math.cos(r)-f*Math.sin(r),t.x=n/2+p*h,t.y=a/2+m*h,t.z=f/2.5}},{key:"switchType",value:function(t){var e=this;this.type=t,this.timer=0,"text"===t||"logo"===t?(this.size=24,this["".concat(t,"Items")].map(function(t,i){return e.resetItem(t,i,!0)})):(this.size=64,this.items.map(function(t,i){return e.resetItem(t,i)})),this.duration=60}},{key:"addPopup",value:function(t){this.popup.images.push(t)}},{key:"popupItem",value:function(){var t=this.type,e=this.context,i=this.canvas,n=i.width,a=i.height,s=this.popup,r=s.images,o=s.timer,h=s.duration,c=s.count,u="text"===t||"logo"===t?this["".concat(t,"Items")]:this.items;if(!(c>u.length)){var p=l(o,0,300,h/2,"ease-out");e.drawImage(r[0],(n-p)/2,(a-p)/2,p,p),this.popup.timer+=1,this.popup.timer===h&&(this.randUpdate(u,this.popup.images.shift()),this.popup.timer=0,this.popup.count+=1)}}},{key:"paint",value:function(){var t=this,e=this.context,i=this.timer,n=this.duration,a=this.type,s=this.canvas,r=s.width,o=s.height,h=this.popup.images,c=this.rotation,u=c.rx,l=c.ry;e.clearRect(0,0,r,o),"text"===a||"logo"===a?this["".concat(a,"Items")].map(function(e){return t.paintItem(e)}):this.items.map(function(e,a){i===n&&t.calcItem(e,a),t.paintItem(e)}),h.length&&this.popupItem(),this.rotation.rx=u>2*Math.PI?0:u+.01,this.rotation.ry=l>2*Math.PI?0:l+.01,"helix"===a&&(this.translate.tx+=1*this.translate.direction,this.translate.ty+=1*this.translate.direction),i!==n&&(this.timer+=1),requestAnimationFrame(this.paint)}},{key:"destroy",value:function(){this.paint=null}}]),t}(),w=x,b={name:"attendance",props:{avatars:Array,amount:Number},data:function(){return{type:"plane",currentMode:"auto",modes:["auto","plane","sphere","helix","cube","logo","text"],timer:null,showControl:!0,showOptions:!0}},mounted:function(){this.setup(),this.switch("auto")},watch:{currentMode:"switch",avatars:"attend"},methods:{setup:function(){this.canvas=document.createElement("canvas"),this.resize(),this.animate(),this.$refs.container.appendChild(this.canvas),window.addEventListener("resize",this.resize)},resize:function(){this.$refs.container&&(this.canvas.width=this.$refs.container.clientWidth,this.canvas.height=this.$refs.container.clientHeight)},animate:function(){var t=this.canvas,e=this.type,i=this.amount;this.shape=new w({canvas:t,type:e,amount:i})},switch:function(t){var e=this;"auto"===t?this.timer=setTimeout(function(){e.type=e.modes[e.modes.indexOf(e.type)+1],e.type&&"auto"!==e.type||(e.type="plane"),e.shape.switchType(e.type),e.switch("auto")},1e4):this.type!==t&&(this.type=t,this.shape.switchType(this.type)),"auto"!==t&&this.timer&&clearTimeout(this.timer)},attend:function(t,e){var i=this;if(!(t.length>500)){var n=0===e.length,a=n?t:t.filter(function(t){return-1===e.indexOf(t)});a.map(function(t){var e=new Image;e.onload=function(){n?i.shape.randUpdate(i.shape.items,e):i.shape.addPopup(e)},e.src=t})}}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},M=b,I=(i("4350"),i("2877")),z=Object(I["a"])(M,r,o,!1,null,null,null);z.options.__file="attendance.vue";var k=z.exports,P={name:"app",components:{attendance:k},data:function(){return{avatars:[],amount:216,options:{amount:200},timer:null,rand:u}},mounted:function(){this.simulate()},methods:{simulate:function(){var t=this;this.timer=setTimeout(function(){var e=t.avatars.length?t.rand(2,3):u(10,20),i=[];console.log("simulating ".concat(e," attendances at total ").concat(t.avatars.length));while(e>0)i.push("http://i.pravatar.cc/200?=".concat(Math.random())),e-=1;t.avatars=t.avatars.concat(i),t.avatars.length<t.amount&&t.simulate()},1e4)}},beforeDestroy:function(){this.timer&&clearTimeout(this.timer)}},_=P,O=(i("5d46"),Object(I["a"])(_,a,s,!1,null,null,null));O.options.__file="app.vue";var j=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"5d46":function(t,e,i){"use strict";var n=i("91bd"),a=i.n(n);a.a},"7f3e":function(t,e,i){t.exports=i.p+"img/icon_star.ed7b45dc.png"},"91bd":function(t,e,i){},ee3e:function(t,e,i){t.exports=i.p+"img/default-logo.ab662743.png"}});
//# sourceMappingURL=app.21a96899.js.map