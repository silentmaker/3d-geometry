(function(e){function t(t){for(var i,o,s=t[0],p=t[1],u=t[2],c=0,h=[];c<s.length;c++)o=s[c],r[o]&&h.push(r[o][0]),r[o]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(e[i]=p[i]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var p=n[s];0!==r[p]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/3d-geometry/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=p;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("fancy-avatars",{attrs:{size:e.size,amount:e.amount,type:e.type,avatars:e.avatars}}),n("div",{class:["controls",e.showOption?"active":""]},[n("div",{staticClass:"control"},[n("span",[e._v("Type ")]),n("label",{attrs:{for:"plane"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{id:"plane",type:"radio",name:"type",value:"plane"},domProps:{checked:e._q(e.type,"plane")},on:{change:function(t){e.type="plane"}}}),e._v("\n        plane\n      ")]),n("label",{attrs:{for:"sphere"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{id:"sphere",type:"radio",name:"type",value:"sphere"},domProps:{checked:e._q(e.type,"sphere")},on:{change:function(t){e.type="sphere"}}}),e._v("\n        sphere\n      ")]),n("label",{attrs:{for:"cylinder"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{id:"cylinder",type:"radio",name:"type",value:"cylinder"},domProps:{checked:e._q(e.type,"cylinder")},on:{change:function(t){e.type="cylinder"}}}),e._v("\n        cylinder\n      ")]),n("label",{attrs:{for:"curve"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{id:"curve",type:"radio",name:"type",value:"curve"},domProps:{checked:e._q(e.type,"curve")},on:{change:function(t){e.type="curve"}}}),e._v("\n        curve\n      ")])]),n("div",{staticClass:"control"},[n("span",[e._v("Amount ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.amount,expression:"amount",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),n("div",{staticClass:"control"},[n("span",[e._v("Size ")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.size,expression:"size",modifiers:{number:!0}}],attrs:{type:"text"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),n("div",{staticClass:"toggle-options",on:{click:function(t){e.showOption=!e.showOption}}},[e._v("\n      "+e._s(e.showOption?"Hide":"Show")+" Options\n    ")])])],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container"})},s=[],p=(n("c5f6"),n("5a89")),u=n("6bcd"),d=n.n(u),c={name:"fancy-avatars",props:{type:{type:String,default:"sphere"},amount:{type:Number,default:200},size:{type:Number,default:80},avatars:{type:Array,default:function(){return[]}}},data:function(){return{needUpdated:!1}},mounted:function(){this.checkWebGL()?(this.setup(),this.initAvatars(),this.animate(),window.addEventListener("resize",this.resize,!1)):document.body.innerHTML="Please use a modern browser to enable WebGL."},watch:{type:"requestUpdate",amount:"requestUpdate",size:"requestUpdate"},methods:{requestUpdate:function(){this.needUpdated=!0},checkWebGL:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(t){return!1}},setup:function(){this.scene=new p["d"],this.camera=new p["c"](60,window.innerWidth/window.innerHeight,1,2e3),this.camera.position.z=1500,this.scene.fog=new p["a"](16777215,1600,2e3),this.renderer=new p["h"]({alpha:!0}),this.renderer.setClearColor(16777215,0),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.$refs.container.appendChild(this.renderer.domElement)},initAvatars:function(){var e=new p["g"],t=e.load(d.a),n=new p["f"]({map:t,color:16777215,fog:!0});switch(this.group=new p["b"],this.type){case"plane":this.initPlaneGroup(n);break;case"sphere":this.initSphereGroup(n);break;case"cylinder":this.initCylinderGroup(n);break;case"curve":this.initCurveGroup(n);break;default:this.initSphereGroup(n);break}},initPlaneGroup:function(e){for(var t=1.5*this.size,n=Math.floor(2*window.innerWidth/t)-2,i=0;i<this.amount;i+=1){var r=(i%n+2)*t-window.innerWidth,a=(-Math.floor(i/n)-2)*t+window.innerHeight,o=10,s=new p["e"](e);s.position.set(r,a,o),this.group.add(s)}this.scene.add(this.group)},initSphereGroup:function(e){for(var t=0;t<this.amount;t+=1){var n=Math.acos(2*t/this.amount-1),i=Math.sqrt(this.amount*Math.PI)*n,r=Math.cos(i)*Math.sin(n),a=Math.sin(i)*Math.sin(n),o=Math.cos(n),s=new p["e"](e);s.position.set(r,a,o),s.position.normalize(),s.position.multiplyScalar(.6*window.innerHeight),this.group.add(s)}this.scene.add(this.group)},initCylinderGroup:function(e){for(var t=0;t<this.amount;t+=1){var n=t%30/30*2*Math.PI,i=Math.cos(n),r=-t/100,a=Math.sin(n),o=new p["e"](e);o.position.set(i,r,a),o.position.multiplyScalar(.5*window.innerHeight),this.group.add(o)}this.scene.add(this.group)},initCurveGroup:function(e){for(var t=100,n=16,i=0;i<this.amount;i+=1){var r=i%n*t-window.innerWidth/2,a=Math.floor(i/n)*-t/2,o=300*(Math.sin(r)+Math.sin(a)),s=new p["e"](e);s.position.set(r,o,a+300),this.group.add(s)}this.scene.add(this.group)},animate:function(){requestAnimationFrame(this.animate),this.render()},render:function(){for(var e=Date.now()/1e3,t=this.group.children.length,n=0;n<t;n+=1){var i=this.group.children[n],r=i.material,a=.2*Math.sin(e+.01*i.position.x)+1,o=this.size;i.scale.set(a*o,a*o,1),r.opacity=.2*Math.sin(e+.01*i.position.x)+.9}"sphere"===this.type&&(this.group.rotation.x=.06*e,this.group.rotation.y=.12*e,this.group.rotation.z=.18*e),"cylinder"===this.type&&(this.group.position.y+=.5,this.group.rotation.y=.15*e),"curve"===this.type&&(this.group.rotation.y=.15*e,this.group.rotation.z=.15*e),this.needUpdated&&(this.scene.remove(this.group),this.initAvatars(),this.needUpdated=!1),this.renderer.clear(),this.renderer.render(this.scene,this.camera)},resize:function(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}},h=c,l=(n("cd5b"),n("2877")),v=Object(l["a"])(h,o,s,!1,null,"49bfabe1",null);v.options.__file="fancy-avatars.vue";var f=v.exports,m=[{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""},{avatar:""}],y=m,w={name:"app",components:{fancyAvatars:f},data:function(){return{type:"sphere",amount:300,size:80,avatars:y,showOption:!0}}},g=w,b=(n("5d46"),Object(l["a"])(g,r,a,!1,null,null,null));b.options.__file="app.vue";var _=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(_)}}).$mount("#app")},"5d46":function(e,t,n){"use strict";var i=n("91bd"),r=n.n(i);r.a},"6bcd":function(e,t,n){e.exports=n.p+"img/default.7c6628a2.png"},"91bd":function(e,t,n){},cd5b:function(e,t,n){"use strict";var i=n("ffd6"),r=n.n(i);r.a},ffd6:function(e,t,n){}});
//# sourceMappingURL=app.c932e6b0.js.map