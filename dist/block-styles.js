(()=>{var e={758:e=>{var t;globalThis,t=()=>(()=>{"use strict";var e={17:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,s,l;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(s=n;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(s=n;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,l[s]))return!1;for(s=n;0!=s--;){var i=l[s];if(!e(t[i],r[i]))return!1}return!0}return t!=t&&r!=r}},774:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,s,l;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(s=n;0!=s--;)if(!e(t[s],r[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(s=n;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,l[s]))return!1;for(s=n;0!=s--;){var i=l[s];if(!("_owner"===i&&t.$$typeof||e(t[i],r[i])))return!1}return!0}return t!=t&&r!=r}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n),r.d(n,{BlockStyles:()=>h,defaultAtRules:()=>y,getPreviewDevice:()=>E,useAtRuleEffect:()=>I,useCurrentAtRule:()=>A,useDeviceType:()=>j,useGenerateCSSEffect:()=>_,useStyleSelectorEffect:()=>T,useSyncStyles:()=>q,useUpdateEditorCSS:()=>M,useUpdateEditorCSSEffect:()=>W,withUniqueId:()=>w});const e=window.React,t=window.wp.components,s=window.wp.primitives,l=(0,e.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(s.Path,{fillRule:"evenodd",d:"M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",clipRule:"evenodd"})),i=(0,e.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(s.Path,{d:"M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"})),o=window.wp.element,a=window.wp.i18n;function c(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=c(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}const u=function(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=c(e))&&(n&&(n+=" "),n+=t);return n},d={panel:"A9FWatvP7GACFzozMl9l",styles:"p8Ku5RQuMVphTV8b9MEU"},f="gb-block-styles-tab";function h({settingsTab:r=()=>null,stylesTab:n=()=>null,onTabSelect:s=()=>null}){var c;const h=null!==(c=sessionStorage.getItem(f))&&void 0!==c?c:"settings",[p,g]=(0,o.useState)(h),m=[{name:"settings",icon:l,title:(0,a.__)("Settings","generateblocks")},{name:"styles",icon:i,title:(0,a.__)("Styles","generateblocks")}];return(0,o.useEffect)((()=>{const e=document.querySelector(".block-editor-block-inspector");return e&&(m.forEach((t=>{e.classList.remove("gb-block-styles-tab--"+t.name)})),e.classList.add("gb-block-styles-tab--"+p)),()=>{e.classList.remove("gb-block-styles-tab--"+p)}}),[p]),(0,e.createElement)(t.TabPanel,{className:u(d.panel,"gb-block-styles-tab-panel",d[p]),activeClass:"is-active",onSelect:e=>{!function(e){sessionStorage.setItem(f,e)}(e),g(e),s(e)},initialTabName:p,tabs:m},(()=>(0,e.createElement)(e.Fragment,null,"settings"===p&&(0,e.createElement)(e.Fragment,null,r),"styles"===p&&(0,e.createElement)(e.Fragment,null,n))))}const p=window.wp.data,g=window.wp.blockEditor,m=e=>e.reduce(((e,t)=>{if(t.name&&t.name.includes("generateblocks")&&t.attributes&&t.attributes.uniqueId&&(e.uniqueIds.push(t.attributes.uniqueId),e.clientIds.push(t.clientId)),t.innerBlocks){const{uniqueIds:r,clientIds:n}=m(t.innerBlocks);e.uniqueIds=e.uniqueIds.concat(r),e.clientIds=e.clientIds.concat(n)}return e}),{uniqueIds:[],clientIds:[]}),b=e=>e.substr(2,9).replace("-",""),v=(e,t,r)=>e.filter((e=>e===t)).length>1&&r===e.lastIndexOf(t);function w(t){return r=>{const{clientId:n,attributes:s}=r,{updateBlockAttributes:l}=(0,p.useDispatch)(g.store),{wasBlockJustInserted:i}=(0,p.useSelect)((e=>({wasBlockJustInserted:e(g.store).wasBlockJustInserted(n)})));return(0,o.useEffect)((()=>{const{uniqueIds:e,clientIds:t}=m(wp.data.select("core/block-editor").getBlocks().map((e=>{if("core/widget-area"!==e.name)return e;const t=wp.data.select("core/block-editor").getBlocks(e.clientId);return{...e,innerBlocks:t}})));if(!s.uniqueId||v(e,s.uniqueId,t.indexOf(n))||i){const e=b(n);l(n,{uniqueId:e})}}),[n]),(0,e.createElement)(t,{...r})}}const y=[{label:(0,a.__)("All devices","generateblocks"),value:"",icon:()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M57.128 31.707h5.556v5.556h-5.556zM75.489 50.836h3.703v3.704H75.49z"}),(0,e.createElement)("path",{d:"M93.396 15.181c1.926.074 3.598 1.704 3.673 3.676.263 20.76 0 41.528 0 62.287-.025 1.972-1.691 3.695-3.673 3.769-28.896.37-57.797.009-86.695.009-1.966-.028-3.694-1.695-3.769-3.676-.263-20.76-.001-41.528-.001-62.287.025-1.972 1.692-3.695 3.673-3.778 28.928-.361 57.864-.361 86.792 0Zm-4.772 65.111h3.816V19.811H7.56v60.481h31.664c-.21-17.342.006-34.676.006-52.009.027-2.13 1.792-4.037 4.014-4.12 11.109-.14 22.222-.14 33.331 0 2.113.083 3.93 1.86 4.012 4.009.07 5.565.096 11.12.1 16.685 1.907.01 3.817.028 5.725.046 1.147.047 2.139 1.028 2.183 2.186.14 11.064.15 22.13.03 33.203Zm-3.886 0V48.764H69.946v31.528h14.792Zm-7.962-35.444c-.023-5.51-.045-11.028-.045-16.537 0-.167-.107-.278-.245-.287-11.03-.417-22.075 0-33.112 0-.163 0-.28.11-.285.25-.225 17.333-.005 34.676-.001 52.018H66.06c-.12-11.074-.11-22.139.029-33.203.044-1.149 1.028-2.14 2.183-2.186 2.835-.037 5.67-.055 8.504-.055Z"})),show:!0,id:"all"},{label:(0,a.__)("Desktop","generateblocks"),value:"@media (min-width:1025px)",icon:()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 417 417",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M389.233 63.228c7.989.304 14.98 7.083 15.229 15.28 1.082 86.514 0 173.028 0 259.542-.083 8.196-6.99 15.38-15.23 15.684-120.42 1.518-240.84 0-361.26 0-8.155-.101-15.395-7.083-15.728-15.28-1.082-86.513 0-173.028 0-259.542.083-8.196 7.074-15.38 15.312-15.684a13466.862 13466.862 0 0 1 361.677 0ZM31.55 82.454v251.953h353.687V82.454H31.551Z"})),show:!1,id:"largeWidth"},{label:(0,a.__)("Desktop & tablet","generateblocks"),value:"@media (min-width:768px)",icon:()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 417 417",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M389.145 63.263c8.025.309 15.008 7.099 15.317 15.316 1.08 86.497 0 173.033 0 259.53-.116 8.217-7.06 15.393-15.317 15.702-120.409 1.543-240.818.038-361.227.038-8.179-.115-15.393-7.06-15.702-15.316-1.08-86.497 0-173.032 0-259.53.077-8.217 7.06-15.393 15.317-15.74a14485.169 14485.169 0 0 1 361.612 0Zm-3.973 19.29H31.506v252.006h145.487c-.926-72.762 0-145.524 0-218.287.115-8.873 7.484-16.82 16.705-17.168 46.296-.579 92.592-.579 138.889 0 8.796.347 16.396 7.755 16.744 16.705.926 72.917 0 145.834 0 218.75h35.84V82.553Zm-51.89 252.006c2.7-72.685-.04-145.486-.04-218.21 0-.617-.424-1.119-1.002-1.157-45.988-1.736-91.976 0-137.963 0-.695 0-1.196.463-1.196 1.042-.926 72.762 0 145.524 0 218.325h140.2Z"}),(0,e.createElement)("path",{d:"M251.558 132.111h23.148v23.15h-23.148z"})),show:!1,id:"mediumLargeWidth"},{label:(0,a.__)("Tablet","generateblocks"),value:"@media (max-width:1024px) and (min-width:768px)",icon:()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M0 0h24v24H0z",style:{fill:"none",transform:"scale(4.16667)"}}),(0,e.createElement)("path",{d:"M69.096 15.124c2.445.045 4.626 2.189 4.659 4.673.132 20.139.396 40.278 0 60.417-.066 2.396-2.181 4.525-4.593 4.599a969.265 969.265 0 0 1-38.233 0c-2.412-.074-4.527-2.174-4.61-4.599-.38-20.154-.38-40.322 0-60.491.083-2.395 2.181-4.525 4.61-4.599 12.722-.236 25.444-.074 38.167 0ZM31.06 19.131c-.38 0-.727.311-.743.695-.397 20.08 0 40.175 0 60.255 0 .385.314.725.694.74 12.672.413 25.345 0 38.017 0 .397 0 .727-.34.727-.74.017-20.065.017-40.145 0-60.21 0-.4-.314-.725-.694-.74-12.656-.414-25.328 0-38 0Z"}),(0,e.createElement)("path",{d:"M46.842 22.597h6.4v6.4h-6.4z"})),show:!1,id:"mediumWidth"},{label:(0,a.__)("Tablet & mobile","generateblocks"),value:"@media (max-width:1024px)",icon:()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M42.284 22.603h6.4v6.4h-6.4zM63.082 45.178h4.8v4.8h-4.8z"}),(0,e.createElement)("path",{d:"M61.364 84.873c-11.663.184-23.333.168-34.996-.056-2.4-.072-4.528-2.183-4.6-4.6a1588.412 1588.412 0 0 1 0-60.489c.072-2.4 2.184-4.527 4.6-4.599 12.726-.24 25.453-.08 38.18 0 2.431.04 4.615 2.192 4.663 4.663.04 6.36.088 12.711.128 19.07 2.184.008 4.368.032 6.551.056 1.312.048 2.456 1.184 2.504 2.504.176 13.63.176 27.261 0 40.892-.048 1.32-1.176 2.455-2.504 2.503-4.839.064-9.678.08-14.526.056Zm3.104-65.744H26.504c-.4 0-.728.336-.736.711-.112 20.078 0 40.164 0 60.242 0 .368.32.72.688.736 8.703.28 17.398.176 26.101.088a1665.8 1665.8 0 0 1 .016-39.484c.056-1.32 1.184-2.456 2.504-2.504 3.423-.04 6.839-.064 10.255-.064a1880.03 1880.03 0 0 1-.12-18.99.751.751 0 0 0-.744-.735Zm9.927 23.789H56.573v37.9h17.822v-37.9Z"})),show:!0,id:"mediumSmallWidth"},{label:(0,a.__)("Mobile","generateblocks"),value:"@media (max-width:767px)",icon:()=>(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{d:"M62.043 23.435c1.52.056 2.841 1.364 2.893 2.897.208 15.781.208 31.563 0 47.333-.052 1.533-1.363 2.84-2.893 2.897-8.025.101-16.06.101-24.085 0-1.53-.056-2.84-1.364-2.903-2.897-.198-15.77-.198-31.552 0-47.333.062-1.522 1.363-2.84 2.903-2.897 8.025-.102 16.06-.102 24.085 0Zm-22.357 4.633V71.94h20.629V28.068H39.686Z"}),(0,e.createElement)("path",{d:"M47.22 30.36h5.556v5.557h-5.555z"})),show:!0,id:"smallWidth"}],S={Desktop:"all",Tablet:"mediumSmallWidth",Mobile:"smallWidth"};function k(e){var t;return null!==(t=y.find((t=>t.value===e))?.id)&&void 0!==t?t:"all"}function E(e,t){let r="";const n=k(e);return""!==e&&"largeWidth"!==n&&"mediumLargeWidth"!==n||"Desktop"===t?"mediumWidth"!==n&&"mediumSmallWidth"!==n||"Tablet"===t?"smallWidth"===n&&"Mobile"!==t&&(r="Mobile"):r="Tablet":r="Desktop",r}const x=window.wp.url;function M(){const{updateSettings:e}=function(){const e=(0,x.getPath)(window.location.href)?.includes("site-editor.php"),t=(0,p.useDispatch)(e?"core/edit-site":"core/editor");return{updateSettings:e?t.updateSettings:t.updateEditorSettings}}(),{getSettings:t}=(0,p.useSelect)((()=>{const e=(0,x.getPath)(window.location.href)?.includes("site-editor.php"),t=(0,p.select)(e?"core/edit-site":"core/editor");return{getSettings:e?t.getSettings:t.getEditorSettings}}),[]);return async(r,n="")=>{const s=t(),l=s?.styles?.find((e=>"gb_block:"+r===e.source));if(l){const t=s?.styles?.find((e=>"gb_block:"+r===e.source))?.css;if(t===n)return;e({...s,styles:s?.styles.map((e=>"gb_block:"+r!==e.source?e:{...e,css:n}))})}else e({...s,styles:[...s?.styles,{css:n,source:"gb_block:"+r}]})}}function O(e){var t;return null!==(t=y.find((t=>t.id===e))?.value)&&void 0!==t?t:""}function I({deviceType:e,atRule:t,setAtRule:r}){(0,o.useEffect)((()=>{const n=k(t);switch(e){case"Desktop":""!==t&&"largeWidth"!==n&&"mediumLargeWidth"!==n&&r("");break;case"Tablet":"mediumWidth"!==n&&"mediumSmallWidth"!==n&&r(O("mediumSmallWidth"));break;case"Mobile":"smallWidth"!==n&&r(O("smallWidth"))}}),[e,t,r,k,O])}function _({selector:e,styles:t,setAttributes:r,getCss:n}){(0,o.useEffect)((()=>{null!==e&&""!==e&&async function(){const s=await n(e,t);r({css:s})}()}),[e,JSON.stringify(t),r,n])}function T({isSelected:e,currentStyle:t,selector:r,setCurrentStyle:n,setNestedRule:s,setAtRule:l,setStyles:i,styles:a}){(0,o.useEffect)((()=>{e&&(t?.selector&&r===t?.selector||(n({selector:r}),s(""),l(""),i(a)))}),[e,t?.selector,r,n,s,l,i,a])}function W({selector:e,css:t}){const r=M();(0,o.useEffect)((()=>{e&&r(e,t)}),[t,e])}function j(){const{setDeviceType:e=()=>null}=(0,p.useDispatch)("core/editor");return{deviceType:(0,p.useSelect)((e=>{const{getDeviceType:t=()=>"Desktop"}=e("core/editor");return t()}),[]),setDeviceType:e}}function A(){const{deviceType:e}=j();return(0,o.useMemo)((()=>{var t;if(!e||"Desktop"===e)return"";const r=S[e];return null!==(t=y.find((e=>e.id===r))?.value)&&void 0!==t?t:""}),[e])}var B=r(774);const D=r.n(B)(),Z=function(t,r){!function(t,r,n){var s=(0,e.useRef)(void 0);s.current&&n(r,s.current)||(s.current=r),(0,e.useEffect)(t,s.current)}(t,r,D)};var z=r(17),R=r.n(z);function q({stylesAttribute:e={},styles:t={},setStyles:r}){Z((()=>{R()(e,t)||r(e)}),[e,r])}})(),n})(),e.exports=t()}},t={},r=function r(n){var s=t[n];if(void 0!==s)return s.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}(758);(window.gb=window.gb||{}).blockStyles=r})();