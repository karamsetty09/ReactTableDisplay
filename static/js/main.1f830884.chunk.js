(this.webpackJsonpvidaly=this.webpackJsonpvidaly||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(32),r=n.n(a),s=n(1);function l(){return Object(s.jsx)("div",{children:Object(s.jsx)("center",{children:"Available movies list"})})}var o=n(37),j=n(9),b=n(16),d=n(17),h=n(18),u=n(24),m=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var O=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var x=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(s.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},p=function(e){var t=e.movies,n=e.onDelete,c=e.onLike;return Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Title"}),Object(s.jsx)("th",{children:"Genre"}),Object(s.jsx)("th",{children:"Stock"}),Object(s.jsx)("th",{children:"Rate"}),Object(s.jsx)("th",{children:"Like"}),Object(s.jsx)("th",{})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.title}),Object(s.jsx)("td",{children:e.genre.name}),Object(s.jsx)("td",{children:e.numberInStock}),Object(s.jsx)("td",{children:e.dailyRentalRate}),Object(s.jsx)("td",{children:Object(s.jsx)(x,{liked:e.liked,onClick:function(){return c(e)}})}),Object(s.jsx)("td",{children:Object(s.jsx)("button",{onClick:function(){return n(e)},className:"btn btn-danger btn-sm",children:"Delete"})})]},e._id)}))})]})},f=n(20),v=n.n(f),g=function(e){var t=e.itemsCount,n=e.pageSize,c=e.currentPage,i=e.onPageChange;console.log("Current page",c);var a=Math.ceil(t/n);if(1===a)return null;var r=v.a.range(1,a+1);return Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{className:"Pagination",children:r.map((function(e){return Object(s.jsx)("li",{className:e===c?"page-item active":"page-item",children:Object(s.jsx)("a",{className:"page-link",onClick:function(){return i(e)},children:e})},e)}))})})};var k=function(e){var t=e.items,n=e.textProperty,c=e.valueProperty,i=e.selectedItem,a=e.onItemSelect;return Object(s.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(s.jsx)("li",{onClick:function(){return a(e)},className:e===i?"list-group-item active":"list-group-item",children:e[n]},e[c])}))})};k.defaultProps={textProperty:"name",valueProperty:"_id"};var y=k,S=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={movies:[],genres:[],currentPage:1,pageSize:4},e.handleDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:n})},e.handleLike=function(t){var n=Object(j.a)(e.state.movies),c=n.indexOf(t);n[c]=Object(o.a)({},n[c]),n[c].liked=!n[c].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,currentPage:1})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=[{name:"All Generes"}].concat(Object(j.a)(m.filter((function(e){return e}))));this.setState({movies:O,genres:e})}},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pageSize,n=e.currentPage,c=e.selectedGenre,i=e.movies;if(0===this.state.movies.length)return Object(s.jsx)("p",{children:"There are no movies in the dataBase."});var a=c&&c._id?i.filter((function(e){return e.genre._id===c._id})):i,r=function(e,t,n){var c=(t-1)*n;return v()(e).slice(c).take(n).value()}(a,n,t);return Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)(y,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsxs)("p",{children:["Showing ",a.length," movies in the database."]}),Object(s.jsx)(p,{movies:r,onLike:this.handleLike,onDelete:this.handleDelete}),Object(s.jsx)(g,{itemsCount:a.length,pageSize:t,currentPage:n,onPageChange:this.handlePageChange})]})]})}}]),n}(c.Component),N=S,C=n(10);n(43);var _=function(){var e=Object(c.useState)([{id:1,title:"Finish React Series",isComplete:!1},{id:2,title:"Finish Vue.js series",isComplete:!0},{id:3,title:"Finish Laravel series",isComplete:!1},{id:4,title:"Finish Vue App with Laravel by Axios",iscomplete:!0}]),t=Object(C.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),r=Object(C.a)(a,2),l=r[0],o=r[1],b=Object(c.useState)(3),d=Object(C.a)(b,2),h=d[0],u=d[1];return Object(s.jsx)("div",{className:"todo-app-container",children:Object(s.jsxs)("div",{className:"todo-app",children:[Object(s.jsx)("h2",{children:"Todo App"}),Object(s.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),0!==l.trim().length&&(i([].concat(Object(j.a)(n),[{id:h,title:l,isComplete:!1}])),o(""),u((function(e){return e+1})))},children:["      ",Object(s.jsx)("input",{type:"text",value:l,onChange:function(e){o(e.target.value)},className:"todo-input",placeholder:"What do you need to do?"})]}),Object(s.jsx)("ul",{className:"todo-list",children:n.map((function(e,t){return Object(s.jsxs)("li",{className:"todo-item-container",children:[Object(s.jsxs)("div",{className:"todo-item",children:[Object(s.jsx)("input",{type:"checkbox"}),Object(s.jsx)("span",{className:"todo-item-label",children:e.title})]}),Object(s.jsx)("button",{onClick:function(){return t=e.id,void i(Object(j.a)(n).filter((function(e){return e.id!=t})));var t},className:"x-button",children:Object(s.jsx)("svg",{className:"x-button-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},e.id)}))}),Object(s.jsxs)("div",{className:"check-all-container",children:[Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"button",children:"Check All"})}),Object(s.jsx)("span",{children:"3 items remaining"})]}),Object(s.jsxs)("div",{className:"other-buttons-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"button filter-button filter-button-active",children:"All"}),Object(s.jsx)("button",{className:"button filter-button",children:"Active"}),Object(s.jsx)("button",{className:"button filter-button",children:"Completed"})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"button",children:"Clear completed"})})]})]})})},P=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsx)("hr",{style:{border:"none",borderTop:"3px double #333",color:"#333",overflow:"visible",textAlign:"center",height:"5px"}})}}]),n}(c.Component),T=P;function R(e){var t={padding:"1rem",margin:"1rem",backgroundColor:"#008080",color:"".concat(e.color),display:"inline-block",fontFamily:"monospace",fontSize:"1.5rem",textAlign:"center"};return Object(s.jsx)(c.Fragment,{children:e.text.split("").map((function(e){return n=e,Object(s.jsx)("div",{style:t,children:n});var n}))})}function A(){var e=Object(c.useState)(!0),t=Object(C.a)(e,2),n=t[0],i=t[1];return Object(s.jsx)("div",{children:Object(s.jsxs)(c.Fragment,{children:[Object(s.jsx)(R,{text:"CONTACT-ME",color:"white"}),Object(s.jsx)(T,{}),Object(s.jsx)("address",{children:Object(s.jsxs)("em",{children:["Address: 8 Woodhill Street",Object(s.jsx)("br",{}),"Post-code: Fairy Meadow - 2519",Object(s.jsx)("br",{}),"State: NSW - Australia",Object(s.jsx)("br",{}),"Moblile No: ",Object(s.jsx)("a",{href:"tel: +61 479155146",children:"0479155146"}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{href:"mailto:venkatasandeepkumarkaramsetty@gmail.com",children:"venkatasandeepkumarkaramsetty@gmail.com"})]})}),Object(s.jsxs)("details",{onClick:function(){return i(!n)},style:{color:n?"limegreen":"crimson"},children:[Object(s.jsx)("h4",{children:"Mixed Berry Tart."}),Object(s.jsx)("h6",{children:"Raspberries, blueberries, and strawberries on top of a creamy filling served in a crispy tart."})]})]})})}n(44);function w(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(T,{}),Object(s.jsx)(R,{color:"white",text:"PERSONAL-PROFILE"}),Object(s.jsx)(T,{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"To excel as a software developer through hard work, perseverance and innovation. To be part of a leading company where I can get opportunities to show my talent and enhance my skills. To meet company goals and objectives with zeal and passion."}),Object(s.jsx)(T,{}),Object(s.jsx)("h3",{children:"Skills"}),Object(s.jsxs)("section",{className:"wrapper",children:[Object(s.jsxs)("section",{className:"a",children:[Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Programming Languages:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Frame Works:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Database:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Development Environments:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Web Technologies:"})," "]}),Object(s.jsx)("br",{}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Version Control:"})," "]}),Object(s.jsx)("br",{})]}),Object(s.jsxs)("section",{className:"b",children:[Object(s.jsx)("p",{children:"PHP, JavaScript, C#, Python, Java, SAP ABAP, c++"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Laravel, Nodejs, Reactjs"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Mongodb, Sql"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"Visual Studio, php Storm, Docker, SAP"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"HTML/CSS, JavaScript"}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{children:"git"})]})]})]})}n(59);var M=n.p+"static/media/2999AC0220334860873_P.dc4efd25.jpg";function D(){return Object(s.jsx)("img",{src:M,style:{width:150,height:150,borderRadius:75,padding:4}})}var I=n(28),L=n.n(I),F=(n(46),function(e){var t=Object(c.useState)(new Date),n=Object(C.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(L()().format("MMMM Do YYYY, h:mm:ss a")),l=Object(C.a)(r,2),o=l[0],j=l[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return a(new Date,j(L()().format("MMMM Do YYYY, h:mm:ss a")))}),1e3);return function(){return clearTimeout(e)}})),Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:".header-a",children:Object(s.jsx)(D,{})}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"header-b",children:Object(s.jsxs)("center",{children:[Object(s.jsxs)("h1",{className:"name",children:["Karamsetty. ",e.name," Sandeep Kumar"]}),Object(s.jsxs)("div",{className:"profile-details-role",children:[Object(s.jsxs)("span",{className:"primary-text",children:[" ",Object(s.jsx)("h3",{children:" "})]}),Object(s.jsx)("span",{className:"profile-role-tagline",children:"Knack of building applications with front and back end"}),Object(s.jsx)("br",{}),Object(s.jsxs)("h6",{children:["Date : ",o]}),Object(s.jsx)("div",{class:"line-1"})]})]})}),Object(s.jsxs)("div",{className:"header-c",children:[Object(s.jsxs)("h2",{children:["Time : ",i.toLocaleTimeString()]}),Object(s.jsx)("button",{className:"button",children:" Hire Me "}),Object(s.jsx)("a",{href:"sandeep_Resume.pdf",download:"VenkataResume.pdf",children:Object(s.jsx)("button",{className:"button",children:"Download Resume"})})]})]})}),G=n(23),Y=n(33),W=n(34),z=n(25);n(47);function B(){var e=[{id:1,title:"Personal Portfolio",link:"/",logo:Object(s.jsx)(Y.a,{})},{id:2,title:"ToDo-app",link:"/todo",logo:Object(s.jsx)(z.c,{})},{id:3,title:"Movies-app",link:"/movies",logo:Object(s.jsx)(z.a,{})},{id:4,title:"Contact Me",link:"/contactme",logo:Object(s.jsx)(z.b,{})},{id:5,title:"Table Name",link:"/tablename",logo:Object(s.jsx)(W.a,{})}].map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)("div",{children:Object(s.jsxs)(G.b,{to:e.link,children:[e.logo,e.title]})})},e.id)}));return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("h1",{children:"__Apps & portfolio__"}),Object(s.jsx)("br",{}),Object(s.jsx)("ul",{children:e})]})}n(55);var E=n(3);function V(){var e=[{id:1,title:"Personal Portfolio",path:"/",component:w},{id:2,title:"ToDo-app",path:"/todo",component:_},{id:3,title:"Movies-app",path:"/movies",component:N},{id:4,title:"Contact Me",path:"/contactme",component:A},{id:5,title:"Table Name",path:"/tablename",component:l}].map((function(e){return 1===e.id?Object(s.jsx)(E.a,{exact:!0,path:e.path,component:e.component},e.id):Object(s.jsx)(E.a,{path:e.path,component:e.component},e.id)}));return Object(s.jsx)(G.a,{children:Object(s.jsxs)("div",{class:"wrapper",children:[Object(s.jsx)(F,{class:"header",name:"Venkata"}),Object(s.jsx)(B,{class:"sidebar"}),Object(s.jsx)("article",{class:"content",children:e}),Object(s.jsx)("footer",{class:"footer",children:"My footer"})]})})}var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};n(56),n(57);r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(V,{})}),document.getElementById("root")),J()}},[[58,1,2]]]);
//# sourceMappingURL=main.1f830884.chunk.js.map