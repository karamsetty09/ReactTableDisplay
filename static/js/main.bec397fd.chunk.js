(this.webpackJsonpvidaly=this.webpackJsonpvidaly||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(21),r=n.n(i),s=n(3),l=n(1),o=function(e){var t=e.name,n=e.deadline;return Object(l.jsx)("div",{children:Object(l.jsxs)("h3",{children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("p",{children:n})]})})},j=Object(c.createContext)(),d=function(e){var t=Object(c.useState)([{name:"Context API",deadline:"24th evening",id:1},{name:"jest testing",deadline:"24th night",id:2},{name:"css Mastering",deadline:"Daily one hour task",id:3}]),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(l.jsx)(j.Provider,{value:[a,i],children:e.children})},b=function(){var e=Object(c.useContext)(j),t=Object(s.a)(e,2),n=t[0];t[1];return Object(l.jsx)("div",{children:n.map((function(e){return Object(l.jsx)(o,{name:e.name,deadline:e.deadline})}))})},u=function(){var e=Object(c.useContext)(j),t=Object(s.a)(e,2),n=t[0];t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Dev Ed"}),Object(l.jsxs)("p",{children:["List of Notes: ",n.length]})]})},h=n(6),O=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),o=r[0],d=r[1],b=Object(c.useContext)(j),u=Object(s.a)(b,2),O=(u[0],u[1]);return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O((function(e){return[].concat(Object(h.a)(e),[{name:n,deadline:o}])}))},children:[Object(l.jsx)("input",{type:"text",name:"name",value:n,onChange:function(e){a(e.target.value)}}),Object(l.jsx)("input",{type:"text",name:"price",value:o,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("button",{children:"Submit"})]})},x=n(8),m=Object(c.createContext)(),p=function(e,t){switch(t.type){case"increment":return Object(x.a)(Object(x.a)({},e),{},{count:e.count+1});case"decrement":return Object(x.a)(Object(x.a)({},e),{},{count:e.count-1});case"initCount":return Object(x.a)(Object(x.a)({},e),{},{count:t.payload});default:return e}},v={count:0},f=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useReducer)(p,v),r=Object(s.a)(i,2),o=r[0],j=r[1],d=Object(c.useContext)(m).message;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Reducer Example: ",d]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:"Start Count:"}),Object(l.jsx)("input",{type:"number",onChange:function(e){return a(parseInt(e.target.value))},value:n}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(e){return j({type:"initCount",payload:n})},children:"Initialize Counter"})]}),Object(l.jsx)("p",{children:o.count}),Object(l.jsx)("button",{onClick:function(){return j({type:"increment"})},children:"increment"}),Object(l.jsx)("button",{onClick:function(){return j({type:"decrement"})},children:"decrement"})]})};function g(){return Object(l.jsxs)(d,{children:[Object(l.jsx)(f,{}),Object(l.jsxs)("div",{children:["Table Display",Object(l.jsx)(u,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(b,{}),Object(l.jsx)(O,{})]})]})}var C=n(25),S=n(26),N=n(27),y=n(31),k=[{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"}];var _=[{_id:"5b21ca3eeb7f6fbccd471815",title:"Terminator",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:6,dailyRentalRate:2.5,publishDate:"2018-01-03T19:04:28.809Z",liked:!0},{_id:"5b21ca3eeb7f6fbccd471816",title:"Die Hard",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:5,dailyRentalRate:2.5},{_id:"5b21ca3eeb7f6fbccd471817",title:"Get Out",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:8,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471819",title:"Trip to Italy",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181a",title:"Airplane",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181b",title:"Wedding Crashers",genre:{_id:"5b21ca3eeb7f6fbccd471814",name:"Comedy"},numberInStock:7,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd47181e",title:"Gone Girl",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:7,dailyRentalRate:4.5},{_id:"5b21ca3eeb7f6fbccd47181f",title:"The Sixth Sense",genre:{_id:"5b21ca3eeb7f6fbccd471820",name:"Thriller"},numberInStock:4,dailyRentalRate:3.5},{_id:"5b21ca3eeb7f6fbccd471821",title:"The Avengers",genre:{_id:"5b21ca3eeb7f6fbccd471818",name:"Action"},numberInStock:7,dailyRentalRate:3.5}];var I=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(l.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},w=(n(47),function(e){var t=e.movies,n=e.onDelete,c=e.onLike;return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:"Genre"}),Object(l.jsx)("th",{children:"Stock"}),Object(l.jsx)("th",{children:"Rate"}),Object(l.jsx)("th",{children:"Like"}),Object(l.jsx)("th",{})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.title}),Object(l.jsx)("td",{children:e.genre.name}),Object(l.jsx)("td",{children:e.numberInStock}),Object(l.jsx)("td",{children:e.dailyRentalRate}),Object(l.jsx)("td",{children:Object(l.jsx)(I,{liked:e.liked,onClick:function(){return c(e)}})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{onClick:function(){return n(e)},className:"btn btn-danger btn-sm",children:"Delete"})})]},e._id)}))})]})}),A=n(29),M=n.n(A),T=function(e){var t=e.itemsCount,n=e.pageSize,c=e.currentPage,a=e.onPageChange;console.log("Current page",c);var i=Math.ceil(t/n);if(1===i)return null;var r=M.a.range(1,i+1);return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"Pagination",children:r.map((function(e){return Object(l.jsx)("li",{className:e===c?"page-item active":"page-item",children:Object(l.jsx)("a",{className:"page-link",onClick:function(){return a(e)},children:e})},e)}))})})};var D=function(e){var t=e.items,n=e.textProperty,c=e.valueProperty,a=e.selectedItem,i=e.onItemSelect;return Object(l.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(l.jsx)("li",{onClick:function(){return i(e)},className:e===a?"list-group-item active":"list-group-item",children:e[n]},e[c])}))})};D.defaultProps={textProperty:"name",valueProperty:"_id"};var P=D;function R(e){var t={padding:"1rem",margin:"1rem",backgroundColor:"#008080",color:"".concat(e.color),display:"inline-block",fontFamily:"monospace",fontSize:"1.5rem",textAlign:"center"};return Object(l.jsx)(c.Fragment,{children:e.text.split("").map((function(e,n){return function(e,n){return Object(l.jsx)("div",{style:t,children:e},n)}(e,n)}))})}n(48);var E=function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return Object(l.jsx)("hr",{style:{border:"none",borderTop:"3px double #333",color:"#333",overflow:"visible",textAlign:"center",height:"5px"}})}}]),n}(c.Component),L=E,F=function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(C.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],genres:[],currentPage:1,pageSize:4},e.handleDelete=function(t){var n=e.state.movies.filter((function(e){return e._id!==t._id}));e.setState({movies:n})},e.handleLike=function(t){var n=Object(h.a)(e.state.movies),c=n.indexOf(t);n[c]=Object(x.a)({},n[c]),n[c].liked=!n[c].liked,e.setState({movies:n})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,currentPage:1})},e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){var e=[{name:"All Generes"}].concat(Object(h.a)(k.filter((function(e){return e}))));this.setState({movies:_,genres:e})}},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pageSize,n=e.currentPage,c=e.selectedGenre,a=e.movies;if(0===this.state.movies.length)return Object(l.jsx)("p",{children:"There are no movies in the dataBase."});var i=c&&c._id?a.filter((function(e){return e.genre._id===c._id})):a,r=function(e,t,n){var c=(t-1)*n;return M()(e).slice(c).take(n).value()}(i,n,t);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)(R,{color:"white",text:"Displaying-Movies"}),Object(l.jsx)(L,{}),Object(l.jsxs)("div",{className:"full",children:[Object(l.jsx)("div",{className:"side",children:Object(l.jsx)(P,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect})}),Object(l.jsxs)("div",{className:"tabledata",children:[Object(l.jsxs)("p",{children:["Showing ",i.length," movies in the database."]}),Object(l.jsx)(w,{movies:r,onLike:this.handleLike,onDelete:this.handleDelete}),Object(l.jsx)(T,{itemsCount:i.length,pageSize:t,currentPage:n,onPageChange:this.handlePageChange})]})]})]})}}]),n}(c.Component),B=F;n(49);var V=function(){var e=Object(c.useState)([{id:1,title:"Finish React Series",isComplete:!1},{id:2,title:"Finish Vue.js series",isComplete:!0},{id:3,title:"Finish Laravel series",isComplete:!1},{id:4,title:"Finish Vue App with Laravel by Axios",iscomplete:!0}]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(s.a)(i,2),o=r[0],j=r[1],d=Object(c.useState)(3),b=Object(s.a)(d,2),u=b[0],O=b[1];return Object(l.jsx)("div",{className:"todo-app-container",children:Object(l.jsxs)("div",{className:"todo-app",children:[Object(l.jsx)("h2",{children:"Todo App"}),Object(l.jsxs)("form",{action:"#",onSubmit:function(e){e.preventDefault(),0!==o.trim().length&&(a([].concat(Object(h.a)(n),[{id:u,title:o,isComplete:!1}])),j(""),O((function(e){return e+1})))},children:["      ",Object(l.jsx)("input",{type:"text",value:o,onChange:function(e){j(e.target.value)},className:"todo-input",placeholder:"What do you need to do?"})]}),Object(l.jsx)("ul",{className:"todo-list",children:n.map((function(e,t){return Object(l.jsxs)("li",{className:"todo-item-container",children:[Object(l.jsxs)("div",{className:"todo-item",children:[Object(l.jsx)("input",{type:"checkbox"}),Object(l.jsx)("span",{className:"todo-item-label",children:e.title})]}),Object(l.jsx)("button",{onClick:function(){return t=e.id,void a(Object(h.a)(n).filter((function(e){return e.id!=t})));var t},className:"x-button",children:Object(l.jsx)("svg",{className:"x-button-icon",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},e.id)}))}),Object(l.jsxs)("div",{className:"check-all-container",children:[Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"button",children:"Check All"})}),Object(l.jsx)("span",{children:"3 items remaining"})]}),Object(l.jsxs)("div",{className:"other-buttons-container",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{className:"button filter-button filter-button-active",children:"All"}),Object(l.jsx)("button",{className:"button filter-button",children:"Active"}),Object(l.jsx)("button",{className:"button filter-button",children:"Completed"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"button",children:"Clear completed"})})]})]})})},G=n(13);function Y(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1],i=function(e){return e.toUpperCase()},r=function(e){return e.repeat(3)},o=function(e){return e.bold()};console.log(o(r(i("normal"))));var j=Object(G.c)(o,r,i);console.log(j("store_compose "));return Object(l.jsx)("div",{children:Object(l.jsxs)(c.Fragment,{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:Object(l.jsx)(R,{text:"CONTACT-ME",color:"white"})}),Object(l.jsx)(L,{}),Object(l.jsx)("address",{children:Object(l.jsxs)("em",{children:["Address: 8 Woodhill Street",Object(l.jsx)("br",{}),"Post-code: Fairy Meadow - 2519",Object(l.jsx)("br",{}),"State: NSW - Australia",Object(l.jsx)("br",{}),"Moblile No: ",Object(l.jsx)("a",{href:"tel: +61 479155146",children:"0479155146"}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:"mailto:venkatasandeepkumarkaramsetty@gmail.com",children:"venkatasandeepkumarkaramsetty@gmail.com"})]})}),Object(l.jsxs)("details",{onClick:function(){return a(!n)},style:{color:n?"limegreen":"crimson"},children:[Object(l.jsx)("h4",{children:"Mixed Berry Tart."}),Object(l.jsx)("h6",{children:"Raspberries, blueberries, and strawberries on top of a creamy filling served in a crispy tart."})]})]})})}n(50);var J=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),j=o[0],d=o[1],b=Object(c.useState)(""),u=Object(s.a)(b,2),h=u[0],O=u[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:+j,date:new Date(h)};e.onSaveExpenseData(n),d(""),O(""),i("")},children:[Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},value:a})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Amount"}),Object(l.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){d(e.target.value)}})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:h,onChange:function(e){O(e.target.value)}})]})]}),Object(l.jsxs)("div",{className:"new-expense__actions",children:[Object(l.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(l.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},U=(n(51),function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(l.jsxs)("div",{className:"new-expense",children:[!a&&Object(l.jsx)("button",{onClick:function(){i(!0)},children:"Add New Expense"}),a&&Object(l.jsx)(J,{onSaveExpenseData:function(t){var n=Object(x.a)(Object(x.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)},onCancel:function(){i(!1)}})]})});n(52),n(53);function W(e){var t="card "+e.className;return Object(l.jsx)("div",{className:t,children:e.children})}n(54);var z=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(l.jsxs)("div",{className:"expense-date",children:[Object(l.jsx)("div",{className:"expense-date__month",children:t}),Object(l.jsx)("div",{className:"expense-date__year",children:n}),Object(l.jsx)("div",{className:"expense-date__day",children:c})]})};n(55);var K=function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)(W,{className:"expense-item",children:[Object(l.jsx)(z,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[Object(l.jsx)("h2",{children:e.title}),Object(l.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},H=(n(56),function(e){return Object(l.jsx)("div",{className:"expenses-filter",children:Object(l.jsxs)("div",{className:"expenses-filter__control",children:[Object(l.jsx)("label",{children:"Filter by year"}),Object(l.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value),console.log(t.target.value)},children:[Object(l.jsx)("option",{value:"2022",children:"2022"}),Object(l.jsx)("option",{value:"2021",children:"2021"}),Object(l.jsx)("option",{value:"2020",children:"2020"}),Object(l.jsx)("option",{value:"2019",children:"2019"})]})]})})}),X=(n(57),function(e){return 0===e.items.length?Object(l.jsx)("h2",{className:"expeneses-list__fallback",children:"Found no expenses"}):Object(l.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(l.jsx)(K,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),q=n(19),Z=(n(58),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(l.jsxs)("div",{className:"chart-bar",children:[Object(l.jsx)("div",{className:"chart-bar__inner",children:Object(l.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(l.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),$=(n(59),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(h.a)(t));return Object(l.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(l.jsx)(Z,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),Q=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(q.a)(e.expenses);try{for(c.s();!(t=c.n()).done;){var a=t.value;n[a.date.getMonth()].value+=a.amount}}catch(i){c.e(i)}finally{c.f()}return Object(l.jsx)($,{dataPoints:n})},ee=function(e){var t=Object(c.useState)("2020"),n=Object(s.a)(t,2),a=n[0],i=n[1],r=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(l.jsx)("div",{children:Object(l.jsxs)(W,{className:"expenses",children:[Object(l.jsx)(H,{selected:a,onChangeFilter:function(e){i(e),console.log(a)}}),Object(l.jsx)(Q,{expenses:r}),Object(l.jsx)(X,{items:r})]})})},te=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var ne=function(){var e={value:0},t="counter/increment",n=function(){return{type:t}},a="ADD",i=function(e){return{type:a,payload:e}},r=Object(G.d)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,c=arguments.length>1?arguments[1]:void 0;return c.type===t?{value:n.value+1}:c.type===a?{value:n.value+c.payload}:n}));r.dispatch(n()),console.log(r),console.log(r.getState()),r.subscribe((function(){return console.log("SUBSCRIBER",r.getState())})),r.dispatch(n()),r.dispatch(i(100));var o=Object(G.a)({increment:n,add:i},r.dispatch);o.add(100),o.increment();var j=[n,i].map((function(e){return Object(G.c)(r.dispatch,e)})),d=Object(s.a)(j,2);d[0],d[1],console.log(r.getState());var b=Object(c.useState)(te),u=Object(s.a)(b,2),O=u[0],x=u[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)(R,{text:"Learnings",color:"white"})}),Object(l.jsx)(L,{}),Object(l.jsx)(U,{onAddExpense:function(e){x((function(t){return[e].concat(Object(h.a)(t))}))}}),Object(l.jsx)(ee,{items:O})]})};n(60);var ce=function(){var e=Object(c.useContext)(m),t=e.theme,n=e.setTheme;return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(R,{text:"Settings",color:"white"}),Object(l.jsx)(L,{}),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"ColorBox",children:Object(l.jsxs)("div",{style:{background:t?"green":"red"},children:["Application Color",Object(l.jsx)("div",{children:t?Object(l.jsx)("button",{onClick:function(){return n(!1)},children:"Logout"}):Object(l.jsx)("button",{onClick:function(){return n(!0)},children:"Login"})})]})}),Object(l.jsx)("div",{className:"FontBox",children:"Application font"}),Object(l.jsx)("div",{className:"LogoBox",children:"Application Logo"})]})]})]})},ae=function(e){var t={padding:10,margin:20,display:"inline-block",backgroundColor:e.bgColor,borderRadius:"50%",width:100,height:100,color:"white"};return Object(l.jsx)("div",{style:t,children:e.course})},ie=function(e){var t=e.table;return Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Course ID"}),Object(l.jsx)("th",{children:"Subject"}),Object(l.jsx)("th",{children:"Marks"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.id}),Object(l.jsx)("td",{children:e.Id}),Object(l.jsx)("td",{children:e.Name}),Object(l.jsxs)("td",{children:[e.Marks,"/100"]})]},e.id)}))})]})},re=[{id:1,Id:"CSC1803",Name:"Algorithms and Data Structures",Marks:70},{id:2,Id:"CSCI814",Name:"IT Project Management",Marks:63},{id:3,Id:"CSCI935",Name:"Computer Vision Algorithms and Systems",Marks:59},{id:4,Id:"CSIT826",Name:"Human Computer Interaction",Marks:73},{id:5,Id:"CSCI920",Name:"Contemporary Topics in Computer Science",Marks:65},{id:6,Id:"CSCI926",Name:"Software Testing and Analysis",Marks:69},{id:7,Id:"CSCI933",Name:"Machine Learning Algorithms and Applications",Marks:56},{id:8,Id:"CSIT940",Name:"Research Methodology",Marks:66},{id:9,Id:"CSCI924",Name:"Reasoning and Learning",Marks:54},{id:10,Id:"CSCI927",Name:"Service-Oriented Software Engineering",Marks:62},{id:11,Id:"CSCI946",Name:"Big Data Analytics",Marks:50},{id:12,Id:"CSCI992",Name:"Professional Project",Marks:81},{id:13,Id:"CSCI910",Name:"Software Requirements, Specifications and Formal Methods",Marks:82},{id:14,Id:"MTS9302",Name:"Corporate Network Management",Marks:75}];n(61);var se=function(){var e={users:[{id:1,name:"steve"},{id:2,name:"Eric"}],tasks:[{title:"file the TPS reports"},{title:"order more energy drinks"}]},t="ADD_USER",n=Object(G.b)({users:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.users,c=arguments.length>1?arguments[1]:void 0;return c.type===t?[].concat(Object(h.a)(n),[c.payload]):n},tasks:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.tasks,c=arguments.length>1?arguments[1]:void 0;return c.type===t?[].concat(Object(h.a)(n),[c.payload]):n}}),a=Object(G.d)(n,e);a.dispatch(function(e){return{type:"ADD_TASK",payload:e}}({title:"hello"})),console.log(a.getState());var i=[{id:"#1C89BF",course:"Primary"},{id:"#E94F37",course:"Bachelors"},{id:"#393E41",course:"Masters"},{id:"#A1D363",course:"Professional"}].map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)(ae,{course:e.course,bgColor:e.id},t)})})),r=Object(c.useState)([]),o=Object(s.a)(r,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){d(re)}),[j]),Object(l.jsxs)("div",{style:{textAlign:"center",display:"inline"},children:[Object(l.jsx)("hr",{}),Object(l.jsx)(R,{text:"EDUCATION",color:"white"}),Object(l.jsx)(L,{}),Object(l.jsx)("div",{className:"inline",children:i}),Object(l.jsx)(L,{}),Object(l.jsx)(ie,{table:j})]})};n(62);function le(){var e={textAlign:"center"};return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:e,children:Object(l.jsx)(R,{color:"white",text:"PERSONAL-PROFILE"})}),Object(l.jsx)(L,{}),Object(l.jsx)("p",{children:"To excel as a software developer through hard work, perseverance and innovation. To be part of a leading company where I can get opportunities to show my talent and enhance my skills. To meet company goals and objectives with zeal and passion."}),Object(l.jsx)(L,{}),Object(l.jsx)(R,{style:e,color:"white",text:"SKILLS"}),Object(l.jsxs)("section",{className:"wrapper",children:[Object(l.jsxs)("section",{className:"a",children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Programming Languages:"})," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Frame Works:"})," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Database:"})," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Development Environments:"})," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Web Technologies:"})," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:[Object(l.jsx)("strong",{children:"Version Control:"})," "]}),Object(l.jsx)("br",{})]}),Object(l.jsxs)("section",{className:"b",children:[Object(l.jsx)("p",{children:"PHP, JavaScript, C#, Python, Java, SAP ABAP, c++"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Laravel, Nodejs, Reactjs"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Mongodb, Sql"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"Visual Studio, php Storm, Docker, SAP"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"HTML/CSS, JavaScript"}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"git"})]})]})]})}n(79);var oe=n.p+"static/media/2999AC0220334860873_P.dc4efd25.jpg";function je(){return Object(l.jsx)("img",{src:oe,style:{width:150,height:150,borderRadius:75,padding:4}})}var de=n(34),be=n.n(de),ue=(n(64),function(e){var t=Object(c.useState)(new Date),n=Object(s.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(be()().format("MMMM Do YYYY, h:mm:ss a")),o=Object(s.a)(r,2),j=o[0],d=o[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){return i(new Date,d(be()().format("MMMM Do YYYY, h:mm:ss a")))}),1e3);return function(){return clearTimeout(e)}})),Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:".header-a",children:Object(l.jsx)(je,{})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"header-b",children:Object(l.jsxs)("center",{children:[Object(l.jsxs)("h1",{className:"name",children:["Karamsetty. ",e.name," Sandeep Kumar"]}),Object(l.jsxs)("div",{className:"profile-details-role",children:[Object(l.jsx)("span",{className:"profile-role-tagline",children:"Knack of building applications with front and back end"}),Object(l.jsx)("br",{}),Object(l.jsxs)("h6",{children:["Date : ",j]}),Object(l.jsx)("div",{className:"line-1"})]})]})}),Object(l.jsxs)("div",{className:"header-c",children:[Object(l.jsxs)("h2",{children:["Time : ",a.toLocaleTimeString()]}),Object(l.jsx)("button",{className:"button",children:" Hire Me "}),Object(l.jsx)("a",{href:"sandeep_Resume.pdf",download:"VenkataResume.pdf",children:Object(l.jsx)("button",{className:"button",children:"Download Resume"})})]})]})}),he=n(30),Oe=n(38),xe=n(39),me=n(16);n(65);function pe(){var e=[{id:1,title:"Personal Portfolio",link:"/",logo:Object(l.jsx)(Oe.a,{})},{id:2,title:"Education",link:"/education",logo:Object(l.jsx)(me.c,{})},{id:3,title:"ToDo-app",link:"/todo",logo:Object(l.jsx)(me.g,{})},{id:4,title:"Movies-app",link:"/movies",logo:Object(l.jsx)(me.b,{})},{id:5,title:"Contact Me",link:"/contactme",logo:Object(l.jsx)(me.e,{})},{id:6,title:"Notes App",link:"/notesapp",logo:Object(l.jsx)(xe.a,{})},{id:7,title:"Learning",link:"/learnings",logo:Object(l.jsx)(me.d,{})},{id:8,title:"Settings",link:"/settings",logo:Object(l.jsx)(me.f,{})},{id:9,title:"Counter-App",link:"/counterapp",logo:Object(l.jsx)(me.a,{})}].map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{children:Object(l.jsxs)(he.b,{to:e.link,children:[e.logo," \xa0",e.title]})})},t)}));return Object(l.jsx)("div",{id:"sidebar",className:"sidebar",children:Object(l.jsxs)("nav",{className:"round",children:[Object(l.jsx)("h3",{children:"__Apps & portfolio__"}),Object(l.jsx)(l.Fragment,{children:e})]})})}var ve=n(15),fe=(n(74),"INCREMENT"),ge="DECREMENT",Ce="SET",Se=function(e){return{type:Ce,payload:e}};var Ne=function(){var e=Object(ve.c)((function(e){return e.count})),t=Object(ve.b)(),n=Object(c.useState)(e),a=Object(s.a)(n,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){r(e)}),[e]),Object(l.jsx)("section",{className:"controls",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(Se(i))},children:[Object(l.jsx)("label",{htmlFor:"set-to",children:"Set Count"}),Object(l.jsx)("input",{id:"set-to",type:"number",value:i,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("input",{type:"submit"})]})})},ye=(n(75),{c:"Celsius",f:"Fahrenheit"}),ke=function(e){var t=e.temperature,n=e.scale;return Object(l.jsxs)("fieldset",{children:[Object(l.jsxs)("legend",{children:["Enter temperature in ",ye[n],":"]}),Object(l.jsx)("input",{type:"text",value:t,onChange:function(t){e.onTemperatureChange(t.target.value)}})]})};function _e(e){return e.celsius>=100?Object(l.jsx)("p",{children:"The water would boil."}):Object(l.jsx)("p",{children:"The water would not boil."})}function Ie(e){return 5*(e-32)/9}function we(e){return 9*e/5+32}function Ae(e,t){var n=parseFloat(e);if(Number.isNaN(n))return"";var c=t(n);return(Math.round(1e3*c)/1e3).toString()}var Me=function(){var e="",t="c",n=Object(c.useState)(e),a=Object(s.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(t),j=Object(s.a)(o,2),d=j[0],b=j[1],u="f"===d?Ae(i,Ie):i,h="c"===d?Ae(i,we):i;return Object(l.jsxs)("div",{children:[Object(l.jsx)(ke,{scale:"c",temperature:u,onTemperatureChange:function(e){r(e),b("c")}}),Object(l.jsx)(ke,{scale:"f",temperature:h,onTemperatureChange:function(e){r(e),b("f")}}),Object(l.jsx)(_e,{celsius:parseFloat(u)})]})},Te=function(){var e=Object(ve.c)((function(e){return e.count})),t=Object(ve.b)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)(R,{text:"Counter-App",color:"white"})}),Object(l.jsx)(L,{}),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)("div",{className:"a",children:Object(l.jsxs)("main",{className:"Counter",children:[Object(l.jsxs)("h1",{children:["Days Since Last ","Incident"]}),Object(l.jsx)("p",{className:"count",children:e}),Object(l.jsxs)("section",{className:"controls",children:[Object(l.jsx)("button",{onClick:function(){return t({type:fe})},children:"Increment"}),Object(l.jsx)("button",{onClick:function(){return t(Se(0))},children:"Reset"}),Object(l.jsx)("button",{onClick:function(){return t({type:ge})},children:"Decrement"})]}),Object(l.jsx)(Ne,{})]})}),Object(l.jsx)("div",{className:"b",children:Object(l.jsxs)("main",{className:"Counter",children:[Object(l.jsx)("h1",{children:"Temperature conversion App with Boiling Point"}),Object(l.jsx)(Me,{})]})})]})]})},De=(n(76),function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsx)("p",{children:Object(l.jsx)("small",{children:"@ 2022 Venkata Sandeep Kumar Karamsetty. All rights reserved."})})})});n(77);function Pe(e){var t=Object(c.useState)(!0),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(l.jsx)(m.Provider,{value:{theme:a,setTheme:i,message:"This is from the context"},children:e.children})}var Re=n(5);function Ee(){var e=[{id:1,title:"Personal Portfolio",path:"/",component:le},{id:2,title:"Education",path:"/education",component:se},{id:3,title:"ToDo-app",path:"/todo",component:V},{id:4,title:"Movies-app",path:"/movies",component:B},{id:5,title:"Contact Me",path:"/contactme",component:Y},{id:6,title:"Notes App",path:"/notesapp",component:g},{id:7,title:"Learning",path:"/learnings",component:ne},{id:8,title:"Settings",path:"/settings",component:ce},{id:9,title:"Counter-App",path:"/counterapp",component:Te}];function t(e){var t=e.item;return 1===t.id?Object(l.jsx)(Re.a,{exact:!0,path:t.path,component:t.component}):Object(l.jsx)(Re.a,{path:t.path,component:t.component})}return Object(l.jsx)(he.a,{children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(ue,{className:"header",name:"Venkata"}),Object(l.jsxs)(Pe,{children:[Object(l.jsx)(pe,{className:"sidebar"}),Object(l.jsx)("div",{className:"content",children:e.map((function(e){return Object(l.jsx)(t,{item:e},e.id)}))})]}),Object(l.jsx)(De,{})]})})}var Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))},Fe={count:0},Be=(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(G.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;return t.type===fe?{count:e.count+1}:t.type===ge?{count:e.count-1}:t.type===Ce?{count:parseInt(t.payload,10)}:e})));r.a.render(Object(l.jsx)(ve.a,{store:Be,children:Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(Ee,{})})}),document.getElementById("root")),Le()}},[[78,1,2]]]);
//# sourceMappingURL=main.bec397fd.chunk.js.map