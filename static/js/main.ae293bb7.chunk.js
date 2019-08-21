(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],{133:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),o=t.n(r),c=(t(92),t(26)),s=t(27),i=t(29),m=t(28),d=t(30),u=(t(93),t(139)),p=t(140),E=t(141),h=t(78),f=t.n(h),b=t(79),v=t.n(b),g=t(80),k=t.n(g),y=t(81),w=t(83),N=t.n(w),j=t(17),x=t(134),I=t(135),S=t(142),C=t(136),O=t(137),T=t(138),z=t(15),_=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(j.a)(t)),t.state={isOpen:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(x.a,{id:"navbar",fixed:"top",color:"rgb(0, 0, 0)",dark:!0,expand:"md"},l.a.createElement(I.a,{onClick:this.toggle}),l.a.createElement(S.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(C.a,{className:"ml-auto"},l.a.createElement(O.a,null,l.a.createElement(z.Link,{activeClass:"active",className:"home",to:"intro",spy:!0,smooth:!0,duration:500},l.a.createElement(T.a,{className:"navlink",href:"/"},"Home"))),l.a.createElement(O.a,null,l.a.createElement(z.Link,{activeClass:"active",className:"about",to:"about",spy:!0,smooth:!0,duration:500},l.a.createElement(T.a,{className:"navlink",href:"/"},"About"))),l.a.createElement(O.a,null,l.a.createElement(z.Link,{activeClass:"active",className:"projects",to:"projects",spy:!0,smooth:!0,duration:500},l.a.createElement(T.a,{className:"navlink",href:"/"},"Projects"))),l.a.createElement(O.a,null,l.a.createElement(z.Link,{activeClass:"active",className:"contact",to:"contact",spy:!0,smooth:!0,duration:500},l.a.createElement(T.a,{className:"navlink",href:"/"},"Contact"))),l.a.createElement(O.a,null)))))}}]),a}(n.Component),A=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){z.Events.scrollEvent.register("begin",function(e,a){console.log("begin",arguments)}),z.Events.scrollEvent.register("end",function(e,a){console.log("end",arguments)}),z.scrollSpy.update()}},{key:"componentWillUnmount",value:function(){z.Events.scrollEvent.remove("begin"),z.Events.scrollEvent.remove("end")}},{key:"render",value:function(){return l.a.createElement("div",{id:"content"},l.a.createElement("div",{id:"landing-page",className:"info"},l.a.createElement("div",{id:"intro"},l.a.createElement(u.a,{style:{width:"100%"}},l.a.createElement(_,null)),l.a.createElement(u.a,null,l.a.createElement("div",{style:{margin:"auto",color:"white"}},l.a.createElement("h1",{style:{fontSize:"4em"}},"Hi, my name's Amar."),l.a.createElement("p",{style:{fontSize:"20px",fontStyle:"italic"}},"Full Stack Developer. Problem Solver. Tech Enthusiast."),l.a.createElement("div",{id:"icons"},l.a.createElement("a",{className:"social-links",href:"https://github.com/arampers94",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github fa-2x"}))," ",l.a.createElement("a",{className:"social-links",href:"https://www.linkedin.com/in/amar-rampersaud/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))," ",l.a.createElement("a",{className:"social-links",href:"mailto:arampers94@gmail.com"},l.a.createElement("i",{className:"far fa-envelope fa-2x"}))))),l.a.createElement(u.a,null,l.a.createElement("div",{id:"scroll-prompt-wrapper"},l.a.createElement(z.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:500},l.a.createElement("a",{id:"scroll-prompt",href:"/"},l.a.createElement("i",{class:"fas fa-chevron-down fa-4x"}))))))),l.a.createElement(z.Element,{name:"about",className:"element"},l.a.createElement("div",{id:"about-container",className:"project-block"},l.a.createElement(u.a,{style:{paddingBottom:"50px"}},l.a.createElement(p.a,null,l.a.createElement("h1",null,"An Exceptional Team Begins With its Teammates."),l.a.createElement("hr",null))),l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"about-col"},l.a.createElement("h5",null,"Who am I?"),l.a.createElement("p",null,"A full stack developer, passionate about code and always looking to improve my craft however I can. I enjoy learning new technologies on my own as well as from others. I am also confident in my ability to quickly translate new skills to production.")),l.a.createElement(p.a,{className:"about-col"},l.a.createElement("h5",null,"Why me?"),l.a.createElement("p",null,"I'm a great team player. In addition to being a motivated self-starter, adaptable, and a fast-learner, I am also friendly, have excellent communication skills, am open to new ideas, and work well independently as well as collaboratively.")),l.a.createElement(p.a,{className:"about-col"},l.a.createElement("h5",null,"What am I looking for?"),l.a.createElement("p",null,"The opportunity to apply my problem-solving and web dev skills to solve some of the industry's toughest challenges in order to increase efficiency and reduce costs, work alongside creative, talented, and motivated individuals of all backgrounds, and continue improving my skills."))))),l.a.createElement(z.Element,{name:"projects",className:"element"}),l.a.createElement(z.Element,{name:"projets-inner",className:"element"},l.a.createElement("div",{className:"projects-wrapper"},l.a.createElement("div",{id:"project-section-title"},l.a.createElement("h1",null,"Some of my recent work"),l.a.createElement("hr",null)),l.a.createElement("div",{id:"project-1",className:"project-block"},l.a.createElement(u.a,null,l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"media-block"},l.a.createElement("img",{style:{width:"100%"},src:f.a,alt:"First project"}))),l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"project-desc"},l.a.createElement("h1",null,"Context"),l.a.createElement("p",null,"A personal project I built to demonstrate my skill and ability to work across the full stack from front-end design to back-end data management. It works the same way you would expect a typical blog site to - users have the ability to sign up, create, rate, and comment on posts."),l.a.createElement(E.a,{outline:!0,color:"primary",href:"https://context-fceab.firebaseapp.com/",target:"_blank",rel:"noopener noreferrer"},"View")," ",l.a.createElement(E.a,{outline:!0,color:"success",href:"https://github.com/arampers94/Context",target:"_blank",rel:"noopener noreferrer"},"Source")," ")))),l.a.createElement("div",{id:"project-2",className:"project-block"},l.a.createElement(u.a,null,l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"project-desc"},l.a.createElement("h1",null,"Capture"),l.a.createElement("p",null,"This is one of the more fun projects I've had the opportunity to work on. Built with React Native, this simple cross-platform smartphone app allows users to create, update, delete notes, and set reminders. It also features an experience bar and a level up system as an incentive for the user to keep using the app."),l.a.createElement(E.a,{outline:!0,color:"success",href:"https://github.com/mouthwash/Capture",target:"_blank",rel:"noopener noreferrer"},"Source")," ")),l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"media-block",id:"capture-gif"},l.a.createElement("img",{style:{width:"65%"},src:v.a,alt:"Second project"}))))),l.a.createElement("div",{id:"project-3",className:"project-block"},l.a.createElement(u.a,null,l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"media-block",id:"robot-video"},l.a.createElement(y.Player,{playsInline:!0,src:k.a,className:"media-block"}))),l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"project-desc"},l.a.createElement("h1",null,"Gesture Controlled Robot"),l.a.createElement("p",null,l.a.createElement("em",null,"I built an actual remote controlled bot, how cool is that!? "),"That's exactly what I thought once I finally got this one up and running. As the name suggests, the bot responds to gestures given by the remote. The bot and remote communicate through Arduino microprocessors. Check it out in action."),l.a.createElement(E.a,{outline:!0,color:"success",href:"https://github.com/arampers94/gesture-controlled-robot",target:"_blank",rel:"noopener noreferrer"},"Source")," ",l.a.createElement(E.a,{outline:!0,color:"info",href:"https://www.arduino.cc/en/Guide/Introduction",target:"_blank",rel:"noopener noreferrer"},"What is Arduino?")," ")))),l.a.createElement("div",{id:"project-4",className:"project-block"},l.a.createElement(u.a,null,l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"project-desc"},l.a.createElement("h1",null,"This Portfolio"),l.a.createElement("p",null,"This site is also one of my projects! I built it myself with HTML, CSS, JS, and React. The design is simple and intuitive, making it easy to find the important stuff and a pleasure to read. The source code is available on my Github page."),l.a.createElement(E.a,{outline:!0,color:"success",href:"https://github.com/arampers94/Portfolio",target:"_blank",rel:"noopener noreferrer"},"Source")," ")),l.a.createElement(p.a,{sm:"12",md:{size:6}},l.a.createElement("div",{className:"media-block"},l.a.createElement("img",{style:{width:"100%"},src:N.a,alt:"Second project"}))))))),l.a.createElement(z.Element,{name:"contact",className:"element"},l.a.createElement("div",{id:"contact-info-section",className:"project-block"},l.a.createElement(u.a,null,l.a.createElement(p.a,null,l.a.createElement("h1",null,"Sound good? Let's get to work."),l.a.createElement("p",null,"Connect with me on LinkedIn or send an email."),l.a.createElement("a",{className:"social-links",href:"https://www.linkedin.com/in/amar-rampersaud/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))," ",l.a.createElement("a",{className:"social-links",href:"mailto:arampers94@gmail.com"},l.a.createElement("i",{class:"far fa-envelope fa-2x"})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(132);o.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,a,t){e.exports=t.p+"static/media/project-1.12f3c1b8.png"},79:function(e,a,t){e.exports=t.p+"static/media/capture.fdc4d169.gif"},80:function(e,a,t){e.exports=t.p+"static/media/robot.2244ba7c.MOV"},83:function(e,a,t){e.exports=t.p+"static/media/portfolio-landing-page.73e7cf23.png"},87:function(e,a,t){e.exports=t(133)},92:function(e,a,t){},93:function(e,a,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.ae293bb7.chunk.js.map