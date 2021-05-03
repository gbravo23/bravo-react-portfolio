(this["webpackJsonpbravo-react-portfolio"]=this["webpackJsonpbravo-react-portfolio"]||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"name":"Back2work","srcImg":"assets/images/back2work.png","srcAlt":" Back2work homepage screenshot","githubLink":"//github.com/gbravo23/back2work","appLink":"//vllback2work.herokuapp.com/","skills":"MySql/Sequelize/Handlebars","id":"1"},{"name":"Password Generator","srcImg":"assets/images/passwordgenerator.png","srcAlt":"Password generator screenshot","githubLink":"//github.com/gbravo23/georgespasswordgenerator","appLink":"//gbravo23.github.io/georgespasswordgenerator/","skills":"JavaScript","id":"2"},{"name":"Run Buddy","srcImg":"assets/images/runbuddyss.png","srcAlt":"Screenshot of Run Buddy homepage","githubLink":"//github.com/gbravo23/run-buddy","appLink":"//gbravo23.github.io/run-buddy/","skills":"HTML/CSS","id":"3"},{"name":"Cinema Search","srcImg":"assets/images/cinemasearch.png","srcAlt":"Screenshot of Cinema Search homepage","githubLink":"//github.com/Govepitr/GroupProject1","appLink":"//govepitr.github.io/GroupProject1/","skills":"JS/APIs/Materialize","id":"4"},{"name":"Workday Scheduler","srcImg":"assets/images/workdayscheduler.png","srcAlt":"Screenshot of Workday Scheduler\'s home page","githubLink":"//github.com/gbravo23/Bravo-Work-Scheduler","appLink":"//gbravo23.github.io/Bravo-Work-Scheduler/","skills":"JQuery","id":"5"},{"name":"Horiseon","srcImg":"assets/images/horiseon.png","srcAlt":"Screenshot of Horiseon homepage","githubLink":"//github.com/gbravo23/challenge-1","appLink":"//gbravo23.github.io/challenge-1/","skills":"HTML/CSS","id":"6"}]')},,,,,,function(e,t){},,,,,,function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/gbpic.e330f488.jpg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(7),r=a.n(c),n=a(3),i=a(0);var o=function(e){return Object(i.jsxs)("header",{className:"portfolio-header",children:[Object(i.jsx)("div",{className:"developer",children:"George Bravo"}),Object(i.jsx)("ul",{className:"nav",children:["Portfolio","Contact","Resume","About"].map((function(t){return Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link-active":"nav-link",children:t})},t)}))})]})},l=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{className:"bio-pic",src:a(14).default,alt:"George Bravo Headshot"}),Object(i.jsx)("p",{children:"Hello, I'm George and I am an aspiring Full Stack Developer. I enjoy learning and am always looking to perfect my skills whether it be writing code, reading documentation and/or watching tutorials. My goal is to begin my career as a full stack developer and to continue to learn new concepts."}),Object(i.jsx)("p",{children:"Please feel free to view my resume or send me a message."})]})},j=a(4),b=a(6);var u=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(n.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),o=Object(n.a)(r,2),l=o[0],u=o[1],d=a.name,h=a.email,m=a.message,g=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"please enter a valid email")}else e.target.value.length?u(""):u("".concat(e.target.name," is required"));l||c(Object(b.a)(Object(b.a)({},a),{},Object(j.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("section",{children:[Object(i.jsx)("h1",{children:"Contact me"}),Object(i.jsxs)("form",{className:"contact-form",onSubmit:function(e){e.preventDefault(),l||console.log("Submit Form",a)},children:[Object(i.jsxs)("div",{className:"contact-field",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(i.jsx)("input",{className:"input-field",type:"text",name:"name",defaultValue:d,onMouseOut:g})]}),Object(i.jsxs)("div",{className:"contact-field",children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(i.jsx)("input",{className:"input-field",type:"email",name:"email",defaultValue:h,onMouseOut:g})]}),Object(i.jsxs)("div",{className:"contact-field",children:[Object(i.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(i.jsx)("textarea",{className:"input-field",name:"message",rows:"5",defaultValue:m,onMouseOut:g})]}),Object(i.jsx)("div",{children:l&&Object(i.jsx)("p",{className:"error-text",children:l})}),Object(i.jsx)("button",{className:"btn-submit",type:"submit",children:"Submit"})]})]})},d=function(e){var t=e.text,a=e.onClick;return Object(i.jsx)("button",{className:"btn",onClick:a,children:t})},h=a(2),m=function(){var e=Object(s.useState)(0),t=Object(n.a)(e,2),a=t[0],c=t[1],r=h.length-1;return Object(i.jsxs)("section",{children:[Object(i.jsx)("h1",{className:"project-title",children:h[a].name}),Object(i.jsxs)("ul",{className:"horizontal-list project-links",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)(d,{text:"Next",onClick:function(){return c(a===r?0:a+1)},id:"next-btn"})," "]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:h[a].appLink,children:"Open App"})," "]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:h[a].githubLink,children:"View on Github"})," "]})]}),Object(i.jsx)("div",{className:"flex-project"}),Object(i.jsxs)("div",{className:"project-info",children:[Object(i.jsx)("h3",{children:h[a].skills}),Object(i.jsx)("a",{href:h[a].appLink,children:Object(i.jsx)("img",{className:"project-img",src:h[a].srcImg,alt:h[a].alt})})]})]})},g=function(){return Object(i.jsx)("article",{className:"flexbox-container footer",children:Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:"horizontal-list",children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("a",{href:"https://github.com/gbravo23",children:"GitHub"})," "]}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/bravogeorge/",children:"LinkedIn"})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.facebook.com/george.bravo.92/",children:"Facebook"})})]})})})},p=a(8),O=a.n(p);var x=function(){var e=Object(s.useState)("Home"),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{currentPage:a,handlePageChange:c}),"x```",Object(i.jsx)("hr",{}),Object(i.jsx)("div",{className:"page-container",children:function(){switch(a){case"About":return Object(i.jsx)(l,{});case"Portfolio":return Object(i.jsx)(m,{});case"Contact":return Object(i.jsx)(u,{});case"Resume":return Object(i.jsx)(O.a,{});default:return Object(i.jsx)(l,{})}}()}),Object(i.jsx)("div",{children:Object(i.jsx)(g,{})})]})},f=function(){return Object(i.jsx)(x,{})};a(15);r.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.555c5545.chunk.js.map