(this["webpackJsonpredux-demo"]=this["webpackJsonpredux-demo"]||[]).push([[6],{157:function(e,t,a){"use strict";var n=a(48),r=a(0),o=a.n(r),c=a(133),l=a(352),i=a(354),u=a(355),d=a(353),s=a(372),p=a(143),m=a(152),f=a.n(m),g=a(178),v=a(351),h=a(7),b=a(188),x=a.n(b),E=function(e){var t=e.labelText,a=e.max,n=e.min,r=e.value,l=e.styleColor,i=e.delta,u=Object(h.a)((function(e){return{root:{height:10,borderRadius:20},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:0,backgroundColor:"light".concat(l)}}}))(v.a),d=Object(c.a)({root:{flexGrow:1,marginBottom:"5px"},arrowIcon:{position:"relative",fontSize:"18px",top:"2px",color:l}})();return o.a.createElement("div",{className:d.root},o.a.createElement(p.a,{component:"p",color:"textSecondary",gutterBottom:!0},t," -"," ",o.a.createElement("strong",null,o.a.createElement(f.a,{formattingFn:function(e){return new Intl.NumberFormat("en-IN").format(e)},end:Number(r)})," "),i>0&&i&&o.a.createElement(o.a.Fragment,null,o.a.createElement("span",null,"("),o.a.createElement(x.a,{className:d.arrowIcon}),"".concat(new Intl.NumberFormat("en-IN").format(i),")"))),o.a.createElement(u,{variant:"determinate",value:function(e){return 100*(e-n)/(a-n)}(r)}))},y=a(369),w=a(371),j=a(349),O=a(360),C=a(364),k=a(356),S=a(357),N=a(189),F=a.n(N),D=Object(c.a)((function(e){return{root:{flexGrow:1,border:0},cardContent:{paddingTop:0}}})),I=function(e){var t=e.data,a=e.category,n=D();return o.a.createElement(l.a,{className:n.root,variant:"outlined"},o.a.createElement(d.a,{title:a,subheader:o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{component:"p",color:"textSecondary"},t.nameoftheorganisation),o.a.createElement(p.a,{component:"p",color:"textSecondary"},o.a.createElement("strong",null,t.city)))}),o.a.createElement(i.a,{className:n.cardContent},o.a.createElement(p.a,{component:"p",color:"textSecondary"},t.descriptionandorserviceprovided),t.phonenumber&&o.a.createElement(p.a,{component:"p",color:"textSecondary"},"Phone Number -"," ",o.a.createElement("a",{href:"tel:".concat(t.phonenumber)}," ",t.phonenumber)),t.contact&&o.a.createElement(p.a,{component:"p",color:"textSecondary"},o.a.createElement("a",{href:t.contact,target:"blank"},"Source"))),o.a.createElement(u.a,null))},T=Object(h.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(C.a),z=Object(h.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(k.a),L=Object(h.a)((function(e){return{root:{padding:e.spacing(2)}}}))(S.a),R=Object(c.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"100%"}}})),B=function(e){var t=e.categoryData,a=e.categoryOptions,r=R(),c=o.a.useState(""),l=Object(n.a)(c,2),i=l[0],d=l[1],s=o.a.useState(a[0]),m=Object(n.a)(s,2),f=m[0],g=m[1],v=o.a.useState(),h=Object(n.a)(v,2),b=h[0],x=h[1];b=t&&t.filter((function(e){return e.category===f}));var E;return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{square:!0,expanded:"panel1"===i,onChange:(E="panel1",function(e,t){d(!!t&&E)}),key:Math.random()},o.a.createElement(z,{expandIcon:o.a.createElement(F.a,null),"aria-controls":"panel1d-content",id:"panel1d-header"},o.a.createElement(p.a,null,"Essentials / Helpline")),o.a.createElement(L,null,o.a.createElement(j.a,{className:r.formControl},o.a.createElement(y.a,{id:"category"},"Select Category"),o.a.createElement(O.a,{labelId:"category",id:"category",value:f||a[0],onChange:function(e){var a=e.target.value,n=t&&t.filter((function(e){return e.category===a}));g(e.target.value),x(n)}},a.map((function(e,t){return o.a.createElement(w.a,{value:e,key:e},e)}))))),o.a.createElement(u.a,null),b&&b.map((function(e){return o.a.createElement(I,{data:e,key:e.recordid,category:f})}))))},H=Object(c.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,borderRadius:0,boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",marginBottom:"10px"},title:{flexGrow:1},paper:{padding:10,width:"100%"},formControl:{margin:e.spacing(1),minWidth:"100%"},zone:{height:"10px"},cardHeader:{padding:"10px 10px"},covidCardContent:{position:"relative",paddingTop:"18px"},cardSwitch:{position:"absolute",top:"0px",right:0}}}));t.a=function(e){var t=e.title,a=e.active,r=e.confirmed,c=e.recovered,m=e.deceased,v=e.delta,h=e.categoryData,b=e.categoryOptions,x=e.zone,y=H(),w={labels:["Active","Recovered","Deceased"],datasets:[{data:[a,c,m],backgroundColor:["#FF6384","#90EE90","#D3D3D3"],hoverBackgroundColor:["#FF6384","#90EE90","#D3D3D3"]}]},j=o.a.useState(!1),O=Object(n.a)(j,2),C=O[0],k=O[1];return o.a.createElement(l.a,{className:y.root,variant:"outlined"},o.a.createElement(d.a,{title:t,subheader:o.a.createElement(o.a.Fragment,null,"Total Cases -"," ",o.a.createElement("strong",null,o.a.createElement(f.a,{formattingFn:function(e){return new Intl.NumberFormat("en-IN").format(e)},end:Number(r)})),!!x&&o.a.createElement(p.a,{component:"p",color:"textSecondary"},"Zone - "," ",o.a.createElement("strong",{style:{color:"".concat(x.toLowerCase())}},"".concat(x.charAt(0).toUpperCase()+x.slice(1)," ")))),className:y.cardHeader}),o.a.createElement(u.a,null),o.a.createElement(i.a,{className:y.covidCardContent},o.a.createElement("div",{className:y.cardSwitch},o.a.createElement(s.a,{checked:C,onChange:function(e){k(!C)},name:"showChart",color:"primary",inputProps:{"aria-label":"secondary checkbox"}})),C?o.a.createElement(g.a,{legend:{position:"right"},data:w}):o.a.createElement(o.a.Fragment,null,o.a.createElement(E,{labelText:"Active",min:0,max:r,value:a,styleColor:"red",delta:v&&v.confirmed}),o.a.createElement(E,{labelText:"Recovered",min:0,max:r,value:c,styleColor:"green",delta:v&&v.recovered}),o.a.createElement(E,{labelText:"Deceased",min:0,max:r,value:m,styleColor:"gray",delta:v&&v.deceased}))),h&&h.length>0&&o.a.createElement(B,{categoryData:h,categoryOptions:b}))}},159:function(e,t,a){"use strict";var n=a(156),r=a(31),o=a(0),c=a.n(o),l=a(157);t.a=function(e){var t=e.locationValue,a=e.covidData,o=e.resources,i=e.cardType,u=e.zones;return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){var d;if("state"===i){var s,p=a.find((function(t){return t.state.toLowerCase()===e.state.toLowerCase()}));d=(s={active:p.active,confirmed:p.confirmed,deceased:p.deaths,recovered:p.recovered},Object(r.a)(s,i,e.state),Object(r.a)(s,"delta",{confirmed:p.deltaconfirmed,deceased:p.deltadeaths,recovered:p.deltarecovered}),s)}else if("india"===i){var m,f=a.find((function(e){return"Total"===e.state}));d=(m={active:f.active,confirmed:f.confirmed,deceased:f.deaths,recovered:f.recovered},Object(r.a)(m,i,"India"),Object(r.a)(m,"delta",{confirmed:f.deltaconfirmed,deceased:f.deltadeaths,recovered:f.deltarecovered}),m)}else if("district"===i){var g=a.find((function(t){return t.state.toLowerCase()===e.state.toLowerCase()})).districtData.find((function(t){return t.district.toLowerCase()===e.district.toLowerCase()})),v=u.find((function(t){return t[i]===e.district}));g.zone=v.zone.toLowerCase(),d=g}var h=o&&o.filter((function(t){if(t["district"===i?"city":i]===e[i])return t.category})),b=Object(n.a)(new Map(h&&h.map((function(e){return[e.category,e]}))).values()),x=b&&b.map((function(e){return e.category}));return c.a.createElement(l.a,{title:d[i],active:d.active,confirmed:d.confirmed,recovered:d.recovered,deceased:d.deceased,delta:d.delta,key:t,categoryData:h,categoryOptions:x,zone:d.zone})})))}},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return g})),a.d(t,"e",(function(){return v}));var n=a(39),r=a.n(n),o=a(51),c=a(40),l=a.n(c).a.create({baseURL:"https://api.covid19india.org",headers:{"Content-type":"application/json"}}),i={get:function(e){return l.get(e)},post:function(e,t){return l.post(e,t)},put:function(e,t){return l.put(e,t)},delete:function(e){return l.delete(e)}},u=a(9),d=function(){return{type:u.c}},s=function(){return{type:u.d}},p=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d()),t({type:u.a}),e.prev=2,e.next=5,i.get("/v2/state_district_wise.json");case 5:a=e.sent,t((n=a.data,{type:u.b,payload:n})),t(s()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("error",e.t0);case 13:case"end":return e.stop()}var n}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},m=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d()),t({type:u.g}),e.prev=2,e.next=5,i.get("/resources/resources.json");case 5:a=e.sent,t((n=a.data,{type:u.h,payload:n})),t(s()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("error",e.t0);case 13:case"end":return e.stop()}var n}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},f=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d()),t({type:u.k}),e.prev=2,e.next=5,i.get("/zones.json");case 5:a=e.sent,t((n=a.data,{type:u.l,payload:n})),t(s()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("error",e.t0);case 13:case"end":return e.stop()}var n}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d()),t({type:u.i}),e.prev=2,e.next=5,i.get("/data.json");case 5:a=e.sent,t((n=a.data,{type:u.j,payload:n})),t(s()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("error",e.t0);case 13:case"end":return e.stop()}var n}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d()),t({type:u.e}),e.prev=2,e.next=5,i.get("/updatelog/log.json");case 5:a=e.sent,t((n=a.data,{type:u.f,payload:n})),t(s()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("error",e.t0);case 13:case"end":return e.stop()}var n}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}},174:function(e,t,a){"use strict";var n=a(156),r=a(0),o=a.n(r),c=a(141),l=a(112),i=a(361),u=a(133),d=a(370),s=a(143),p=Object(u.a)((function(e){return{root:{margin:"0px 0 10px 0"},searchPaper:{padding:"15px",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},searchHeading:{fontSize:"20px",fontWeight:"bold",color:"slategray"}}}));t.a=function(e){var t=e.zones,a=e.searchValue,r=e.handleSearch,u=e.cardType,m=p(),f=Object(n.a)(new Map(t.map((function(e){return[e[u],e]}))).values());return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,className:m.root},o.a.createElement(c.a,{item:!0,xs:12},o.a.createElement(l.a,{variant:"outlined",square:!0,className:m.searchPaper},o.a.createElement(s.a,{component:"h2",className:m.searchHeading,gutterBottom:!0},"All ","".concat(u.charAt(0).toUpperCase()+u.slice(1),"s")," ","in India"),o.a.createElement(i.a,{multiple:!0,limitTags:4,id:"multiple-limit-tags",options:f,getOptionLabel:function(e){return e[u]},value:a,onChange:function(e,t){r(t)},closeIcon:!1,renderInput:function(e){return o.a.createElement(d.a,Object.assign({},e,{variant:"outlined",label:"",placeholder:"Search here..."}))}})))))}},190:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(133),c=a(352),l=a(353),i=a(354),u=a(358),d=a(355),s=Object(o.a)((function(e){return{card:{width:"100%",marginBottom:"15px"}}}));t.a=function(){var e=s();return r.a.createElement(c.a,{className:e.card},r.a.createElement(l.a,{title:r.a.createElement(u.a,{animation:"wave",height:20,width:"100%"}),subheader:r.a.createElement(u.a,{animation:"wave",height:15,width:"50%"})}),r.a.createElement(d.a,null),r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{animation:"wave",height:50}),r.a.createElement(u.a,{animation:"wave",height:50}),r.a.createElement(u.a,{animation:"wave",height:50,style:{marginBottom:6}}))))}},359:function(e,t,a){"use strict";a.r(t);var n=a(48),r=a(0),o=a.n(r),c=a(174),l=a(159),i=a(190),u=a(32),d=a(162);t.default=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.covidReducer})).location,a=Object(u.c)((function(e){return e.covidStateWiseReducer})).stateWiseData,s=Object(u.c)((function(e){return e.covidResourceReducer})).resources,p=Object(u.c)((function(e){return e.covidZoneReducer})).zones,m=Object(u.c)((function(e){return e.covidLoadingReducer})).isLoading,f=Object(r.useState)([]),g=Object(n.a)(f,2),v=g[0],h=g[1];return Object(r.useEffect)((function(){s&&p||(e(Object(d.b)()),e(Object(d.d)())),e(Object(d.c)())}),[e]),o.a.createElement(o.a.Fragment,null,p&&p.length>0&&o.a.createElement(c.a,{zones:p,searchValue:v,handleSearch:function(e){h(e)},cardType:"state"}),v&&v.length>0&&a&&a.length>0&&s&&s.length>0&&o.a.createElement(l.a,{locationValue:v,covidData:a,resources:s,cardType:"state"}),m&&o.a.createElement(i.a,null),t&&t.length>0&&a&&a.length>0&&s&&s.length>0&&o.a.createElement(l.a,{locationValue:t,covidData:a,resources:s,cardType:"state"}))}}}]);
//# sourceMappingURL=6.a9bd8682.chunk.js.map