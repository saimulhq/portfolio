(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{111:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),o=a.n(r),c=(a(111),a(38)),s=a(12),l=a(161),d=a(35),j=a(162),b=a(163),m=a(164),h=a(165),p=a(87),u=a.n(p),x=a(168),g=a(93),O=a(169),f=a(170),v=a(166),y=a(29),k=a(78),w=a.n(k),S=a(83),C=a.n(S),N=a(84),P=a.n(N),I=a(86),T=a.n(I),D=a(85),M=a.n(D),B=a(2),F=[{title:"Home",pageUrl:"/",icon:Object(B.jsx)(w.a,{})},{title:"Work Experiences",pageUrl:"/work",icon:Object(B.jsx)(C.a,{})},{title:"Skills",pageUrl:"/skills",icon:Object(B.jsx)(P.a,{})},{title:"Projects",pageUrl:"/projects",icon:Object(B.jsx)(M.a,{})},{title:"Contact",pageUrl:"/contact",icon:Object(B.jsx)(T.a,{})}],J=Object(l.a)((function(e){return{root:{flexGrow:1,backgroundColor:"#646d8f",border:"none",boxShadow:"none"},menuButton:{marginRight:e.spacing(2)},link:{textDecoration:"none"},listItemIcon:{minWidth:"30px"},button:{color:"#f5f5f5"}}})),E=function(){var e=Object(s.f)(),t=J(),a=Object(n.useState)(null),i=Object(c.a)(a,2),r=i[0],o=i[1],l=Boolean(r),p=Object(d.a)(),k=Object(j.a)(p.breakpoints.down("xs"));return Object(B.jsx)("div",{className:t.root,children:Object(B.jsx)(b.a,{position:"static",className:t.root,children:Object(B.jsxs)(m.a,{children:[k?Object(B.jsx)(h.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){o(e.currentTarget)},children:Object(B.jsx)(u.a,{})}):Object(B.jsx)("div",{children:F.map((function(e){return Object(B.jsx)(y.b,{to:e.pageUrl,className:t.link,children:Object(B.jsx)(v.a,{className:t.button,startIcon:e.icon,children:e.title})},e.title)}))}),Object(B.jsx)("div",{children:Object(B.jsx)(g.a,{id:"menu-appbar",anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){o(null)},children:F.map((function(a){var n=a.title,i=a.pageUrl,r=a.icon;return Object(B.jsxs)(x.a,{onClick:function(){return function(t){e.push(t),o(null)}(i)},children:[Object(B.jsx)(O.a,{className:t.listItemIcon,children:r}),Object(B.jsx)(f.a,{primary:n})]},n)}))})})]})})})},R=a(179),A=a(171),L=a(56),U=a(89),q=a.n(U),G=a(88),Q=a.n(G),W=a(90),_=a.n(W),H="http://www.tecnotree.com/",z="http://www.cloubi.com/",V="http://www.bkash.com/",K="http://www.tuni.fi/en",$="http://www.du.ac.bd/",Y="http://github.com/saimulhq",X="http://facebook.com/saimulhq",Z="http://github.com/saimulhq/expense-manager",ee="http://saimulhq.github.io/photo-gallery/",te="http://friendfinder-socialsite.herokuapp.com",ae="http://github.com/saimulhq/devops-project",ne="http://github.com/saimulhq/plagiar",ie="http://trepo.tuni.fi/handle/10024/121626",re="/files/cv_sheikh_18_07.pdf",oe="/files/certificate_of_recognition.pdf",ce="/files/letter_of_recommendation.pdf",se=[{link:"http://linkedin.com/in/saimulhq",icon:Object(B.jsx)(Q.a,{fontSize:"medium"})},{link:Y,icon:Object(B.jsx)(q.a,{fontSize:"small",style:{paddingBottom:"inherit"}})},{link:X,icon:Object(B.jsx)(_.a,{fontSize:"medium"})}],le=function(){return Object(B.jsxs)("footer",{children:[Object(B.jsx)(R.a,{textAlign:"center",bgcolor:"#646d8f",color:"white",mx:"auto",p:1,children:Object(B.jsx)(L.a,{variant:"caption",component:"span",color:"inherit",children:"There is always a solution to a problem."})}),Object(B.jsx)(R.a,{textAlign:"center",bgcolor:"#646d8f",color:"white",mx:"auto",p:1,children:se.map((function(e){return Object(B.jsx)(A.a,{href:e.link,color:"inherit",style:{padding:2},children:e.icon},e.link)}))})]})},de=a(72),je=a.n(de),be=a(91),me=a(55),he=a(20),pe=a(94),ue=a(180),xe=a(174),ge=a(178),Oe=a(92),fe=a.n(Oe),ve=a(172),ye=a(173),ke=Object(l.a)({root:{border:"none",boxShadow:"none",height:550,maxWidth:600},form:{maxWidth:700},button:{color:"white",backgroundColor:"#646d8f",marginTop:20}}),we=function(e){return Object(B.jsx)(ue.a,Object(he.a)({elevation:6,variant:"filled"},e))},Se=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!1),o=Object(c.a)(r,2),s=o[0],l=o[1],d=Object(n.useState)(!1),j=Object(c.a)(d,2),b=j[0],m=j[1],h=Object(n.useState)({name:"",phone:"",email:"",message:""}),p=Object(c.a)(h,2),u=p[0],x=p[1],g=Object(n.useState)({name:"",phone:"",email:"",message:""}),O=Object(c.a)(g,2),f=O[0],y=O[1],k=function(e){var t=e.target,a=t.name,n=t.value;x(Object(he.a)(Object(he.a)({},u),{},Object(me.a)({},a,n))),w(Object(me.a)({},a,n))},w=function(e){var t=Object(he.a)({},f);"name"in e&&(t.name=e.name?"":"Required"),"email"in e&&(t.email=e.email?"":"Required",e.email&&(t.email=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.email)?"":"Invalid Email Address")),"phone"in e&&e.phone&&(t.phone=/^\d+$/.test(e.phone)?"":"Invalid Phone Number"),"message"in e&&(t.message=0!==e.message.length?"":"Required"),y(Object(he.a)({},t))},S=function(){return u.name&&u.email&&u.message&&Object.values(f).every((function(e){return""===e}))},C=function(){var e=Object(be.a)(je.a.mark((function e(t){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,pe.a.sendForm("service_642uenk","template_mh9jn76",t.target,"user_nINnOetbRqeNgoUGlGqgn");case 4:200===e.sent.status&&(i(!0),m(!0),setTimeout((function(){m(!1)}),5e3),x({name:"",phone:"",email:"",message:""})),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),l(!0),m(!0),setTimeout((function(){m(!1)}),5e3);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),N=ke();return Object(B.jsx)(ve.a,{className:N.root,children:Object(B.jsxs)(ye.a,{children:[s&&Object(B.jsx)(xe.a,{in:b,children:Object(B.jsx)(we,{severity:"error",children:"Error while sending message! Please try again!"})}),a&&Object(B.jsx)(xe.a,{in:b,children:Object(B.jsx)(we,{severity:"success",children:"Message sent successfully!"})}),Object(B.jsxs)("form",{className:"contact-form",onSubmit:C,children:[Object(B.jsx)(L.a,{variant:"h6",color:"textPrimary",children:"Contact Me"}),Object(B.jsx)(ge.a,Object(he.a)(Object(he.a)({name:"name",label:"Name",fullWidth:!0,onBlur:k,onChange:k,autoComplete:"none"},f.name&&{error:!0,helperText:f.name}),{},{value:u.name})),Object(B.jsx)(ge.a,Object(he.a)({name:"email",label:"Email",fullWidth:!0,onBlur:k,onChange:k,value:u.email,autoComplete:"none"},f.email&&{error:!0,helperText:f.email})),Object(B.jsx)(ge.a,Object(he.a)({name:"phone",label:"Phone",fullWidth:!0,onBlur:k,onChange:k,autoComplete:"none",value:u.phone},f.phone&&{error:!0,helperText:f.phone})),Object(B.jsx)(ge.a,Object(he.a)({label:"Message",placeholder:"Message",name:"message",multiline:!0,fullWidth:!0,rows:4,onBlur:k,onChange:k,value:u.message,autoComplete:"none"},f.message&&{error:!0,helperText:f.message})),Object(B.jsx)(v.a,{type:"submit",variant:"contained",endIcon:Object(B.jsx)(fe.a,{children:"Send"}),disabled:!S(),className:N.button,children:"Send"},"".concat(!S()))]})]})})},Ce=Object(l.a)({root:{flexGrow:1,border:"none",boxShadow:"none",height:500},outerCard:{border:"none",boxShadow:"none"}}),Ne=function(){var e=Ce();return Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)(ve.a,{className:e.root,children:Object(B.jsxs)(ye.a,{children:[Object(B.jsx)(L.a,{variant:"h6",color:"textPrimary",children:"Introduction"}),Object(B.jsxs)(L.a,{variant:"body1",component:"span",display:"block",children:["Hi, I am Sheikh Saimul Haque Nazeef Bin Enam a.k.a ",Object(B.jsx)("b",{children:"Sheikh"}),". I am a"," ",Object(B.jsx)("b",{children:"Full Stack Software Developer"})," always open to new challenges. I have dedicated my life learning new technologies and experimenting with them in my everyday life. Currently I am working as a Full Stack Developer at"," ",Object(B.jsx)(A.a,{href:H,children:"Tecnotree"}),".",Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),"I completed my ",Object(B.jsx)("b",{children:"Master of Science"})," ","Degree from"," ",Object(B.jsx)(A.a,{href:K,children:"Tampere University"}),", Finland in June 2020. My major was"," ",Object(B.jsx)("b",{children:"Software Engineering - Web and Cloud"}),". I obtained an overall grade of 4.02 on a scale of 5. My Thesis Title was",' "',Object(B.jsx)(A.a,{href:ie,children:"Optimizing the Efficiency of the Data Analytics Framework Using Microservice Architecture"}),'"',". This thesis was done for"," ",Object(B.jsx)(A.a,{href:z,children:"Cloubi"}),".",Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),"I have a ",Object(B.jsx)("b",{children:"Bachelor of Science"})," ","Degree from the"," ",Object(B.jsx)(A.a,{href:$,children:"University of Dhaka"}),", Bangladesh where my major was"," ",Object(B.jsx)("b",{children:"Software Engineering"}),". I graduated on December 2016 and obtained an overall grade of 3.55 on a scale of 4. My final year project was Plagiar - A web based repository management and plagiarism detection tool.",Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),"To know more about me, feel free to download my"," ",Object(B.jsx)(y.b,{to:re,target:"_blank",children:Object(B.jsx)("b",{children:"CV"})}),"!",Object(B.jsx)("br",{}),Object(B.jsx)("br",{}),"You can also contact me using the ",'"',Object(B.jsx)("b",{children:"Contact"}),'"'," tab above."]})]})}),Object(B.jsx)(ve.a,{className:e.outerCard,children:Object(B.jsx)(ye.a,{children:Object(B.jsx)(L.a,{variant:"caption",component:"span",color:"textSecondary",children:"This website is developed using ReactJS, EmailJS and Material UI."})})})]})},Pe=a(175),Ie=a.p+"static/media/profilePhoto.9c1c54a2.jpg",Te=Object(l.a)({root:{flexGrow:1,border:"none",boxShadow:"none",backgroundColor:"#f5e9e9"},media:{height:300}}),De=function(){var e=Te();return Object(B.jsxs)(ve.a,{className:e.root,disabled:!0,children:[Object(B.jsx)(Pe.a,{className:e.media,image:Ie,title:"Sheikh Photo"}),Object(B.jsxs)(ye.a,{children:[Object(B.jsx)(L.a,{variant:"h6",color:"textPrimary",children:"Sheikh Bin Enam"}),Object(B.jsx)(L.a,{variant:"subtitle1",color:"textPrimary",children:"Full Stack Software Developer"})]})]})},Me=a(177),Be=a(167),Fe=a(123),Je=a(176),Ee=[{title:"Junior Software Engineer (Full Stack Software Developer)",company:"Tecnotree Corporation",link:H,location:"Tampere, Finland",period:"August 2020 - Present",fileName:"Certificate of Recognition",file:oe},{title:"Software Developer Trainee and Thesis Worker",company:"Cloubi Ltd.",link:z,location:"Tampere, Finland",period:"May 2019 - February 2020",fileName:"Letter of Recognition",file:ce},{title:"Software Quality Assurance Engineer",company:"Loence Solution",link:"",location:"Dhaka, Bangladesh",period:"August 2017 - July 2018",fileName:"",file:""},{title:"Intern, Research and Development Team, Technology Division",company:"bKash Ltd.",link:V,location:"Dhaka, Bangladesh",period:"January 2016 - June 2016",fileName:"",file:""}],Re=Object(l.a)((function(){return{root:{border:"none",boxShadow:"none",height:550},list:{width:"100%",padding:0},listItem:{padding:0},divider:{margin:0},inline:{display:"inline"}}})),Ae=function(){var e=Re();return Object(B.jsx)(ve.a,{className:e.root,children:Object(B.jsxs)(ye.a,{children:[Object(B.jsx)(L.a,{variant:"h6",color:"textPrimary",children:"Work Experiences"}),Object(B.jsx)(Be.a,{className:e.list,children:Ee.map((function(t){return Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)(Fe.a,{alignItems:"flex-start",className:e.listItem,children:Object(B.jsx)(f.a,{primary:Object(B.jsx)("b",{children:t.title}),secondary:Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)(L.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.link?Object(B.jsx)(A.a,{href:t.link,children:t.company}):Object(B.jsx)(i.a.Fragment,{children:t.company})}),Object(B.jsx)("br",{}),Object(B.jsx)(L.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.location}),Object(B.jsx)("br",{}),Object(B.jsx)(L.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.period}),Object(B.jsx)("br",{}),Object(B.jsx)(L.a,{component:"span",variant:"body2",className:e.inline,color:"textSecondary",children:Object(B.jsx)(y.b,{to:t.file,target:"_blank",children:t.fileName})})]})})}),Object(B.jsx)(Je.a,{variant:"middle",component:"li",className:e.divider})]},t.company)}))})]})})},Le={"Programming Language":["Go","Java","JS","Python","C","C++","C#","PHP","R"],"Web Development":["ReactJS","NodeJS","ExpressJS","Spring Boot","ASP.Net","Django","HTML","CSS","Bootstrap","jQuery"],DevOps:["Docker","Kubernetes","Gitlab-CI","Jenkins","Rancher","SonarQube"],"Version Control":["Git","SVN"],Database:["Oracle","MySQL","Microsoft SQL","PostgreSQL","MongoDB"],"Message Queing Service":["Apache Kafka"],"Development Tools":["Eclipse","Netbeans","CodeBlocks","Microsoft Visual Studio","Microsoft Visual Studio Code","PyCharm","QT Creator","RStudio"],"Testing Tools":["JUnit","Selenium","Mocha","Robot Framework"],"Project Management Tools":["Trello","Jira","Confluence"],Others:["Microsoft Office"]},Ue=a(181),qe=Object(l.a)((function(){return{root:{border:"none",boxShadow:"none"},innerCard:{border:"none",boxShadow:"none",padding:0},innerCardContent:{paddingLeft:0,"&:last-child":{paddingBottom:0}},list:{width:"100%",padding:0},listItem:{padding:0},chip:{marginRight:"5px",marginTop:"5px",backgroundColor:"#f5e9e9"},divider:{margin:0},divStyle:{paddingBottom:"10px",paddingTop:"5px"},inline:{display:"inline"}}})),Ge=function(){var e=qe();return Object(B.jsx)(ve.a,{className:e.root,children:Object(B.jsxs)(ye.a,{children:[Object(B.jsx)(L.a,{variant:"h6",color:"textPrimary",children:"Technical Skills"}),Object(B.jsx)(Be.a,{className:e.list,children:Object.keys(Le).map((function(t){return Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)(Fe.a,{alignItems:"flex-start",className:e.listItem,children:Object(B.jsx)(ve.a,{className:e.innerCard,children:Object(B.jsxs)(ye.a,{className:e.innerCardContent,children:[Object(B.jsx)(L.a,{variant:"subtitle1",color:"textPrimary",children:Object(B.jsx)("b",{children:t})}),Object(B.jsx)("div",{className:e.divStyle,children:Le[t].map((function(t){return Object(B.jsx)(Ue.a,{label:t,className:e.chip},t)}))})]})})}),Object(B.jsx)(Je.a,{variant:"middle",component:"li",className:e.divider})]},t)}))})]})})},Qe=[{title:"Tecnotree Digital Resource Manager Bulk Process (Ongoing)",link:"",description:"Currently working on the back end of this project for Tecnotree, it processes the creation, deletion, updation and bundling of digital resources (SIM, MSISDN, IP etc) in bulk and keep track of these generated resources (success, failures, reason of failure etc). On successful creation the bulk process sends Kakfa events, which other systems can listen to and perform actions based on it.",platform:"ExpressJS, MongoDB, Apache Kafka, Docker, Protobuf, grpc, Jenkins, SonarQube"},{title:"Expense Manager",link:Z,description:"This is a simple CRUD backend application that is used for creating a new expense, delete an expense, get an expense, update an expense and list all the expenses.",platform:"Go, MongoDB, Protobuf, grpc, grpc-gateway"},{title:"HI-DE Crane Registration System",link:"",description:"This project has been developed for HIAB, a subsidiary of Cargotec Ltd for registering the purchase date of the crane parts sold by HIAB and keeping track of warranty of the parts.",platform:"ExpressJS, ReactJS, PostgreSQL"},{title:"Photo Gallery",link:ee,description:"This is a front end application made with ReactJS and Material UI that loads images from a Fake Mock Rest API.",platform:"ReactJS"},{title:"Friend Finder",link:te,description:"This project is a social networking site with the features of adding new friends, deleting friends, creating discussions, update status and removing user account. (username: saimulhq, password: iit12345)",platform:"Django, PostgreSQL"},{title:"DevOps Project",link:ae,description:"This project was done for learning DevOps using Gitlab-CI and had several stages in the pipeline, like static analysis of the code and testing.",platform:"Docker, Gitlab-CI, NodeJS, Mocha"},{title:"Plagiar",link:ne,description:"This is a web-based project made to detect plagiarism with a selected repository and is a complete repository management system.",platform:"Java EE, Oracle"},{title:"IIT Problem Management System",link:"",description:"This is a web-based project made to automate the whole manual problem management system of IIT i.e. lodging complaint against a problem, notifying a technician and taking necessary actions.",platform:"ASP.Net MVC 5 / C#, Microsoft SQL"}],We=Object(l.a)((function(){return{root:{border:"none",boxShadow:"none"},list:{width:"100%",padding:0},listItem:{padding:0},divider:{margin:0},inline:{display:"inline"}}})),_e=function(){var e=We();return Object(B.jsx)(ve.a,{className:e.root,children:Object(B.jsxs)(ye.a,{children:[Object(B.jsx)(L.a,{variant:"h6",color:"textPrimary",children:"Projects"}),Object(B.jsx)(Be.a,{className:e.list,children:Qe.map((function(t){return Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)(Fe.a,{alignItems:"flex-start",className:e.listItem,children:Object(B.jsx)(f.a,{primary:t.link?Object(B.jsx)(A.a,{href:t.link,children:Object(B.jsx)("b",{children:t.title})}):Object(B.jsx)("b",{children:t.title}),secondary:Object(B.jsxs)(i.a.Fragment,{children:[Object(B.jsx)(L.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.description}),Object(B.jsx)("br",{}),Object(B.jsxs)(L.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:["Platform:"," ",t.platform]}),Object(B.jsx)("br",{})]})})}),Object(B.jsx)(Je.a,{variant:"middle",component:"li",className:e.divider})]},t.title)}))})]})})},He=Object(l.a)((function(){return{root:{flexGrow:1},sidePanel:{backgroundColor:"#f5e9e9"}}})),ze=function(){var e=He();return Object(B.jsx)("div",{className:e.root,children:Object(B.jsxs)(Me.a,{container:!0,spacing:0,children:[Object(B.jsx)(Me.a,{item:!0,md:12,sm:12,xs:12,lg:12,children:Object(B.jsx)(E,{})}),Object(B.jsx)(Me.a,{item:!0,md:3,sm:12,xs:12,lg:3,className:e.sidePanel,children:Object(B.jsx)(De,{})}),Object(B.jsx)(Me.a,{item:!0,md:9,sm:12,xs:12,lg:9,children:Object(B.jsxs)(s.c,{children:[Object(B.jsx)(s.a,{exact:!0,path:"/",component:Ne}),Object(B.jsx)(s.a,{exact:!0,path:"/contact",component:Se}),Object(B.jsx)(s.a,{exact:!0,path:"/work",component:Ae}),Object(B.jsx)(s.a,{exact:!0,path:"/skills",component:Ge}),Object(B.jsx)(s.a,{exact:!0,path:"/projects",component:_e})]})}),Object(B.jsx)(Me.a,{item:!0,md:12,sm:12,xs:12,lg:12,children:Object(B.jsx)(le,{})})]})})},Ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,183)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(B.jsx)(y.a,{basename:"/portfolio",children:Object(B.jsx)(ze,{})}),document.getElementById("root")),Ve()}},[[120,1,2]]]);
//# sourceMappingURL=main.fe4cf7a4.chunk.js.map