(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(27)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),o=(n(15),n(4)),u=n(5),m=n(1),i=(n(17),function(e){var t=e.charge,n=e.handleCharge,a=e.amount,r=e.handleAmount,l=e.handleSumbit,o=e.edit;return c.a.createElement("form",{onSubmit:l},c.a.createElement("div",{className:"form-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"expense"},"\uc9c0\ucd9c \ud56d\ubaa9"),c.a.createElement("input",{type:"text",className:"form-control",id:"charge",name:"charge",placeholder:"\uc608) \ub80c\ud2b8\ube44",value:t,onChange:n})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"expense"},"\ube44\uc6a9"),c.a.createElement("input",{type:"number",className:"form-control",id:"amount",name:"amount",placeholder:"\uc608) 100",value:a,onChange:r}))),c.a.createElement("button",{type:"submit",className:"btn"},o?"\uc218\uc815":"\uc81c\ucd9c"))}),s=(n(19),n(21),function(e){var t=e.expense,n=e.handleDelete,a=e.handleEdit;return c.a.createElement("li",{className:"item"},c.a.createElement("div",{className:"info"},c.a.createElement("span",{className:"expense"},t.charge),c.a.createElement("span",{className:"amount"},t.amount,"\uc6d0")),c.a.createElement("div",null,c.a.createElement("button",{className:"edit-btn",onClick:function(){return a(t.id)}},"\uc218\uc815"),c.a.createElement("button",{className:"clear-btn",onClick:function(){return n(t.id)}},"\uc0ad\uc81c")))}),d=(n(23),function(e){var t=e.expenses,n=e.handleDelete,a=e.handleEdit,r=e.clearItems;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list"},t.map(function(e){return c.a.createElement(s,{expense:e,key:e.id,handleDelete:n,handleEdit:a})})),t.length>0&&c.a.createElement("button",{className:"btn",onClick:r},"\ubaa9\ub85d \uc9c0\uc6b0\uae30"))});n(25);function f(e){var t=e.type,n=e.text;return c.a.createElement("div",{className:"alert alert-".concat(t)},n)}var h=function(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(0),s=Object(m.a)(l,2),h=s[0],p=s[1],E=Object(a.useState)([{id:1,charge:"\ub80c\ud2b8\ube44",amount:1600},{id:2,charge:"\uad50\ud1b5\ube44",amount:400}]),b=Object(m.a)(E,2),g=b[0],v=b[1],y=Object(a.useState)({show:!1}),x=Object(m.a)(y,2),N=x[0],j=x[1],w=Object(a.useState)(!1),O=Object(m.a)(w,2),S=O[0],C=O[1],k=Object(a.useState)(""),D=Object(m.a)(k,2),F=D[0],I=D[1],T=function(e){var t=e.type,n=e.text;j({show:!0,type:t,text:n}),setTimeout(function(){setTimeout({show:!1})},7e3)};return c.a.createElement("div",null,c.a.createElement("main",{className:"main-container"},N.show?c.a.createElement(f,{type:N.type,text:N.text}):null,c.a.createElement("h1",null,"\uc608\uc0b0 \uacc4\uc0b0\uae30"),c.a.createElement("div",{style:{width:"100%",background:"white",padding:"1rem"}},c.a.createElement(i,{charge:n,handleCharge:function(e){r(e.target.value)},amount:h,handleAmount:function(e){var t=e.target.valueAsNumber;p(t)},handleSumbit:function(e){if(e.preventDefault(),""!==n&&h>0){if(S){var t=g.map(function(e){return e.id===F?Object(u.a)({},e,{charge:n,amount:h}):e});v(t),C(!1),T({type:"success",text:"\uc544\uc774\ud15c\uc774 \uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})}else{var a={id:crypto.randomUUID(),charge:n,amount:h},c=[].concat(Object(o.a)(g),[a]);v(c)}r(""),p(0),T({type:"success",text:"\uc544\uc774\ud15c\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})}else console.log("error"),T({type:"danger",text:"charge\ub294 \ube48 \uac12\uc77c \uc218\ub3c4 \uc788\uc73c\uba70 amount \uac12\uc740 0\ubcf4\ub2e4 \ucee4\uc57c \ud569\ub2c8\ub2e4."})},edit:S})),c.a.createElement("div",{style:{width:"100%",background:"white",padding:"1rem"}},c.a.createElement(d,{expenses:g,handleDelete:function(e){var t=g.filter(function(t){return t.id!==e});v(t)},handleEdit:function(e){var t=g.find(function(t){return t.id===e}),n=t.charge,a=t.amount;r(n),p(a),C(!0),I(e)},clearItems:function(){v([])}})),c.a.createElement("div",{style:{display:"flex",justifyContent:"end",marginTop:"1rem"}},c.a.createElement("p",{style:{fontSize:"2rem"}},"\ucd1d\uc9c0\ucd9c :",c.a.createElement("span",null,g.reduce(function(e,t){return e+t.amount},0),"\uc6d0")))))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,28)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null))),p()}],[[6,3,2]]]);
//# sourceMappingURL=main.4d3d37bf.chunk.js.map