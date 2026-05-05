import{D as K}from"./DetailHeader-b0d6a8c7.js";import{T as O}from"./ToolDetail-bf80dc5b.js";import{b as X,c as G,e as r,G as j,H as Q,d as q,C as g,I as c,l as T,o as Y,J as Z,K as ee,L as te,B as ne,M as le,r as $,i,w as _,t as R,N as U,f as ae,k as C,_ as oe}from"./index-de94c63d.js";var P=q({name:"vue3-danmaku",components:{},props:{danmus:{type:Array,required:!0,default:()=>[]},channels:{type:Number,default:0},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!1},useSlot:{type:Boolean,default:!1},debounce:{type:Number,default:100},speeds:{type:Number,default:200},randomChannel:{type:Boolean,default:!1},fontSize:{type:Number,default:18},top:{type:Number,default:4},right:{type:Number,default:0},isSuspend:{type:Boolean,default:!1},extraStyle:{type:String,default:""}},emits:["list-end","play-end","dm-over","dm-out","update:danmus"],setup(o,{emit:e,slots:v}){let p=g(document.createElement("div")),a=g(document.createElement("div"));const h=g(0),z=g(0);let t=0;const x=g(0),L=g(0),f=g(0),B=g(!1),S=g(!1),s=g({}),m=function(u,d,n="modelValue",l){return c({get:()=>u[n],set:w=>{d(`update:${n}`,l?l(w):w)}})}(o,e,"danmus"),y=T({channels:c(()=>o.channels||x.value),autoplay:c(()=>o.autoplay),loop:c(()=>o.loop),useSlot:c(()=>o.useSlot),debounce:c(()=>o.debounce),randomChannel:c(()=>o.randomChannel)}),b=T({height:c(()=>L.value),fontSize:c(()=>o.fontSize),speeds:c(()=>o.speeds),top:c(()=>o.top),right:c(()=>o.right)});function H(){W(),o.isSuspend&&function(){let u=[];a.value.addEventListener("mouseover",d=>{let n=d.target;n.className.includes("dm")||(n=n.closest(".dm")||n),n.className.includes("dm")&&(u.includes(n)||(e("dm-over",{el:n}),n.classList.add("pause"),u.push(n)))}),a.value.addEventListener("mouseout",d=>{let n=d.target;n.className.includes("dm")||(n=n.closest(".dm")||n),n.className.includes("dm")&&(e("dm-out",{el:n}),n.classList.remove("pause"),u.forEach(l=>{l.classList.remove("pause")}),u=[])})}(),y.autoplay&&A()}function W(){if(h.value=p.value.offsetWidth,z.value=p.value.offsetHeight,h.value===0||z.value===0)throw new Error("获取不到容器宽高")}function A(){S.value=!1,t||(t=window.setInterval(()=>function(){if(!S.value&&m.value.length)if(f.value>m.value.length-1){const u=a.value.children.length;y.loop&&(u<f.value&&(e("list-end"),f.value=0),D())}else D()}(),y.debounce))}function D(u){const d=y.loop?f.value%m.value.length:f.value,n=u||m.value[d];let l=document.createElement("div");y.useSlot?l=function(w,k){return ee({render:()=>te("div",{},[v.dm&&v.dm({danmu:w,index:k})])}).mount(document.createElement("div"))}(n,d).$el:(l.innerHTML=n,l.setAttribute("style",o.extraStyle),l.style.fontSize=`${b.fontSize}px`,l.style.lineHeight=`${b.fontSize}px`),l.classList.add("dm"),a.value.appendChild(l),l.style.opacity="0",ne(()=>{b.height||(L.value=l.offsetHeight),y.channels||(x.value=Math.floor(z.value/(b.height+b.top)));let w=function(k){let E=[...Array(y.channels).keys()];y.randomChannel&&(E=E.sort(()=>.5-Math.random()));for(let N of E){const V=s.value[N];if(!V||!V.length)return s.value[N]=[k],k.addEventListener("animationend",()=>s.value[N].splice(0,1)),N%y.channels;for(let F=0;F<V.length;F++){const M=J(V[F])-10;if(M<=.88*(k.offsetWidth-V[F].offsetWidth)||M<=0)break;if(F===V.length-1)return s.value[N].push(k),k.addEventListener("animationend",()=>s.value[N].splice(0,1)),N%y.channels}}return-1}(l);if(w>=0){const k=l.offsetWidth,E=b.height;l.classList.add("move"),l.dataset.index=`${d}`,l.dataset.channel=w.toString(),l.style.opacity="1",l.style.top=w*(E+b.top)+"px",l.style.width=k+b.right+"px",l.style.setProperty("--dm-scroll-width",`-${h.value+k}px`),l.style.left=`${h.value}px`,l.style.animationDuration=h.value/b.speeds+"s",l.addEventListener("animationend",()=>{Number(l.dataset.index)!==m.value.length-1||y.loop||e("play-end",l.dataset.index),a.value&&a.value.removeChild(l)}),f.value++}else a.value.removeChild(l)})}function J(u){const d=u.offsetWidth||parseInt(u.style.width),n=u.getBoundingClientRect().right||a.value.getBoundingClientRect().right+d;return a.value.getBoundingClientRect().right-n}function I(){clearInterval(t),t=0,f.value=0}return Y(()=>{console.error("%c [vue3-danmaku] ⚠️ DEPRECATION WARNING","background: #ffcc00; color: #000; padding: 2px 4px; border-radius: 3px; font-weight: bold;",`
该包已停止维护，请迁移至新版官方库: "vue-danmaku"。
This package is deprecated. Please migrate to "vue-danmaku".`),H()}),Z(()=>{I()}),{container:p,dmContainer:a,hidden:B,paused:S,danmuList:m,getPlayState:function(){return!S.value},resize:function(){W();const u=a.value.getElementsByClassName("dm");for(let d=0;d<u.length;d++){const n=u[d];n.style.setProperty("--dm-scroll-width",`-${h.value+n.offsetWidth}px`),n.style.left=`${h.value}px`,n.style.animationDuration=h.value/b.speeds+"s"}},play:A,pause:function(){S.value=!0},stop:function(){s.value={},a.value.innerHTML="",S.value=!0,B.value=!1,I()},show:function(){B.value=!1},hide:function(){B.value=!0},reset:function(){L.value=0,H()},add:function(u){if(f.value===m.value.length)return m.value.push(u),m.value.length-1;{const d=f.value%m.value.length;return m.value.splice(d,0,u),d+1}},push:function(u){return m.value.push(u),m.value.length-1},insert:D}}});const se={ref:"container",class:"vue-danmaku"};(function(o,e){e===void 0&&(e={});var v=e.insertAt;if(o&&typeof document<"u"){var p=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",v==="top"&&p.firstChild?p.insertBefore(a,p.firstChild):p.appendChild(a),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o))}})(`.vue-danmaku {
  position: relative;
  overflow: hidden;
}
.vue-danmaku .danmus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.vue-danmaku .danmus.show {
  opacity: 1;
}
.vue-danmaku .danmus.paused .dm.move {
  animation-play-state: paused;
}
.vue-danmaku .danmus .dm {
  position: absolute;
  font-size: 20px;
  color: #ddd;
  white-space: pre;
  transform: translateX(0);
  transform-style: preserve-3d;
}
.vue-danmaku .danmus .dm.move {
  will-change: transform;
  animation-name: moveLeft;
  animation-timing-function: linear;
  animation-play-state: running;
}
.vue-danmaku .danmus .dm.pause {
  animation-play-state: paused;
  z-index: 100;
}
@keyframes moveLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(var(--dm-scroll-width));
  }
}
@-webkit-keyframes moveLeft {
  from {
    -webkit-transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(var(--dm-scroll-width));
  }
}`),P.render=function(o,e,v,p,a,h){return X(),G("div",se,[r("div",{ref:"dmContainer",class:j(["danmus",{show:!o.hidden},{paused:o.paused}])},null,2),Q(o.$slots,"default")],512)},P.__file="src/lib/Danmaku.vue";const ue={class:"flex flex-col mt-3 flex-1"},de={class:"p-4 rounded-2xl bg-white"},ie={class:"flex mb-2"},re={class:"w-72"},me={class:"flex mb-2"},pe={class:"w-72 ml-2"},fe={class:"flex mb-2"},ce={class:"w-72 ml-2"},ve={class:"flex mb-2"},he={class:"flex mb-2"},ye=q({__name:"Barrage",setup(o){const e=T({title:"手持弹幕",content:"工具坊",barrage:[],speed:200,textSize:500,textColor:"#FFFFFF",bgColor:"#000000",channels:1,extraStyle:"",danmakuFullStyle:"",isPlay:!1,danmakuFullHeight:"100%",danmakuFullWidth:"100%"}),v=g(null),p=()=>{e.isPlay?(a("visibility: hidden;"),v.value.resize(),v.value.stop(),e.isPlay=!1):(a(),h(),v.value.resize(),v.value.play(),e.isPlay=!0)},a=(z="")=>{e.extraStyle="color: "+e.textColor+";font-size: "+e.textSize+"px",e.danmakuFullStyle="z-index: 99; position: fixed; top: 0px; left: 0px; height:"+e.danmakuFullHeight+"; width:"+e.danmakuFullWidth+"; background-color:"+e.bgColor+";"+z},h=()=>{e.barrage[0]=e.content};return le(()=>{a("visibility: hidden;")}),(z,t)=>{const x=$("el-text"),L=$("el-input"),f=$("el-slider"),B=$("el-color-picker"),S=$("el-button");return X(),G("div",ue,[i(K,{title:e.title},null,8,["title"]),i(ae(P),{ref_key:"danmakuFullRef",ref:v,danmus:e.barrage,"onUpdate:danmus":t[0]||(t[0]=s=>e.barrage=s),loop:"",autoplay:!1,speeds:e.speed,channels:e.channels,extraStyle:e.extraStyle,style:U(e.danmakuFullStyle),onDblclick:p,useSlot:!0},{dm:_(({danmu:s})=>[r("div",{class:"",style:U(e.extraStyle)},[r("span",null,R(s),1)],4)]),_:1},8,["danmus","speeds","channels","extraStyle","style"]),r("div",de,[r("div",ie,[i(x,{class:"w-20"},{default:_(()=>[...t[8]||(t[8]=[C("弹幕内容:",-1)])]),_:1}),r("div",re,[i(L,{modelValue:e.content,"onUpdate:modelValue":t[1]||(t[1]=s=>e.content=s),type:"textarea",rows:3,placeholder:"可在此输入弹幕内容"},null,8,["modelValue"])])]),r("div",me,[i(x,{class:"w-20"},{default:_(()=>[...t[9]||(t[9]=[C("播放速度:",-1)])]),_:1}),r("div",pe,[i(f,{modelValue:e.speed,"onUpdate:modelValue":t[2]||(t[2]=s=>e.speed=s),min:1,max:500},null,8,["modelValue"])])]),r("div",fe,[i(x,{class:"w-20"},{default:_(()=>[...t[10]||(t[10]=[C("文字大小:",-1)])]),_:1}),r("div",ce,[i(f,{modelValue:e.textSize,"onUpdate:modelValue":t[3]||(t[3]=s=>e.textSize=s),min:12,max:1e3},null,8,["modelValue"])])]),r("div",ve,[i(x,{class:"w-20"},{default:_(()=>[...t[11]||(t[11]=[C("文字颜色:",-1)])]),_:1}),r("div",null,[i(B,{modelValue:e.textColor,"onUpdate:modelValue":t[4]||(t[4]=s=>e.textColor=s),size:"large",onChange:t[5]||(t[5]=s=>a())},null,8,["modelValue"])])]),r("div",he,[i(x,{class:"w-20"},{default:_(()=>[...t[12]||(t[12]=[C("背景颜色:",-1)])]),_:1}),r("div",null,[i(B,{modelValue:e.bgColor,"onUpdate:modelValue":t[6]||(t[6]=s=>e.bgColor=s),size:"large",onChange:t[7]||(t[7]=s=>a())},null,8,["modelValue"])])]),r("div",null,[i(S,{onClick:p,type:"primary",class:"mr-3"},{default:_(()=>[C(R(e.isPlay==!1?"播放":"暂停"),1)]),_:1}),i(x,null,{default:_(()=>[...t[13]||(t[13]=[C("双击可退出弹幕",-1)])]),_:1})])]),i(O,{title:"描述"},{default:_(()=>[i(x,null,{default:_(()=>[...t[14]||(t[14]=[C(" 手持弹幕是一种新型的互动沟通工具，可以方便地为各种户外活动、演出嘉年华等活动增加趣味性和互动性。手持弹幕具有轻便、易携带、易操作等优点，可以让每个参与者都变成活动的一部分。同时，手持弹幕还可以通过预先编写的文本、表情等形式，表达参与者的情感和想法，实现沟通互动。在社交媒体时代，手持弹幕的使用也带来了更广泛的社交效应，增加了活动的互动性和传播度。无论是举办方还是参与者，手持弹幕都是一个非常有价值的互动工具。 ",-1)])]),_:1})]),_:1})])}}});const ke=oe(ye,[["__scopeId","data-v-aef8368d"],["__file","D:/BaiduNetdiskDownload/tools-web-master工具箱/src/components/Tools/Barrage/Barrage.vue"]]);export{ke as default};
