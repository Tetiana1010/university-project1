(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),o=(n(26),n(8)),i=n(7),l=n.n(i),u=n(10),j=n(35),d=n(43),b=n(42),h=n(41),p=n(36);function m(e){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,a=t.password,e.next=3,fetch("/api/auth/login",{method:"POST",body:JSON.stringify({email:n,password:a}),headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("HTTP status "+e.status);return e.json()})).catch((function(e){console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.keyword,e.next=3,fetch("/api/homepage/getArtworks/".concat(n),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){if(!e.ok)throw new Error("HTTP status "+e.status);return e.json()})).catch((function(e){console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=n(3);var v=function(e){var t=e.onLoginSuccessful,n=Object(a.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),O=Object(o.a)(i,2),f=O[0],x=O[1],v=Object(a.useState)(!1),w=Object(o.a)(v,2),y=w[0],S=w[1],k=function(){var e=Object(u.a)(l.a.mark((function e(n){var a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),S(!1),e.next=4,m({email:c,password:f});case 4:(a=e.sent)?(r=a.name,s=a.token,localStorage.setItem("name",r),localStorage.setItem("token",s),t()):S(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(j.a,{children:Object(g.jsxs)(d.a,{className:"mt-5",children:[Object(g.jsx)(d.a.Header,{as:"h1",children:"Login"}),Object(g.jsx)(d.a.Body,{children:Object(g.jsxs)(b.a,{className:"w-100",onSubmit:k,children:[Object(g.jsxs)(b.a.Group,{controlId:"formBasicEmail",children:[Object(g.jsx)(b.a.Label,{children:"Email address"}),Object(g.jsx)(b.a.Control,{type:"email",placeholder:"Enter email",onChange:function(e){return s(e.target.value)},value:c}),Object(g.jsx)(b.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(g.jsxs)(b.a.Group,{controlId:"formBasicPassword",children:[Object(g.jsx)(b.a.Label,{children:"Password"}),Object(g.jsx)(b.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return x(e.target.value)},value:f})]}),y&&Object(g.jsx)(h.a,{variant:"danger",children:"The email address and password you entered don't match any account. Please try again."}),Object(g.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})]})})},w=n(37),y=n(38),S=n(39),k=n(40);var T=function(e){var t=e.onLogout,n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(!1),m=Object(o.a)(i,2),O=m[0],x=m[1],v=Object(a.useState)(""),T=Object(o.a)(v,2),C=T[0],N=T[1],I=Object(a.useState)([]),L=Object(o.a)(I,2),P=L[0],E=L[1],G=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s(!0),e.next=4,f({keyword:C});case 4:n=e.sent,E(n),x(!n||!n.length),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(j.a,{fluid:!0,children:[Object(g.jsx)(w.a,{className:"mt-2 mb-2 justify-content-end",noGutters:!0,children:Object(g.jsx)(p.a,{variant:"outline-danger",onClick:t,children:"Log out"})}),Object(g.jsx)(w.a,{noGutters:!0,children:Object(g.jsx)("h1",{children:"Welcome!"})}),Object(g.jsx)(w.a,{className:"mt-2",noGutters:!0,children:Object(g.jsx)("h6",{children:"Enter one or multiple keywords below to search for artworks in the Art Institute of Chicago."})}),Object(g.jsx)(w.a,{noGutters:!0,children:Object(g.jsx)(b.a,{className:"w-100 mb-5",onSubmit:G,children:Object(g.jsxs)(y.a,{children:[Object(g.jsx)(b.a.Control,{type:"text",placeholder:"e.g. Monet, O'Keeffe, Ancient Greek...",onChange:function(e){N(e.target.value)},value:C}),Object(g.jsx)(y.a.Prepend,{children:Object(g.jsx)(p.a,{variant:"outline-primary",disabled:!C,type:"submit",children:"Search artworks"})})]})})}),c&&Object(g.jsx)(w.a,{className:"justify-content-center mb-5",children:Object(g.jsx)(S.a,{animation:"border",variant:"primary"})}),O&&!c?Object(g.jsx)(h.a,{variant:"info",children:"No results were found for the entered keyword/s."}):Object(g.jsx)(k.a,{children:P.map((function(e,t){var n=e.id,a=e.title,r=e.image_url,c=e.artist_display,s=e.date_display,o=e.medium_display,i=e.place_of_origin;return Object(g.jsxs)(d.a,{children:[Object(g.jsx)("a",{href:r,target:"_blank",rel:"noreferrer","aria-current":"true",children:Object(g.jsx)(d.a.Img,{variant:"top",src:r})}),Object(g.jsxs)(d.a.Body,{children:[Object(g.jsx)(d.a.Title,{children:a}),Object(g.jsxs)(d.a.Text,{className:"text-muted",style:{whiteSpace:"pre-line"},children:[i,", ",s,Object(g.jsx)("br",{}),Object(g.jsx)("small",{className:"text-muted",children:c})]}),Object(g.jsx)(d.a.Text,{children:Object(g.jsx)("small",{className:"text-muted",children:o})})]})]},"artwork-".concat(n))}))})]})};var C=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){localStorage.getItem("token")?r(!0):r(!1)}),[]),n&&Object(g.jsx)(T,{onLogout:function(){localStorage.removeItem("name"),localStorage.removeItem("token"),r(!1)}})||Object(g.jsx)(v,{onLoginSuccessful:function(){r(!0)}})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};n(32);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),N()}},[[33,1,2]]]);
//# sourceMappingURL=main.458d0970.chunk.js.map