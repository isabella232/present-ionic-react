(window.webpackJsonp=window.webpackJsonp||[]).push([[97,1,7],{144:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_modal",(function(){return v}));var o=r(2),i=r(3),n=r(284),a=r(289),s=r(288),d=r(291),l=r(287),c=(r(285),r(286)),m=r(283),u=r(292);const h=.93,p=(t,e)=>Object(n.c)(400,t/Math.abs(1.1*e),500),f=(t,e)=>{const r=Object(a.a)().addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=Object(a.a)().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),i=Object(a.a)().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(e){const t=window.innerWidth<768,n="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,s=Object(a.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",r=`translateY(${n?"-10px":t}) scale(${h})`;s.afterStyles({transform:r}).beforeAddWrite(()=>d.style.setProperty("background-color","black")).addElement(e).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:r,borderRadius:"10px 10px 0 0"}]),i.addAnimation(s)}else if(i.addAnimation(r),n){const t=`translateY(-10px) scale(${n?h:1})`;s.afterStyles({transform:t}).addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const r=Object(a.a)().afterStyles({transform:t}).addElement(e.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);i.addAnimation([s,r])}else o.fromTo("opacity","0","1")}else i.addAnimation(r);return i},b=(t,e,r=500)=>{const o=Object(a.a)().addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i=Object(a.a)().addElement(t.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),n=Object(a.a)().addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(i);if(e){const t=window.innerWidth<768,r="ION-MODAL"===e.tagName&&void 0!==e.presentingElement,s=Object(a.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(t=>{if(1!==t)return;e.style.setProperty("overflow",""),Array.from(d.querySelectorAll("ion-modal")).filter(t=>void 0!==t.presentingElement).length<=1&&d.style.setProperty("background-color","")}),d=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",o=`translateY(${r?"-10px":t}) scale(${h})`;s.addElement(e).keyframes([{offset:0,filter:"contrast(0.85)",transform:o,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),n.addAnimation(s)}else if(n.addAnimation(o),r){const t=`translateY(-10px) scale(${r?h:1})`;s.addElement(e.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const o=Object(a.a)().addElement(e.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);n.addAnimation([s,o])}else i.fromTo("opacity","1","0")}else n.addAnimation(o);return n},y=t=>{const e=Object(a.a)(),r=Object(a.a)(),o=Object(a.a)();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),e.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,o])},w=t=>{const e=Object(a.a)(),r=Object(a.a)(),o=Object(a.a)(),i=t.querySelector(".modal-wrapper");return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),e.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,o])},v=class{constructor(t){Object(o.l)(this,t),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=()=>{this.dismiss(void 0,c.a)},this.onDismiss=t=>{t.stopPropagation(),t.preventDefault(),this.dismiss()},this.onLifecycle=t=>{const e=this.usersElement,r=g[t.type];if(e&&r){const o=new CustomEvent(r,{bubbles:!1,cancelable:!1,detail:t.detail});e.dispatchEvent(o)}},Object(c.e)(this.el),this.didPresent=Object(o.f)(this,"ionModalDidPresent",7),this.willPresent=Object(o.f)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.f)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.f)(this,"ionModalDidDismiss",7)}async present(){if(this.presented)return;const t=this.el.querySelector(".modal-wrapper");if(!t)throw new Error("container is undefined");const e=Object.assign(Object.assign({},this.componentProps),{modal:this.el});this.usersElement=await Object(u.a)(this.delegate,t,this.component,["ion-page"],e),await Object(s.d)(this.usersElement),Object(o.n)(()=>this.el.classList.add("show-modal")),await Object(c.f)(this,"modalEnter",f,y,this.presentingElement);const r=Object(i.b)(this);if(this.swipeToClose&&"ios"===r){const t=this.leaveAnimation||i.c.get("modalLeave",b),e=this.animation=t(this.el,this.presentingElement);this.gesture=((t,e,r)=>{const o=t.offsetHeight;let i=!1;const n=Object(l.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:t=>{const e=t.event.target;return null===e||!e.closest||null===e.closest("ion-content")},onStart:()=>{e.progressStart(!0,i?1:0)},onMove:t=>{const r=t.deltaY/o;r<0||e.progressStep(r)},onEnd:t=>{const a=t.velocityY,s=t.deltaY/o;if(s<0)return;const l=(t.deltaY+1e3*a)/o>=.5;let c=l?-.001:.001;l?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),c+=Object(d.a)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),c+=Object(d.a)([0,0],[1,0],[.68,.28],[1,1],s)[0]);const m=p(l?s*o:(1-s)*o,a);i=l,n.enable(!1),e.onFinish(()=>{l||n.enable(!0)}).progressEnd(l?1:0,c,m),l&&r()}});return n})(this.el,e,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,"gesture"),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}}async dismiss(t,e){if(this.gestureAnimationDismissing&&"gesture"!==e)return!1;const r=c.i.get(this)||[],o=await Object(c.g)(this,t,e,"modalLeave",b,w,this.presentingElement);return o&&(await Object(u.b)(this.delegate,this.usersElement),this.animation&&this.animation.destroy(),r.forEach(t=>t.destroy())),this.animation=void 0,o}onDidDismiss(){return Object(c.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return Object(c.h)(this.el,"ionModalWillDismiss")}render(){const t=Object(i.b)(this);return Object(o.j)(o.b,{"no-router":!0,"aria-modal":"true",class:Object.assign({[t]:!0,"modal-card":void 0!==this.presentingElement&&"ios"===t},Object(m.b)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(o.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===t&&Object(o.j)("div",{class:"modal-shadow"}),Object(o.j)("div",{role:"dialog",class:"modal-wrapper"}))}get el(){return Object(o.g)(this)}},g={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};v.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},283:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return s}));const o=(t,e)=>null!==e.closest(t),i=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,n=t=>{const e={};return(t=>{if(void 0!==t){return(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t)}return[]})(t).forEach(t=>e[t]=!0),e},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,r)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,r)}return!1}},284:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return s})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return h})),r.d(e,"f",(function(){return n})),r.d(e,"g",(function(){return i})),r.d(e,"h",(function(){return m})),r.d(e,"i",(function(){return l})),r.d(e,"j",(function(){return c})),r.d(e,"k",(function(){return o}));const o=t=>"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(t):"function"==typeof requestAnimationFrame?requestAnimationFrame(t):setTimeout(t),i=t=>!!t.shadowRoot&&!!t.attachShadow,n=t=>{const e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},a=(t,e,r,o,n)=>{if(t||i(e)){let t=e.querySelector("input.aux-input");t||(t=e.ownerDocument.createElement("input"),t.type="hidden",t.classList.add("aux-input"),e.appendChild(t)),t.disabled=n,t.name=r,t.value=o||""}},s=(t,e,r)=>Math.max(t,Math.min(e,r)),d=(t,e)=>{if(!t){const t="ASSERT: "+e;throw console.error(t),new Error(t)}},l=t=>t.timeStamp||Date.now(),c=t=>{if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},m=t=>{const e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error(`"${t}" is not a valid value for [side]. Use "start" or "end" instead.`)}},u=(t,e)=>{const r=t._original||t;return{_original:t,emit:h(r.emit.bind(r),e)}},h=(t,e=0)=>{let r;return(...o)=>{clearTimeout(r),r=setTimeout(t,e,...o)}}},285:function(t,e,r){"use strict";r.r(e),r.d(e,"MENU_BACK_BUTTON_PRIORITY",(function(){return a})),r.d(e,"OVERLAY_BACK_BUTTON_PRIORITY",(function(){return n})),r.d(e,"startHardwareBackButton",(function(){return o}));const o=()=>{const t=document;let e=!1;t.addEventListener("backbutton",()=>{if(e)return;const r=[],o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){r.push({priority:t,handler:e})}}});if(t.dispatchEvent(o),r.length>0){let t,o=Number.MIN_SAFE_INTEGER;r.forEach(({priority:e,handler:r})=>{e>=o&&(o=e,t=r)}),e=!0,i(t).then(()=>e=!1)}})},i=async t=>{try{if(t){const e=t();null!=e&&await e}}catch(t){console.error(t)}},n=100,a=99},286:function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return m})),r.d(e,"e",(function(){return u})),r.d(e,"f",(function(){return y})),r.d(e,"g",(function(){return w})),r.d(e,"h",(function(){return x})),r.d(e,"i",(function(){return a})),r.d(e,"j",(function(){return S})),r.d(e,"k",(function(){return c})),r.d(e,"l",(function(){return D}));var o=r(3),i=r(285);let n=0;const a=new WeakMap,s=t=>({create:e=>h(t,e),dismiss:(e,r,o)=>f(document,e,r,t,o),getTop:async()=>b(document,t)}),d=s("ion-alert"),l=s("ion-action-sheet"),c=s("ion-picker"),m=s("ion-popover"),u=t=>{const e=document;p(e);const r=n++;t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r)},h=(t,e)=>customElements.whenDefined(t).then(()=>{const r=document,o=r.createElement(t);return o.classList.add("overlay-hidden"),Object.assign(o,e),v(r).appendChild(o),o.componentOnReady()}),p=t=>{0===n&&(n=1,t.addEventListener("focusin",e=>{const r=b(t);if(r&&r.backdropDismiss&&!k(r,e.target)){const t=r.querySelector("input,button");t&&t.focus()}}),t.addEventListener("ionBackButton",e=>{const r=b(t);r&&r.backdropDismiss&&e.detail.register(i.OVERLAY_BACK_BUTTON_PRIORITY,()=>r.dismiss(void 0,j))}),t.addEventListener("keyup",e=>{if("Escape"===e.key){const e=b(t);e&&e.backdropDismiss&&e.dismiss(void 0,j)}}))},f=(t,e,r,o,i)=>{const n=b(t,o,i);return n?n.dismiss(e,r):Promise.reject("overlay does not exist")},b=(t,e,r)=>{const o=((t,e)=>(void 0===e&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(e)).filter(t=>t.overlayIndex>0)))(t,e);return void 0===r?o[o.length-1]:o.find(t=>t.id===r)},y=async(t,e,r,i,n)=>{if(t.presented)return;t.presented=!0,t.willPresent.emit();const a=Object(o.b)(t),s=t.enterAnimation?t.enterAnimation:o.c.get(e,"ios"===a?r:i);await g(t,s,t.el,n)&&t.didPresent.emit()},w=async(t,e,r,i,n,s,d)=>{if(!t.presented)return!1;t.presented=!1;try{t.willDismiss.emit({data:e,role:r});const l=Object(o.b)(t),c=t.leaveAnimation?t.leaveAnimation:o.c.get(i,"ios"===l?n:s);"gesture"!==r&&await g(t,c,t.el,d),t.didDismiss.emit({data:e,role:r}),a.delete(t)}catch(t){console.error(t)}return t.el.remove(),!0},v=t=>t.querySelector("ion-app")||t.body,g=async(t,e,r,i)=>{r.classList.remove("overlay-hidden");const n=e(r.shadowRoot||t.el,i);t.animated&&o.c.getBoolean("animated",!0)||n.duration(0),t.keyboardClose&&n.beforeAddWrite(()=>{const t=r.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()});const s=a.get(t)||[];return a.set(t,[...s,n]),await n.play(),!0},x=(t,e)=>{let r;const o=new Promise(t=>r=t);return E(t,e,t=>{r(t.detail)}),o},E=(t,e,r)=>{const o=i=>{t.removeEventListener(e,o),r(i)};t.addEventListener(e,o)},S=t=>"cancel"===t||t===j,k=(t,e)=>{for(;e;){if(e===t)return!0;e=e.parentElement}return!1},O=t=>t(),D=(t,e)=>{if("function"==typeof t){return o.c.get("_zoneGate",O)(()=>{try{return t(e)}catch(t){console.error(t)}})}},j="backdrop"},287:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",(function(){return a})),r.d(e,"createGesture",(function(){return m}));class o{constructor(t,e,r,o,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*o+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class i{constructor(t,e,r,o){this.id=e,this.disable=r,this.disableScroll=o,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const n="backdrop-no-scroll",a=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new i(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const o=this.requestedStart;let i=-1e4;if(o.forEach(t=>{i=Math.max(i,t)}),i===r){this.capturedId=e,o.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return o.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(n)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(n)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},s=(t,e,r,o)=>{const i=d(t)?{capture:!!o.capture,passive:!!o.passive}:!!o.capture;let n,a;return t.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(n="addEventListener",a="removeEventListener"),t[n](e,r,i),()=>{t[a](e,r,i)}},d=t=>{if(void 0===l)try{const e=Object.defineProperty({},"passive",{get:()=>{l=!0}});t.addEventListener("optsTest",()=>{},e)}catch(t){l=!1}return!!l};let l;const c=t=>t instanceof Document?t:t.ownerDocument,m=t=>{let e=!1,r=!1,o=!0,i=!1;const n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),d=n.canStart,l=n.onWillStart,m=n.onStart,f=n.onEnd,b=n.notCaptured,y=n.onMove,w=n.threshold,v={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},g=((t,e,r)=>{const o=r*(Math.PI/180),i="x"===t,n=Math.cos(o),a=e*e;let s=0,d=0,l=!1,c=0;return{start(t,e){s=t,d=e,c=0,l=!0},detect(t,e){if(!l)return!1;const r=t-s,o=e-d,m=r*r+o*o;if(m<a)return!1;const u=Math.sqrt(m),h=(i?r:o)/u;return c=h>n?1:h<-n?-1:0,l=!1,!0},isGesture:()=>0!==c,getDirection:()=>c}})(n.direction,n.threshold,n.maxAngle),x=a.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),E=()=>{e&&(i=!1,y&&y(v))},S=()=>!(x&&!x.capture())&&(e=!0,o=!1,v.startX=v.currentX,v.startY=v.currentY,v.startTime=v.currentTime,l?l(v).then(k):k(),!0),k=()=>{m&&m(v),o=!0},O=()=>{e=!1,r=!1,i=!1,o=!0,x.release()},D=t=>{const r=e,i=o;O(),i&&(u(v,t),r?f&&f(v):b&&b(v))},j=((t,e,r,o,i)=>{let n,a,d,l,m,u,h,p=0;const f=o=>{p=Date.now()+2e3,e(o)&&(!a&&r&&(a=s(t,"touchmove",r,i)),d||(d=s(t,"touchend",y,i)),l||(l=s(t,"touchcancel",y,i)))},b=o=>{p>Date.now()||e(o)&&(!u&&r&&(u=s(c(t),"mousemove",r,i)),h||(h=s(c(t),"mouseup",w,i)))},y=t=>{v(),o&&o(t)},w=t=>{g(),o&&o(t)},v=()=>{a&&a(),d&&d(),l&&l(),a=d=l=void 0},g=()=>{u&&u(),h&&h(),u=h=void 0},x=()=>{v(),g()},E=(e=!0)=>{e?(n||(n=s(t,"touchstart",f,i)),m||(m=s(t,"mousedown",b,i))):(n&&n(),m&&m(),n=m=void 0,x())};return{enable:E,stop:x,destroy:()=>{E(!1),o=r=e=void 0}}})(n.el,t=>{const e=p(t);return!(r||!o)&&(h(t,v),v.startX=v.currentX,v.startY=v.currentY,v.startTime=v.currentTime=e,v.velocityX=v.velocityY=v.deltaX=v.deltaY=0,v.event=t,(!d||!1!==d(v))&&(x.release(),!!x.start()&&(r=!0,0===w?S():(g.start(v.startX,v.startY),!0))))},t=>{e?!i&&o&&(i=!0,u(v,t),requestAnimationFrame(E)):(u(v,t),g.detect(v.currentX,v.currentY)&&(g.isGesture()&&S()||M()))},D,{capture:!1}),M=()=>{O(),j.stop(),b&&b(v)};return{enable(t=!0){t||(e&&D(void 0),O()),j.enable(t)},destroy(){x.destroy(),j.destroy()}}},u=(t,e)=>{if(!e)return;const r=t.currentX,o=t.currentY,i=t.currentTime;h(e,t);const n=t.currentX,a=t.currentY,s=(t.currentTime=p(e))-i;if(s>0&&s<100){const e=(n-r)/s,i=(a-o)/s;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=n-t.startX,t.deltaY=a-t.startY,t.event=e},h=(t,e)=>{let r=0,o=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,o=t.clientY}else void 0!==t.pageX&&(r=t.pageX,o=t.pageY)}e.currentX=r,e.currentY=o},p=t=>t.timeStamp||Date.now()},288:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"d",(function(){return x})),r.d(e,"e",(function(){return k})),r.d(e,"f",(function(){return v})),r.d(e,"g",(function(){return E})),r.d(e,"h",(function(){return s}));var o=r(2);const i="ionViewWillLeave",n="ionViewDidLeave",a="ionViewWillUnload",s=t=>new Promise((e,r)=>{Object(o.n)(()=>{d(t),l(t).then(r=>{r.animation&&r.animation.destroy(),c(t),e(r)},e=>{c(t),r(e)})})}),d=t=>{const e=t.enteringEl,r=t.leavingEl;S(e,r,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),E(e,!1),r&&E(r,!1)},l=async t=>{const e=await m(t);return e&&o.a.isBrowser?u(e,t):h(t)},c=t=>{const e=t.enteringEl,r=t.leavingEl;e.classList.remove("ion-page-invisible"),void 0!==r&&r.classList.remove("ion-page-invisible")},m=async t=>{if(!t.leavingEl||!t.animated||0===t.duration)return;if(t.animationBuilder)return t.animationBuilder;return"ios"===t.mode?(await Promise.all([r.e(0),r.e(143)]).then(r.bind(null,293))).iosTransitionAnimation:(await Promise.all([r.e(0),r.e(144)]).then(r.bind(null,294))).mdTransitionAnimation},u=async(t,e)=>{await p(e,!0);const r=t(e.baseEl,e);y(e.enteringEl,e.leavingEl);const o=await b(r,e);return e.progressCallback&&e.progressCallback(void 0),o&&w(e.enteringEl,e.leavingEl),{hasCompleted:o,animation:r}},h=async t=>{const e=t.enteringEl,r=t.leavingEl;return await p(t,!1),y(e,r),w(e,r),{hasCompleted:!0}},p=async(t,e)=>{const r=(void 0!==t.deepWait?t.deepWait:e)?[x(t.enteringEl),x(t.leavingEl)]:[g(t.enteringEl),g(t.leavingEl)];await Promise.all(r),await f(t.viewIsReady,t.enteringEl)},f=async(t,e)=>{t&&await t(e)},b=(t,e)=>{const r=e.progressCallback,o=new Promise(e=>{t.onFinish(t=>e(1===t))});return r?(t.progressStart(!0),r(t)):t.play(),o},y=(t,e)=>{v(e,i),v(t,"ionViewWillEnter")},w=(t,e)=>{v(t,"ionViewDidEnter"),v(e,n)},v=(t,e)=>{if(t){const r=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(r)}},g=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),x=async t=>{const e=t;if(e){if(null!=e.componentOnReady){if(null!=await e.componentOnReady())return}await Promise.all(Array.from(e.children).map(x))}},E=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},S=(t,e,r)=>{void 0!==t&&(t.style.zIndex="back"===r?"99":"101"),void 0!==e&&(e.style.zIndex="100")},k=t=>{if(t.classList.contains("ion-page"))return t;const e=t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return e||t}},291:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));const o=(t,e,r,o,a)=>n(t[1],e[1],r[1],o[1],a).map(n=>i(t[0],e[0],r[0],o[0],n)),i=(t,e,r,o,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*r*i+3*r+o*i))-t*Math.pow(i-1,3),n=(t,e,r,o,i)=>a((o-=i)-3*(r-=i)+3*(e-=i)-(t-=i),3*r-6*e+3*t,3*e-3*t,t).filter(t=>t>=0&&t<=1),a=(t,e,r,o)=>{if(0===t)return((t,e,r)=>{const o=e*e-4*t*r;return o<0?[]:[(-e+Math.sqrt(o))/(2*t),(-e-Math.sqrt(o))/(2*t)]})(e,r,o);const i=(3*(r/=t)-(e/=t)*e)/3,n=(2*e*e*e-9*e*r+27*(o/=t))/27;if(0===i)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-i),-Math.sqrt(-i)];const a=Math.pow(n/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(n/2,.5)-e/3];if(a>0)return[Math.pow(-n/2+Math.sqrt(a),1/3)-Math.pow(n/2+Math.sqrt(a),1/3)-e/3];const s=Math.sqrt(Math.pow(-i/3,3)),d=Math.acos(-n/(2*Math.sqrt(Math.pow(-i/3,3)))),l=2*Math.pow(s,1/3);return[l*Math.cos(d/3)-e/3,l*Math.cos((d+2*Math.PI)/3)-e/3,l*Math.cos((d+4*Math.PI)/3)-e/3]}},292:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));const o=async(t,e,r,o,i)=>{if(t)return t.attachViewToDom(e,r,i,o);if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");const n="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r;return o&&o.forEach(t=>n.classList.add(t)),i&&Object.assign(n,i),e.appendChild(n),n.componentOnReady&&await n.componentOnReady(),n},i=(t,e)=>{if(e){if(t){const r=e.parentElement;return t.removeViewFromDom(r,e)}e.remove()}return Promise.resolve()}}}]);