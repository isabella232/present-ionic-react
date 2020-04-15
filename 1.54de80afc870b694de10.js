(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{287:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",(function(){return a})),r.d(e,"createGesture",(function(){return u}));class s{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class i{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const l="backdrop-no-scroll",a=new class{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new i(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach(t=>{i=Math.max(i,t)}),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(l)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(l)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}},n=(t,e,r,s)=>{const i=c(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let l,a;return t.__zone_symbol__addEventListener?(l="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(l="addEventListener",a="removeEventListener"),t[l](e,r,i),()=>{t[a](e,r,i)}},c=t=>{if(void 0===o)try{const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});t.addEventListener("optsTest",()=>{},e)}catch(t){o=!1}return!!o};let o;const d=t=>t instanceof Document?t:t.ownerDocument,u=t=>{let e=!1,r=!1,s=!0,i=!1;const l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),c=l.canStart,o=l.onWillStart,u=l.onStart,v=l.onEnd,m=l.notCaptured,S=l.onMove,y=l.threshold,f={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=((t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,l=Math.cos(s),a=e*e;let n=0,c=0,o=!1,d=0;return{start(t,e){n=t,c=e,d=0,o=!0},detect(t,e){if(!o)return!1;const r=t-n,s=e-c,u=r*r+s*s;if(u<a)return!1;const h=Math.sqrt(u),b=(i?r:s)/h;return d=b>l?1:b<-l?-1:0,o=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(l.direction,l.threshold,l.maxAngle),X=a.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),Y=()=>{e&&(i=!1,S&&S(f))},g=()=>!(X&&!X.capture())&&(e=!0,s=!1,f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime,o?o(f).then(G):G(),!0),G=()=>{u&&u(f),s=!0},_=()=>{e=!1,r=!1,i=!1,s=!0,X.release()},E=t=>{const r=e,i=s;_(),i&&(h(f,t),r?v&&v(f):m&&m(f))},D=((t,e,r,s,i)=>{let l,a,c,o,u,h,b,p=0;const v=s=>{p=Date.now()+2e3,e(s)&&(!a&&r&&(a=n(t,"touchmove",r,i)),c||(c=n(t,"touchend",S,i)),o||(o=n(t,"touchcancel",S,i)))},m=s=>{p>Date.now()||e(s)&&(!h&&r&&(h=n(d(t),"mousemove",r,i)),b||(b=n(d(t),"mouseup",y,i)))},S=t=>{f(),s&&s(t)},y=t=>{w(),s&&s(t)},f=()=>{a&&a(),c&&c(),o&&o(),a=c=o=void 0},w=()=>{h&&h(),b&&b(),h=b=void 0},X=()=>{f(),w()},Y=(e=!0)=>{e?(l||(l=n(t,"touchstart",v,i)),u||(u=n(t,"mousedown",m,i))):(l&&l(),u&&u(),l=u=void 0,X())};return{enable:Y,stop:X,destroy:()=>{Y(!1),s=r=e=void 0}}})(l.el,t=>{const e=p(t);return!(r||!s)&&(b(t,f),f.startX=f.currentX,f.startY=f.currentY,f.startTime=f.currentTime=e,f.velocityX=f.velocityY=f.deltaX=f.deltaY=0,f.event=t,(!c||!1!==c(f))&&(X.release(),!!X.start()&&(r=!0,0===y?g():(w.start(f.startX,f.startY),!0))))},t=>{e?!i&&s&&(i=!0,h(f,t),requestAnimationFrame(Y)):(h(f,t),w.detect(f.currentX,f.currentY)&&(w.isGesture()&&g()||I()))},E,{capture:!1}),I=()=>{_(),D.stop(),m&&m(f)};return{enable(t=!0){t||(e&&E(void 0),_()),D.enable(t)},destroy(){X.destroy(),D.destroy()}}},h=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;b(e,t);const l=t.currentX,a=t.currentY,n=(t.currentTime=p(e))-i;if(n>0&&n<100){const e=(l-r)/n,i=(a-s)/n;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=l-t.startX,t.deltaY=a-t.startY,t.event=e},b=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},p=t=>t.timeStamp||Date.now()}}]);