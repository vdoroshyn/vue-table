(function(e){function r(r){for(var a,t,l=r[0],s=r[1],c=r[2],_=0,u=[];_<l.length;_++)t=l[_],n[t]&&u.push(n[t][0]),n[t]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);h&&h(r);while(u.length)u.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,r=0;r<i.length;r++){for(var o=i[r],a=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(a=!1)}a&&(i.splice(r--,1),e=t(t.s=o[0]))}return e}var a={},n={app:0},i=[];function t(r){if(a[r])return a[r].exports;var o=a[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(o,a,function(r){return e[r]}.bind(null,a));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=r,l=l.slice();for(var c=0;c<l.length;c++)r(l[c]);var h=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,r,o){e.exports=o("56d7")},"034f":function(e,r,o){"use strict";var a=o("64a9"),n=o.n(a);n.a},"56d7":function(e,r,o){"use strict";o.r(r);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),n=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{attrs:{id:"app"}},[o("ProjectTable")],1)},i=[],t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",[o("div",e._l(e.tableTitles,function(r){return o("div",{key:r,staticClass:"checkbox"},[o("label",[e._v(e._s(r))]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.filterCategories,expression:"filterCategories"}],attrs:{type:"checkbox"},domProps:{value:r,checked:Array.isArray(e.filterCategories)?e._i(e.filterCategories,r)>-1:e.filterCategories},on:{change:function(o){var a=e.filterCategories,n=o.target,i=!!n.checked;if(Array.isArray(a)){var t=r,l=e._i(a,t);n.checked?l<0&&(e.filterCategories=a.concat([t])):l>-1&&(e.filterCategories=a.slice(0,l).concat(a.slice(l+1)))}else e.filterCategories=i}}})])})),o("table",[o("thead",[o("tr",e._l(e.tableTitles,function(r,a,n){return o("th",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes(r),expression:"filterCategories.includes(item)"}],key:n,on:{click:function(r){e.sort(a)}}},[e._v(e._s(r))])}))]),o("tbody",e._l(e.sortedTableData,function(r,a){return o("tr",{key:a},[o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Name"),expression:"filterCategories.includes('Name')"}]},[e._v(e._s(r.name))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Height"),expression:"filterCategories.includes('Height')"}]},[e._v(e._s(r.height))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Mass"),expression:"filterCategories.includes('Mass')"}]},[e._v(e._s(r.mass))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Hair color"),expression:"filterCategories.includes('Hair color')"}]},[e._v(e._s(r.hair_color))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Skin color"),expression:"filterCategories.includes('Skin color')"}]},[e._v(e._s(r.skin_color))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Eye color"),expression:"filterCategories.includes('Eye color')"}]},[e._v(e._s(r.eye_color))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Birth year"),expression:"filterCategories.includes('Birth year')"}]},[e._v(e._s(r.birth_year))]),o("td",{directives:[{name:"show",rawName:"v-show",value:e.filterCategories.includes("Gender"),expression:"filterCategories.includes('Gender')"}]},[e._v(e._s(r.gender))])])})),e._v("\n    debug: sort="+e._s(e.sortBy)+", dir="+e._s(e.sortOrder)+", filterArray="+e._s(e.filterCategories)+"\n    "),o("h1",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v("Hello!")])])])},l=[],s=(o("a481"),o("55dd"),{name:"ProjectTable",methods:{sort:function(e){e=e.toLowerCase(),this.sortBy!==e?this.sortBy=e:this.sortOrder="asc"===this.sortOrder?"desc":"asc"}},computed:{sortedTableData:function(){var e=this;return this.tableData.sort(function(r,o){var a=e.sortBy,n="desc"===e.sortOrder?-1:1;return"unknown"===r[a]?4:"unknown"===o[a]?-4:"height"===a||"mass"===a||"birth_year"===a?(parseFloat(r[a].replace(/,/g,""))-parseFloat(o[a].replace(/,/g,"")))*n:"n/a"===r[a]?3:"n/a"===o[a]?-3:"none"===r[a]?2:"none"===o[a]?-2:r[a]<o[a]?-1*n:r[a]>o[a]?1*n:0})}},data:function(){return{sortBy:"name",sortOrder:"asc",filterCategories:["Name","Height","Mass","Hair color","Skin color","Eye color","Birth year","Gender"],tableTitles:{name:"Name",height:"Height",mass:"Mass",hair_color:"Hair color",skin_color:"Skin color",eye_color:"Eye color",birth_year:"Birth year",gender:"Gender"},tableData:[{name:"Luke Skywalker",height:"172",mass:"77",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"19BBY",gender:"male"},{name:"C-3PO",height:"167",mass:"75",hair_color:"n/a",skin_color:"gold",eye_color:"yellow",birth_year:"112BBY",gender:"n/a"},{name:"R2-D2",height:"96",mass:"32",hair_color:"n/a",skin_color:"white, blue",eye_color:"red",birth_year:"33BBY",gender:"n/a"},{name:"Darth Vader",height:"202",mass:"136",hair_color:"none",skin_color:"white",eye_color:"yellow",birth_year:"41.9BBY",gender:"male"},{name:"Leia Organa",height:"150",mass:"49",hair_color:"brown",skin_color:"light",eye_color:"brown",birth_year:"19BBY",gender:"female"},{name:"Owen Lars",height:"178",mass:"120",hair_color:"brown, grey",skin_color:"light",eye_color:"blue",birth_year:"52BBY",gender:"male"},{name:"Beru Whitesun lars",height:"165",mass:"75",hair_color:"brown",skin_color:"light",eye_color:"blue",birth_year:"47BBY",gender:"female"},{name:"R5-D4",height:"97",mass:"32",hair_color:"n/a",skin_color:"white, red",eye_color:"red",birth_year:"unknown",gender:"n/a"},{name:"Biggs Darklighter",height:"183",mass:"84",hair_color:"black",skin_color:"light",eye_color:"brown",birth_year:"24BBY",gender:"male"},{name:"Obi-Wan Kenobi",height:"182",mass:"77",hair_color:"auburn, white",skin_color:"fair",eye_color:"blue-gray",birth_year:"57BBY",gender:"male"},{name:"Anakin Skywalker",height:"188",mass:"84",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"41.9BBY",gender:"male"},{name:"Wilhuff Tarkin",height:"180",mass:"unknown",hair_color:"auburn, grey",skin_color:"fair",eye_color:"blue",birth_year:"64BBY",gender:"male"},{name:"Chewbacca",height:"228",mass:"112",hair_color:"brown",skin_color:"unknown",eye_color:"blue",birth_year:"200BBY",gender:"male"},{name:"Han Solo",height:"180",mass:"80",hair_color:"brown",skin_color:"fair",eye_color:"brown",birth_year:"29BBY",gender:"male"},{name:"Greedo",height:"173",mass:"74",hair_color:"n/a",skin_color:"green",eye_color:"black",birth_year:"44BBY",gender:"male"},{name:"Jabba Desilijic Tiure",height:"175",mass:"1,358",hair_color:"n/a",skin_color:"green-tan, brown",eye_color:"orange",birth_year:"600BBY",gender:"hermaphrodite"},{name:"Wedge Antilles",height:"170",mass:"77",hair_color:"brown",skin_color:"fair",eye_color:"hazel",birth_year:"21BBY",gender:"male"},{name:"Jek Tono Porkins",height:"180",mass:"110",hair_color:"brown",skin_color:"fair",eye_color:"blue",birth_year:"unknown",gender:"male"},{name:"Yoda",height:"66",mass:"17",hair_color:"white",skin_color:"green",eye_color:"brown",birth_year:"896BBY",gender:"male"},{name:"Palpatine",height:"170",mass:"75",hair_color:"grey",skin_color:"pale",eye_color:"yellow",birth_year:"82BBY",gender:"male"},{name:"Boba Fett",height:"183",mass:"78.2",hair_color:"black",skin_color:"fair",eye_color:"brown",birth_year:"31.5BBY",gender:"male"},{name:"IG-88",height:"200",mass:"140",hair_color:"none",skin_color:"metal",eye_color:"red",birth_year:"15BBY",gender:"none"},{name:"Bossk",height:"190",mass:"113",hair_color:"none",skin_color:"green",eye_color:"red",birth_year:"53BBY",gender:"male"},{name:"Lando Calrissian",height:"177",mass:"79",hair_color:"black",skin_color:"dark",eye_color:"brown",birth_year:"31BBY",gender:"male"},{name:"Lobot",height:"175",mass:"79",hair_color:"none",skin_color:"light",eye_color:"blue",birth_year:"37BBY",gender:"male"},{name:"Ackbar",height:"180",mass:"83",hair_color:"none",skin_color:"brown mottle",eye_color:"orange",birth_year:"41BBY",gender:"male"},{name:"Mon Mothma",height:"150",mass:"unknown",hair_color:"auburn",skin_color:"fair",eye_color:"blue",birth_year:"48BBY",gender:"female"},{name:"Arvel Crynyd",height:"unknown",mass:"unknown",hair_color:"brown",skin_color:"fair",eye_color:"brown",birth_year:"unknown",gender:"male"},{name:"Wicket Systri Warrick",height:"88",mass:"20",hair_color:"brown",skin_color:"brown",eye_color:"brown",birth_year:"8BBY",gender:"male"},{name:"Nien Nunb",height:"160",mass:"68",hair_color:"none",skin_color:"grey",eye_color:"black",birth_year:"unknown",gender:"male"}]}}}),c=s,h=(o("9484"),o("2877")),_=Object(h["a"])(c,t,l,!1,null,"5c06ba8b",null);_.options.__file="ProjectTable.vue";var u=_.exports,d={name:"app",components:{ProjectTable:u}},m=d,g=(o("034f"),Object(h["a"])(m,n,i,!1,null,null,null));g.options.__file="App.vue";var b=g.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(b)}}).$mount("#app")},"64a9":function(e,r,o){},9484:function(e,r,o){"use strict";var a=o("cb08"),n=o.n(a);n.a},cb08:function(e,r,o){}});
//# sourceMappingURL=app.cde6eef9.js.map