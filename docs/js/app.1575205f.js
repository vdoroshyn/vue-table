(function(e){function r(r){for(var a,t,l=r[0],s=r[1],c=r[2],d=0,h=[];d<l.length;d++)t=l[d],i[t]&&h.push(i[t][0]),i[t]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(r);while(h.length)h.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,r=0;r<n.length;r++){for(var o=n[r],a=!0,l=1;l<o.length;l++){var s=o[l];0!==i[s]&&(a=!1)}a&&(n.splice(r--,1),e=t(t.s=o[0]))}return e}var a={},i={app:0},n=[];function t(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(o,a,function(r){return e[r]}.bind(null,a));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var u=s;n.push([0,"chunk-vendors"]),o()})({0:function(e,r,o){e.exports=o("56d7")},"034f":function(e,r,o){"use strict";var a=o("64a9"),i=o.n(a);i.a},"56d7":function(e,r,o){"use strict";o.r(r);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),i=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{attrs:{id:"app"}},[o("ProjectTable",{attrs:{initialData:e.initialData}})],1)},n=[],t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",[o("div",e._l(e.initialData.titles,function(r){return o("div",{key:r,staticClass:"checkbox"},[o("label",[e._v(e._s(r)+"\n        "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filterCategories,expression:"filterCategories"}],attrs:{type:"checkbox"},domProps:{value:r,checked:Array.isArray(e.filterCategories)?e._i(e.filterCategories,r)>-1:e.filterCategories},on:{change:function(o){var a=e.filterCategories,i=o.target,n=!!i.checked;if(Array.isArray(a)){var t=r,l=e._i(a,t);i.checked?l<0&&(e.filterCategories=a.concat([t])):l>-1&&(e.filterCategories=a.slice(0,l).concat(a.slice(l+1)))}else e.filterCategories=n}}})])])})),o("table",[o("thead",[o("tr",e._l(e.initialData.titles,function(r,a,i){return o("th",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes(r),expression:"filterCategories.includes(item)"}],key:i,on:{click:function(r){e.sort(a)}}},[e._v(e._s(r))])}))]),o("tbody",e._l(e.sortedTableData,function(r,a){return o("tr",{key:a},[o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Name")&&e.EditableName!==a,expression:"filterCategories.includes('Name') && EditableName!==index"}],on:{dblclick:function(r){e.EditableName=a,e.sortBy=""}}},[e._v(e._s(r.name))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableName===a,expression:"EditableName===index"},{name:"model",rawName:"v-model",value:r.name,expression:"value.name"}],attrs:{type:"text"},domProps:{value:r.name},on:{blur:function(r){e.EditableName=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableName=null},input:function(o){o.target.composing||e.$set(r,"name",o.target.value)}}}),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Height")&&e.EditableHeight!==a,expression:"filterCategories.includes('Height') && EditableHeight!==index"}],on:{dblclick:function(r){e.EditableHeight=a,e.sortBy=""}}},[e._v(e._s(r.height))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableHeight===a,expression:"EditableHeight===index"},{name:"model",rawName:"v-model",value:r.height,expression:"value.height"}],attrs:{type:"text"},domProps:{value:r.height},on:{blur:function(r){e.EditableHeight=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableHeight=null},input:function(o){o.target.composing||e.$set(r,"height",o.target.value)}}}),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Mass")&&e.EditableMass!==a,expression:"filterCategories.includes('Mass') && EditableMass!==index"}],on:{dblclick:function(r){e.EditableMass=a,e.sortBy=""}}},[e._v(e._s(r.mass))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableMass===a,expression:"EditableMass===index"},{name:"model",rawName:"v-model",value:r.mass,expression:"value.mass"}],attrs:{type:"text"},domProps:{value:r.mass},on:{blur:function(r){e.EditableMass=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableMass=null},input:function(o){o.target.composing||e.$set(r,"mass",o.target.value)}}}),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Hair color")&&e.EditableHairColor!==a,expression:"filterCategories.includes('Hair color') && EditableHairColor!==index"}],on:{dblclick:function(r){e.EditableHairColor=a,e.sortBy=""}}},[e._v(e._s(r.hair_color))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableHairColor===a,expression:"EditableHairColor===index"},{name:"model",rawName:"v-model",value:r.hair_color,expression:"value.hair_color"}],attrs:{type:"text"},domProps:{value:r.hair_color},on:{blur:function(r){e.EditableHairColor=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableHairColor=null},input:function(o){o.target.composing||e.$set(r,"hair_color",o.target.value)}}}),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Skin color")&&e.EditableSkinColor!==a,expression:"filterCategories.includes('Skin color') && EditableSkinColor!==index"}],on:{dblclick:function(r){e.EditableSkinColor=a,e.sortBy=""}}},[e._v(e._s(r.skin_color))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableSkinColor===a,expression:"EditableSkinColor===index"},{name:"model",rawName:"v-model",value:r.skin_color,expression:"value.skin_color"}],attrs:{type:"text"},domProps:{value:r.skin_color},on:{blur:function(r){e.EditableSkinColor=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableSkinColor=null},input:function(o){o.target.composing||e.$set(r,"skin_color",o.target.value)}}}),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Eye color")&&e.EditableEyeColor!==a,expression:"filterCategories.includes('Eye color') && EditableEyeColor!==index"}],on:{dblclick:function(r){e.EditableEyeColor=a,e.sortBy=""}}},[e._v(e._s(r.eye_color))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableEyeColor===a,expression:"EditableEyeColor===index"},{name:"model",rawName:"v-model",value:r.eye_color,expression:"value.eye_color"}],attrs:{type:"text"},domProps:{value:r.eye_color},on:{blur:function(r){e.EditableEyeColor=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableEyeColor=null},input:function(o){o.target.composing||e.$set(r,"eye_color",o.target.value)}}}),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Birth year")&&e.EditableBirthYear!==a,expression:"filterCategories.includes('Birth year') && EditableBirthYear!==index"}],on:{dblclick:function(r){e.EditableBirthYear=a,e.sortBy=""}}},[e._v(e._s(r.birth_year))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableBirthYear===a,expression:"EditableBirthYear===index"},{name:"model",rawName:"v-model",value:r.birth_year,expression:"value.birth_year"}],attrs:{type:"text"},domProps:{value:r.birth_year},on:{blur:function(r){e.EditableBirthYear=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableBirthYear=null},input:function(o){o.target.composing||e.$set(r,"birth_year",o.target.value)}}}),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Gender")&&e.EditableGender!==a,expression:"filterCategories.includes('Gender') && EditableGender!==index"}],on:{dblclick:function(r){e.EditableGender=a,e.sortBy=""}}},[e._v(e._s(r.gender))]),o("input",{directives:[{name:"show",rawName:"v-show",value:e.EditableGender===a,expression:"EditableGender===index"},{name:"model",rawName:"v-model",value:r.gender,expression:"value.gender"}],attrs:{type:"text"},domProps:{value:r.gender},on:{blur:function(r){e.EditableGender=null},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.EditableGender=null},input:function(o){o.target.composing||e.$set(r,"gender",o.target.value)}}})])}))])])},l=[],s=(o("a481"),o("55dd"),{name:"ProjectTable",props:["initialData"],methods:{sort:function(e){e=e.toLowerCase(),this.sortBy!==e?this.sortBy=e:this.sortOrder="asc"===this.sortOrder?"desc":"asc"}},created:function(){for(var e in this.initialData.titles)this.filterCategories.push(this.initialData.titles[e])},computed:{sortedTableData:function(){var e=this;return this.initialData.items.sort(function(r,o){var a=e.sortBy,i="desc"===e.sortOrder?-1:1;return""===r[a]?5:""===o[a]?-5:"unknown"===r[a]?4:"unknown"===o[a]?-4:("height"===a||"mass"===a||"birth_year"===a)&&parseFloat(r[a])&&parseFloat(o[a])?(parseFloat(r[a].replace(/,/g,""))-parseFloat(o[a].replace(/,/g,"")))*i:"n/a"===r[a]?3:"n/a"===o[a]?-3:"none"===r[a]?2:"none"===o[a]?-2:r[a]<o[a]?-1*i:r[a]>o[a]?1*i:0})}},data:function(){return{sortBy:"",sortOrder:"asc",EditableName:null,EditableHeight:null,EditableMass:null,EditableHairColor:null,EditableSkinColor:null,EditableEyeColor:null,EditableBirthYear:null,EditableGender:null,filterCategories:[]}}}),c=s,u=(o("870a"),o("2877")),d=Object(u["a"])(c,t,l,!1,null,"77d67336",null);d.options.__file="ProjectTable.vue";var h=d.exports,m={name:"app",components:{ProjectTable:h},data:function(){return{initialData:{titles:{name:"Name",height:"Height",mass:"Mass",hair_color:"Hair color",skin_color:"Skin color",eye_color:"Eye color",birth_year:"Birth year",gender:"Gender"},items:[{name:"Luke Skywalker",height:"172",mass:"77",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"19BBY",gender:"male"},{name:"C-3PO",height:"167",mass:"75",hair_color:"n/a",skin_color:"gold",eye_color:"yellow",birth_year:"112BBY",gender:"n/a"},{name:"R2-D2",height:"96",mass:"32",hair_color:"n/a",skin_color:"white, blue",eye_color:"red",birth_year:"33BBY",gender:"n/a"},{name:"Darth Vader",height:"202",mass:"136",hair_color:"none",skin_color:"white",eye_color:"yellow",birth_year:"41.9BBY",gender:"male"},{name:"Leia Organa",height:"150",mass:"49",hair_color:"brown",skin_color:"light",eye_color:"brown",birth_year:"19BBY",gender:"female"},{name:"Owen Lars",height:"178",mass:"120",hair_color:"brown, grey",skin_color:"light",eye_color:"blue",birth_year:"52BBY",gender:"male"},{name:"Beru Whitesun lars",height:"165",mass:"75",hair_color:"brown",skin_color:"light",eye_color:"blue",birth_year:"47BBY",gender:"female"},{name:"R5-D4",height:"97",mass:"32",hair_color:"n/a",skin_color:"white, red",eye_color:"red",birth_year:"unknown",gender:"n/a"},{name:"Biggs Darklighter",height:"183",mass:"84",hair_color:"black",skin_color:"light",eye_color:"brown",birth_year:"24BBY",gender:"male"},{name:"Obi-Wan Kenobi",height:"182",mass:"77",hair_color:"auburn, white",skin_color:"fair",eye_color:"blue-gray",birth_year:"57BBY",gender:"male"},{name:"Anakin Skywalker",height:"188",mass:"84",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"41.9BBY",gender:"male"},{name:"Wilhuff Tarkin",height:"180",mass:"unknown",hair_color:"auburn, grey",skin_color:"fair",eye_color:"blue",birth_year:"64BBY",gender:"male"},{name:"Chewbacca",height:"228",mass:"112",hair_color:"brown",skin_color:"unknown",eye_color:"blue",birth_year:"200BBY",gender:"male"},{name:"Han Solo",height:"180",mass:"80",hair_color:"brown",skin_color:"fair",eye_color:"brown",birth_year:"29BBY",gender:"male"},{name:"Greedo",height:"173",mass:"74",hair_color:"n/a",skin_color:"green",eye_color:"black",birth_year:"44BBY",gender:"male"},{name:"Jabba Desilijic Tiure",height:"175",mass:"1,358",hair_color:"n/a",skin_color:"green-tan, brown",eye_color:"orange",birth_year:"600BBY",gender:"hermaphrodite"},{name:"Wedge Antilles",height:"170",mass:"77",hair_color:"brown",skin_color:"fair",eye_color:"hazel",birth_year:"21BBY",gender:"male"},{name:"Jek Tono Porkins",height:"180",mass:"110",hair_color:"brown",skin_color:"fair",eye_color:"blue",birth_year:"unknown",gender:"male"},{name:"Yoda",height:"66",mass:"17",hair_color:"white",skin_color:"green",eye_color:"brown",birth_year:"896BBY",gender:"male"},{name:"Palpatine",height:"170",mass:"75",hair_color:"grey",skin_color:"pale",eye_color:"yellow",birth_year:"82BBY",gender:"male"},{name:"Boba Fett",height:"183",mass:"78.2",hair_color:"black",skin_color:"fair",eye_color:"brown",birth_year:"31.5BBY",gender:"male"},{name:"IG-88",height:"200",mass:"140",hair_color:"none",skin_color:"metal",eye_color:"red",birth_year:"15BBY",gender:"none"},{name:"Bossk",height:"190",mass:"113",hair_color:"none",skin_color:"green",eye_color:"red",birth_year:"53BBY",gender:"male"},{name:"Lando Calrissian",height:"177",mass:"79",hair_color:"black",skin_color:"dark",eye_color:"brown",birth_year:"31BBY",gender:"male"},{name:"Lobot",height:"175",mass:"79",hair_color:"none",skin_color:"light",eye_color:"blue",birth_year:"37BBY",gender:"male"},{name:"Ackbar",height:"180",mass:"83",hair_color:"none",skin_color:"brown mottle",eye_color:"orange",birth_year:"41BBY",gender:"male"},{name:"Mon Mothma",height:"150",mass:"unknown",hair_color:"auburn",skin_color:"fair",eye_color:"blue",birth_year:"48BBY",gender:"female"},{name:"Arvel Crynyd",height:"unknown",mass:"unknown",hair_color:"brown",skin_color:"fair",eye_color:"brown",birth_year:"unknown",gender:"male"},{name:"Wicket Systri Warrick",height:"88",mass:"20",hair_color:"brown",skin_color:"brown",eye_color:"brown",birth_year:"8BBY",gender:"male"},{name:"Nien Nunb",height:"160",mass:"68",hair_color:"none",skin_color:"grey",eye_color:"black",birth_year:"unknown",gender:"male"}]}}}},b=m,_=(o("034f"),Object(u["a"])(b,i,n,!1,null,null,null));_.options.__file="App.vue";var g=_.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,r,o){},"870a":function(e,r,o){"use strict";var a=o("d8df"),i=o.n(a);i.a},d8df:function(e,r,o){}});
//# sourceMappingURL=app.1575205f.js.map