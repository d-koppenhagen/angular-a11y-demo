import{Ba as ee,Da as te,Ia as re,Ja as k,W as Q,a as h,b as S,c as s,ca as V,d as ke,ea as Y,eb as ne,fb as ae,ga as Z,mb as ie,nb as ue,sb as oe}from"./chunk-K26XSPPV.js";var q=s(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.FORMAT_PLAIN=m.FORMAT_HTML=m.FORMATS=void 0;var se="html";m.FORMAT_HTML=se;var de="plain";m.FORMAT_PLAIN=de;var qe=[se,de];m.FORMATS=qe});var ve=s(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});u.UNIT_WORDS=u.UNIT_WORD=u.UNIT_SENTENCES=u.UNIT_SENTENCE=u.UNIT_PARAGRAPHS=u.UNIT_PARAGRAPH=u.UNITS=void 0;var le="words";u.UNIT_WORDS=le;var ce="word";u.UNIT_WORD=ce;var fe="sentences";u.UNIT_SENTENCES=fe;var me="sentence";u.UNIT_SENTENCE=me;var pe="paragraphs";u.UNIT_PARAGRAPHS=pe;var ge="paragraph";u.UNIT_PARAGRAPH=ge;var Ce=[le,ce,fe,me,pe,ge];u.UNITS=Ce});var C=s(O=>{"use strict";Object.defineProperty(O,"__esModule",{value:!0});O.WORDS=void 0;var Ge=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"];O.WORDS=Ge});var he=s(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});I.LINE_ENDINGS=void 0;var je={POSIX:`
`,WIN32:`\r
`};I.LINE_ENDINGS=je});var _e=s(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.default=void 0;var Be=function(e){var n=e.trim();return n.charAt(0).toUpperCase()+n.slice(1)},He=Be;T.default=He});var Pe=s((y,G)=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.default=void 0;var $e=function(){return typeof G<"u"&&!!G.exports},ze=$e;y.default=ze});var Ne=s(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.default=void 0;var Xe=function(){var e=!1;try{e=navigator.product==="ReactNative"}catch{e=!1}return e},Je=Xe;E.default=Je});var Re=s(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});A.SUPPORTED_PLATFORMS=void 0;var Ke={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"};A.SUPPORTED_PLATFORMS=Ke});var Se=s(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.default=void 0;var Qe=Re(),Ve=function(){var e=!1;try{e=process.platform===Qe.SUPPORTED_PLATFORMS.WIN32}catch{e=!1}return e},Ye=Ve;w.default=Ye});var j=s(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var Ze=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Array.apply(null,Array(e)).map(function(n,r){return r})},et=Ze;L.default=et});var Oe=s(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});M.default=void 0;var tt=rt(j());function rt(t){return t&&t.__esModule?t:{default:t}}var nt=function(e,n){var r=(0,tt.default)(e);return r.map(function(){return n()})},at=nt;M.default=at});var B=s(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});Object.defineProperty(p,"capitalize",{enumerable:!0,get:function(){return it.default}});Object.defineProperty(p,"isNode",{enumerable:!0,get:function(){return ut.default}});Object.defineProperty(p,"isReactNative",{enumerable:!0,get:function(){return ot.default}});Object.defineProperty(p,"isWindows",{enumerable:!0,get:function(){return st.default}});Object.defineProperty(p,"makeArrayOfLength",{enumerable:!0,get:function(){return dt.default}});Object.defineProperty(p,"makeArrayOfStrings",{enumerable:!0,get:function(){return lt.default}});var it=_(_e()),ut=_(Pe()),ot=_(Ne()),st=_(Se()),dt=_(j()),lt=_(Oe());function _(t){return t&&t.__esModule?t:{default:t}}});var Te=s(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.default=void 0;var ct=C(),H=B();function ft(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ie(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function mt(t,e,n){return e&&Ie(t.prototype,e),n&&Ie(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var pt=function(){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.sentencesPerParagraph,r=n===void 0?{max:7,min:3}:n,a=e.wordsPerSentence,o=a===void 0?{max:15,min:5}:a,l=e.random,v=e.seed,c=e.words,N=c===void 0?ct.WORDS:c;if(ft(this,t),x(this,"sentencesPerParagraph",void 0),x(this,"wordsPerSentence",void 0),x(this,"random",void 0),x(this,"words",void 0),r.min>r.max)throw new Error("Minimum number of sentences per paragraph (".concat(r.min,") cannot exceed maximum (").concat(r.max,")."));if(o.min>o.max)throw new Error("Minimum number of words per sentence (".concat(o.min,") cannot exceed maximum (").concat(o.max,")."));this.sentencesPerParagraph=r,this.words=N,this.wordsPerSentence=o,this.random=l||Math.random}return mt(t,[{key:"generateRandomInteger",value:function(n,r){return Math.floor(this.random()*(r-n+1)+n)}},{key:"generateRandomWords",value:function(n){var r=this,a=this.wordsPerSentence,o=a.min,l=a.max,v=n||this.generateRandomInteger(o,l);return(0,H.makeArrayOfLength)(v).reduce(function(c,N){return"".concat(r.pluckRandomWord()," ").concat(c)},"").trim()}},{key:"generateRandomSentence",value:function(n){return"".concat((0,H.capitalize)(this.generateRandomWords(n)),".")}},{key:"generateRandomParagraph",value:function(n){var r=this,a=this.sentencesPerParagraph,o=a.min,l=a.max,v=n||this.generateRandomInteger(o,l);return(0,H.makeArrayOfLength)(v).reduce(function(c,N){return"".concat(r.generateRandomSentence()," ").concat(c)},"").trim()}},{key:"pluckRandomWord",value:function(){var n=0,r=this.words.length-1,a=this.generateRandomInteger(n,r);return this.words[a]}}]),t}(),gt=pt;b.default=gt});var Ae=s(W=>{"use strict";Object.defineProperty(W,"__esModule",{value:!0});W.default=void 0;var U=q(),ye=he(),vt=ht(Te()),D=B();function ht(t){return t&&t.__esModule?t:{default:t}}function _t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ee(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Pt(t,e,n){return e&&Ee(t.prototype,e),n&&Ee(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Nt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Rt=function(){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:U.FORMAT_PLAIN,r=arguments.length>2?arguments[2]:void 0;if(_t(this,t),this.format=n,this.suffix=r,Nt(this,"generator",void 0),U.FORMATS.indexOf(n.toLowerCase())===-1)throw new Error("".concat(n," is an invalid format. Please use ").concat(U.FORMATS.join(" or "),"."));this.generator=new vt.default(e)}return Pt(t,[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,D.isReactNative)()&&(0,D.isNode)()&&(0,D.isWindows)()?ye.LINE_ENDINGS.WIN32:ye.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(n){return this.format===U.FORMAT_HTML?"<p>".concat(n,"</p>"):n}},{key:"formatStrings",value:function(n){var r=this;return n.map(function(a){return r.formatString(a)})}},{key:"generateWords",value:function(n){return this.formatString(this.generator.generateRandomWords(n))}},{key:"generateSentences",value:function(n){return this.formatString(this.generator.generateRandomParagraph(n))}},{key:"generateParagraphs",value:function(n){var r=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,D.makeArrayOfStrings)(n,r)).join(this.getLineEnding())}}]),t}(),St=Rt;W.default=St});var Le=s(R=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});Object.defineProperty(R,"LoremIpsum",{enumerable:!0,get:function(){return we.default}});R.loremIpsum=void 0;var Ot=q(),g=ve(),It=C(),we=Tt(Ae());function Tt(t){return t&&t.__esModule?t:{default:t}}var yt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.count,r=n===void 0?1:n,a=e.format,o=a===void 0?Ot.FORMAT_PLAIN:a,l=e.paragraphLowerBound,v=l===void 0?3:l,c=e.paragraphUpperBound,N=c===void 0?7:c,Me=e.random,$=e.sentenceLowerBound,xe=$===void 0?5:$,z=e.sentenceUpperBound,be=z===void 0?15:z,X=e.units,Ue=X===void 0?g.UNIT_SENTENCES:X,J=e.words,De=J===void 0?It.WORDS:J,K=e.suffix,We=K===void 0?"":K,Fe={random:Me,sentencesPerParagraph:{max:N,min:v},words:De,wordsPerSentence:{max:be,min:xe}},F=new we.default(Fe,o,We);switch(Ue){case g.UNIT_PARAGRAPHS:case g.UNIT_PARAGRAPH:return F.generateParagraphs(r);case g.UNIT_SENTENCES:case g.UNIT_SENTENCE:return F.generateSentences(r);case g.UNIT_WORDS:case g.UNIT_WORD:return F.generateWords(r);default:return""}};R.loremIpsum=yt});var P=ke(Le(),1);var Bt=(()=>{let e=class e{constructor(){}get(r){return(0,P.loremIpsum)(r)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=Q({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),i={units:"words",count:4},d={units:"sentences",count:1},f={units:"paragraphs",count:5},Et=new Map([["a",i],["article",f],["aside",f],["b",i],["button",i],["caption",d],["cite",d],["code",d],["del",i],["details",d],["dialog",d],["div",f],["em",i],["figcaption",d],["footer",f],["h1",i],["h2",i],["h3",i],["h4",i],["h5",i],["h6",i],["header",d],["input",i],["label",i],["li",d],["main",f],["nav",d],["ol",S(h({},f),{paragraphLowerBound:1,paragraphUpperBound:1})],["option",i],["output",d],["p",S(h({},f),{count:1})],["pre",d],["s",i],["section",f],["small",i],["span",i],["strong",i],["sub",i],["summary",d],["sup",i],["td",i],["template",d],["textarea",d],["th",i],["ul",S(h({},f),{paragraphLowerBound:1,paragraphUpperBound:1})]]),Ht=(()=>{let e=class e{constructor(r,a){this.el=r,this.renderer=a,this.config={}}get params(){return h(h({},Et.get(this.el.nativeElement.localName)||{}),this.config)}ngOnInit(){let r=this.el.nativeElement;["input","textarea","output"].includes(r.localName)?this.setLipsumForInputElements(this.el):["ul","ol"].includes(r.localName)?this.setLipsumForListElements(this.el):this.setLipsumForCommonElements(this.el)}setLipsumForInputElements(r){r.nativeElement.value=(0,P.loremIpsum)(this.params)}setLipsumForListElements(r){(0,P.loremIpsum)(this.params).split(`
`).forEach(o=>{let l=this.renderer.createElement("li");l.innerText=o,r.nativeElement.appendChild(l)})}setLipsumForCommonElements(r){r.nativeElement.innerText=(0,P.loremIpsum)(this.params)}};e.\u0275fac=function(a){return new(a||e)(k(ee),k(te))},e.\u0275dir=Y({type:e,selectors:[["","lipsum",""]],inputs:{config:["lipsum","config"]},standalone:!0});let t=e;return t})(),$t=(()=>{let e=class e{constructor(){this.setText()}ngOnChanges(r){this.setText()}setText(){this.text=(0,P.loremIpsum)(this.config)}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=V({type:e,selectors:[["ngx-lipsum"]],inputs:{config:"config"},standalone:!0,features:[Z,oe],decls:2,vars:1,template:function(a,o){a&1&&(ne(0),ie(1),ae()),a&2&&(re(1),ue(o.text))},encapsulation:2});let t=e;return t})();export{Ht as LipsumDirective,Bt as LipsumService,$t as NgxLipsumComponent};