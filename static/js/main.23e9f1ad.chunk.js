(this.webpackJsonpvidaly=this.webpackJsonpvidaly||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(34),a=n.n(r),s=n(1);function l(){return Object(s.jsx)("div",{children:"Available movies list"})}var o=n(17),j=n(7),d=n(19),b=n(20),h=n(21),u=n(27),O=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var x=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var m=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(s.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},p=function(e){var t=e.movies,n=e.onDelete,c=e.onLike;return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Title"}),Object(s.jsx)("th",{children:"Genre"}),Object(s.jsx)("th",{children:"Stock"}),Object(s.jsx)("th",{children:"Rate"}),Object(s.jsx)("th",{children:"Like"}),Object(s.jsx)("th",{})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.title}),Object(s.jsx)("td",{children:e.genre.name}),Object(s.jsx)("td",{children:e.numberInStock}),Object(s.jsx)("td",{children:e.dailyRentalRate}),Object(s.jsx)("td",{children:Object(s.jsx)(m,{liked:e.liked,onClick:function(){return c(e)}})}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{onClick:function(){return n(e)},className:"btn btn-danger btn-sm",children:"Delete"})})]},e._id)}))})]})},f=n(23),v=n.n(f),g=function(e){var t=e.itemsCount,n=e.pageSize,c=e.currentPage,i=e.onPageChange;console.log("Current page",c);var r=Math.ceil(t/n);if(1===r)return null;var a=v.a.range(1,r+1);return Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"Pagination",children:a.map((function(e){return Object(s.jsx)("li",{className:e===c?"page-item active":"page-item",children:Object(s.jsx)("a",{className:"page-link",onClick:function(){return i(e)},children:e})},e)}))})})};var k=function(e){var t=e.items,n=e.textProperty,c=e.valueProperty,i=e.selectedItem,r=e.onItemSelect;return Object(s.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(s.jsx)("li",{onClick:function(){return r(e)},className:e===i?"list-group-item active":"list-group-item",children:e[n]},e[c])}))})};k.defaultProps={textProperty:"name",valueProperty:"_id"};var y=k;function S(e){var t={padding:"1rem",margin:"1rem",backgroundColor:"#008080",color:"".concat(e.color),display:"inline-block",fontFamily:"monospace",fontSize:"1.5rem",textAlign:"center"};return Object(s.jsx)(c.Fragment,{children:e.text.split("").map((function(e,n){return function(e,n){return Object(s.jsx)("div",{style:t,children:e},n)}(e,n)}))})}var N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={movies:[],genres:[],currentPage:1,pageSize:4},e.handleDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:n})},e.handleLike=function(t){var n=Object(j.a)(e.state.movies),c=n.indexOf(t);n[c]=Object(o.a)({},n[c]),n[c].liked=!n[c].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,currentPage:1})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=[{name:"All Generes"}].concat(Object(j.a)(O.filter((function(e){return e}))));this.setState({movies:x,genres:e})}},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pageSize,n=e.currentPage,c=e.selectedGenre,i=e.movies;if(0===this.state.movies.length)return Object(s.jsx)("p",{children:"There are no movies in the dataBase."});var r=c&&c._id?i.filter((function(e){return e.genre._id===c._id})):i,a=function(e,t,n){var c=(t-1)*n;return v()(e).slice(c).take(n).value()}(r,n,t);return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("hr",{}),Object(s.jsx)(S,{color:"white",text:"Displaying-Movies"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)(y,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsxs)("p",{children:["Showing ",r.length," movies in the database."]}),Object(s.jsx)(p,{movies:a,onLike:this.handleLike,onDelete:this.handleDelete}),Object(s.jsx)(g,{itemsCount:r.length,pageSize:t,currentPage:n,onPageChange:this.handlePageChange})]})]})}}]),n}(c.Component),C=N,A=n(10);n(44);var _=function(){var e=Object(c.useState)([{id:1,title:"Finish React Series",isComplete:!1},{id:2,title:"Finish Vue.js series",isComplete:!0},{id:3,title:"Finish Laravel series",isComplete:!1},{id:4,title:"Finish Vue App with Laravel by Axios",iscomplete:!0}]),t=Object(A.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),a=Object(A.a)(r,2),l=a[0],o=a[1],d=Object(c.useState)(3),b=Object(A.a)(d,2),h=b[0],u=b[1];return Object(s.jsx)("div",{className:"todo-app-container",children:Object(s.jsxs)("div",{className:"todo-app",children:[Object(s.jsx)("h2",{children:"Todo App"}),Object(s.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),0!==l.trim().length&&(i([].concat(Object(j.a)(n),[{id:h,title:l,isComplete:!1}])),o(""),u((function(e){return e+1})))},children:["      ",Object(s.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},className:"todo-input",placeholder:"What do you need to do?"})]}),Object(s.jsx)("ul",{className:"todo-list",children:n.map((function(e,t){return Object(s.jsxs)("li",{className:"todo-item-container",children:[Object(s.jsxs)("div",{className:"todo-item",children:[Object(s.jsx)("input",{type:"checkbox"}),Object(s.jsx)("span",{className:"todo-item-label",children:e.title})]}),Object(s.jsx)("button",{onClick:function(){return t=e.id,void i(Object(j.a)(n).filter((function(e){return e.id!=t})));var t},className:"x-button",children:Object(s.jsx)("svg",{className:"x-button-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},e.id)}))}),Object(s.jsxs)("div",{className:"check-all-container",children:[Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"button",children:"Check All"})}),Object(s.jsx)("span",{children:"3 items remaining"})]}),Object(s.jsxs)("div",{className:"other-buttons-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"button filter-button filter-button-active",children:"All"}),Object(s.jsx)("button",{className:"button filter-button",children:"Active"}),Object(s.jsx)("button",{className:"button filter-button",children:"Completed"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"button",children:"Clear completed"})})]})]})})},P=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(s.jsx)("hr",{style:{border:"none",borderTop:"3px double #333",color:"#333",overflow:"visible",textAlign:"center",height:"5px"}})}}]),n}(c.Component),T=P,R=n(11);function w(){var e=Object(c.useState)(!0),t=Object(A.a)(e,2),n=t[0],i=t[1],r=function(e){return e.toUpperCase()},a=function(e){return e.repeat(3)},l=function(e){return e.bold()};console.log(l(a(r("normal"))));var o=Object(R.c)(l,a,r);console.log(o("store_compose "));return Object(s.jsx)("div",{children:Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("div",{children:Object(s.jsx)(S,{text:"CONTACT-ME",color:"white"})}),Object(s.jsx)(T,{}),Object(s.jsx)("address",{children:Object(s.jsxs)("em",{children:["Address: 8 Woodhill Street",Object(s.jsx)("br",{}),"Post-code: Fairy Meadow - 2519",Object(s.jsx)("br",{}),"State: NSW - Australia",Object(s.jsx)("br",{}),"Moblile No: ",Object(s.jsx)("a",{href:"tel: +61 479155146",children:"0479155146"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"mailto:venkatasandeepkumarkaramsetty@gmail.com",children:"venkatasandeepkumarkaramsetty@gmail.com"})]})}),Object(s.jsxs)("details",{onClick:function(){return i(!n)},style:{color:n?"limegreen":"crimson"},children:[Object(s.jsx)("h4",{children:"Mixed Berry Tart."}),Object(s.jsx)("h6",{children:"Raspberries, blueberries, and strawberries on top of a creamy filling served in a crispy tart."})]})]})})}var D=function(){var e={value:0},t="counter/increment",n=function(){return{type:t}},c="ADD",i=function(e){return{type:c,payload:e}},r=Object(R.d)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,i=arguments.length>1?arguments[1]:void 0;return i.type===t?{value:n.value+1}:i.type===c?{value:n.value+i.payload}:n}));r.dispatch(n()),console.log(r),console.log(r.getState()),r.subscribe((function(){return console.log("SUBSCRIBER",r.getState())})),r.dispatch(n()),r.dispatch(i(100));var a=Object(R.a)({increment:n,add:i},r.dispatch);a.add(100),a.increment();var l=[n,i].map((function(e){return Object(R.c)(r.dispatch,e)})),o=Object(A.a)(l,2);return o[0],o[1],console.log(r.getState()),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(S,{text:"Learnings",color:"white"})}),Object(s.jsx)(T,{})]})};var M=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(S,{text:"Settings",color:"white"})}),Object(s.jsx)(T,{})]})};var L=function(){var e={users:[{id:1,name:"steve"},{id:2,name:"Eric"}],tasks:[{title:"file the TPS reports"},{title:"order more energy drinks"}]},t="ADD_USER",n=Object(R.b)({users:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.users,c=arguments.length>1?arguments[1]:void 0;return c.type===t?[].concat(Object(j.a)(n),[c.payload]):n},tasks:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.tasks,c=arguments.length>1?arguments[1]:void 0;return c.type===t?[].concat(Object(j.a)(n),[c.payload]):n}}),c=Object(R.d)(n,e);return c.dispatch(function(e){return{type:"ADD_TASK",payload:e}}({title:"hello"})),console.log(c.getState()),Object(s.jsxs)("div",{style:{textAlign:"center"},children:[Object(s.jsx)("hr",{}),Object(s.jsx)(S,{text:"EDUCATION",color:"white"}),Object(s.jsx)(T,{})]})};n(45);function I(){var e={textAlign:"center"};return Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("div",{style:e,children:Object(s.jsx)(S,{color:"white",text:"PERSONAL-PROFILE"})}),Object(s.jsx)(T,{}),Object(s.jsx)("p",{children:"To excel as a software developer through hard work, perseverance and innovation. To be part of a leading company where I can get opportunities to show my talent and enhance my skills. To meet company goals and objectives with zeal and passion."}),Object(s.jsx)(T,{}),Object(s.jsx)(S,{style:e,color:"white",text:"SKILLS"}),Object(s.jsxs)("section",{className:"wrapper",children:[Object(s.jsxs)("section",{className:"a",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Programming Languages:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Frame Works:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Database:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Development Environments:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Web Technologies:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Version Control:"})," "]}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("section",{className:"b",children:[Object(s.jsx)("p",{children:"PHP, JavaScript, C#, Python, Java, SAP ABAP, c++"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Laravel, Nodejs, Reactjs"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Mongodb, Sql"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Visual Studio, php Storm, Docker, SAP"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"HTML/CSS, JavaScript"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"git"})]})]})]})}n(60);var F=n.p+"static/media/2999AC0220334860873_P.dc4efd25.jpg";function E(){return Object(s.jsx)("img",{src:F,style:{width:150,height:150,borderRadius:75,padding:4}})}var G=n(30),B=n.n(G),Y=(n(47),function(e){var t=Object(c.useState)(new Date),n=Object(A.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(B()().format("MMMM Do YYYY, h:mm:ss a")),l=Object(A.a)(a,2),o=l[0],j=l[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return r(new Date,j(B()().format("MMMM Do YYYY, h:mm:ss a")))}),1e3);return function(){return clearTimeout(e)}})),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:".header-a",children:Object(s.jsx)(E,{})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"header-b",children:Object(s.jsxs)("center",{children:[Object(s.jsxs)("h1",{className:"name",children:["Karamsetty. ",e.name," Sandeep Kumar"]}),Object(s.jsxs)("div",{className:"profile-details-role",children:[Object(s.jsxs)("span",{className:"primary-text",children:[" ",Object(s.jsx)("h3",{children:" "})]}),Object(s.jsx)("span",{className:"profile-role-tagline",children:"Knack of building applications with front and back end"}),Object(s.jsx)("br",{}),Object(s.jsxs)("h6",{children:["Date : ",o]}),Object(s.jsx)("div",{className:"line-1"})]})]})}),Object(s.jsxs)("div",{className:"header-c",children:[Object(s.jsxs)("h2",{children:["Time : ",i.toLocaleTimeString()]}),Object(s.jsx)("button",{className:"button",children:" Hire Me "}),Object(s.jsx)("a",{href:"sandeep_Resume.pdf",download:"VenkataResume.pdf",children:Object(s.jsx)("button",{className:"button",children:"Download Resume"})})]})]})}),W=n(26),z=n(35),V=n(36),J=n(13);n(48);function K(){var e=[{id:1,title:"Personal Portfolio",link:"/",logo:Object(s.jsx)(z.a,{})},{id:2,title:"Education",link:"/education",logo:Object(s.jsx)(J.c,{})},{id:3,title:"ToDo-app",link:"/todo",logo:Object(s.jsx)(J.g,{})},{id:4,title:"Movies-app",link:"/movies",logo:Object(s.jsx)(J.b,{})},{id:5,title:"Contact Me",link:"/contactme",logo:Object(s.jsx)(J.e,{})},{id:6,title:"Table Name",link:"/tablename",logo:Object(s.jsx)(V.a,{})},{id:7,title:"Learning",link:"/learnings",logo:Object(s.jsx)(J.d,{})},{id:8,title:"Settings",link:"/settings",logo:Object(s.jsx)(J.f,{})},{id:9,title:"Counter-App",link:"/counterapp",logo:Object(s.jsx)(J.a,{})}].map((function(e,t){return Object(s.jsx)("li",{children:Object(s.jsx)("div",{children:Object(s.jsxs)(W.b,{to:e.link,children:[e.logo,e.title]})})},t)}));return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("h1",{children:"__Apps & portfolio__"}),Object(s.jsx)("br",{}),Object(s.jsx)("ul",{children:e})]})}var H=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(S,{text:"Counter-App",color:"white"})}),Object(s.jsx)(T,{})]})},U=(n(56),n(3));function q(){var e=[{id:1,title:"Personal Portfolio",path:"/",component:I},{id:2,title:"Education",path:"/education",component:L},{id:3,title:"ToDo-app",path:"/todo",component:_},{id:4,title:"Movies-app",path:"/movies",component:C},{id:5,title:"Contact Me",path:"/contactme",component:w},{id:6,title:"Table Name",path:"/tablename",component:l},{id:7,title:"Learning",path:"/learnings",component:D},{id:8,title:"Settings",path:"/settings",component:M},{id:9,title:"Counter-App",path:"/counterapp",component:H}];function t(e){var t=e.item;return 1===t.id?Object(s.jsx)(U.a,{exact:!0,path:t.path,component:t.component},t.id):Object(s.jsx)(U.a,{path:t.path,component:t.component},t.id)}return Object(s.jsx)(W.a,{children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)(Y,{className:"header",name:"Venkata"}),Object(s.jsx)(K,{className:"sidebar"}),Object(s.jsx)("dl",{children:e.map((function(e){return Object(s.jsx)(t,{item:e},e.id)}))}),Object(s.jsx)("footer",{className:"footer",children:"My footer"})]})})}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};n(57),n(58);a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(q,{})}),document.getElementById("root")),Z()}},[[59,1,2]]]);
//# sourceMappingURL=main.23e9f1ad.chunk.js.map