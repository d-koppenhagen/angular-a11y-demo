import{e as v,g as w,i as E,p as _}from"./chunk-VNNP37DW.js";import"./chunk-ZCNPA7MA.js";import{Ha as o,Pa as d,Ua as g,Va as x,Wa as s,Xa as c,ab as n,bb as e,cb as p,da as h,lb as t,ob as f,sb as y}from"./chunk-FY5AWN3W.js";var S=(a,i)=>i.id;function b(a,i){if(a&1&&(n(0,"div",0)(1,"label",1),t(2),e(),p(3,"input",2),e()),a&2){let l=i.$implicit,r=i.$index;o(1),d("for","col-0-"+r),o(1),f(" ",l.id," | ",l.name," "),o(1),d("id","col-0-"+r)}}function T(a,i){if(a&1&&(n(0,"div",0)(1,"label",1),t(2),e(),p(3,"input",2),e()),a&2){let l=i.$implicit,r=i.$index;o(1),d("for","col-1-"+r),o(1),f(" ",l.id," | ",l.name," "),o(1),d("id","col-1-"+r)}}function k(a,i){if(a&1&&(n(0,"div",0)(1,"label",1),t(2),e(),p(3,"input",2),e()),a&2){let l=i.$implicit,r=i.$index;o(1),d("for","col-2-"+r),o(1),f(" ",l.id," | ",l.name," "),o(1),d("id","col-2-"+r)}}var C=[{id:3,name:"Item #3"},{id:2,name:"Item #2"},{id:1,name:"Item #1"}],F=(()=>{let i=class i{constructor(){this.values=["","",""],this.items=C,this.toggle=!1,setInterval(()=>{this.items.length>=50&&(this.items=[]),this.addItem()},5e3)}addItem(){let r=this.items.length+1;this.toggle=!this.toggle,this.items=[{id:r,name:`Item #${r}`},...structuredClone(this.items)]}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=h({type:i,selectors:[["app-track-view"]],standalone:!0,features:[y],decls:39,vars:0,consts:[[1,"row"],[1,"col-sm-6","col-form-label",3,"for"],[1,"form-control",3,"id"],["class","row"]],template:function(m,u){m&1&&(n(0,"h1"),t(1,"Track Demo"),e(),n(2,"p"),t(3," The example below shows the difference of tracking list options with "),n(4,"code"),t(5,"$index"),e(),t(6,` and an actual unique attribute. By tracking a unique attribute, the object wont be completely new initialized. In fact, when the array changes, the focus of elements will be restored/tracked correctly.
`),e(),n(7,"p"),t(8," Please enter a text in one of the input fields on the left side. After a few seconds, items will be added to the array of the list. Keep an eye on where you entered your text. While entering and concurrently adding new fields, your input moves into another field as only the "),n(9,"code"),t(10,"$index"),e(),t(11," is tracked. The list on the right tracks a unique attribute ("),n(12,"code"),t(13,"item.id"),e(),t(14,`). This ensures, the focus does not accidentally move to another input event when the list updates concurrently.
`),e(),n(15,"p"),t(16,` Every 5 seconds a new entry is inserted.
`),e(),n(17,"form")(18,"fieldset")(19,"legend"),t(20,"Track: "),n(21,"code"),t(22,"$index"),e()(),s(23,b,4,4,"div",3,g),e(),n(25,"fieldset")(26,"legend"),t(27,"Track: "),n(28,"code"),t(29,"item.id"),e()(),s(30,T,4,4,"div",3,S),e(),n(32,"fieldset")(33,"legend"),t(34,"Track: "),n(35,"code"),t(36,"item"),e()(),s(37,k,4,4,"div",3,x),e()()),m&2&&(o(23),c(u.items),o(7),c(u.items),o(7),c(u.items))},dependencies:[_,E,v,w],styles:["form[_ngcontent-%COMP%]{margin-top:1rem;display:flex;justify-content:space-between;gap:1rem}fieldset[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:.5rem;flex-direction:column}fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{font-weight:700}p[_ngcontent-%COMP%]{margin-bottom:.5rem}code[_ngcontent-%COMP%]{color:var(--bright-blue)}"]});let a=i;return a})();export{F as TrackViewComponent};
