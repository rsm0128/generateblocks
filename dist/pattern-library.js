(()=>{var e={158:function(e){var t,n;t="undefined"!=typeof window?window:this,n=function(){function e(){}let t=e.prototype;return t.on=function(e,t){if(!e||!t)return this;let n=this._events=this._events||{},r=n[e]=n[e]||[];return r.includes(t)||r.push(t),this},t.once=function(e,t){if(!e||!t)return this;this.on(e,t);let n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this},t.off=function(e,t){let n=this._events&&this._events[e];if(!n||!n.length)return this;let r=n.indexOf(t);return-1!=r&&n.splice(r,1),this},t.emitEvent=function(e,t){let n=this._events&&this._events[e];if(!n||!n.length)return this;n=n.slice(0),t=t||[];let r=this._onceEvents&&this._onceEvents[e];for(let a of n)r&&r[a]&&(this.off(e,a),delete r[a]),a.apply(this,t);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e},e.exports?e.exports=n():t.EvEmitter=n()},564:function(e,t,n){!function(t,r){e.exports?e.exports=r(t,n(158)):t.imagesLoaded=r(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(e,t){let n=e.jQuery,r=e.console;function a(e,t,s){if(!(this instanceof a))return new a(e,t,s);let l=e;var i;"string"==typeof e&&(l=document.querySelectorAll(e)),l?(this.elements=(i=l,Array.isArray(i)?i:"object"==typeof i&&"number"==typeof i.length?[...i]:[i]),this.options={},"function"==typeof t?s=t:Object.assign(this.options,t),s&&this.on("always",s),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):r.error(`Bad element for imagesLoaded ${l||e}`)}a.prototype=Object.create(t.prototype),a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const s=[1,9,11];a.prototype.addElementImages=function(e){"IMG"===e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);let{nodeType:t}=e;if(!t||!s.includes(t))return;let n=e.querySelectorAll("img");for(let e of n)this.addImage(e);if("string"==typeof this.options.background){let t=e.querySelectorAll(this.options.background);for(let e of t)this.addElementBackgroundImages(e)}};const l=/url\((['"])?(.*?)\1\)/gi;function i(e){this.img=e}function o(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){let t=getComputedStyle(e);if(!t)return;let n=l.exec(t.backgroundImage);for(;null!==n;){let r=n&&n[2];r&&this.addBackground(r,e),n=l.exec(t.backgroundImage)}},a.prototype.addImage=function(e){let t=new i(e);this.images.push(t)},a.prototype.addBackground=function(e,t){let n=new o(e,t);this.images.push(n)},a.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();let e=(e,t,n)=>{setTimeout((()=>{this.progress(e,t,n)}))};this.images.forEach((function(t){t.once("progress",e),t.check()}))},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&r&&r.log(`progress: ${n}`,e,t)},a.prototype.complete=function(){let e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){let e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},i.prototype=Object.create(t.prototype),i.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e;let{parentNode:n}=this.img,r="PICTURE"===n.nodeName?n:this.img;this.emitEvent("progress",[this,r,t])},i.prototype.handleEvent=function(e){let t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype=Object.create(i.prototype),o.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},o.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&(n=t,n.fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}))},967:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,s(n)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=window.wp.components,r=window.wp.element,a=window.wp.i18n,s=window.wp.apiFetch;var l=n.n(s);const i=window.wp.url,o=(0,r.createContext)(void 0);async function c(e=!0){return await l()({path:(0,i.addQueryArgs)("/generateblocks/v1/pattern-library/libraries",{is_enabled:e}),method:"GET"})}function d({children:t}){const[n,a]=(0,r.useState)([]),[s,d]=(0,r.useState)([]),[u,m]=(0,r.useState)([]),[p,g]=(0,r.useState)(""),[h,b]=(0,r.useState)(""),[y,f]=(0,r.useState)(""),[E,v]=(0,r.useState)(!1),[w,k]=(0,r.useState)(""),[_,C]=(0,r.useState)(""),[S,L]=(0,r.useState)(""),[P,I]=(0,r.useState)(!1),[x,B]=(0,r.useState)("100%"),[M,A]=(0,r.useState)(15),[N,T]=(0,r.useState)(0),[D,V]=(0,r.useReducer)((function(e,t){switch(t.type){case"ADD":return[...e,t.pattern];case"REMOVE":return e.filter((e=>e.id!==t.pattern.id));case"SET":return t.patterns;default:return e}}),[]),H={libraries:n,search:p,setSearch:g,activeLibrary:h,setActiveLibrary:b,activeCategory:w,setActiveCategory:k,activePatternId:_,setActivePatternId:C,selectedPatterns:D,selectedPatternsDispatch:V,categories:s,hoverPattern:S,setHoverPattern:L,patterns:u,isLocal:E,setIsLocal:v,setPublicKey:f,loading:P,setLoading:I,previewIframeWidth:x,setPreviewIframeWidth:B,setLibraryCategories:O,setLibraryPatterns:R,setLibraries:G,itemsPerPage:15,itemCount:M,setItemCount:A,scrollPosition:N,setScrollPosition:T};async function O(){var e,t;const{data:n}=await async function(e,t,n){const r=t?"-pro":"";try{var a;const s=await l()({path:(0,i.addQueryArgs)(`/generateblocks${r}/v1/pattern-library/categories`,{libraryId:e,isLocal:t}),method:"GET",headers:{"X-GB-Public-Key":n}});return null!==(a=s?.response)&&void 0!==a?a:[]}catch(e){return[]}}(h?.id,E,y),r=new Set(u.flatMap((e=>e.categories))),a=n.filter((e=>r.has(e.id)));d(null!=a?a:[]);const s=null!==(e=a.find((e=>generateBlocksPatternLibrary.defaultOpenCategory===e.name)))&&void 0!==e?e:"";k(null!==(t=s?.id)&&void 0!==t?t:"")}async function R(){I(!0),m([]);const{data:e}=await async function(e,t,n,r,a){const s=r?"-pro":"";try{var o;const t=await l()({path:(0,i.addQueryArgs)(`/generateblocks${s}/v1/pattern-library/patterns`,{libraryId:e,categoryId:"",search:"",isLocal:r}),method:"GET",headers:{"X-GB-Public-Key":a}});return null!==(o=t?.response)&&void 0!==o?o:[]}catch(e){return[]}}(h?.id,0,0,E,y);m(null!=e?e:[]),A(15),T(0),I(!1)}async function G(){var e,t,n,r;const{data:s}=await c();a(null!=s?s:[]);const l=null!==(e=null!==(t=s.find((e=>generateBlocksPatternLibrary.defaultOpenLibrary===e.id)))&&void 0!==t?t:s[0])&&void 0!==e?e:{};b(null!=l&&l),f(null!==(n=l?.publicKey)&&void 0!==n?n:""),v(null!==(r=l?.isLocal)&&void 0!==r&&r)}return(0,r.useEffect)((()=>{!async function(){G()}()}),[]),(0,r.useEffect)((()=>{h.id?O():d([])}),[h?.id,u]),(0,r.useEffect)((()=>{h.id?R():m([])}),[h?.id,y]),(0,e.createElement)(o.Provider,{value:H},t)}function u(){const e=(0,r.useContext)(o);if(!e)throw new Error((0,a.__)("useLibrary hook must be wrapped by a LibraryProvider.","generateblocks"));return e}const m=window.wp.primitives,p=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"})),g=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})),h=(0,e.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(m.Path,{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})),b=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"}));function y({bulkInsertEnabled:n}){const{categories:r,activeCategory:s,setActiveCategory:l}=u();return(0,e.createElement)("div",{className:"pattern-category-list",style:{background:n?"none":""}},n?(0,e.createElement)(t.DropdownMenu,{className:"pattern-category-dropdown",icon:h,toggleProps:{variant:"secondary",children:(0,a.sprintf)(/* translators: %s: category name */
(0,a.__)("Category: %s","generateblocks"),(e=>{const t=r.find((t=>t.id===e));return t?t.name:null})(s)||(0,a.__)("All","generateblocks"))}},(({onClose:n})=>(0,e.createElement)(t.MenuGroup,null,(0,e.createElement)(t.MenuItem,{isPressed:""===s,onClick:()=>{l(""),n()}},(0,a.__)("All","generateblocks")),r&&r.map((r=>(0,e.createElement)(t.MenuItem,{key:r.id,icon:r.id===s?b:null,onClick:()=>{l(r.id),n()}},r.name)))))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Button,{id:"pattern-category-all",isPressed:""===s,onClick:()=>l("")},(0,a.__)("All","generateblocks")),r&&r.map((n=>(0,e.createElement)(t.Button,{id:`pattern-category-${n.id}`,key:n.id,isPressed:n.id===s,onClick:()=>l(n.id)},n.name)))))}const f=window.wp.hooks,E=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"}));function v({setShowAddLibrary:t,setLibraries:n}){const r=(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",null,(0,a.__)("This feature requires GenerateBlocks Pro.","generateblocks")));return(0,f.applyFilters)("generateblocks.patternLibrary.addLibraryContent",r,{setShowAddLibrary:t,setLibraries:n})}function w(){const[n,s]=(0,r.useState)(!1),{setLibraries:l}=u();return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Button,{variant:"secondary",icon:E,onClick:()=>s(!0),label:(0,a.__)("Add Library","generateblocks")}),!!n&&(0,e.createElement)(t.Modal,{title:(0,a.__)("Add Library","generateblocks"),onRequestClose:()=>s(!1),className:"gblocks-patterns-add-library"},(0,e.createElement)(v,{setShowAddLibrary:s,setLibraries:l})))}function k({readOnly:n}){const{libraries:r,activeLibrary:a,setActiveLibrary:s,setIsLocal:l,setPublicKey:i,setActiveCategory:o,loading:c}=u(),d=(0,f.applyFilters)("generateblocks.patternLibrary.libraries",r);return(0,e.createElement)("div",{className:"pattern-library-selector"},(0,e.createElement)(t.ButtonGroup,null,d.map((n=>(0,e.createElement)(t.Button,{key:n.id,isPressed:n.id===a.id,variant:"secondary",onClick:()=>{s(n),l(!!n.isLocal),i(n.publicKey),o("")},style:{pointerEvents:c?"none":""}},n.name))),!n&&(0,e.createElement)(w,null)))}var _=n(564),C=n.n(_);function S({pattern:n,isLoading:a,isActive:s=!1,globalStyleCSS:l}){const{id:i,preview:o,label:c,scripts:d=[]}=n,m=(0,r.useRef)(),p=(0,r.useRef)(),[g,h]=(0,r.useState)(0),[b,y]=(0,r.useState)(!1),[f,E]=(0,r.useState)({}),[v,w]=(0,r.useState)(!1),[k,_]=(0,r.useState)(0),[S,L]=(0,r.useState)(!1),{previewIframeWidth:P}=u(),I=k,x=1280,B=document?.querySelector(".editor-styles-wrapper");(0,r.useEffect)((()=>{let e;const t=()=>{L(!0),clearTimeout(e),e=setTimeout((()=>{L(!1)}),500)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]),(0,r.useEffect)((()=>{p.current?.clientWidth&&!S&&_(p.current?.clientWidth)}),[p.current?.clientWidth,S]),(0,r.useEffect)((()=>{if(!b)return;const e=m.current.contentWindow.document;d.forEach((t=>{const n=e.createElement("script");n.defer=!0,n.src=t,e.head.appendChild(n)})),e.body.innerHTML=o,e.head.innerHTML+='<style id="block-active"></style>',e.head.innerHTML+='<style id="pattern-styles"></style>';const t=e.createElement("style");t.innerHTML=l;const n=e.querySelector("head style");e.head.insertBefore(t,n),C()(e.body,(()=>{h(e.body.scrollHeight),w(!0)}))}),[b]),(0,r.useEffect)((()=>{if(!B)return;const e=getComputedStyle(B);e&&E({background:e.backgroundColor,text:e.color})}),[B?.style]),(0,r.useLayoutEffect)((()=>{const e=m.current?.contentWindow?.document;e&&e.querySelector&&e.querySelector("#pattern-styles")&&(e.querySelector("#pattern-styles").innerHTML=`body{background-color:${f?.background};color:${f?.text};}`)}),[f,g]),(0,r.useEffect)((()=>{if(!s)return;const e=m?.current?.contentWindow?.document;C()(e?.body,(()=>{h(e?.body?.scrollHeight)}))}),[P]),(0,r.useEffect)((()=>{const e=m.current.contentWindow.document.body;if(!e)return;const t=Array.from(e.querySelectorAll("*")),n=t?.find((e=>{const{display:t}=getComputedStyle(e);return"none"!==t}));if(n){const t=n.parentElement.clientWidth;n.offsetWidth===t||(e.style.padding="100px",n.style.marginLeft="auto",n.style.marginRight="auto")}}),[k,b]);const M=Math.round(g*(I/x)),A={opacity:a?0:1,height:"350px",display:"flex",flexDirection:"column",justifyContent:M+40<350?"center":""},N=["allow-same-origin"];return s&&N.push("allow-scripts"),(0,e.createElement)("div",{className:"gb-pattern-frame",style:s?{backgroundColor:"none",padding:0}:{}},(0,e.createElement)("div",{ref:p,className:"gb-pattern",style:s?{minHeight:"200px"}:A},!v&&(0,e.createElement)(t.Spinner,null),(0,e.createElement)("div",{style:s?{}:{width:`${I}px`,height:`${M}px`}},(0,e.createElement)("div",{style:s?{}:{height:g+"px",width:x/I*100+"%",transformOrigin:"0 0",transform:`scale( ${I/x} )`}},(0,e.createElement)("iframe",{id:i,onLoad:()=>{y(!0);const e=m.current.contentDocument||m.current.contentWindow.document;e.addEventListener("click",(t=>{const n=t.target;if("A"===n.tagName){const e=n.getAttribute("href");e&&!e.startsWith("#")&&(t.preventDefault(),t.stopPropagation())}s&&setTimeout((()=>{h(e.body.scrollHeight)}),500)}))},title:c,src:generateBlocksPatternLibrary.patternPreviewUrl,ref:m,style:{height:g+"px",border:"0",pointerEvents:s?"":"none",width:s?P:"1280px",opacity:v?1:0,display:s&&"100%"!==P?"block":"",margin:s&&"100%"!==P?"0 auto":""},tabIndex:"-1",loading:"lazy",sandbox:N.join(" ")})))))}const L=(0,e.createElement)(m.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(m.Path,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})),P=window.wp.data,I=window.wp.blockEditor,x=window.wp.blocks,B=window.wp.htmlEntities;function M({label:n,onClick:r,patterns:a,globalStyleData:s,className:l,disabled:i}){return(0,f.applyFilters)("generateblocks.patterns.insertPatternButton",(0,e.createElement)(t.Button,{className:l,variant:"primary",icon:E,onClick:r,disabled:i},n),{label:n,onClick:r,patterns:a,globalStyleData:s,className:l,disabled:i})}function A(e){return e.map((e=>{if(e.attributes&&e.attributes.uniqueId){const t=e.clientId.substr(2,9).replace("-","");e.attributes.uniqueId=t}return e.innerBlocks&&e.innerBlocks.length>0&&(e.innerBlocks=A(e.innerBlocks)),e}))}function N(e){if("core/paragraph"===e?.name){const t=e?.attributes?.content;if("string"==typeof t)return!t.trim();if("object"==typeof t)return!t?.text.trim()}return!1}function T({pattern:n,patternRef:r=null,children:s,showPreview:l=!0,bulkInsertEnabled:i,showTitle:o=!0,globalStyleData:c,closeModal:d,readOnly:m}){const{setActivePatternId:p,setScrollPosition:g}=u(),{insertBlocks:h,replaceBlock:b}=(0,P.useDispatch)(I.store),{getBlockInsertionPoint:y,getSelectedBlock:f}=(0,P.useSelect)((e=>e(I.store)),[]),{updateBlockAttributes:E}=(0,P.useDispatch)(I.store);return(0,e.createElement)("div",{className:"gb-pattern-details"},!!o&&(0,e.createElement)("h3",null,(0,B.decodeEntities)(n.label)),(0,e.createElement)("div",{className:"gb-pattern-details__actions"},!i&&!m&&(0,e.createElement)(M,{label:(0,a.__)("Insert","generateblocks"),onClick:async e=>{e.stopPropagation();const t=y(),r=f(),a=A((0,x.parse)(n.pattern));var s,l;a.forEach((e=>{e.attributes&&e.clientId&&E(e.clientId,e.attributes)})),N(r)?await b(r.clientId,a):await h(a,null!==(s=t?.index)&&void 0!==s?s:0,null!==(l=t.rootClientId)&&void 0!==l?l:""),d()},patterns:[n],globalStyleData:c}),l&&!i&&(0,e.createElement)(t.Button,{variant:"tertiary",icon:L,label:(0,a.__)("Preview","generateblocks"),showTooltip:!0,onClick:e=>{if(e.stopPropagation(),p(n.id),r){const e=r.current.closest(".gb-pattern-library__content");e&&g(e.scrollTop)}}}),s))}var D=n(967),V=n.n(D);function H({bulkInsertEnabled:n=!1,patterns:s=[],closeModal:l,globalStyleCSS:i,globalStyleData:o,readOnly:c=!1}){const d=(0,r.useRef)(),m=(0,r.useRef)(),{activePatternId:p,loading:g,itemsPerPage:h,itemCount:b,setItemCount:y,scrollPosition:f,selectedPatterns:E,selectedPatternsDispatch:v}=u(),w=(0,r.useMemo)((()=>s.filter((e=>e.id===p))[0]||void 0),[p]),k=g?{opacity:0}:{},[_,C]=(0,r.useState)([]),[L,P]=(0,r.useState)(!1);(0,r.useEffect)((()=>{C(s.slice(0,b))}),[b,s]),(0,r.useEffect)((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&P(!0)}))}),{root:null,rootMargin:"0px",threshold:.01});return m.current&&e.observe(m.current),()=>{e&&e.disconnect()}}),[]),(0,r.useEffect)((()=>{L&&(w||y(b+h),P(!1))}),[L]),(0,r.useEffect)((()=>{if(d.current&&!w){const e=d.current.closest(".gb-pattern-library__content");e&&(e.scrollTop=f)}}),[f,w]);const I=(0,r.memo)(T);return(0,e.createElement)(e.Fragment,null,g&&!p&&(0,e.createElement)("div",{className:"loading-library"},(0,e.createElement)(t.Spinner,null),(0,a.__)("Loading library","generateblocks")),!g&&!s.length&&!p&&(0,e.createElement)("div",{className:"loading-library"},(0,a.__)("No patterns found.","generateblocks")),!!w&&(0,e.createElement)(S,{isLoading:g,isActive:!0,pattern:w,globalStyleCSS:i}),(0,e.createElement)("ul",{ref:d,className:V()("patterns-wrapper",n&&"gb-bulk-insert"),style:{...k,display:w?"none":""}},_.map((r=>{var s;const u=null!==(s=E.some((({id:e})=>e===r.id)))&&void 0!==s&&s;return(0,e.createElement)("li",{key:r.id,className:V()("gb-pattern-wrapper","gb-selectable",u&&n&&"is-selected")},n&&(0,e.createElement)(t.Button,{className:"gb-selectable__toggle",label:u?(0,a.__)("Deselect this pattern","generateblocks"):(0,a.__)("Select this pattern","generate-blocks"),onClick:e=>{e.stopPropagation(),v({type:u?"REMOVE":"ADD",pattern:r})}}),(n||u)&&(0,e.createElement)(t.Button,{className:"check",onClick:e=>{e.stopPropagation(),v({type:"REMOVE",pattern:r})},onBlur:e=>e.stopPropagation(),tabIndex:"-1"},(0,e.createElement)("span",{className:"media-modal-icon"}),(0,e.createElement)("span",{className:"screen-reader-text"},(0,a.__)("Deselect","generateblocks"))),(0,e.createElement)(S,{isLoading:g,pattern:r,globalStyleCSS:i}),(0,e.createElement)(I,{pattern:r,patternRef:d,bulkInsertEnabled:n,globalStyleData:o,closeModal:l,readOnly:c}))}))),(0,e.createElement)("div",{ref:m,style:{marginTop:"10px"},className:"gblocks-patterns-load-more"}))}const O=window.wp.compose;function R({onChange:n}){const{setSearch:a,activeLibrary:s}=u(),[l,i]=(0,r.useState)(""),o=(0,O.useDebounce)(a,500);return(0,r.useEffect)((()=>{o(l)}),[l]),(0,r.useEffect)((()=>{i("")}),[s?.id]),(0,e.createElement)(t.SearchControl,{value:l,onChange:e=>{n(e),i(e)}})}const G=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M5 11.25h14v1.5H5z"})),z=window.gb.components;function j({closeModal:n,globalStyleData:s,setBulkInsertEnabled:l,filteredPatterns:i}){const{insertBlocks:o,replaceBlock:c}=(0,P.useDispatch)(I.store),{selectedPatterns:d=[],selectedPatternsDispatch:m,setActivePatternId:p,setScrollPosition:g}=u(),{getBlockInsertionPoint:h,getSelectedBlock:b}=(0,P.useSelect)((e=>e(I.store)),[]),{updateBlockAttributes:y}=(0,P.useDispatch)(I.store),f=()=>(0,e.createElement)(e.Fragment,null,"​");return(0,e.createElement)("aside",{className:"gb-selected-patterns"},(0,e.createElement)("h3",{className:"gb-selected-patterns__headline"},(0,a.__)("Bulk Insert","generateblocks")),!d.length&&(0,e.createElement)("p",null,(0,a.__)("Select patterns to insert.","generateblocks")),(0,e.createElement)(z.SortableList,{className:"gb-selected-patterns__list",items:d,dragHandleLabel:(0,a.__)("Reorder Pattern","generateblocks"),setItems:e=>{m({type:"SET",patterns:e})},itemComponent:function({item:n}){const s=(0,r.useRef)(null);return(0,e.createElement)("div",{id:`selected-pattern-${n.id}`,className:"gb-selected-pattern",ref:s},(0,e.createElement)("span",{className:"gb-selected-pattern__label",title:n.label},n.label),(0,e.createElement)("div",{className:"gb-selected-pattern__actions"},(0,e.createElement)(f,null),(0,e.createElement)(t.Button,{variant:"tertiary",icon:G,label:(0,a.__)("Remove Pattern","generateblocks"),onClick:()=>{m({type:"REMOVE",pattern:n})}}),(0,e.createElement)(t.Button,{variant:"tertiary",icon:L,label:(0,a.__)("Preview Pattern","generateblocks"),showTooltip:!0,disabled:!i.find((({id:e})=>e===n.id)),onClick:()=>{p(n.id);const e=s.current.closest(".gb-pattern-library__content");e&&g(e.scrollTop)}})))},dragHandle:!0}),(0,e.createElement)("div",{style:{display:"flex",gap:"5px",justifyContent:"space-between",marginTop:"1em"}},(0,e.createElement)(M,{label:(0,a.__)("Insert All","generateblocks"),patterns:d,globalStyleData:s,disabled:!d.length,onClick:async()=>{const e=d.reduce(((e,t)=>e+t.pattern),""),t=h(),r=A((0,x.parse)(e)),a=b();var s,l;r.forEach((e=>{e.attributes&&e.clientId&&y(e.clientId,e.attributes)})),N(a)?await c(a.clientId,r):await o(r,null!==(s=t?.index)&&void 0!==s?s:0,null!==(l=t.rootClientId)&&void 0!==l?l:""),n()}}),(0,e.createElement)(t.Button,{variant:"secondary",onClick:()=>l(!1),isDestructive:!0},(0,a.__)("Cancel","generateblocks"))))}const q=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),W=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),F=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"}));function $({pattern:n,isSelected:r,bulkInsertEnabled:s,globalStyleData:l,closeModal:i,readOnly:o}){const{activePatternId:c,previewIframeWidth:d,setPreviewIframeWidth:m}=u();return(0,e.createElement)(T,{pattern:n,showPreview:!1,isSelected:r,showTitle:!1,bulkInsertEnabled:s,globalStyleData:l,closeModal:i,readOnly:o},!!c&&(0,e.createElement)(t.ButtonGroup,null,(0,e.createElement)(t.Button,{isPressed:"100%"===d,variant:"tertiary",icon:q,label:(0,a.__)("Desktop","generateblocks"),showTooltip:!0,onClick:()=>m("100%")}),(0,e.createElement)(t.Button,{isPressed:"900px"===d,variant:"tertiary",icon:W,label:(0,a.__)("Tablet","generateblocks"),showTooltip:!0,onClick:()=>m("900px")}),(0,e.createElement)(t.Button,{isPressed:"400px"===d,variant:"tertiary",icon:F,label:(0,a.__)("Mobile","generateblocks"),showTooltip:!0,onClick:()=>m("400px")})))}const Z=window.lodash,Q=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"M5.5 12h1.75l-2.5 3-2.5-3H4a8 8 0 113.134 6.35l.907-1.194A6.5 6.5 0 105.5 12zm9.53 1.97l-2.28-2.28V8.5a.75.75 0 00-1.5 0V12a.747.747 0 00.218.529l1.282-.84-1.28.842 2.5 2.5a.75.75 0 101.06-1.061z"}));function K({setCacheIsClearing:n,cacheIsClearing:s}){const{activeLibrary:o,setLibraryCategories:c,setLibraryPatterns:d,isLocal:m}=u(),[p,g]=(0,r.useState)(!1);async function h(){if(m)return void g({});const e=await l()({path:(0,i.addQueryArgs)("/generateblocks/v1/pattern-library/get-cache-data",{id:o.id}),method:"GET"});var t;e.success?g(null!==(t=e?.response?.data)&&void 0!==t?t:{}):g({})}return(0,r.useEffect)((()=>{!async function(){o?.id&&h()}()}),[o?.id]),(0,Z.isEmpty)(p)?null:(0,e.createElement)(t.Button,{className:"has-icon",variant:"tertiary",size:"compact",disabled:!p.can_clear||s,label:(0,a.__)("Refresh patterns","generateblocks"),showTooltip:!0,onClick:async()=>{n(!0),(await l()({path:"/generateblocks/v1/pattern-library/clear-cache",data:{id:o?.id},method:"POST"})).success&&(await c(),await d(),await h()),n(!1)}},s?(0,e.createElement)(t.Spinner,null):(0,e.createElement)(t.Icon,{icon:Q}))}const J=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"})),U=(0,e.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(m.Path,{d:"m19 7.5h-7.628c-.3089-.87389-1.1423-1.5-2.122-1.5-.97966 0-1.81309.62611-2.12197 1.5h-2.12803v1.5h2.12803c.30888.87389 1.14231 1.5 2.12197 1.5.9797 0 1.8131-.62611 2.122-1.5h7.628z"}),(0,e.createElement)(m.Path,{d:"m19 15h-2.128c-.3089-.8739-1.1423-1.5-2.122-1.5s-1.8131.6261-2.122 1.5h-7.628v1.5h7.628c.3089.8739 1.1423 1.5 2.122 1.5s1.8131-.6261 2.122-1.5h2.128z"}));async function X(e){return await l()({path:"generateblocks/v1/pattern-library/libraries/save",method:"POST",data:{data:e}})}function Y({library:n,librariesToManage:r,setLibrariesToManage:s,isRemote:l}){const{setLibraries:i}=u();return(0,e.createElement)("div",{key:n.id,className:"gblocks-manage-libraries__library"},(0,e.createElement)("div",{className:"gblocks-manage-libraries__library-name"},l?(0,e.createElement)(t.Tooltip,{text:n.domain},(0,e.createElement)("span",null,n.name)):n.name,!!l&&(0,e.createElement)(t.Button,{size:"small",isDestructive:!0,variant:"secondary",onClick:async()=>{const e=[...r],t=e.findIndex((e=>e.id===n.id));e.splice(t,1),s(e);const a=await X(e);a.success&&a?.response?.data.length&&i(a?.response?.data.length)},icon:J,label:(0,a.__)("Delete library","generateblocks"),showTooltip:!0})),(0,e.createElement)("div",{className:"gblocks-manage-libraries__library-actions"},(0,e.createElement)(t.ToggleControl,{checked:!!n.isEnabled,label:(0,a.__)("Enabled","generateblocks"),onChange:async()=>{const e=[...r],t=e.findIndex((e=>e.id===n.id));e[t]={...e[t],isEnabled:!r[t].isEnabled},s(e);const a=await X(e);a.success&&a?.response?.data.length&&i()}})))}function ee(){const[n,s]=(0,r.useState)(!1),[l,i]=(0,r.useState)([]);(0,r.useEffect)((()=>{!async function(){if(!n)return;const{data:e}=await c(!1);i(e)}()}),[n]);const o=l.filter((e=>e.isDefault)),d=l.filter((e=>e.isLocal)),u=l.filter((e=>!e.isLocal&&!e.isDefault));return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.Button,{variant:"tertiary",size:"compact",icon:U,label:(0,a.__)("Manage Libraries","generateblocks"),showTooltip:!0,onClick:s}),!!n&&(0,e.createElement)(t.Modal,{title:(0,a.__)("Manage Libraries","generateblocks"),onRequestClose:()=>s(!1)},(0,e.createElement)("div",{className:"gblocks-manage-libraries"},!!o.length&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h4",null,(0,a.__)("Default","generateblocks")),(0,e.createElement)("div",{className:"gblocks-manage-libraries__table"},o.map((t=>(0,e.createElement)(Y,{key:t.id,library:t,librariesToManage:l,setLibrariesToManage:i}))))),!!d.length&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h4",null,(0,a.__)("Local","generateblocks")),(0,e.createElement)("div",{className:"gblocks-manage-libraries__table"},d.map((t=>(0,e.createElement)(Y,{key:t.id,library:t,librariesToManage:l,setLibrariesToManage:i}))))),!!u.length&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)("h4",null,(0,a.__)("Remote","generateblocks")),(0,e.createElement)("div",{className:"gblocks-manage-libraries__table"},u.map((t=>(0,e.createElement)(Y,{key:t.id,library:t,librariesToManage:l,setLibrariesToManage:i,isRemote:!0}))))))))}const te=wp.element.createElement,ne={};function re({closeModal:n,readOnly:s}){const{activePatternId:l,setActivePatternId:i,patterns:o,setScrollPosition:c,scrollPosition:d,activeCategory:m,search:h,setSearch:b,isLocal:E,activeLibrary:v,selectedPatterns:w}=u(),[_,C]=(0,r.useState)(!1),[S,L]=(0,r.useState)(o),[P,I]=(0,r.useState)(""),[x,B]=(0,r.useState)([]),[M,A]=(0,r.useState)(!1),N=o.find((e=>l===e.id)),T=(0,r.useRef)();function D(e){return o.filter((t=>{const n=""===m,r=t.label.toLowerCase().includes(e.toLowerCase()),a=t.categories.includes(m);return n?r:r&&a}))}(0,r.useEffect)((()=>{L(""===m?o:D(h)),T.current&&(T.current.scrollTop=0)}),[o,m]);const O={};return l&&(O.gridColumn="1 / -1"),(0,f.doAction)("generateblocks.patterns.patternsList",{activeLibrary:v,setGlobalStyleCSS:I,setGlobalStyleData:B,isLocal:E,cacheIsClearing:M}),(0,e.createElement)("div",{className:"gb-pattern-library"},(0,e.createElement)("div",{className:"gb-pattern-library__header"},(0,e.createElement)("div",{className:"gb-pattern-library__header-title"},l?(0,e.createElement)("h1",null,N.label):(0,e.createElement)("h1",null,"tabs-desktop"=="generateblocks"?te("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none"},te("path",{d:"M18.95 4H4.55C3.55589 4 2.75 4.76751 2.75 5.71429V14.2857C2.75 15.2325 3.55589 16 4.55 16H18.95C19.9441 16 20.75 15.2325 20.75 14.2857V5.71429C20.75 4.76751 19.9441 4 18.95 4Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),te("path",{d:"M1.75 18C1.19772 18 0.75 18.4477 0.75 19C0.75 19.5523 1.19772 20 1.75 20H21.75C22.3023 20 22.75 19.5523 22.75 19C22.75 18.4477 22.3023 18 21.75 18H1.75ZM9 18.8C8.86193 18.8 8.75 18.9119 8.75 19.05C8.75 19.1881 8.86193 19.3 9 19.3H14.5C14.6381 19.3 14.75 19.1881 14.75 19.05C14.75 18.9119 14.6381 18.8 14.5 18.8H9Z",stroke:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})):(0,e.createElement)("svg",{viewBox:"0 0 50 60.12",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M6.686 31.622V18.918a.077.077 0 0 1 .05-.072l6.5-2.313 6.5-2.313 9.682-3.445L39.1 7.33a.067.067 0 0 0 .036-.028.074.074 0 0 0 .014-.044V.076a.077.077 0 0 0-.032-.062.076.076 0 0 0-.069-.009l-13 4.625-13 4.625-6.5 2.313-6.5 2.313a.067.067 0 0 0-.036.028.097.097 0 0 0-.013.046V52.067c0 .026.013.048.032.062s.044.018.069.009l3.267-1.163 3.267-1.163c.015-.005.028-.015.036-.028s.014-.028.014-.044V37.999l.001-6.377c-.001 0 0 0 0 0z"}),(0,e.createElement)("path",{d:"m23.949 29.976 13-4.625 13-4.625c.015-.005.028-.015.036-.028s.015-.028.015-.044V8.056a.077.077 0 0 0-.032-.062.076.076 0 0 0-.069-.009l-13 4.625-13 4.625-6.5 2.313-6.5 2.313a.067.067 0 0 0-.036.028.074.074 0 0 0-.014.044V60.045c0 .026.013.048.032.062a.076.076 0 0 0 .069.009l6.475-2.304 6.475-2.304 6.525-2.322 6.525-2.322 6.5-2.313 6.5-2.313c.015-.005.028-.015.036-.028s.014-.025.014-.041V27.193a.077.077 0 0 0-.032-.062.076.076 0 0 0-.069-.009l-6.45 2.295L37 31.711a.067.067 0 0 0-.036.028.074.074 0 0 0-.014.044v6.272a.077.077 0 0 1-.05.072l-6.45 2.295L24 42.715a.075.075 0 0 1-.101-.071V30.046c0-.016.005-.031.014-.044a.08.08 0 0 1 .036-.026z"}))," ",(0,a.__)("Pattern Library","generateblocks"))),(0,e.createElement)("div",{className:"gb-pattern-library__header-action"},l?(0,e.createElement)($,{pattern:N,bulkInsertEnabled:_,globalStyleData:x,closeModal:n,readOnly:s}):(0,e.createElement)(k,{readOnly:s})),(0,e.createElement)("div",{className:"gb-pattern-library__header-close"},l?(0,e.createElement)(t.Button,{icon:g,onClick:()=>{i(""),c(d)}},(0,a.__)("Return to library")):(0,e.createElement)(e.Fragment,null,!s&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(K,{setCacheIsClearing:A,cacheIsClearing:M}),(0,e.createElement)(ee,null)),"function"==typeof n&&(0,e.createElement)(t.Button,{variant:"tertiary",icon:p,label:(0,a.__)("Close Pattern Library","generateblocks"),showTooltip:!0,onClick:n})))),(0,e.createElement)("div",{className:"gb-pattern-library__sidebar"},!l&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(R,{onChange:e=>{b(e);const t=""===m?"all":m,n=function(e){const t=""===m?"all":m,n=v?.id||"";return ne[n]&&ne[n][t]||(ne[n]=ne[n]||{},ne[n][t]=ne[n][t]||{}),!!ne[n][t][e]&&ne[n][t][e]}(e);if(n)return void L(n);const r=D(e),a=v?.id;a&&(ne[a][t][e]=r),L(r)}}),(0,e.createElement)(y,{bulkInsertEnabled:_,selectedPatterns:w}),!s&&(0,e.createElement)(e.Fragment,null,_?(0,e.createElement)(j,{closeModal:n,globalStyleData:x,setBulkInsertEnabled:C,filteredPatterns:S}):(0,e.createElement)(t.Button,{variant:"primary",onClick:()=>C(!0)},(0,a.__)("Bulk Insert","generateblocks"))))),(0,e.createElement)("div",{className:V()({"gb-pattern-library__content":!0,"gb-pattern-library__content--active":l}),style:O,ref:T},(0,e.createElement)(H,{patterns:S,bulkInsertEnabled:_,closeModal:n,globalStyleCSS:P,globalStyleData:x,readOnly:s})))}(0,f.addFilter)("generateblocks.editor.sidebar","generateblocks/pattern-library",(function(n,{activePanel:s}){const[l,i]=(0,r.useState)(!1);return s?n:(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t.PanelBody,null,(0,e.createElement)("h2",{className:"gblocks-editor-sidebar__panel-title"},(0,a.__)("Pattern Library","generateblocks")),(0,e.createElement)(t.Button,{className:"gblocks-pattern-library-button",variant:"secondary",onClick:()=>i(!0),isPressed:l},(0,a.__)("Open Pattern Library","generateblocks"))),n,!!l&&(0,e.createElement)(t.Modal,{className:"gblocks-pattern-library-modal",isFullScreen:!0,onRequestClose:()=>i(!1)},(0,e.createElement)(d,null,(0,e.createElement)(re,{closeModal:()=>i(!1),readOnly:!1}))))}))})()})();