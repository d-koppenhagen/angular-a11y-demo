import{$ as f,Aa as w,B as ue,Ea as pe,F as R,Fa as V,H as k,Ia as x,J as ce,Ja as me,Ka as T,La as D,P as B,Q as de,S as N,U as he,W as le,X as c,Y as l,a as b,aa as u,b as L,ba as m,e as ne,ea as g,g as se,ga as fe,gb as De,hb as _e,j as h,k as re,n as $,r as M,s as oe,ua as U,ub as H,v as ae,wa as ge}from"./chunk-NDIMCJX6.js";var G=null;function z(){return G}function ki(i){G||(G=i)}var Ee=class{},p=new f("DocumentToken"),Fe=(()=>{let e=class e{historyGo(t){throw new Error("Not implemented")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=c({token:e,factory:()=>(()=>m(ze))(),providedIn:"platform"});let i=e;return i})();var ze=(()=>{let e=class e extends Fe{constructor(){super(),this._doc=m(p),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return z().getBaseHref(this._doc)}onPopState(t){let n=z().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=z().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,s){this._history.pushState(t,n,s)}replaceState(t,n,s){this._history.replaceState(t,n,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=c({token:e,factory:()=>(()=>new e)(),providedIn:"platform"});let i=e;return i})();function we(i,e){if(i.length==0)return e;if(e.length==0)return i;let r=0;return i.endsWith("/")&&r++,e.startsWith("/")&&r++,r==2?i+e.substring(1):r==1?i+e:i+"/"+e}function be(i){let e=i.match(/#|\?|$/),r=e&&e.index||i.length,t=r-(i[r-1]==="/"?1:0);return i.slice(0,t)+i.slice(r)}function y(i){return i&&i[0]!=="?"?"?"+i:i}var Y=(()=>{let e=class e{historyGo(t){throw new Error("Not implemented")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=c({token:e,factory:()=>(()=>m(We))(),providedIn:"root"});let i=e;return i})(),Ge=new f("appBaseHref"),We=(()=>{let e=class e extends Y{constructor(t,n){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??m(p).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return we(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+y(this._platformLocation.search),s=this._platformLocation.hash;return s&&t?`${n}${s}`:n}pushState(t,n,s,o){let a=this.prepareExternalUrl(s+y(o));this._platformLocation.pushState(t,n,a)}replaceState(t,n,s,o){let a=this.prepareExternalUrl(s+y(o));this._platformLocation.replaceState(t,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(n){return new(n||e)(u(Fe),u(Ge,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Ke=(()=>{let e=class e{constructor(t){this._subject=new T,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=Xe(be(ye(n))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+y(n))}normalize(t){return e.stripTrailingSlash(Ye(this._basePath,ye(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",s=null){this._locationStrategy.pushState(s,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+y(n)),s)}replaceState(t,n="",s=null){this._locationStrategy.replaceState(s,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+y(n)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)})),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(s=>s(t,n))}subscribe(t,n,s){return this._subject.subscribe({next:t,error:n,complete:s})}};e.normalizeQueryParams=y,e.joinWithSlash=we,e.stripTrailingSlash=be,e.\u0275fac=function(n){return new(n||e)(u(Y))},e.\u0275prov=c({token:e,factory:()=>Ze(),providedIn:"root"});let i=e;return i})();function Ze(){return new Ke(u(Y))}function Ye(i,e){if(!i||!e.startsWith(i))return e;let r=e.substring(i.length);return r===""||["/",";","?","#"].includes(r[0])?r:e}function ye(i){return i.replace(/\/index.html$/,"")}function Xe(i){if(new RegExp("^(https?:)?//").test(i)){let[,r]=i.split(/\/\/[^\/]+/);return r}return i}function Bi(i,e){e=encodeURIComponent(e);for(let r of i.split(";")){let t=r.indexOf("="),[n,s]=t==-1?[r,""]:[r.slice(0,t),r.slice(t+1)];if(n.trim()===e)return decodeURIComponent(s)}return null}function Qe(i,e){return new le(2100,!1)}var W=class{createSubscription(e,r){return V(()=>e.subscribe({next:r,error:t=>{throw t}}))}dispose(e){V(()=>e.unsubscribe())}},K=class{createSubscription(e,r){return e.then(r,t=>{throw t})}dispose(e){}},qe=new K,Je=new W,Ni=(()=>{let e=class e{constructor(t){this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null,this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){return this._obj?t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue:(t&&this._subscribe(t),this._latestValue)}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,n=>this._updateLatestValue(t,n))}_selectStrategy(t){if(De(t))return qe;if(_e(t))return Je;throw Qe(e,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,n){t===this._obj&&(this._latestValue=n,this._ref.markForCheck())}};e.\u0275fac=function(n){return new(n||e)(x(me,16))},e.\u0275pipe=fe({name:"async",type:e,pure:!1,standalone:!0});let i=e;return i})();var xi=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=l({});let i=e;return i})(),et="browser",tt="server";function ve(i){return i===et}function Pi(i){return i===tt}var Ae=class{};var Q;try{Q=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Q=!1}var C=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?ve(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Q)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(n){return new(n||e)(u(U))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var O;function it(){if(O==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>O=!0}))}finally{O=O||!1}return O}function q(i){return it()?i:!!i.capture}var A;function Wi(){if(A==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return A=!1,A;if("scrollBehavior"in document.documentElement.style)A=!0;else{let i=Element.prototype.scrollTo;i?A=!/\{\s*\[native code\]\s*\}/.test(i.toString()):A=!1}}return A}var X;function nt(){if(X==null){let i=typeof document<"u"?document.head:null;X=!!(i&&(i.createShadowRoot||i.attachShadow))}return X}function Ie(i){if(nt()){let e=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function st(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let e=i.shadowRoot.activeElement;if(e===i)break;i=e}return i}function I(i){return i.composedPath?i.composedPath()[0]:i.target}function Ki(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Me(i,...e){return e.length?e.some(r=>i[r]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}function J(i){return Array.isArray(i)?i:[i]}function Xi(i){return i==null?"":typeof i=="string"?i:`${i}px`}function P(i){return i instanceof w?i.nativeElement:i}var rt=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=l({providers:[rt]});let i=e;return i})();var Oe=new Set,F,ot=(()=>{let e=class e{constructor(t,n){this._platform=t,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ut}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&at(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(n){return new(n||e)(u(C),u(ge,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function at(i,e){if(!Oe.has(i))try{F||(F=document.createElement("style"),e&&(F.nonce=e),F.setAttribute("type","text/css"),document.head.appendChild(F)),F.sheet&&(F.sheet.insertRule(`@media ${i} {body{ }}`,0),Oe.add(i))}catch(r){console.error(r)}}function ut(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Re=(()=>{let e=class e{constructor(t,n){this._mediaMatcher=t,this._zone=n,this._queries=new Map,this._destroySubject=new h}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Le(J(t)).some(s=>this._registerQuery(s).mql.matches)}observe(t){let s=Le(J(t)).map(a=>this._registerQuery(a).observable),o=oe(s);return o=ae(o.pipe(k(1)),o.pipe(B(1),R(0))),o.pipe(M(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:_,query:E})=>{d.matches=d.matches||_,d.breakpoints[E]=_}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),o={observable:new se(a=>{let d=_=>this._zone.run(()=>a.next(_));return n.addListener(d),()=>{n.removeListener(d)}}).pipe(de(n),M(({matches:a})=>({query:t,matches:a})),N(this._destroySubject)),mql:n};return this._queries.set(t,o),o}};e.\u0275fac=function(n){return new(n||e)(u(ot),u(D))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Le(i){return i.map(e=>e.split(",")).reduce((e,r)=>e.concat(r)).map(e=>e.trim())}var te=class{constructor(e){this._items=e,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new h,this._typeaheadSubscription=ne.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._pageUpAndDown={enabled:!1,delta:10},this._skipPredicateFn=r=>r.disabled,this._pressedLetters=[],this.tabOut=new h,this.change=new h,e instanceof H&&(this._itemChangesSubscription=e.changes.subscribe(r=>{if(this._activeItem){let n=r.toArray().indexOf(this._activeItem);n>-1&&n!==this._activeItemIndex&&(this._activeItemIndex=n)}}))}skipPredicate(e){return this._skipPredicateFn=e,this}withWrap(e=!0){return this._wrap=e,this}withVerticalOrientation(e=!0){return this._vertical=e,this}withHorizontalOrientation(e){return this._horizontal=e,this}withAllowedModifierKeys(e){return this._allowedModifierKeys=e,this}withTypeAhead(e=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe(he(r=>this._pressedLetters.push(r)),R(e),ue(()=>this._pressedLetters.length>0),M(()=>this._pressedLetters.join(""))).subscribe(r=>{let t=this._getItemsArray();for(let n=1;n<t.length+1;n++){let s=(this._activeItemIndex+n)%t.length,o=t[s];if(!this._skipPredicateFn(o)&&o.getLabel().toUpperCase().trim().indexOf(r)===0){this.setActiveItem(s);break}}this._pressedLetters=[]}),this}cancelTypeahead(){return this._pressedLetters=[],this}withHomeAndEnd(e=!0){return this._homeAndEnd=e,this}withPageUpDown(e=!0,r=10){return this._pageUpAndDown={enabled:e,delta:r},this}setActiveItem(e){let r=this._activeItem;this.updateActiveItem(e),this._activeItem!==r&&this.change.next(this._activeItemIndex)}onKeydown(e){let r=e.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(s=>!e[s]||this._allowedModifierKeys.indexOf(s)>-1);switch(r){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}else return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&n){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&n){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&n){let s=this._activeItemIndex-this._pageUpAndDown.delta;this._setActiveItemByIndex(s>0?s:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&n){let s=this._activeItemIndex+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(s<o?s:o-1,-1);break}else return;default:(n||Me(e,"shiftKey"))&&(e.key&&e.key.length===1?this._letterKeyStream.next(e.key.toLocaleUpperCase()):(r>=65&&r<=90||r>=48&&r<=57)&&this._letterKeyStream.next(String.fromCharCode(r)));return}this._pressedLetters=[],e.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(e){let r=this._getItemsArray(),t=typeof e=="number"?e:r.indexOf(e),n=r[t];this._activeItem=n??null,this._activeItemIndex=t}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._letterKeyStream.complete(),this.tabOut.complete(),this.change.complete(),this._pressedLetters=[]}_setActiveItemByDelta(e){this._wrap?this._setActiveInWrapMode(e):this._setActiveInDefaultMode(e)}_setActiveInWrapMode(e){let r=this._getItemsArray();for(let t=1;t<=r.length;t++){let n=(this._activeItemIndex+e*t+r.length)%r.length,s=r[n];if(!this._skipPredicateFn(s)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(e){this._setActiveItemByIndex(this._activeItemIndex+e,e)}_setActiveItemByIndex(e,r){let t=this._getItemsArray();if(t[e]){for(;this._skipPredicateFn(t[e]);)if(e+=r,!t[e])return;this.setActiveItem(e)}}_getItemsArray(){return this._items instanceof H?this._items.toArray():this._items}},ke=class extends te{setActiveItem(e){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(e),this.activeItem&&this.activeItem.setActiveStyles()}};var It=(()=>{let e=class e{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return Mt(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=St(xt(t));if(n&&(Be(n)===-1||!this.isVisible(n)))return!1;let s=t.nodeName.toLowerCase(),o=Be(t);return t.hasAttribute("contenteditable")?o!==-1:s==="iframe"||s==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Bt(t)?!1:s==="audio"?t.hasAttribute("controls")?o!==-1:!1:s==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,n){return Nt(t)&&!this.isDisabled(t)&&(n?.ignoreVisibility||this.isVisible(t))}};e.\u0275fac=function(n){return new(n||e)(u(C))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function St(i){try{return i.frameElement}catch{return null}}function Mt(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Tt(i){let e=i.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function Ot(i){return Rt(i)&&i.type=="hidden"}function Lt(i){return kt(i)&&i.hasAttribute("href")}function Rt(i){return i.nodeName.toLowerCase()=="input"}function kt(i){return i.nodeName.toLowerCase()=="a"}function Pe(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let e=i.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function Be(i){if(!Pe(i))return null;let e=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function Bt(i){let e=i.nodeName.toLowerCase(),r=e==="input"&&i.type;return r==="text"||r==="password"||e==="select"||e==="textarea"}function Nt(i){return Ot(i)?!1:Tt(i)||Lt(i)||i.hasAttribute("contenteditable")||Pe(i)}function xt(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var ie=class{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}constructor(e,r,t,n,s=!1){this._element=e,this._checker=r,this._ngZone=t,this._document=n,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,s||this.attachAnchors()}destroy(){let e=this._startAnchor,r=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),r&&(r.removeEventListener("focus",this.endAnchorListener),r.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(r=>{this._executeOnStable(()=>r(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(r=>{this._executeOnStable(()=>r(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(r=>{this._executeOnStable(()=>r(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let r=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?r.length?r[0]:this._getFirstTabbableElement(this._element):r.length?r[r.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let r=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(r){if(!this._checker.isFocusable(r)){let t=this._getFirstTabbableElement(r);return t?.focus(e),!!t}return r.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let r=this._getRegionBoundary("start");return r&&r.focus(e),!!r}focusLastTabbableElement(e){let r=this._getRegionBoundary("end");return r&&r.focus(e),!!r}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let r=e.children;for(let t=0;t<r.length;t++){let n=r[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(r[t]):null;if(n)return n}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let r=e.children;for(let t=r.length-1;t>=0;t--){let n=r[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(r[t]):null;if(n)return n}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,r){e?r.setAttribute("tabindex","0"):r.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(k(1)).subscribe(e)}},vn=(()=>{let e=class e{constructor(t,n,s){this._checker=t,this._ngZone=n,this._document=s}create(t,n=!1){return new ie(t,this._checker,this._ngZone,this._document,n)}};e.\u0275fac=function(n){return new(n||e)(u(It),u(D),u(p))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Pt(i){return i.buttons===0||i.detail===0}function jt(i){let e=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var $t=new f("cdk-input-modality-detector-options"),Ut={ignoreKeys:[18,17,224,91,16]},je=650,S=q({passive:!0,capture:!0}),Vt=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,n,s,o){this._platform=t,this._mostRecentTarget=null,this._modality=new re(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(d=>d===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=I(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<je||(this._modality.next(Pt(a)?"keyboard":"mouse"),this._mostRecentTarget=I(a))},this._onTouchstart=a=>{if(jt(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=I(a)},this._options=b(b({},Ut),o),this.modalityDetected=this._modality.pipe(B(1)),this.modalityChanged=this.modalityDetected.pipe(ce()),t.isBrowser&&n.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,S),s.addEventListener("mousedown",this._onMousedown,S),s.addEventListener("touchstart",this._onTouchstart,S)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,S),document.removeEventListener("mousedown",this._onMousedown,S),document.removeEventListener("touchstart",this._onTouchstart,S))}};e.\u0275fac=function(n){return new(n||e)(u(C),u(D),u(p),u($t,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Ht=new f("liveAnnouncerElement",{providedIn:"root",factory:zt});function zt(){return null}var Gt=new f("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Wt=0,In=(()=>{let e=class e{constructor(t,n,s,o){this._ngZone=n,this._defaultOptions=o,this._document=s,this._liveElement=t||this._createLiveElement()}announce(t,...n){let s=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=s&&s.politeness?s.politeness:"polite"),a==null&&s&&(a=s.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(d=>this._currentResolve=d)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{this._liveElement.textContent=t,typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",n=this._document.getElementsByClassName(t),s=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return s.classList.add(t),s.classList.add("cdk-visually-hidden"),s.setAttribute("aria-atomic","true"),s.setAttribute("aria-live","polite"),s.id=`cdk-live-announcer-${Wt++}`,this._document.body.appendChild(s),s}_exposeAnnouncerToModals(t){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let s=0;s<n.length;s++){let o=n[s],a=o.getAttribute("aria-owns");a?a.indexOf(t)===-1&&o.setAttribute("aria-owns",a+" "+t):o.setAttribute("aria-owns",t)}}};e.\u0275fac=function(n){return new(n||e)(u(Ht,8),u(D),u(p),u(Gt,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Kt=new f("cdk-focus-monitor-default-options"),j=q({passive:!0,capture:!0}),Sn=(()=>{let e=class e{constructor(t,n,s,o,a){this._ngZone=t,this._platform=n,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new h,this._rootNodeFocusAndBlurListener=d=>{let _=I(d);for(let E=_;E;E=E.parentElement)d.type==="focus"?this._onFocus(d,E):this._onBlur(d,E)},this._document=o,this._detectionMode=a?.detectionMode||0}monitor(t,n=!1){let s=P(t);if(!this._platform.isBrowser||s.nodeType!==1)return $();let o=Ie(s)||this._getDocument(),a=this._elementInfo.get(s);if(a)return n&&(a.checkChildren=!0),a.subject;let d={checkChildren:n,subject:new h,rootNode:o};return this._elementInfo.set(s,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let n=P(t),s=this._elementInfo.get(n);s&&(s.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(s))}focusVia(t,n,s){let o=P(t),a=this._getDocument().activeElement;o===a?this._getClosestElementsInfo(o).forEach(([d,_])=>this._originChanged(d,n,_)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(s))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===1||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle("cdk-focused",!!n),t.classList.toggle("cdk-touch-focused",n==="touch"),t.classList.toggle("cdk-keyboard-focused",n==="keyboard"),t.classList.toggle("cdk-mouse-focused",n==="mouse"),t.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&n,this._detectionMode===0){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?je:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(t,n){let s=this._elementInfo.get(n),o=I(t);!s||!s.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),s)}_onBlur(t,n){let s=this._elementInfo.get(n);!s||s.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(s,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,s=this._rootNodeFocusListenerCount.get(n)||0;s||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,j),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,j)}),this._rootNodeFocusListenerCount.set(n,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(N(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let s=this._rootNodeFocusListenerCount.get(n);s>1?this._rootNodeFocusListenerCount.set(n,s-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,j),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,j),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,s){this._setClasses(t,n),this._emitOrigin(s,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((s,o)=>{(o===t||s.checkChildren&&o.contains(t))&&n.push([o,s])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!n||n===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}};e.\u0275fac=function(n){return new(n||e)(u(D),u(C),u(Vt),u(p,8),u(Kt,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Ne="cdk-high-contrast-black-on-white",xe="cdk-high-contrast-white-on-black",ee="cdk-high-contrast-active",Zt=(()=>{let e=class e{constructor(t,n){this._platform=t,this._document=n,this._breakpointSubscription=m(Re).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let n=this._document.defaultView||window,s=n&&n.getComputedStyle?n.getComputedStyle(t):null,o=(s&&s.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ee,Ne,xe),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===1?t.add(ee,Ne):n===2&&t.add(ee,xe)}}};e.\u0275fac=function(n){return new(n||e)(u(C),u(p))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),Mn=(()=>{let e=class e{constructor(t){t._applyBodyHighContrastModeCssClasses()}};e.\u0275fac=function(n){return new(n||e)(u(Zt))},e.\u0275mod=g({type:e}),e.\u0275inj=l({imports:[Te]});let i=e;return i})();var kn=(()=>{let e=class e{constructor(){this.alerts=pe([{role:"log",title:"Log",description:"A simple log",politeness:"polite",timer:2e3,duration:3e3,active:!0},{role:"alert",title:"Alert",description:"A very important alert message",politeness:"assertive",timer:200,duration:2e3,active:!0},{role:"status",title:"Status",description:"A status alert which isn't that important",politeness:"polite",timer:3e3,duration:2e3,active:!0},{role:"marquee",title:"Marquee",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",politeness:"polite",timer:500,duration:1e4,active:!0},{role:"progress",title:"Progress",description:"Step 1 of 4 finished.",politeness:"polite",timer:6e3,duration:3e3,active:!0},{role:"timer",title:"Timer",description:"2 minutes left",politeness:"polite",timer:7e3,duration:3e3,active:!0}])}addAlert(t){this.alerts.update(n=>[...n,L(b({},t),{active:!0})])}activateOrDeactivateAlert(t,n){this.alerts.update(s=>s.map(o=>o.title===t?L(b({},o),{active:n}):o))}removeAlert(t){this.alerts.update(n=>n.filter(s=>s.title!==t))}activateAlert(t){this.activateOrDeactivateAlert(t,!0)}deactivateAlert(t){console.log("\u274C deactivate",t),this.activateOrDeactivateAlert(t,!1)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Yt=new f("cdk-dir-doc",{providedIn:"root",factory:Xt});function Xt(){return m(p)}var Qt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qt(i){let e=i?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?Qt.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var Zn=(()=>{let e=class e{constructor(t){if(this.value="ltr",this.change=new T,t){let n=t.body?t.body.dir:null,s=t.documentElement?t.documentElement.dir:null;this.value=qt(n||s||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(n){return new(n||e)(u(Yt,8))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Yn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=g({type:e}),e.\u0275inj=l({});let i=e;return i})();var $e=class{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(e=!1,r,t=!0,n){this._multiple=e,this._emitChanges=t,this.compareWith=n,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new h,r&&r.length&&(e?r.forEach(s=>this._markSelected(s)):this._markSelected(r[0]),this._selectedToEmit.length=0)}select(...e){this._verifyValueAssignment(e),e.forEach(t=>this._markSelected(t));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}deselect(...e){this._verifyValueAssignment(e),e.forEach(t=>this._unmarkSelected(t));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}setSelection(...e){this._verifyValueAssignment(e);let r=this.selected,t=new Set(e);e.forEach(s=>this._markSelected(s)),r.filter(s=>!t.has(s)).forEach(s=>this._unmarkSelected(s));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();let r=this._hasQueuedChanges();return e&&this._emitChangeEvent(),r}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){e.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(e){if(this.compareWith){for(let r of this._selection)if(this.compareWith(e,r))return r;return e}else return e}};export{z as a,ki as b,Ee as c,p as d,Y as e,Ke as f,Bi as g,Ni as h,xi as i,et as j,Pi as k,Ae as l,C as m,Wi as n,st as o,I as p,Ki as q,Me as r,J as s,Xi as t,P as u,ke as v,It as w,vn as x,In as y,Sn as z,Mn as A,Zn as B,Yn as C,$e as D,kn as E};
