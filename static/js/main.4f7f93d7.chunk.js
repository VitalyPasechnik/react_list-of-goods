(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(8),o=n.n(s),r=n(3),c=n(4),a=n(6),i=n(5),l=n(1),u=n.n(l),b=(n(13),n(2)),h=(n(14),n(0)),d=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={goods:Object(b.a)(t.props.goods)},t.reverse=function(){t.setState((function(t){return{goods:Object(b.a)(t.goods).reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){return{goods:Object(b.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(b.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.reset=function(){t.setState({goods:t.props.goods})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.goods;return Object(h.jsxs)("p",{className:"Goods-field",children:[Object(h.jsx)("button",{type:"button",className:"btn",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"btn",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"btn",onClick:this.sortByLength,children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:"btn",onClick:this.reset,children:"Reset"}),Object(h.jsx)("ul",{className:"Good-list",children:t.map((function(t){return Object(h.jsx)("li",{className:"Good",children:t},t)}))})]})}}]),n}(u.a.Component),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={start:!1},t.showList=function(){t.setState((function(t){return{start:!t.start}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state.start;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),t&&Object(h.jsx)(d,{goods:j}),!1===t&&Object(h.jsx)("button",{type:"button",className:"btn-main",onClick:this.showList,children:"Start"})]})}}]),n}(u.a.Component);o.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4f7f93d7.chunk.js.map