(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{571:function(e,t,r){var content=r(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(20).default)("3e3dc0c8",content,!0,{sourceMap:!1})},664:function(e,t,r){"use strict";r(571)},665:function(e,t,r){var n=r(19)((function(i){return i[1]}));n.push([e.i,".v-data-table .v-icon[data-v-24b188f0]{cursor:pointer;margin-right:8px}",""]),n.locals={},e.exports=n},686:function(e,t,r){"use strict";r.r(t);var n=r(254),o=r(219),c=r(91),l=r(490),d=r(488),f=r(675),m=r(520),v=r(533),h=r(512),k=r(220),x=r(179),w=r(489),_=r(671),S=r(494),O=r(500),j=(r(326),r(2)),y=r(23),C=(r(33),r(9),r(8),r(76),r(16),r(17),r(10),r(5),r(11),r(84),r(94)),R=r.n(C);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){Object(j.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={layout:"sidebar",middleware:"auth",data:function(){return{slides:[],snackbar:!1,snackbarMessage:"",headers:[{text:"Image",value:"image",sortable:!1},{text:"Title",value:"title"},{text:"Subtitle",value:"subtitle"},{text:"Content",value:"content"},{text:"Actions",value:"actions",sortable:!1}],showCreateDialog:!1,isEditing:!1,form:{id:null,title:"",subtitle:"",content:"",image:""},file:null,valid:!1,titleRules:[function(e){return!!e||"Title is required"}]}},mounted:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchSlides();case 2:case"end":return t.stop()}}),t)})))()},methods:{fetchSlides:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.$get("/api/Slides");case 3:r=t.sent,e.slides=r.result.result.map((function(e){return E(E({},e),{},{image:"".concat("https://rarfoundationbharat.com/","/slides/").concat(e.image)})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error("Error fetching Slides:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},handleFileChange:function(){var e=this;if(this.file){var t=new FileReader;t.onload=function(t){e.form.image=t.target.result},t.readAsDataURL(this.file)}},resetForm:function(){this.form={id:null,title:"",subtitle:"",content:"",image:""},this.file=null,this.valid=!1,this.isEditing=!1,this.showCreateDialog=!1},saveSlide:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r=E({},e.form),n=R.a.get("token")||"",e.isEditing&&!e.file&&delete r.image,!e.isEditing){t.next=12;break}return t.next=7,e.$axios.$put("/api/Slides/".concat(e.form.id),e.form,{headers:{Authorization:"Bearer ".concat(n)}});case 7:o=t.sent,e.snackbarMessage=o.message,e.snackbar=!0,t.next=17;break;case 12:return t.next=14,e.$axios.$post("/api/Slides",e.form,{headers:{Authorization:"Bearer ".concat(n)}});case 14:c=t.sent,e.snackbarMessage=c.message,e.snackbar=!0;case 17:e.showCreateDialog=!1,e.resetForm(),e.fetchSlides(),t.next=25;break;case 22:t.prev=22,t.t0=t.catch(0),console.error("Error saving Slide:",t.t0);case 25:case"end":return t.stop()}}),t,null,[[0,22]])})))()},editSlide:function(e){var t=this;return Object(y.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.isEditing=!0,t.form=E({},e),t.showCreateDialog=!0;case 3:case"end":return r.stop()}}),r)})))()},deleteSlide:function(e){var t=this;return Object(y.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n=R.a.get("token")||"",r.next=4,t.$axios.$delete("/api/Slides/".concat(e,"/delete"),{headers:{Authorization:"Bearer ".concat(n)}});case 4:o=r.sent,t.snackbarMessage=o.message,t.snackbar=!0,t.fetchSlides(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.error("Error deleting Slide:",r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},P=(r(664),r(45)),component=Object(P.a)($,(function(){var e=this,t=e._self._c;return t(d.a,[t(w.a,[t(l.a,{attrs:{cols:"12"}},[t("h1",{staticClass:"title"},[e._v("Slides Users")])])],1),e._v(" "),t(w.a,[t(l.a,{attrs:{cols:"12"}},[t(n.a,{attrs:{color:"primary"},on:{click:function(t){e.showCreateDialog=!0}}},[e._v("Add New Slide")]),e._v(" "),t(f.a,{attrs:{headers:e.headers,items:e.slides,"item-key":"id"},scopedSlots:e._u([{key:"item.image",fn:function(e){var r=e.item;return[t(x.a,{attrs:{src:r.image,"max-width":"100","max-height":"100"}})]}},{key:"item.link",fn:function(r){var o=r.item;return[t(n.a,{attrs:{href:o.link,text:""}},[e._v("View")])]}},{key:"item.actions",fn:function(r){var n=r.item;return[t(k.a,{on:{click:function(t){return e.editSlide(n)}}},[e._v("mdi-pencil")]),e._v(" "),t(k.a,{on:{click:function(t){return e.deleteSlide(n.id)}}},[e._v("mdi-delete")])]}}])})],1)],1),e._v(" "),t(m.a,{attrs:{"max-width":"500px"},model:{value:e.showCreateDialog,callback:function(t){e.showCreateDialog=t},expression:"showCreateDialog"}},[t(o.a,[t(c.d,[t("span",{staticClass:"headline"},[e._v(e._s(e.isEditing?"Edit Slide":"Create Slide"))])]),e._v(" "),t(c.b,[t(h.a,{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(O.a,{attrs:{rules:e.titleRules,label:"Name",required:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}}),e._v(" "),t(O.a,{attrs:{label:"Subtitle"},model:{value:e.form.subtitle,callback:function(t){e.$set(e.form,"subtitle",t)},expression:"form.subtitle"}}),e._v(" "),t(O.a,{attrs:{label:"Content"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}}),e._v(" "),t(v.a,{attrs:{label:"Upload Image",accept:"image/*",outlined:""},on:{change:e.handleFileChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1),e._v(" "),t(c.a,[t(S.a),e._v(" "),t(n.a,{attrs:{disabled:!e.valid,color:"blue darken-1"},on:{click:e.saveSlide}},[e._v(e._s(e.isEditing?"Save":"Create"))]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.resetForm}},[e._v("Cancel")])],1)],1)],1),e._v(" "),t(_.a,{attrs:{timeout:3e3,top:"",right:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n\t\t"+e._s(e.snackbarMessage)+"\n\t\t"),t(n.a,{attrs:{color:"red",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)}),[],!1,null,"24b188f0",null);t.default=component.exports}}]);