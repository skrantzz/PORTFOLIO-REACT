(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{17:function(e,t,a){},29:function(e){e.exports=JSON.parse('[{"link":"https://planthood.herokuapp.com/","image":"./assets/planthood.png","title":"Planthood"},{"link":"https://skrantzz.github.io/02_04_HW/","image":"./assets/planner.png","title":"Daily Planner"},{"link":"https://protected-sierra-06049.herokuapp.com/","image":"./assets/bookclub.png","title":"QT Book Club"},{"link":"https://brew-app.github.io/BREWLOVE-APP/","image":"./assets/brewlove.png","title":"BREWLOVE"},{"link":"https://skrantzz.github.io/01_18_HW/","image":"./assets/pwdgen.png","title":"Password Generator"},{"link":"https://skrantzz.github.io/01_27_HW/","image":"./assets/codingquiz.png","title":"Coding Quiz"},{"link":"https://quiet-stream-23211.herokuapp.com/","image":"./assets/notetaker.png","title":"Note Taker"},{"link":"https://unicorn-springs.herokuapp.com/","image":"./assets/empdir.png","title":"Employee Directory"}]')},34:function(e,t,a){e.exports=a.p+"static/media/logo.f92bfbfb.png"},38:function(e,t,a){e.exports=a(69)},43:function(e,t,a){},46:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),o=a.n(r),c=(a(43),a(8)),i=a(1),s=a(28),m=a(11);s.a.add(m.c,m.a,m.b);a(17),a(46);var u=function(e){return l.a.createElement("a",{href:e.link},l.a.createElement("div",{className:"card mb-3 align-items-center"},l.a.createElement("div",{className:"card-body hvr-outline-out"},l.a.createElement("div",{className:"project-title"},e.title),l.a.createElement("div",{className:"project-image"},l.a.createElement("img",{src:e.image,alt:"Project"})))," "))},d=a(29);var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container techStack"},l.a.createElement("h2",null,"TECH STACK:"),"MongoDB, Express.js, React, Node, MySQL, HTML/CSS, JavaScript, Material UI, Git, Heroku"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-4"},d.map((function(e){return l.a.createElement("div",{className:"col-md-3 mt-3 mb-3"},l.a.createElement(u,{link:e.link,image:e.image,title:e.title,onClick:e.link}))})))))};var g=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"sydney krantz is: she/her, an image maker, artist, problem-solver, founder of ",l.a.createElement("b",null,"creative species"),", and a full-stack developer. she hails from northern nj, and resides in los angeles, where she somehow survives daily life despite her avocado allergy. she graduated massachusetts college of art + design with a bfa in photography and is excited for new challenges.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"say hi: "),l.a.createElement("a",{href:"mailto:sydney@skrantz.com"},"hi@skrantz.com")))},h=a(30),E=a(31),v=a(37),f=a(35),b=a(32),k=a.n(b),y=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",message:""},n}return Object(E.a)(a,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=document.getElementById("name").value,n=document.getElementById("email").value,l=document.getElementById("message").value;k()({method:"POST",url:"http://localhost:3002/send",data:{name:a,email:n,messsage:l}}).then((function(e){"success"===e.data.msg?(alert("Message Sent."),t.resetForm()):"fail"===e.data.msg&&alert("Message failed to send.")}))}},{key:"resetForm",value:function(){document.getElementById("contact-form").reset()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit.bind(this),method:"POST"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"message"},"Message"),l.a.createElement("textarea",{className:"form-control",rows:"5",id:"message"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}},{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){}}]),a}(l.a.Component),N=a(36);a(63);var w=function(){var e=Object(n.useState)(1),t=Object(N.a)(e,2),a=t[0],r=t[1];return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light sticky-top align-items-right"},l.a.createElement("img",{className:"logo",src:"./assets/SKlogo.png",alt:"logo"}),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/",onClick:function(){return r(1)},className:1===a?"nav-link active1":"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/about",onClick:function(){return r(2)},className:2===a?"nav-link active1":"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(c.b,{to:"/contact",onClick:function(){return r(3)},className:3===a?"nav-link active1":"nav-link"},"Contact"))))},S=a(34),x=a.n(S);a(68);var z=function(){return l.a.createElement("div",{className:"footer row justify-content-center"},l.a.createElement("div",{className:"col-md-5 text-center"},l.a.createElement("a",{href:"https://github.com/skrantzz"},"GitHub"),"|",l.a.createElement("a",{href:"https://www.linkedin.com/in/sydney-krantz/"},"LinkedIn"),"|",l.a.createElement("a",{href:"https://www.instagram.com/seeeyudddd/"},"IG"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("img",{className:"footerLogo",src:x.a})))};var C=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(i.a,{exact:!0,path:"/",component:p}),l.a.createElement(i.a,{exact:!0,path:"/Portfolio",component:p}),l.a.createElement(i.a,{exact:!0,path:"/about",component:g}),l.a.createElement(i.a,{exact:!0,path:"/contact",component:y})),l.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.cb7e399e.chunk.js.map