/*!
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 */
!function(){"use strict";function e(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:e}let t;function o(o,s,n){if(!o||sessionStorage.getItem("waifu-text")&&sessionStorage.getItem("waifu-text")>n)return;t&&(clearTimeout(t),t=null),o=e(o),sessionStorage.setItem("waifu-text",n);const i=document.getElementById("waifu-tips");i.innerHTML=o,i.classList.add("waifu-tips-active"),t=setTimeout((()=>{sessionStorage.removeItem("waifu-text"),i.classList.remove("waifu-tips-active")}),s)}class s{constructor(e){let{apiPath:t,cdnPath:o}=e,s=!1;if("string"==typeof o)s=!0,o.endsWith("/")||(o+="/");else{if("string"!=typeof t)throw"Invalid initWidget argument!";t.endsWith("/")||(t+="/")}this.useCDN=s,this.apiPath=t,this.cdnPath=o}async loadModelList(){const e=await fetch(`${this.cdnPath}model_list.json`);this.modelList=await e.json()}async loadModel(t,s,n){if(localStorage.setItem("modelId",t),localStorage.setItem("modelTexturesId",s),o(n,4e3,10),this.useCDN){this.modelList||await this.loadModelList();const o=e(this.modelList.models[t]);loadlive2d("live2d",`${this.cdnPath}model/${o}/index.json`)}else loadlive2d("live2d",`${this.apiPath}get/?id=${t}-${s}`),console.log(`Live2D 模型 ${t}-${s} 加载完成`)}async loadRandModel(){const t=localStorage.getItem("modelId"),s=localStorage.getItem("modelTexturesId");if(this.useCDN){this.modelList||await this.loadModelList();const s=e(this.modelList.models[t]);loadlive2d("live2d",`${this.cdnPath}model/${s}/index.json`),o("我的新衣服好看嘛？",4e3,10)}else fetch(`${this.apiPath}rand_textures/?id=${t}-${s}`).then((e=>e.json())).then((e=>{1!==e.textures.id||1!==s&&0!==s?this.loadModel(t,e.textures.id,"我的新衣服好看嘛？"):o("我还没有其他衣服呢！",4e3,10)}))}async loadOtherModel(){let e=localStorage.getItem("modelId");if(this.useCDN){this.modelList||await this.loadModelList();const t=++e>=this.modelList.models.length?0:e;this.loadModel(t,0,this.modelList.messages[t])}else fetch(`${this.apiPath}switch/?id=${e}`).then((e=>e.json())).then((e=>{this.loadModel(e.model.id,0,e.model.message)}))}}const n={hitokoto:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>',callback:function(){setTimeout((()=>{o("hehe",4e3,9)}),6e3);var e=document.getElementById("inputContainer"),t=document.createElement("input");t.type="text",t.placeholder="请输入内容",e.appendChild(t),t.style.width="200px",t.style.padding="10px",t.style.fontSize="16px",t.addEventListener("input",(function(e){console.log("输入框的值为："+e.target.value)}))}},asteroids:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>',callback:()=>{if(window.Asteroids)window.ASTEROIDSPLAYERS||(window.ASTEROIDSPLAYERS=[]),window.ASTEROIDSPLAYERS.push(new Asteroids);else{const e=document.createElement("script");e.src="https://fastly.jsdelivr.net/gh/stevenjoezhang/asteroids/asteroids.js",document.head.appendChild(e)}}},"switch-model":{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>',callback:()=>{}},"switch-texture":{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z"/></svg>',callback:()=>{}},photo:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M220.6 121.2L271.1 96 448 96v96H333.2c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24H64V128H192c9.9 0 19.7-2.3 28.6-6.8zM0 128V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H271.1c-9.9 0-19.7 2.3-28.6 6.8L192 64H160V48c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16l0 16C28.7 64 0 92.7 0 128zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z"/></svg>',callback:()=>{o("照好了嘛，是不是很可爱呢？",6e3,9),Live2D.captureName="photo.png",Live2D.captureFrame=!0}},info:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>',callback:()=>{open("https://github.com/stevenjoezhang/live2d-widget")}},quit:{icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\x3c!--! Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2024 Fonticons, Inc. --\x3e<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>',callback:()=>{localStorage.setItem("waifu-display",Date.now()),o("愿你有一天能与重要的人重逢。",2e3,11),document.getElementById("waifu").style.bottom="-500px",setTimeout((()=>{document.getElementById("waifu").style.display="none",document.getElementById("waifu-toggle").classList.add("waifu-toggle-active")}),3e3)}}};function i(t){const i=new s(t);function a(t){let s,n,i=!1,a=t.message.default;window.addEventListener("mousemove",(()=>i=!0)),window.addEventListener("keydown",(()=>i=!0)),setInterval((()=>{i?(i=!1,clearInterval(s),s=null):s||(s=setInterval((()=>{o(a,6e3,9)}),2e4))}),1e3),o(function(e){if("/"===location.pathname)for(let{hour:t,text:o}of e){const e=new Date,s=t.split("-")[0],n=t.split("-")[1]||s;if(s<=e.getHours()&&e.getHours()<=n)return o}const t=`欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;let o;if(""!==document.referrer){const e=new URL(document.referrer),s=e.hostname.split(".")[1],n={baidu:"百度",so:"360搜索",google:"谷歌搜索"};return location.hostname===e.hostname?t:(o=s in n?n[s]:e.hostname,`Hello！来自 <span>${o}</span> 的朋友<br>${t}`)}return t}(t.time),7e3,11),window.addEventListener("mouseover",(s=>{for(let{selector:i,text:a}of t.mouseover)if(s.target.closest(i)){if(n===i)return;return n=i,a=e(a),a=a.replace("{text}",s.target.innerText),void o(a,4e3,8)}})),window.addEventListener("click",(s=>{for(let{selector:n,text:i}of t.click)if(s.target.closest(n))return i=e(i),i=i.replace("{text}",s.target.innerText),void o(i,4e3,8)})),t.seasons.forEach((({date:t,text:o})=>{const s=new Date,n=t.split("-")[0],i=t.split("-")[1]||n;n.split("/")[0]<=s.getMonth()+1&&s.getMonth()+1<=i.split("/")[0]&&n.split("/")[1]<=s.getDate()&&s.getDate()<=i.split("/")[1]&&(o=(o=e(o)).replace("{year}",s.getFullYear()),a.push(o))}));const c=()=>{};console.log("%c",c),c.toString=()=>{o(t.message.console,6e3,9)},window.addEventListener("copy",(()=>{o(t.message.copy,6e3,9)})),window.addEventListener("visibilitychange",(()=>{document.hidden||o(t.message.visibilitychange,6e3,9)}))}localStorage.removeItem("waifu-display"),sessionStorage.removeItem("waifu-text"),document.body.insertAdjacentHTML("beforeend",'<div id="waifu">\n            <div id="waifu-tips"></div>\n            <canvas id="live2d" width="800" height="800"></canvas>\n            <div id="waifu-tool"></div>\n        </div>'),setTimeout((()=>{document.getElementById("waifu").style.bottom=0}),0),function(){n["switch-model"].callback=()=>i.loadOtherModel(),n["switch-texture"].callback=()=>i.loadRandModel(),Array.isArray(t.tools)||(t.tools=Object.keys(n));for(let e of t.tools)if(n[e]){const{icon:t,callback:o}=n[e];document.getElementById("waifu-tool").insertAdjacentHTML("beforeend",`<span id="waifu-tool-${e}">${t}</span>`),document.getElementById(`waifu-tool-${e}`).addEventListener("click",o)}}(),function(){let e=localStorage.getItem("modelId"),o=localStorage.getItem("modelTexturesId");null===e&&(e=1,o=53),i.loadModel(e,o),fetch(t.waifuPath).then((e=>e.json())).then(a)}()}window.initWidget=function(e,t){"string"==typeof e&&(e={waifuPath:e,apiPath:t}),document.body.insertAdjacentHTML("beforeend",'<div id="waifu-toggle">\n            <span>看板娘</span>\n        </div>');const o=document.getElementById("waifu-toggle");o.addEventListener("click",(()=>{o.classList.remove("waifu-toggle-active"),o.getAttribute("first-time")?(i(e),o.removeAttribute("first-time")):(localStorage.removeItem("waifu-display"),document.getElementById("waifu").style.display="",setTimeout((()=>{document.getElementById("waifu").style.bottom=0}),0))})),localStorage.getItem("waifu-display")&&Date.now()-localStorage.getItem("waifu-display")<=864e5?(o.setAttribute("first-time",!0),setTimeout((()=>{o.classList.add("waifu-toggle-active")}),0)):i(e)}}();
