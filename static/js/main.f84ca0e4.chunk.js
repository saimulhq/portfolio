(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{106:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(11),r=a.n(o),s=(a(106),a(12)),c=a(155),l=a(33),d=a(156),m=a(157),h=a(158),b=a(159),p=a(83),j=a.n(p),g=a(162),u=a(88),x=a(163),f=a(164),O=a(160),k=a(38),y=a(74),v=a.n(y),S=a(79),w=a.n(S),P=a(80),T=a.n(P),C=a(82),I=a.n(C),N=a(81),M=a.n(N),D=a(2);const F=[{title:"Home",pageUrl:"/",icon:Object(D.jsx)(v.a,{})},{title:"Work Experiences",pageUrl:"/work",icon:Object(D.jsx)(w.a,{})},{title:"Skills",pageUrl:"/skills",icon:Object(D.jsx)(T.a,{})},{title:"Projects",pageUrl:"/projects",icon:Object(D.jsx)(M.a,{})},{title:"Contact",pageUrl:"/contact",icon:Object(D.jsx)(I.a,{})}],B=Object(c.a)((e=>({root:{flexGrow:1,backgroundColor:"#646d8f",border:"none",boxShadow:"none"},menuButton:{marginRight:e.spacing(2)},link:{textDecoration:"none"},listItemIcon:{minWidth:"30px"},button:{color:"#f5f5f5"}})));var E=()=>{const e=Object(s.f)(),t=B(),[a,i]=Object(n.useState)(null),o=Boolean(a),r=Object(l.a)(),c=Object(d.a)(r.breakpoints.down("xs"));return Object(D.jsx)("div",{className:t.root,children:Object(D.jsx)(m.a,{position:"static",className:t.root,children:Object(D.jsxs)(h.a,{children:[c?Object(D.jsx)(b.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:e=>{i(e.currentTarget)},children:Object(D.jsx)(j.a,{})}):Object(D.jsx)("div",{children:F.map((e=>Object(D.jsx)(k.b,{to:e.pageUrl,className:t.link,children:Object(D.jsx)(O.a,{className:t.button,startIcon:e.icon,children:e.title})},e.title)))}),Object(D.jsx)("div",{children:Object(D.jsx)(u.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:()=>{i(null)},children:F.map((a=>{const{title:n,pageUrl:o,icon:r}=a;return Object(D.jsxs)(g.a,{onClick:()=>(t=>{e.push(t),i(null)})(o),children:[Object(D.jsx)(x.a,{className:t.listItemIcon,children:r}),Object(D.jsx)(f.a,{primary:n})]},n)}))})})]})})})},A=a(173),J=a(165),R=a(53),U=a(85),L=a.n(U),W=a(84),H=a.n(W),G=a(86),q=a.n(G);const Q="http://www.tecnotree.com/",V="https://www.visma.fi/yritykset/visma-amplio-oy",_="http://www.nokia.com",K="http://www.cloubi.com/",z="http://www.bkash.com/",$="http://www.tuni.fi/en",Y="http://www.du.ac.bd/",X="http://github.com/saimulhq",Z="http://facebook.com/saimulhq",ee="http://github.com/saimulhq/expense-manager",te="http://saimulhq.github.io/photo-gallery/",ae="http://github.com/saimulhq/devops-project",ne="http://github.com/saimulhq/plagiar",ie="http://trepo.tuni.fi/handle/10024/121626",oe="/files/cv_sheikh_10-09-24.pdf",re="/files/certificate_of_recognition.pdf",se="/files/letter_of_recommendation.pdf",ce=[{link:"http://linkedin.com/in/saimulhq",icon:Object(D.jsx)(H.a,{fontSize:"medium"})},{link:X,icon:Object(D.jsx)(L.a,{fontSize:"small",style:{paddingBottom:"inherit"}})},{link:Z,icon:Object(D.jsx)(q.a,{fontSize:"medium"})}];var le=()=>Object(D.jsxs)("footer",{children:[Object(D.jsx)(A.a,{textAlign:"center",bgcolor:"#646d8f",color:"white",mx:"auto",p:1,children:Object(D.jsx)(R.a,{variant:"caption",component:"span",color:"inherit",children:"There is always a solution to a problem."})}),Object(D.jsx)(A.a,{textAlign:"center",bgcolor:"#646d8f",color:"white",mx:"auto",p:1,children:ce.map((e=>Object(D.jsx)(J.a,{href:e.link,color:"inherit",style:{padding:2},children:e.icon},e.link)))})]}),de=a(89),me=a(174),he=a(168),be=a(172),pe=a(87),je=a.n(pe),ge=a(166),ue=a(167);const xe=Object(c.a)({root:{border:"none",boxShadow:"none",height:550,maxWidth:600,minHeight:"100vh"},form:{maxWidth:700},button:{color:"white",backgroundColor:"#646d8f",marginTop:20}}),fe=e=>Object(D.jsx)(me.a,{elevation:6,variant:"filled",...e});var Oe=()=>{const[e,t]=Object(n.useState)(!1),[a,i]=Object(n.useState)(!1),[o,r]=Object(n.useState)(!1),[s,c]=Object(n.useState)({name:"",phone:"",email:"",message:""}),[l,d]=Object(n.useState)({name:"",phone:"",email:"",message:""}),m=e=>{const{name:t,value:a}=e.target;c({...s,[t]:a}),h({[t]:a})},h=e=>{let t={...l};"name"in e&&(t.name=e.name?"":"Required"),"email"in e&&(t.email=e.email?"":"Required",e.email&&(t.email=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.email)?"":"Invalid Email Address")),"phone"in e&&e.phone&&(t.phone=/^\d+$/.test(e.phone)?"":"Invalid Phone Number"),"message"in e&&(t.message=0!==e.message.length?"":"Required"),d({...t})},b=()=>s.name&&s.email&&s.message&&Object.values(l).every((e=>""===e)),p=xe();return Object(D.jsx)(ge.a,{className:p.root,children:Object(D.jsxs)(ue.a,{children:[a&&Object(D.jsx)(he.a,{in:o,children:Object(D.jsx)(fe,{severity:"error",children:"Error while sending message! Please try again!"})}),e&&Object(D.jsx)(he.a,{in:o,children:Object(D.jsx)(fe,{severity:"success",children:"Message sent successfully!"})}),Object(D.jsxs)("form",{className:"contact-form",onSubmit:async e=>{e.preventDefault();try{200===(await de.a.sendForm("service_v9sjkrn","template_bh09a9k",e.target,"PA_V5f1yoxvh_0Qjt")).status&&(t(!0),r(!0),setTimeout((()=>{r(!1)}),5e3),c({name:"",phone:"",email:"",message:""}))}catch(a){i(!0),r(!0),setTimeout((()=>{r(!1)}),5e3)}},children:[Object(D.jsx)(R.a,{variant:"h6",color:"textPrimary",children:"Contact Me"}),Object(D.jsx)(be.a,{name:"name",label:"Name",fullWidth:!0,onBlur:m,onChange:m,autoComplete:"none",...l.name&&{error:!0,helperText:l.name},value:s.name}),Object(D.jsx)(be.a,{name:"email",label:"Email",fullWidth:!0,onBlur:m,onChange:m,value:s.email,autoComplete:"none",...l.email&&{error:!0,helperText:l.email}}),Object(D.jsx)(be.a,{name:"phone",label:"Phone",fullWidth:!0,onBlur:m,onChange:m,autoComplete:"none",value:s.phone,...l.phone&&{error:!0,helperText:l.phone}}),Object(D.jsx)(be.a,{label:"Message",placeholder:"Message",name:"message",multiline:!0,fullWidth:!0,rows:4,onBlur:m,onChange:m,value:s.message,autoComplete:"none",...l.message&&{error:!0,helperText:l.message}}),Object(D.jsx)(O.a,{type:"submit",variant:"contained",endIcon:Object(D.jsx)(je.a,{children:"Send"}),disabled:!b(),className:p.button,children:"Send"},`${!b()}`)]})]})})};const ke=Object(c.a)({root:{flexGrow:1,border:"none",boxShadow:"none",height:500,minHeight:"100vh"},outerCard:{border:"none",boxShadow:"none"}});var ye=()=>{const e=ke();return Object(D.jsxs)(i.a.Fragment,{children:[Object(D.jsx)(ge.a,{className:e.root,children:Object(D.jsxs)(ue.a,{children:[Object(D.jsx)(R.a,{variant:"h6",color:"textPrimary",children:"Introduction"}),Object(D.jsxs)(R.a,{variant:"body1",component:"span",display:"block",children:["Hi, I am Sheikh Bin Enam a.k.a ",Object(D.jsx)("b",{children:"Sheikh"}),". I am an experienced ",Object(D.jsx)("b",{children:"Senior Full Stack Software Engineer"})," ","specializing in developing backend solutions. Throughout my career, I have demonstrated leadership skills, fostered innovation, and successfully delivered complex applications. I am highly regarded for my understanding of software architecture and my commitment to staying up to date with the latest technologies. Currently I am working as a Senior Software Developer at"," ",Object(D.jsx)(J.a,{href:V,children:"Visma"}),".",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),"I completed my ",Object(D.jsx)("b",{children:"Master of Science"})," ","Degree from"," ",Object(D.jsx)(J.a,{href:$,children:"Tampere University"}),", Finland in June 2020. My major was"," ",Object(D.jsx)("b",{children:"Software Engineering - Web and Cloud"}),". I obtained an overall grade of 4.02 on a scale of 5. My Thesis Title was",' "',Object(D.jsx)(J.a,{href:ie,children:"Optimizing the Efficiency of the Data Analytics Framework Using Microservice Architecture"}),'"',". This thesis was done for"," ",Object(D.jsx)(J.a,{href:K,children:"Cloubi"}),".",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),"I have a ",Object(D.jsx)("b",{children:"Bachelor of Science"})," ","Degree from the"," ",Object(D.jsx)(J.a,{href:Y,children:"University of Dhaka"}),", Bangladesh where my major was"," ",Object(D.jsx)("b",{children:"Software Engineering"}),". I graduated on December 2016 and obtained an overall grade of 3.55 on a scale of 4. My final year project was Plagiar - A web based repository management and plagiarism detection tool.",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),"To know more about me, feel free to download my"," ",Object(D.jsx)(k.b,{to:oe,target:"_blank",children:Object(D.jsx)("b",{children:"CV"})}),"!",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),"You can also contact me using the ",'"',Object(D.jsx)("b",{children:"Contact"}),'"'," tab above."]})]})}),Object(D.jsx)(ge.a,{className:e.outerCard,children:Object(D.jsx)(ue.a,{children:Object(D.jsx)(R.a,{variant:"caption",component:"span",color:"textSecondary",children:"This website is developed using ReactJS, EmailJS and Material UI."})})})]})},ve=a(169),Se=a.p+"static/media/profilePhoto.9c1c54a2.jpg";const we=Object(c.a)({root:{flexGrow:1,border:"none",boxShadow:"none",backgroundColor:"#f5e9e9"},media:{height:300}});var Pe=()=>{const e=we();return Object(D.jsxs)(ge.a,{className:e.root,disabled:!0,children:[Object(D.jsx)(ve.a,{className:e.media,image:Se,title:"Sheikh Photo"}),Object(D.jsxs)(ue.a,{children:[Object(D.jsx)(R.a,{variant:"h6",color:"textPrimary",children:"Sheikh Bin Enam"}),Object(D.jsx)(R.a,{variant:"subtitle2",color:"textPrimary",children:"Senior Full Stack Software Engineer"}),Object(D.jsx)(R.a,{variant:"caption",color:"textPrimary",children:"Specialized in Backend Development"})]})]})},Te=a(171),Ce=a(161),Ie=a(117),Ne=a(170);const Me=[{title:"Senior Software Developer",company:"Visma Amplio Ltd.",link:V,location:"Helsinki, Finland",period:"January 2024 - Present",project:"Fikuro ERP",description:"Fikuro ERP serves SMEs in Finland, it allows users to record production, do warehouse transactions, create sales offers, sales orders and purchase orders, send invoices to various FMS systems and keep track of the stock.",responsibilities:["Updated in CV"],fileName:"",file:""},{title:"Senior Full Stack Software Engineer",company:"Nokia Solutions and Networks Ltd.",link:_,location:"Espoo, Finland",period:"October 2021 - November 2023",project:"Nokia Orchestration OrderHub (Business Application)",description:"OrderHub is used to create different types of orders, managing and monitoring orders and it is also used for managing manual tasks.",responsibilities:["Focusing mainly on backend development","REST APIs and feature development","Writing unit tests and integration tests","Practicing SAFe within team","Responsible for migrating Java 11 to Java 17","Responsible for migrating Spring Boot 2 to Spring Boot 3","Acting as the lead product security expert","Generating Anchor, Trivy, VAMS for detecting vulnerabilities and fixing them","Fixing Sonarqube issues for the backend","Guiding junior developers within the team","Take part in release activities time to time","Time to time upgrading 3rd party libraries being used in the backend","Work on the UI when needed","Using tools like Jira, Confluence, and Microsoft Teams"],fileName:"",file:""},{title:"Full Stack Software Developer",company:"Tecnotree Corporation",link:Q,location:"Tampere, Finland",period:"August 2020 - September 2021",project:"Tecnotree Digital Resource Manager Bulk Processor",description:"Bulk processor is used for processing the creation, deletion, updation and bundling of digital resources (SIM, MSISDN, IP etc) in bulk and keep track of these generated resources (success, failures, reason of failure etc). On successful creation the bulk processor sends Kakfa events, which other systems can listen to and perform actions based on it.",responsibilities:["Focusing mainly on backend development","Single-handedly worked on the the backend of the project from designing the architecture to coding, testing and deployment","REST APIs and feature development","Writing unit tests and integration tests","Practicing Scrum within the team","Responsible for TM Forum Open API certification for the product APIs","Fixing Sonarqube issues for the backend","Take part in release activities time to time","Time to time upgrading 3rd party libraries being used in the backend","Work on the UI when needed","Using tools like Jira, Confluence, and Microsoft Teams"],fileName:"Letter of Recognition",file:re},{title:"Software Developer Trainee and Thesis Worker",company:"Cloubi Ltd. (Part of Otava Publishing Company)",link:K,location:"Tampere, Finland",period:"May 2019 - February 2020",project:"Cloubi Data Analytics Project",description:"It was developed for Cloubi and is used for generating the new data analytics report for the teachers to view the overall performance of the students.",responsibilities:["Single-handedly worked on the backend of the project as a proof of concept for my Master\u2019s Thesis",'Thesis title: "Optimizing the Efficiency of the Data Analytics Framework Using Microservice Architecture"',"REST APIs and feature development","Writing unit tests and integration tests","Practicing Scrum within the team","Fixing Sonarqube issues","Using tools like Jira, Confluence, Slack, and Google Meet"],fileName:"Letter of Recognition",file:se},{title:"Software Quality Assurance Engineer",company:"Loence Solution",link:"",location:"Dhaka, Bangladesh",period:"August 2017 - July 2018",project:"Loence ERP",description:"Manual software testing and had the opportunity to write automated tests of their main product which was an ERP system",responsibilities:["Write automated test cases for the frontend using Selenium","Perform manual testing of the features","Practicing Scrum within the team","Using tools like Trello, Slack, and Google Meet"],fileName:"",file:""},{title:"Intern, Research and Development Team, Technology Division",company:"bKash Ltd.",link:z,location:"Dhaka, Bangladesh",period:"January 2016 - June 2016",project:"bKash Phonebook Directory",description:"It was developed for managing the contact details of bKash employees and was internally used by bKash Ltd.",responsibilities:["Single-handedly worked on the backend of the project from designing the architecture to coding and testing","REST APIs and feature development","Writing unit tests and integration tests","Fixing Sonarqube issues","Using tools like Jira, Confluence, Slack, and Google Meet"],fileName:"",file:""}],De=Object(c.a)((()=>({root:{border:"none",boxShadow:"none",minHeight:"100vh"},list:{width:"100%",padding:0},listItem:{padding:0},divider:{margin:0},inline:{display:"inline"}})));var Fe=()=>{const e=De();return Object(D.jsx)(ge.a,{className:e.root,children:Object(D.jsxs)(ue.a,{children:[Object(D.jsx)(R.a,{variant:"h6",color:"textPrimary",children:"Work Experiences"}),Object(D.jsx)(Ce.a,{className:e.list,children:Me.map((t=>Object(D.jsxs)(i.a.Fragment,{children:[Object(D.jsx)(Ie.a,{alignItems:"flex-start",className:e.listItem,children:Object(D.jsx)(f.a,{primary:Object(D.jsx)("b",{children:t.title}),secondary:Object(D.jsxs)(i.a.Fragment,{children:[Object(D.jsx)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.link?Object(D.jsx)(J.a,{href:t.link,children:t.company}):Object(D.jsx)(i.a.Fragment,{children:t.company})}),Object(D.jsx)("br",{}),Object(D.jsx)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.location}),Object(D.jsx)("br",{}),Object(D.jsx)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.period}),Object(D.jsx)("br",{}),Object(D.jsxs)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:["Project:"," ",t.project]}),Object(D.jsx)("br",{}),Object(D.jsxs)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:["Description:"," ",t.description]}),Object(D.jsx)("br",{}),Object(D.jsxs)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:["Responsibilies:"," ",Object(D.jsx)("ul",{style:{listStyleType:"square"},children:t.responsibilities.map((e=>Object(D.jsx)("li",{children:e})))})]})]})})}),Object(D.jsx)(Ne.a,{variant:"middle",component:"li",className:e.divider})]},t.company)))})]})})};const Be={"Programming Language":["Go","Java","JS","Python","C","C++","C#","PHP","R"],"Web Development":["ReactJS","AngularJS","NodeJS","ExpressJS","Spring Boot","ASP.Net","Django","HTML","CSS","TS","Bootstrap","jQuery"],DevOps:["Docker","Kubernetes","Gitlab-CI","GitHub Actions","Jenkins","Rancher","SonarQube"],"Version Control":["Git","SVN"],Database:["Oracle","MySQL","Microsoft SQL","PostgreSQL","MariaDB","MongoDB"],"Message Queing Service":["Apache Kafka","RabbitMQ"],"Development Tools":["IntelliJ IDEA","Eclipse","Netbeans","CodeBlocks","Microsoft Visual Studio","Microsoft Visual Studio Code","PyCharm","QT Creator","RStudio"],"Testing Tools":["JUnit","Selenium","Mocha","Robot Framework"],"Project Management Tools":["Trello","Jira","Confluence"],Others:["Microsoft Office"]};var Ee=a(175);const Ae=Object(c.a)((()=>({root:{border:"none",boxShadow:"none",minHeight:"100vh"},innerCard:{border:"none",boxShadow:"none",padding:0},innerCardContent:{paddingLeft:0,"&:last-child":{paddingBottom:0}},list:{width:"100%",padding:0},listItem:{padding:0},chip:{marginRight:"5px",marginTop:"5px",backgroundColor:"#f5e9e9"},divider:{margin:0},divStyle:{paddingBottom:"10px",paddingTop:"5px"},inline:{display:"inline"}})));var Je=()=>{const e=Ae();return Object(D.jsx)(ge.a,{className:e.root,children:Object(D.jsxs)(ue.a,{children:[Object(D.jsx)(R.a,{variant:"h6",color:"textPrimary",children:"Technical Skills"}),Object(D.jsx)(Ce.a,{className:e.list,children:Object.keys(Be).map((t=>Object(D.jsxs)(i.a.Fragment,{children:[Object(D.jsx)(Ie.a,{alignItems:"flex-start",className:e.listItem,children:Object(D.jsx)(ge.a,{className:e.innerCard,children:Object(D.jsxs)(ue.a,{className:e.innerCardContent,children:[Object(D.jsx)(R.a,{variant:"subtitle1",color:"textPrimary",children:Object(D.jsx)("b",{children:t})}),Object(D.jsx)("div",{className:e.divStyle,children:Be[t].map((t=>Object(D.jsx)(Ee.a,{label:t,className:e.chip},t)))})]})})}),Object(D.jsx)(Ne.a,{variant:"middle",component:"li",className:e.divider})]},t)))})]})})};const Re=[{title:"Nokia Orchestration OrderHub (Business Application)",link:"",description:"OrderHub is used to create different types of orders, managing and monitoring orders and it is also used for managing manual tasks.",platform:"Spring Boot (Java 17), ReactJS, TypeScript, MongoDB, Docker, Kubernetes, Jenkins, SonarQube"},{title:"Tecnotree Digital Resource Manager Bulk Process",link:"",description:"Worked on the backend of this project for Tecnotree, it processes the creation, deletion, updation and bundling of digital resources (SIM, MSISDN, IP etc) in bulk and keep track of these generated resources (success, failures, reason of failure etc). On successful creation the bulk process sends Kafka events, which other systems can listen to and perform actions based on it.",platform:"ExpressJS, MongoDB, Apache Kafka, Docker, Protobuf, grpc, Jenkins, SonarQube"},{title:"Expense Manager",link:ee,description:"This is a simple CRUD backend application that is used for creating a new expense, delete an expense, get an expense, update an expense and list all the expenses.",platform:"Go, MongoDB, Protobuf, grpc, grpc-gateway"},{title:"HI-DE Crane Registration System",link:"",description:"This project has been developed for HIAB, a subsidiary of Cargotec Ltd for registering the purchase date of the crane parts sold by HIAB and keeping track of warranty of the parts.",platform:"ExpressJS, ReactJS, PostgreSQL"},{title:"Photo Gallery",link:te,description:"This is a front end application made with ReactJS and Material UI that loads images from a Fake Mock Rest API.",platform:"ReactJS"},{title:"Friend Finder",link:"",description:"This project is a social networking site with the features of adding new friends, deleting friends, creating discussions, update status and removing user account.",platform:"Django, PostgreSQL"},{title:"DevOps Project",link:ae,description:"This project was done for learning DevOps using Gitlab-CI and had several stages in the pipeline, like static analysis of the code and testing.",platform:"Docker, Gitlab-CI, NodeJS, Mocha"},{title:"Plagiar",link:ne,description:"This is a web-based project made to detect plagiarism with a selected repository and is a complete repository management system.",platform:"Java EE, Oracle"},{title:"IIT Problem Management System",link:"",description:"This is a web-based project made to automate the whole manual problem management system of IIT i.e. lodging complaint against a problem, notifying a technician and taking necessary actions.",platform:"ASP.Net MVC 5 / C#, Microsoft SQL"}],Ue=Object(c.a)((()=>({root:{border:"none",boxShadow:"none",minHeight:"100vh"},list:{width:"100%",padding:0},listItem:{padding:0},divider:{margin:0},inline:{display:"inline"}})));var Le=()=>{const e=Ue();return Object(D.jsx)(ge.a,{className:e.root,children:Object(D.jsxs)(ue.a,{children:[Object(D.jsx)(R.a,{variant:"h6",color:"textPrimary",children:"Projects"}),Object(D.jsx)(Ce.a,{className:e.list,children:Re.map((t=>Object(D.jsxs)(i.a.Fragment,{children:[Object(D.jsx)(Ie.a,{alignItems:"flex-start",className:e.listItem,children:Object(D.jsx)(f.a,{primary:t.link?Object(D.jsx)(J.a,{href:t.link,children:Object(D.jsx)("b",{children:t.title})}):Object(D.jsx)("b",{children:t.title}),secondary:Object(D.jsxs)(i.a.Fragment,{children:[Object(D.jsx)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:t.description}),Object(D.jsx)("br",{}),Object(D.jsxs)(R.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary",children:["Platform:"," ",t.platform]}),Object(D.jsx)("br",{})]})})}),Object(D.jsx)(Ne.a,{variant:"middle",component:"li",className:e.divider})]},t.title)))})]})})};const We=Object(c.a)((()=>({root:{flexGrow:1},sidePanel:{backgroundColor:"#f5e9e9"}})));var He=()=>{const e=We();return Object(D.jsx)("div",{className:e.root,children:Object(D.jsxs)(Te.a,{container:!0,spacing:0,children:[Object(D.jsx)(Te.a,{item:!0,md:12,sm:12,xs:12,lg:12,children:Object(D.jsx)(E,{})}),Object(D.jsx)(Te.a,{item:!0,md:3,sm:12,xs:12,lg:3,className:e.sidePanel,children:Object(D.jsx)(Pe,{})}),Object(D.jsx)(Te.a,{item:!0,md:9,sm:12,xs:12,lg:9,children:Object(D.jsxs)(s.c,{children:[Object(D.jsx)(s.a,{exact:!0,path:"/",component:ye}),Object(D.jsx)(s.a,{exact:!0,path:"/contact",component:Oe}),Object(D.jsx)(s.a,{exact:!0,path:"/work",component:Fe}),Object(D.jsx)(s.a,{exact:!0,path:"/skills",component:Je}),Object(D.jsx)(s.a,{exact:!0,path:"/projects",component:Le})]})}),Object(D.jsx)(Te.a,{item:!0,md:12,sm:12,xs:12,lg:12,children:Object(D.jsx)(le,{})})]})})};var Ge=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,177)).then((t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:o,getTTFB:r}=t;a(e),n(e),i(e),o(e),r(e)}))};r.a.render(Object(D.jsx)(k.a,{basename:"/portfolio",children:Object(D.jsx)(He,{})}),document.getElementById("root")),Ge()}},[[114,1,2]]]);
//# sourceMappingURL=main.f84ca0e4.chunk.js.map