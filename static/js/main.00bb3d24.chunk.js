(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),o=a(6),n=a.n(o),h=(a(16),a(17),a(2)),i=a(5),d=a(3),u="UPDATE_SHAFT",c={walkThrough:!1,machineRoomless:!1,type:"mr",width:0,depth:0,head:0,pit:0,height:0,speed:0,load:0,wallToShaftDood:60,cwtToWall:50,cwtDepth:180,guide:75},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},Object(i.a)({},t.name,t.value));default:return e}};function p(e,t){return{type:u,name:e,value:t}}var f="UPDATE_CWT",C={width:900,depth:180,braket:270},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),{},Object(i.a)({},t.key,t.value));default:return e}};function m(e,t){return{type:f,key:e,value:t}}var w=[{id:"shaft1",name:"machineRoom",value:!0,label:"\u041c\u041f"},{id:"shaft2",name:"machineRoom",value:!1,label:"\u0411\u041c\u041f"}],b=[{id:"load1",name:"load",value:400,label:"400\u043a\u0433"},{id:"load2",name:"load",value:630,label:"630...1000\u043a\u0433"},{id:"load3",name:"load",value:1e3,label:"1001...2000\u043a\u0433"}],W=function(e,t){return 35*Math.pow(e,2)/100+t},T=[{id:"speed1",name:"speed",value:W(10,120),label:"1.0\u043c/\u0441"},{id:"speed2",name:"speed",value:W(16,215),label:"1.6\u043c/\u0441"}],D=[{id:"height1",name:"height",value:39,label:"\u0434\u043e 40\u043c"},{id:"height2",name:"height",value:41,label:"\u0434\u043e 75\u043c"}],y=(a(24),a(1));var j=function(e){var t=e.elements;return Object(y.jsx)(y.Fragment,{children:t.map((function(e,t){return Object(y.jsx)("div",{children:e.array.map((function(t,a){return Object(y.jsxs)("div",{className:"radio",children:[Object(y.jsx)("input",{className:"radio__input",type:"radio",id:t.id,name:t.name,value:t.value,onChange:e.handler,disabled:!(!e.disabled||1e3!==t.value),checked:t.value===e.ref}),Object(y.jsx)("label",{className:"radio__label",for:t.id,children:t.label})]},"".concat(a-1).concat(t.name))}))},"".concat(t))}))})};var v=function(e){var t=e.shaft,a=Object(h.b)(),l=function(e){if("load"===e.target.name)switch(e.target.value){case"630":a(m("width",900)),a(p("guide",75));break;case"1000":a(m("width",1100)),a(m("depth",180)),a(p("guide",75));break;default:a(p("guide",65))}a(p(e.target.name,Number(e.target.value)))},r=[{array:w,handler:function(e){switch(e.target.value){case"false":a(p(e.target.name,!1));break;default:a(p(e.target.name,!0))}a(p("load",null))},disabled:!1,title:"\u0422\u0438\u043f",ref:t.machineRoom},{array:D,handler:l,disabled:!1,title:"\u0412\u044b\u0441\u043e\u0442\u0430 \u043f\u043e\u0434\u044a\u0435\u043c\u0430",ref:t.height},{array:b,handler:l,disabled:t.machineRoom,title:"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c",ref:t.load},{array:T,handler:l,disabled:"630"!==t.load,title:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c",ref:t.speed}];return Object(y.jsx)(j,{elements:r})};a(26);var k=function(e){var t=e.elements;return Object(y.jsx)("div",{className:"input-container",children:t.map((function(e,t){return Object(y.jsx)("input",{type:"Number",className:"input",style:e.warning,name:e.title,placeholder:e.placeholder,onChange:e.handler,value:e.value>0?e.value:"",min:"0",step:"50"},"".concat(t,"-").concat(e.name))}))})};var O=function(e){var t,a=e.shaft,l=3245+a.speed,r=3245+a.speed,o=3945+a.speed,n=3745+a.speed,i={color:"rgb(200, 0, 0)",borderBottom:"1px solid rgb(200, 0, 0)"},d={color:"rgb(0, 125, 0)"},u=Object(h.b)(),c=function(e){return u(p(e.target.name,Number(e.target.value)))},s=[{title:"width",placeholder:"\u0448\u0438\u0440\u0438\u043d\u0430 \u0448\u0430\u0445\u0442\u044b, \u043c\u043c",value:a.width,handler:c},{title:"depth",placeholder:"\u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u0448\u0430\u0445\u0442\u044b, \u043c\u043c",value:a.depth,handler:c},{title:"head",placeholder:"\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u044d\u0442\u0430\u0436, \u043c\u043c",value:a.head,handler:c,warning:function(e){if(a.machineRoom&&e<l&&e>0)return i;if(!a.machineRoom&&e>0){if(1e3===a.load&&e<n)return i;if(1e3!==a.load&&e<o&&a.height>40)return i;if(1e3!==a.load&&e<r&&a.height<40)return i}return e>0?d:null}(a.head)},{title:"pit",placeholder:"\u043f\u0440\u0438\u044f\u043c\u043e\u043a, \u043c\u043c",value:a.pit,handler:c,warning:(t=a.pit,t+a.head<4450&&t>0&&a.head>0||1e3===a.load&&t<1400&&t>0||t<1050&&t>0?i:t>0?d:null)}];return Object(y.jsx)(k,{elements:s})};a(27);var B=function(e){var t=e.elements;return Object(y.jsx)("div",{className:"button-container",children:t.map((function(e,t){return Object(y.jsx)("button",{className:"button ".concat(e.equals?"button--active":""),type:"button",onClick:e.handler,disabled:e.disabled,children:e.title},"".concat(t,"-").concat(e.title))}))})};var G=function(e){var t=e.shaft,a=e.cwt,l=Object(h.b)(),r=[{title:"\u043e\u0442 \u0441\u0442\u0435\u043d\u044b \u0434\u043e \u043f\u043e\u0440\u043e\u0433\u0430 35 \u043c\u043c",handler:function(){return l(p("wallToShaftDood",60===t.wallToShaftDood?35:60))},equals:35===t.wallToShaftDood,disabled:!1},{title:"\u043e\u0442 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e \u0441\u0442\u0435\u043d 25 \u043c\u043c",handler:function(){return l(p("cwtToWall",50===t.cwtToWall?25:50))},equals:25===t.cwtToWall,disabled:!1},{title:"\u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0432\u0435\u0441 \u0433\u043b\u0443\u0431\u0438\u043d\u043e\u0439 130 \u043c\u043c",handler:function(){return l(m("depth",180===a.depth?130:180))},equals:130===a.depth,disabled:1e3===t.load},{title:"\u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0432\u0435\u0441 \u0448\u0438\u0440\u0438\u043d\u043e\u0439 450 \u043c\u043c",handler:function(){return l(m("width",900===a.width?450:900))},equals:450===a.width,disabled:400!==t.load},{title:"\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0430\u044f T89/\u0412",handler:function(){return l(p("guide",75===t.guide?62:75))},equals:62===t.guide,disabled:630!==t.load},{title:"\u043f\u0440\u043e\u0445\u043e\u0434\u043d\u0430\u044f",handler:function(){return l(p("walkThrough",!t.walkThrough))},equals:t.walkThrough,disabled:!1}];return Object(y.jsx)(B,{elements:r})};a(28);var x=function(e){var t=e.elements;return Object(y.jsx)("form",{children:t.map((function(e,t){return Object(y.jsxs)("div",{className:"cards-container",children:[Object(y.jsx)("legend",{className:"cards-container__legend",children:e.title}),e.array.map((function(e,t){return(e.C2||e.T2)&&Object(y.jsx)("div",{className:"card",children:Object(y.jsxs)("div",{className:"card__title",children:[e.title," (",e.CW,"x",e.CD,") ",Object(y.jsx)("br",{}),e.T2&&"T2: ".concat(e.T2),e.T2&&e.C2&&", ",e.C2&&"C2: ".concat(e.C2)]})},"".concat(t))}))]},e.title+t)}))})},N=[{DW:600,fullWidth:955,type:"T2"},{DW:650,fullWidth:1030,type:"T2"},{DW:700,fullWidth:1095,type:"T2"},{DW:800,fullWidth:1245,type:"T2"},{DW:900,fullWidth:1395,type:"T2"},{DW:1e3,fullWidth:1545,type:"T2"},{DW:1100,fullWidth:1695,type:"T2"},{DW:1200,fullWidth:1845,type:"T2"},{DW:650,fullWidth:1360,type:"C2"},{DW:700,fullWidth:1460,type:"C2"},{DW:800,fullWidth:1660,type:"C2"},{DW:900,fullWidth:1860,type:"C2"},{DW:1e3,fullWidth:2060,type:"C2"},{DW:1100,fullWidth:2260,type:"C2"},{DW:1200,fullWidth:2460,type:"C2"}],S=[{CW:950,CD:1050,BG:1050,load:400,title:"0401",type:"normal",walkThrough:!1},{CW:950,CD:1050,BG:1050,load:400,title:"0401-2",type:"through",walkThrough:!0},{CW:810,CD:1e3,BG:910,load:400,title:"0402",type:"normal",walkThrough:!1},{CW:810,CD:810,BG:910,load:400,title:"0403",type:"normal",walkThrough:!1},{CW:1e3,CD:1250,BG:1080,load:400,title:"0404",type:"normal",walkThrough:!1},{CW:1050,CD:1100,BG:1130,load:400,title:"0405",type:"normal",walkThrough:!1},{CW:1050,CD:1100,BG:1130,load:400,title:"0405-2",type:"through",walkThrough:!0},{CW:1100,CD:950,BG:1180,load:400,title:"0406",type:"normal",walkThrough:!1},{CW:950,CD:1100,BG:1050,load:400,title:"0407",type:"normal",walkThrough:!1},{CW:2100,CD:1100,BG:2180,load:630,title:"0601",type:"normal",walkThrough:!1},{CW:2100,CD:1100,BG:2180,load:630,title:"0601-2",type:"through",walkThrough:!0},{CW:1100,CD:1400,BG:1180,load:630,title:"0602",type:"normal",walkThrough:!1},{CW:1100,CD:1400,BG:1180,load:630,title:"0602-2",type:"through",walkThrough:!0},{CW:1100,CD:2100,BG:1180,load:630,title:"0603",type:"normal",walkThrough:!1},{CW:1100,CD:2100,BG:1180,load:630,title:"0603-2",type:"through",walkThrough:!0},{CW:1050,CD:2100,BG:1130,load:630,title:"0604",type:"normal",walkThrough:!1},{CW:1400,CD:2300,BG:1480,load:630,title:"0605",type:"normal",walkThrough:!1},{CW:1400,CD:2300,BG:1480,load:630,title:"0605-2",type:"through",walkThrough:!0},{CW:1400,CD:1200,BG:1480,load:630,title:"0606",type:"normal",walkThrough:!1},{CW:1400,CD:1200,BG:1480,load:630,title:"0606-2",type:"through",walkThrough:!0},{CW:1400,CD:2200,BG:1480,load:630,title:"0607",type:"normal",walkThrough:!1},{CW:1400,CD:2100,BG:1480,load:630,title:"0608",type:"normal",walkThrough:!1},{CW:1400,CD:2100,BG:1480,load:630,title:"0608-2",type:"through",walkThrough:!0},{CW:2170,CD:1170,BG:2250,load:630,title:"0609",type:"normal",walkThrough:!1},{CW:1600,CD:1400,BG:1680,load:630,title:"1001",type:"normal",walkThrough:!1},{CW:1400,CD:1600,BG:1480,load:630,title:"1002",type:"normal",walkThrough:!1},{CW:1700,CD:1500,BG:1780,load:630,title:"1003",type:"normal",walkThrough:!1},{CW:2100,CD:1500,BG:2180,load:630,title:"1004",type:"normal",walkThrough:!1},{CW:1500,CD:1700,BG:1580,load:630,title:"1005",type:"normal",walkThrough:!1},{CW:1400,CD:2400,BG:1480,load:630,title:"1006",type:"normal",walkThrough:!1},{CW:1400,CD:2400,BG:1480,load:630,title:"1006-2",type:"through",walkThrough:!0},{CW:2100,CD:1400,BG:2180,load:630,title:"1007",type:"normal",walkThrough:!1},{CW:1200,CD:2300,BG:1280,load:630,title:"1008",type:"normal",walkThrough:!1},{CW:1400,CD:2300,BG:1480,load:1e3,title:"0605",type:"normal",walkThrough:!1},{CW:1400,CD:2300,BG:1480,load:1e3,title:"0605-2",type:"through",walkThrough:!0},{CW:1400,CD:2200,BG:1480,load:1e3,title:"0607",type:"normal",walkThrough:!1},{CW:1400,CD:2100,BG:1480,load:1e3,title:"0608",type:"normal",walkThrough:!1},{CW:1400,CD:2100,BG:1480,load:1e3,title:"0608-2",type:"through",walkThrough:!0},{CW:2100,CD:1500,BG:2180,load:1e3,title:"1004",type:"normal",walkThrough:!1},{CW:2100,CD:1400,BG:2180,load:1e3,title:"1007",type:"normal",walkThrough:!1},{CW:1600,CD:2500,BG:1680,load:1e3,title:"2001",type:"normal",walkThrough:!1}];var _=function(e){var t=e.shaft,a=e.cwt,l=1e3===t.load?75:35,r=t.cwtToWall+(1e3===t.load?180:a.depth)/2+145,o=t.walkThrough?120-2*t.wallToShaftDood+70:60-t.wallToShaftDood+900,n=t.walkThrough?2*t.wallToShaftDood+360:t.wallToShaftDood+205+t.cwtToWall,h=n+(t.walkThrough?140:70);function u(e){return 400===e?65:630===e?t.guide:75}var c=S.filter((function(e){return e.load===t.load&&e.BG<=t.width-(l+r)-2*u(t.load)&&e.BG>=t.width-795-2*u(t.load)&&e.CD<=t.depth-n&&e.CD>=t.depth-h-o&&e.walkThrough===t.walkThrough})),s=S.filter((function(e){return e.load===t.load&&e.BG<=t.width-(l+l)-2*u(t.load)&&e.BG>=t.width-490-2*u(t.load)&&e.CD<=t.depth-(n+a.depth+50)&&e.CD>=t.depth-(h+330+(35===t.wallToShaftDood?35:0)+(25===t.cwtToWall?25:0))&&t.machineRoom&&!e.walkThrough}));function p(e,l,r){return e.map((function(e){var o=35+u(t.load)+(e.BG-e.CW)/2+(810===e.CW?35:50),c=N.filter((function(i){var d=(a.width+a.braket)/2+160+e.CD/2+35+60-(35===t.wallToShaftDood?35:0);return"T2"===i.type&&i.DW<=e.CW-100&&t.width>=i.fullWidth+15+o&&t.depth>=e.CD+h+l&&t.depth>=d+180&&t.depth<=e.CD+h+r||"C2"===i.type&&i.DW<=e.CW-100&&t.width>=i.fullWidth+30&&t.depth>=e.CD+n+l&&t.depth>=d+110&&t.depth<=e.CD+n+r})).filter((function(e,t,a){return a.map((function(e){return e.type})).lastIndexOf(e.type)===t})).map((function(e){return Object(i.a)({},e.type,e.DW)})).reduce((function(e,t){return Object(d.a)(Object(d.a)({},e),t)}),{});return Object(d.a)({title:e.title,CW:e.CW,CD:e.CD},c)}))}var f=[];switch(t.walkThrough?"through":"normal"){case"through":f=[{title:"\u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0432\u0435\u0441 \u0441\u0431\u043e\u043a\u0443:",array:p(c,0,o)}];break;default:f=[{title:"\u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0432\u0435\u0441 \u0441\u0437\u0430\u0434\u0438:",array:p(s,50+a.depth,60-t.wallToShaftDood+330+(50-t.cwtToWall)+(180-a.depth))},{title:"\u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0432\u0435\u0441 \u0441\u0431\u043e\u043a\u0443:",array:p(c,0,o)}]}return Object(y.jsx)(x,{elements:f})},R=a.p+"static/media/Logo_text.0a739669.png";var q=function(){return Object(y.jsx)("header",{className:"header",children:Object(y.jsx)("a",{href:"https://euroliftmash.ru/",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{width:"100%",src:R,alt:"elm logo"})})})};var F=function(){var e=Object(h.c)((function(e){return e.shaft})),t=Object(h.c)((function(e){return e.counterWeight}));return Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsx)(q,{}),Object(y.jsxs)("form",{className:"filters",children:[Object(y.jsx)(O,{shaft:e}),Object(y.jsx)(v,{shaft:e}),Object(y.jsx)(G,{shaft:e,cwt:t})]}),Object(y.jsx)(_,{shaft:e,cwt:t})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,l=t.getFID,r=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),l(e),r(e),o(e),n(e)}))},A=a(4),E=(a(29),function(){return Object(A.combineReducers)({shaft:s,counterWeight:g})}),I=(0,A.compose)(),L=Object(A.createStore)(E(),{},I);n.a.render(Object(y.jsx)(h.a,{store:L,children:Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(F,{})})}),document.getElementById("root")),P()}},[[30,1,2]]]);
//# sourceMappingURL=main.00bb3d24.chunk.js.map