const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-CRlN77Q2.js","assets/index-BAQIZNK4.js","assets/all-wallets-DBulWEQ3.js","assets/arrow-bottom-circle-CYDBsA-3.js","assets/app-store-S_H9ySlc.js","assets/apple-CCqN3NHx.js","assets/arrow-bottom-BPDqiHU5.js","assets/arrow-left-BsflpqR4.js","assets/arrow-right-C-GDZXa5.js","assets/arrow-top-DYqKKMuG.js","assets/bank-RqeiGbv3.js","assets/browser-CjUqQ75J.js","assets/card-CqZdTFZk.js","assets/checkmark-Clx1vV_E.js","assets/checkmark-bold-Cxg3dxCA.js","assets/chevron-bottom-Di2Jck5Y.js","assets/chevron-left-CqCo_gM0.js","assets/chevron-right-BEv9yGuC.js","assets/chevron-top-C9omlrlB.js","assets/chrome-store-D1Brw133.js","assets/clock-p9v-WC20.js","assets/close-C97qzsMu.js","assets/compass-D-xs7AWU.js","assets/coinPlaceholder-rUrk9GEQ.js","assets/copy-DQ5ss49c.js","assets/cursor-T6mooJtM.js","assets/cursor-transparent-7wYIqpuk.js","assets/desktop-B2yKSMCn.js","assets/disconnect-DWIBfQPB.js","assets/discord-CnZ7SUlL.js","assets/etherscan-umRcZpyl.js","assets/extension-RDlP48hY.js","assets/external-link-Cfs4FtDi.js","assets/facebook-Chx_hTDp.js","assets/farcaster-CqFmrRsz.js","assets/filters-Uw-doPuV.js","assets/github-CpwMCBTl.js","assets/google-vnNylvpS.js","assets/help-circle-CPTyf1Pn.js","assets/image-CgWyXLmC.js","assets/id-B_aGCh_w.js","assets/info-circle-Z2kNvbk7.js","assets/lightbulb-CEs75eDc.js","assets/mail-DDPuJaeM.js","assets/mobile-DaMzl7wF.js","assets/more-EOUhuYDu.js","assets/network-placeholder-D8HFhhFv.js","assets/nftPlaceholder-_fGpyBL3.js","assets/off-By5vGHi1.js","assets/play-store-Bca3AzAQ.js","assets/plus-DXO4UmTE.js","assets/qr-code-DxZzz1Pg.js","assets/recycle-horizontal-Bo-m4IdS.js","assets/refresh-DUf_DlQ2.js","assets/search-3MnjiMS4.js","assets/send-BJ-gBAV4.js","assets/swapHorizontal-CDNfyHZQ.js","assets/swapHorizontalMedium-B5QfXm8u.js","assets/swapHorizontalBold-BDFXd8h-.js","assets/swapHorizontalRoundedBold-DZYqk7EZ.js","assets/swapVertical-Bq6PLsO0.js","assets/telegram-DgBt9Cl8.js","assets/three-dots-DKG6K-oc.js","assets/twitch-B1NZE4Qt.js","assets/x-CLXzda6l.js","assets/twitterIcon-Cw5BlzGj.js","assets/verify-CSzOBges.js","assets/verify-filled-DqvVmELu.js","assets/wallet-CfqtYx5H.js","assets/walletconnect-8-rsoiX_.js","assets/wallet-placeholder-APPDDa77.js","assets/warning-circle-By4PKtbY.js","assets/info-BFLrCUn5.js","assets/exclamation-triangle-C1nBL0mS.js","assets/reown-logo-BtRp3cAr.js"])))=>i.map(i=>d[i]);
import{a1 as k,a2 as B,a3 as T,a as P,f as R,L as H,r as L,x as S,_ as r,Z as M}from"./index-BAQIZNK4.js";const d={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:i,truncate:n}){return t.length<=e+i?t:n==="end"?`${t.substring(0,e)}...`:n==="start"?`...${t.substring(t.length-i)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(i))}`},generateAvatarColors(t){const i=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),n=this.hexToRgb(i),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),c=`${s}% ${s}% at 65% 40%`,u=[];for(let h=0;h<5;h+=1){const g=this.tintColor(n,.15*h);u.push(`rgb(${g[0]}, ${g[1]}, ${g[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${c}
   `},hexToRgb(t){const e=parseInt(t,16),i=e>>16&255,n=e>>8&255,o=e&255;return[i,n,o]},tintColor(t,e){const[i,n,o]=t,a=Math.round(i+(255-i)*e),s=Math.round(n+(255-n)*e),c=Math.round(o+(255-o)*e);return[a,s,c]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,i){return t.toString().length>=e?Number(t).toFixed(i):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function j(t,e){const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function U(t,e){return customElements.get(t)||customElements.define(t,e),e}function I(t){return function(i){return typeof i=="function"?U(t,i):j(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:k},N=(t=F,e,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(i.name,t),n==="accessor"){const{name:s}=i;return{set(c){const u=e.get.call(this);e.set.call(this,c),this.requestUpdate(s,u,t)},init(c){return c!==void 0&&this.P(s,void 0,t),c}}}if(n==="setter"){const{name:s}=i;return function(c){const u=this[s];e.call(this,c),this.requestUpdate(s,u,t)}}throw Error("Unsupported decorator location: "+n)};function l(t){return(e,i)=>typeof i=="object"?N(t,e,i):((n,o,a)=>{const s=o.hasOwnProperty(a);return o.constructor.createProperty(a,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,a):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t){return l({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=t=>t===null||typeof t!="object"&&typeof t!="function",q=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V={ATTRIBUTE:1,CHILD:2},C=t=>(...e)=>({_$litDirective$:t,values:e});let x=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,n){this._$Ct=e,this._$AM=i,this._$Ci=n}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=(t,e)=>{var n;const i=t._$AN;if(i===void 0)return!1;for(const o of i)(n=o._$AO)==null||n.call(o,e,!1),f(o,e);return!0},E=t=>{let e,i;do{if((e=t._$AM)===void 0)break;i=e._$AN,i.delete(t),t=e}while((i==null?void 0:i.size)===0)},z=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(i===void 0)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),K(e)}};function G(t){this._$AN!==void 0?(E(this),this._$AM=t,z(this)):this._$AM=t}function Z(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let a=i;a<n.length;a++)f(n[a],!1),E(n[a]);else n!=null&&(f(n,!1),E(n));else f(this,t)}const K=t=>{t.type==V.CHILD&&(t._$AP??(t._$AP=Z),t._$AQ??(t._$AQ=G))};class X extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,i,n){super._$AT(e,i,n),z(this),this.isConnected=e._$AU}_$AO(e,i=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(f(this,e),E(this))}setValue(e){if(q(this._$Ct))this._$Ct._$AI(e,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=e,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Y{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class Q{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??(this.Z=new Promise(e=>this.q=e))}resume(){var e;(e=this.q)==null||e.call(this),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=t=>!W(t)&&typeof t.then=="function",O=1073741823;class J extends X{constructor(){super(...arguments),this._$Cwt=O,this._$Cbt=[],this._$CK=new Y(this),this._$CX=new Q}render(...e){return e.find(i=>!D(i))??T}update(e,i){const n=this._$Cbt;let o=n.length;this._$Cbt=i;const a=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<i.length&&!(c>this._$Cwt);c++){const u=i[c];if(!D(u))return this._$Cwt=c,u;c<o&&u===n[c]||(this._$Cwt=O,o=0,Promise.resolve(u).then(async h=>{for(;s.get();)await s.get();const g=a.deref();if(g!==void 0){const $=g._$Cbt.indexOf(u);$>-1&&$<g._$Cwt&&(g._$Cwt=$,g.setValue(h))}}))}return T}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const tt=C(J);class et{constructor(){this.cache=new Map}set(e,i){this.cache.set(e,i)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const A=new et,it=P`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var m=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const b={add:async()=>(await r(async()=>{const{addSvg:t}=await import("./add-CRlN77Q2.js");return{addSvg:t}},__vite__mapDeps([0,1]))).addSvg,allWallets:async()=>(await r(async()=>{const{allWalletsSvg:t}=await import("./all-wallets-DBulWEQ3.js");return{allWalletsSvg:t}},__vite__mapDeps([2,1]))).allWalletsSvg,arrowBottomCircle:async()=>(await r(async()=>{const{arrowBottomCircleSvg:t}=await import("./arrow-bottom-circle-CYDBsA-3.js");return{arrowBottomCircleSvg:t}},__vite__mapDeps([3,1]))).arrowBottomCircleSvg,appStore:async()=>(await r(async()=>{const{appStoreSvg:t}=await import("./app-store-S_H9ySlc.js");return{appStoreSvg:t}},__vite__mapDeps([4,1]))).appStoreSvg,apple:async()=>(await r(async()=>{const{appleSvg:t}=await import("./apple-CCqN3NHx.js");return{appleSvg:t}},__vite__mapDeps([5,1]))).appleSvg,arrowBottom:async()=>(await r(async()=>{const{arrowBottomSvg:t}=await import("./arrow-bottom-BPDqiHU5.js");return{arrowBottomSvg:t}},__vite__mapDeps([6,1]))).arrowBottomSvg,arrowLeft:async()=>(await r(async()=>{const{arrowLeftSvg:t}=await import("./arrow-left-BsflpqR4.js");return{arrowLeftSvg:t}},__vite__mapDeps([7,1]))).arrowLeftSvg,arrowRight:async()=>(await r(async()=>{const{arrowRightSvg:t}=await import("./arrow-right-C-GDZXa5.js");return{arrowRightSvg:t}},__vite__mapDeps([8,1]))).arrowRightSvg,arrowTop:async()=>(await r(async()=>{const{arrowTopSvg:t}=await import("./arrow-top-DYqKKMuG.js");return{arrowTopSvg:t}},__vite__mapDeps([9,1]))).arrowTopSvg,bank:async()=>(await r(async()=>{const{bankSvg:t}=await import("./bank-RqeiGbv3.js");return{bankSvg:t}},__vite__mapDeps([10,1]))).bankSvg,browser:async()=>(await r(async()=>{const{browserSvg:t}=await import("./browser-CjUqQ75J.js");return{browserSvg:t}},__vite__mapDeps([11,1]))).browserSvg,card:async()=>(await r(async()=>{const{cardSvg:t}=await import("./card-CqZdTFZk.js");return{cardSvg:t}},__vite__mapDeps([12,1]))).cardSvg,checkmark:async()=>(await r(async()=>{const{checkmarkSvg:t}=await import("./checkmark-Clx1vV_E.js");return{checkmarkSvg:t}},__vite__mapDeps([13,1]))).checkmarkSvg,checkmarkBold:async()=>(await r(async()=>{const{checkmarkBoldSvg:t}=await import("./checkmark-bold-Cxg3dxCA.js");return{checkmarkBoldSvg:t}},__vite__mapDeps([14,1]))).checkmarkBoldSvg,chevronBottom:async()=>(await r(async()=>{const{chevronBottomSvg:t}=await import("./chevron-bottom-Di2Jck5Y.js");return{chevronBottomSvg:t}},__vite__mapDeps([15,1]))).chevronBottomSvg,chevronLeft:async()=>(await r(async()=>{const{chevronLeftSvg:t}=await import("./chevron-left-CqCo_gM0.js");return{chevronLeftSvg:t}},__vite__mapDeps([16,1]))).chevronLeftSvg,chevronRight:async()=>(await r(async()=>{const{chevronRightSvg:t}=await import("./chevron-right-BEv9yGuC.js");return{chevronRightSvg:t}},__vite__mapDeps([17,1]))).chevronRightSvg,chevronTop:async()=>(await r(async()=>{const{chevronTopSvg:t}=await import("./chevron-top-C9omlrlB.js");return{chevronTopSvg:t}},__vite__mapDeps([18,1]))).chevronTopSvg,chromeStore:async()=>(await r(async()=>{const{chromeStoreSvg:t}=await import("./chrome-store-D1Brw133.js");return{chromeStoreSvg:t}},__vite__mapDeps([19,1]))).chromeStoreSvg,clock:async()=>(await r(async()=>{const{clockSvg:t}=await import("./clock-p9v-WC20.js");return{clockSvg:t}},__vite__mapDeps([20,1]))).clockSvg,close:async()=>(await r(async()=>{const{closeSvg:t}=await import("./close-C97qzsMu.js");return{closeSvg:t}},__vite__mapDeps([21,1]))).closeSvg,compass:async()=>(await r(async()=>{const{compassSvg:t}=await import("./compass-D-xs7AWU.js");return{compassSvg:t}},__vite__mapDeps([22,1]))).compassSvg,coinPlaceholder:async()=>(await r(async()=>{const{coinPlaceholderSvg:t}=await import("./coinPlaceholder-rUrk9GEQ.js");return{coinPlaceholderSvg:t}},__vite__mapDeps([23,1]))).coinPlaceholderSvg,copy:async()=>(await r(async()=>{const{copySvg:t}=await import("./copy-DQ5ss49c.js");return{copySvg:t}},__vite__mapDeps([24,1]))).copySvg,cursor:async()=>(await r(async()=>{const{cursorSvg:t}=await import("./cursor-T6mooJtM.js");return{cursorSvg:t}},__vite__mapDeps([25,1]))).cursorSvg,cursorTransparent:async()=>(await r(async()=>{const{cursorTransparentSvg:t}=await import("./cursor-transparent-7wYIqpuk.js");return{cursorTransparentSvg:t}},__vite__mapDeps([26,1]))).cursorTransparentSvg,desktop:async()=>(await r(async()=>{const{desktopSvg:t}=await import("./desktop-B2yKSMCn.js");return{desktopSvg:t}},__vite__mapDeps([27,1]))).desktopSvg,disconnect:async()=>(await r(async()=>{const{disconnectSvg:t}=await import("./disconnect-DWIBfQPB.js");return{disconnectSvg:t}},__vite__mapDeps([28,1]))).disconnectSvg,discord:async()=>(await r(async()=>{const{discordSvg:t}=await import("./discord-CnZ7SUlL.js");return{discordSvg:t}},__vite__mapDeps([29,1]))).discordSvg,etherscan:async()=>(await r(async()=>{const{etherscanSvg:t}=await import("./etherscan-umRcZpyl.js");return{etherscanSvg:t}},__vite__mapDeps([30,1]))).etherscanSvg,extension:async()=>(await r(async()=>{const{extensionSvg:t}=await import("./extension-RDlP48hY.js");return{extensionSvg:t}},__vite__mapDeps([31,1]))).extensionSvg,externalLink:async()=>(await r(async()=>{const{externalLinkSvg:t}=await import("./external-link-Cfs4FtDi.js");return{externalLinkSvg:t}},__vite__mapDeps([32,1]))).externalLinkSvg,facebook:async()=>(await r(async()=>{const{facebookSvg:t}=await import("./facebook-Chx_hTDp.js");return{facebookSvg:t}},__vite__mapDeps([33,1]))).facebookSvg,farcaster:async()=>(await r(async()=>{const{farcasterSvg:t}=await import("./farcaster-CqFmrRsz.js");return{farcasterSvg:t}},__vite__mapDeps([34,1]))).farcasterSvg,filters:async()=>(await r(async()=>{const{filtersSvg:t}=await import("./filters-Uw-doPuV.js");return{filtersSvg:t}},__vite__mapDeps([35,1]))).filtersSvg,github:async()=>(await r(async()=>{const{githubSvg:t}=await import("./github-CpwMCBTl.js");return{githubSvg:t}},__vite__mapDeps([36,1]))).githubSvg,google:async()=>(await r(async()=>{const{googleSvg:t}=await import("./google-vnNylvpS.js");return{googleSvg:t}},__vite__mapDeps([37,1]))).googleSvg,helpCircle:async()=>(await r(async()=>{const{helpCircleSvg:t}=await import("./help-circle-CPTyf1Pn.js");return{helpCircleSvg:t}},__vite__mapDeps([38,1]))).helpCircleSvg,image:async()=>(await r(async()=>{const{imageSvg:t}=await import("./image-CgWyXLmC.js");return{imageSvg:t}},__vite__mapDeps([39,1]))).imageSvg,id:async()=>(await r(async()=>{const{idSvg:t}=await import("./id-B_aGCh_w.js");return{idSvg:t}},__vite__mapDeps([40,1]))).idSvg,infoCircle:async()=>(await r(async()=>{const{infoCircleSvg:t}=await import("./info-circle-Z2kNvbk7.js");return{infoCircleSvg:t}},__vite__mapDeps([41,1]))).infoCircleSvg,lightbulb:async()=>(await r(async()=>{const{lightbulbSvg:t}=await import("./lightbulb-CEs75eDc.js");return{lightbulbSvg:t}},__vite__mapDeps([42,1]))).lightbulbSvg,mail:async()=>(await r(async()=>{const{mailSvg:t}=await import("./mail-DDPuJaeM.js");return{mailSvg:t}},__vite__mapDeps([43,1]))).mailSvg,mobile:async()=>(await r(async()=>{const{mobileSvg:t}=await import("./mobile-DaMzl7wF.js");return{mobileSvg:t}},__vite__mapDeps([44,1]))).mobileSvg,more:async()=>(await r(async()=>{const{moreSvg:t}=await import("./more-EOUhuYDu.js");return{moreSvg:t}},__vite__mapDeps([45,1]))).moreSvg,networkPlaceholder:async()=>(await r(async()=>{const{networkPlaceholderSvg:t}=await import("./network-placeholder-D8HFhhFv.js");return{networkPlaceholderSvg:t}},__vite__mapDeps([46,1]))).networkPlaceholderSvg,nftPlaceholder:async()=>(await r(async()=>{const{nftPlaceholderSvg:t}=await import("./nftPlaceholder-_fGpyBL3.js");return{nftPlaceholderSvg:t}},__vite__mapDeps([47,1]))).nftPlaceholderSvg,off:async()=>(await r(async()=>{const{offSvg:t}=await import("./off-By5vGHi1.js");return{offSvg:t}},__vite__mapDeps([48,1]))).offSvg,playStore:async()=>(await r(async()=>{const{playStoreSvg:t}=await import("./play-store-Bca3AzAQ.js");return{playStoreSvg:t}},__vite__mapDeps([49,1]))).playStoreSvg,plus:async()=>(await r(async()=>{const{plusSvg:t}=await import("./plus-DXO4UmTE.js");return{plusSvg:t}},__vite__mapDeps([50,1]))).plusSvg,qrCode:async()=>(await r(async()=>{const{qrCodeIcon:t}=await import("./qr-code-DxZzz1Pg.js");return{qrCodeIcon:t}},__vite__mapDeps([51,1]))).qrCodeIcon,recycleHorizontal:async()=>(await r(async()=>{const{recycleHorizontalSvg:t}=await import("./recycle-horizontal-Bo-m4IdS.js");return{recycleHorizontalSvg:t}},__vite__mapDeps([52,1]))).recycleHorizontalSvg,refresh:async()=>(await r(async()=>{const{refreshSvg:t}=await import("./refresh-DUf_DlQ2.js");return{refreshSvg:t}},__vite__mapDeps([53,1]))).refreshSvg,search:async()=>(await r(async()=>{const{searchSvg:t}=await import("./search-3MnjiMS4.js");return{searchSvg:t}},__vite__mapDeps([54,1]))).searchSvg,send:async()=>(await r(async()=>{const{sendSvg:t}=await import("./send-BJ-gBAV4.js");return{sendSvg:t}},__vite__mapDeps([55,1]))).sendSvg,swapHorizontal:async()=>(await r(async()=>{const{swapHorizontalSvg:t}=await import("./swapHorizontal-CDNfyHZQ.js");return{swapHorizontalSvg:t}},__vite__mapDeps([56,1]))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await r(async()=>{const{swapHorizontalMediumSvg:t}=await import("./swapHorizontalMedium-B5QfXm8u.js");return{swapHorizontalMediumSvg:t}},__vite__mapDeps([57,1]))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await r(async()=>{const{swapHorizontalBoldSvg:t}=await import("./swapHorizontalBold-BDFXd8h-.js");return{swapHorizontalBoldSvg:t}},__vite__mapDeps([58,1]))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await r(async()=>{const{swapHorizontalRoundedBoldSvg:t}=await import("./swapHorizontalRoundedBold-DZYqk7EZ.js");return{swapHorizontalRoundedBoldSvg:t}},__vite__mapDeps([59,1]))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await r(async()=>{const{swapVerticalSvg:t}=await import("./swapVertical-Bq6PLsO0.js");return{swapVerticalSvg:t}},__vite__mapDeps([60,1]))).swapVerticalSvg,telegram:async()=>(await r(async()=>{const{telegramSvg:t}=await import("./telegram-DgBt9Cl8.js");return{telegramSvg:t}},__vite__mapDeps([61,1]))).telegramSvg,threeDots:async()=>(await r(async()=>{const{threeDotsSvg:t}=await import("./three-dots-DKG6K-oc.js");return{threeDotsSvg:t}},__vite__mapDeps([62,1]))).threeDotsSvg,twitch:async()=>(await r(async()=>{const{twitchSvg:t}=await import("./twitch-B1NZE4Qt.js");return{twitchSvg:t}},__vite__mapDeps([63,1]))).twitchSvg,twitter:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-CLXzda6l.js");return{xSvg:t}},__vite__mapDeps([64,1]))).xSvg,twitterIcon:async()=>(await r(async()=>{const{twitterIconSvg:t}=await import("./twitterIcon-Cw5BlzGj.js");return{twitterIconSvg:t}},__vite__mapDeps([65,1]))).twitterIconSvg,verify:async()=>(await r(async()=>{const{verifySvg:t}=await import("./verify-CSzOBges.js");return{verifySvg:t}},__vite__mapDeps([66,1]))).verifySvg,verifyFilled:async()=>(await r(async()=>{const{verifyFilledSvg:t}=await import("./verify-filled-DqvVmELu.js");return{verifyFilledSvg:t}},__vite__mapDeps([67,1]))).verifyFilledSvg,wallet:async()=>(await r(async()=>{const{walletSvg:t}=await import("./wallet-CfqtYx5H.js");return{walletSvg:t}},__vite__mapDeps([68,1]))).walletSvg,walletConnect:async()=>(await r(async()=>{const{walletConnectSvg:t}=await import("./walletconnect-8-rsoiX_.js");return{walletConnectSvg:t}},__vite__mapDeps([69,1]))).walletConnectSvg,walletConnectLightBrown:async()=>(await r(async()=>{const{walletConnectLightBrownSvg:t}=await import("./walletconnect-8-rsoiX_.js");return{walletConnectLightBrownSvg:t}},__vite__mapDeps([69,1]))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await r(async()=>{const{walletConnectBrownSvg:t}=await import("./walletconnect-8-rsoiX_.js");return{walletConnectBrownSvg:t}},__vite__mapDeps([69,1]))).walletConnectBrownSvg,walletPlaceholder:async()=>(await r(async()=>{const{walletPlaceholderSvg:t}=await import("./wallet-placeholder-APPDDa77.js");return{walletPlaceholderSvg:t}},__vite__mapDeps([70,1]))).walletPlaceholderSvg,warningCircle:async()=>(await r(async()=>{const{warningCircleSvg:t}=await import("./warning-circle-By4PKtbY.js");return{warningCircleSvg:t}},__vite__mapDeps([71,1]))).warningCircleSvg,x:async()=>(await r(async()=>{const{xSvg:t}=await import("./x-CLXzda6l.js");return{xSvg:t}},__vite__mapDeps([64,1]))).xSvg,info:async()=>(await r(async()=>{const{infoSvg:t}=await import("./info-BFLrCUn5.js");return{infoSvg:t}},__vite__mapDeps([72,1]))).infoSvg,exclamationTriangle:async()=>(await r(async()=>{const{exclamationTriangleSvg:t}=await import("./exclamation-triangle-C1nBL0mS.js");return{exclamationTriangleSvg:t}},__vite__mapDeps([73,1]))).exclamationTriangleSvg,reown:async()=>(await r(async()=>{const{reownSvg:t}=await import("./reown-logo-BtRp3cAr.js");return{reownSvg:t}},__vite__mapDeps([74,1]))).reownSvg};async function rt(t){if(A.has(t))return A.get(t);const i=(b[t]??b.copy)();return A.set(t,i),i}let v=class extends L{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,S`${tt(rt(this.name),S`<div class="fallback"></div>`)}`}};v.styles=[R,H,it];m([l()],v.prototype,"size",void 0);m([l()],v.prototype,"name",void 0);m([l()],v.prototype,"color",void 0);m([l()],v.prototype,"aspectRatio",void 0);v=m([I("wui-icon")],v);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=C(class extends x{constructor(t){var e;if(super(t),t.type!==V.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!((n=this.nt)!=null&&n.has(a))&&this.st.add(a);return this.render(e)}const i=t.element.classList;for(const a of this.st)a in e||(i.remove(a),this.st.delete(a));for(const a in e){const s=!!e[a];s===this.st.has(a)||(o=this.nt)!=null&&o.has(a)||(s?(i.add(a),this.st.add(a)):(i.remove(a),this.st.delete(a)))}return T}}),nt=P`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var y=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends L{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,S`<slot class=${at(e)}></slot>`}};p.styles=[R,nt];y([l()],p.prototype,"variant",void 0);y([l()],p.prototype,"color",void 0);y([l()],p.prototype,"align",void 0);y([l()],p.prototype,"lineClamp",void 0);p=y([I("wui-text")],p);const ot=P`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var w=function(t,e,i,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,i,n);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};let _=class extends L{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&d.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&d.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&d.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&d.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&d.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&d.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&d.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&d.getSpacingStyles(this.margin,3)};
    `,S`<slot></slot>`}};_.styles=[R,ot];w([l()],_.prototype,"flexDirection",void 0);w([l()],_.prototype,"flexWrap",void 0);w([l()],_.prototype,"flexBasis",void 0);w([l()],_.prototype,"flexGrow",void 0);w([l()],_.prototype,"flexShrink",void 0);w([l()],_.prototype,"alignItems",void 0);w([l()],_.prototype,"justifyContent",void 0);w([l()],_.prototype,"columnGap",void 0);w([l()],_.prototype,"rowGap",void 0);w([l()],_.prototype,"gap",void 0);w([l()],_.prototype,"padding",void 0);w([l()],_.prototype,"margin",void 0);_=w([I("wui-flex")],_);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=t=>t??M;export{d as U,C as a,I as c,at as e,X as f,l as n,gt as o,ct as r};
