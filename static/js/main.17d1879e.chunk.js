(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a(91)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),i=a.n(r),l=(a(24),a(7)),o=a(1),s=a(16),m=function e(t,a){var n=this;Object(s.a)(this,e),this.getShortName=function(){return n.shortName},this.getLongName=function(){return n.longName},this.shortName=t,this.longName=a};m.EN=new m("EN","English"),m.FR=new m("FR","Fran\xe7ais");var u,f=Object(n.createContext)(m.EN),h=Object(n.createContext)(function(e){}),d=function(e){var t=Object(n.useState)(function(){return function(){var e=[];for(e=(e=null!=navigator.languages?navigator.languages.slice():[navigator.language]).map(function(e){return e.slice(0,2).toUpperCase()});e.length>0;){var t=e.shift();if(m.EN.getShortName()===t)return m.EN;if(m.FR.getShortName()===t)return m.FR}return m.EN}()}),a=Object(o.a)(t,2),r=a[0],i=a[1];return c.a.createElement(h.Provider,{value:i},c.a.createElement(f.Provider,{value:r},e.children))},E=a(4),g=function(e){var t="";switch(Object(n.useContext)(f)){case m.FR:t=e.french;break;case m.EN:t=e.english}return c.a.createElement(c.a.Fragment,null,t)},b=(a(26),function(e){var t=e.isFooter?"is-footer":"",a=e.isWhite?"is-white":"",n=e.isHome?"is-home":"",r=e.isAbout?"is-about":"",i=e.isContact?"is-contact":"",o=e.isWork?"is-work":"",s=e.isServices?"is-services":"";return c.a.createElement(l.b,{to:"/"},c.a.createElement("div",{className:"logo ".concat(t," ").concat(a," ").concat(n," ").concat(r," ").concat(i," ").concat(o," ").concat(s)},c.a.createElement("div",{className:"logo-inside-square"})))}),p=(a(33),a(35),function(e){var t=e.isWhite?"is-white":"";return c.a.createElement("div",{className:"navigation-link ".concat(t)},c.a.createElement("div",{className:"navigation-link-border-container"},c.a.createElement("div",{className:"navigation-link-border-top"})),c.a.createElement(l.b,{to:e.link},c.a.createElement(g,{english:e.titleEnglish,french:e.titleFrench})))}),v=function(e){var t=e.isFooter?"is-footer":"",a=e.isHome?"is-home":"",n=e.isAbout?"is-about":"",r=e.isContact?"is-contact":"",i=e.isWork?"is-work":"",l=e.isServices?"is-services":"";return c.a.createElement("div",{className:"navigation ".concat(t," ").concat(a," ").concat(n," ").concat(r," ").concat(i," ").concat(l)},c.a.createElement("div",{className:"navigation-links"},c.a.createElement(p,{titleFrench:"Bio",titleEnglish:"About",link:"about",active:!1,isWhite:e.isWhite}),c.a.createElement(p,{titleFrench:"Contact",titleEnglish:"Contact",link:"contact",active:!1,isWhite:e.isWhite})))};a(37);!function(e){e.KimAnh="Kim Anh",e.Nguyen="Ngu yen"}(u||(u={}));var N=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],i=a[1],l=r?"is-moving":"",s=!0===e.isWhite?"is-white":"",m=!0===e.isLeft?"is-left":"",f=!0===e.isWhite?"url('noise/noise-black.png')":"url('noise/noise-white.png')";return c.a.createElement("div",{className:"square-name ".concat(l," ").concat(s," ").concat(m),onMouseEnter:function(t){!1===r&&(i(!0),e.displayedText===u.KimAnh?setTimeout(function(){return e.setDisplayedText(u.Nguyen)},1e3):setTimeout(function(){return e.setDisplayedText(u.KimAnh)},1e3),setTimeout(function(){i(!1)},2e3))}},c.a.createElement("div",{className:"square-name-text"},c.a.createElement("div",{className:"square-name-text-side"},e.displayedText),c.a.createElement("div",{className:"square-name-cache line"},c.a.createElement("div",{className:"square-name-cache-half one",style:{backgroundImage:f}}),c.a.createElement("div",{className:"square-name-cache-half two",style:{backgroundImage:f}})),c.a.createElement("div",{className:"square-name-cache column"},c.a.createElement("div",{className:"square-name-cache-half three",style:{backgroundImage:f}}),c.a.createElement("div",{className:"square-name-cache-half four",style:{backgroundImage:f}}))))},R=(a(39),a(41),a(43),function(e){var t=e.isPink?"is-pink":"";return c.a.createElement("div",{className:"about-keyword ".concat(t)},c.a.createElement("span",{className:"about-keyword-background"}),e.text)}),k=function(e){var t=Object(n.useRef)(null),a=Object(n.useCallback)(function(){!function(){var a=t.current.getBoundingClientRect();return e.debug&&(console.log("rect.bottom : ".concat(a.bottom)),console.log("rect.right : ".concat(a.right)),console.log("window.innerHeight : ".concat(window.innerHeight)),console.log("window.innerWidth : ".concat(window.innerWidth)),console.log("document.documentElement.clientHeight : ".concat(document.documentElement.clientHeight)),console.log("document.documentElement.clientWidth : ".concat(document.documentElement.clientWidth))),a.top>=0&&a.left>=0&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&a.right<=(window.innerWidth||document.documentElement.clientWidth)}()?void 0!==e.onUnactive&&e.onUnactive():e.onActive()},[]);return Object(n.useEffect)(function(){return a(),setTimeout(a,100),null!=e.scrollRef?(e.scrollRef.addEventListener("scroll",a,!1),function(){null!=e.scrollRef&&e.scrollRef.removeEventListener("scroll",a,!1)}):(addEventListener("scroll",a,!1),function(){return removeEventListener("scroll",a,!1)})},[e.scrollRef]),c.a.createElement("div",{className:"screen-detector ".concat(e.className),ref:t})},w=(a(45),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],i=a[1];return c.a.createElement("div",{className:"about-text-title ".concat(r)},c.a.createElement("div",{className:"about-text-title-line-before"}),c.a.createElement("div",{className:"about-text-title-text"},e.title),c.a.createElement("div",{className:"about-text-title-line"},c.a.createElement("div",{className:"about-text-title-line-inside"})),c.a.createElement(k,{scrollRef:e.aboutRef,onActive:function(){i("active")},onUnactive:function(){i("")},className:"screen-detector-about-title"}))}),y=(a(47),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],i=a[1],l=e.inline?"inline":"",s=e.noDelay?"no-delay":"";return c.a.createElement("div",{className:"fade-in-text ".concat(r," ").concat(l," ").concat(s)},e.children,c.a.createElement(k,{scrollRef:e.aboutRef,onActive:function(){i("active")},onUnactive:function(){i("")},className:"screen-detector-fade-in-text"}))}),S=function(e){return c.a.createElement("div",{className:"about-current-status"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement(w,{title:c.a.createElement(g,{english:"Current status",french:"Situation actuelle"}),aboutRef:e.aboutRef})),c.a.createElement(y,{aboutRef:e.aboutRef},"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"I left London in Septembre 2019 to ",french:"J'ai quitt\xe9 Londres en septembre 2019 pour "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"travel around the world",french:"un tour du monde"})}),c.a.createElement(g,{english:". I started in Europe before making my way to South East Asia. I was in Thailand when the COVID-19 pandemic hit the world and had to return to France at the end of March 2020.",french:". J'ai commenc\xe9 par l'Europe avant de continuer mon chemin vers l'Asie du Sud-Est. J'\xe9tais en Tha\xeflande lorsque la pand\xe9mie de la COVID-19 a frapp\xe9 le monde, ce qui m'a forc\xe9e \xe0 rentrer en France fin mars 2020."}),c.a.createElement("br",null)),c.a.createElement(y,{aboutRef:e.aboutRef},"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"During lockdown, I was asked by relatives to give a hand on a ",french:"Pendant le confinement, j'ai \xe9t\xe9 sollicit\xe9e par des proches pour donner un coup de main sur un "}),c.a.createElement("a",{href:"http://lescovideastes.fr/",target:"_blank"},c.a.createElement(g,{english:"Wordpress website",french:"site Wordpress"})),c.a.createElement(g,{english:" and to help two local businesses create their website. This allowed me to expand my skills on both ",french:" et aider deux petits commerces \xe0 cr\xe9er leur site web. Cette exp\xe9rience m'a permis de d\xe9velopper mes comp\xe9tences en "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"React",french:"React"})}),c.a.createElement(g,{english:" and Typescript. I also took an online 4 course specialization with Calarts on Coursera to learn more about ",french:" et Typescript en autonomie. J'ai \xe9galement suivi une sp\xe9cialisation en ligne \xe0 Calarts sur Coursera pour en apprendre davantage sur le "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"UX and UI design",french:"design UX et UI"})}),c.a.createElement(g,{english:".",french:"."}),c.a.createElement("br",null)),c.a.createElement(y,{aboutRef:e.aboutRef},"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"I am looking for ",french:"Je suis \xe0 la recherche d'"}),c.a.createElement(R,{text:c.a.createElement(g,{english:"short-term opportunities",french:"opportunit\xe9s de courte dur\xe9e"})}),c.a.createElement(g,{english:" while waiting for the sanitary situation to improve enough to allow me to resume my travelling.",french:" en attendant que la situation sanitaire ne s'am\xe9liore et de pouvoir reprendre mon voyage."})))},x=(a(49),function(e){return c.a.createElement("div",{className:"about-hobbies"},c.a.createElement(y,{aboutRef:e.aboutRef,noDelay:!0},c.a.createElement(w,{title:c.a.createElement(g,{english:"Personal projects",french:"Projets personnels"}),aboutRef:e.aboutRef})),c.a.createElement(y,{aboutRef:e.aboutRef,noDelay:!0},"\xa0\xa0\xa0\xa0",c.a.createElement(R,{text:c.a.createElement(g,{english:"Portfolio",french:"Portfolio"})}),c.a.createElement("br",null)),c.a.createElement(y,{aboutRef:e.aboutRef,noDelay:!0},"\xa0\xa0\xa0\xa0",c.a.createElement("a",{href:"http://resto-json-editor-testenv.s3-website-eu-west-1.amazonaws.com/",target:"_blank"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Coffee",french:"Coffee"})})),c.a.createElement("br",null)))}),C=(a(51),function(e){return c.a.createElement("div",{className:"about-skills"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement(w,{title:c.a.createElement(g,{english:"Skills",french:"Comp\xe9tences"}),aboutRef:e.aboutRef})),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"column-left"},c.a.createElement(g,{english:"Languages",french:"Langages"}),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"column-right"},c.a.createElement(g,{english:"C#, Javascript, Typescript",french:"C#, Javascript, Typescript"}))),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"column-left"},c.a.createElement(g,{english:"Frameworks",french:"Frameworks"}),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"column-right"},c.a.createElement(g,{english:".NET, React",french:".NET, React"}))),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"column-left"},c.a.createElement(g,{english:"Database",french:"Base de donn\xe9es"}),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"column-right"},c.a.createElement(g,{english:"SQL Server, MySQL, Sybase",french:"SQL Server, MySQL, Sybase"}))),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"column-left"},c.a.createElement(g,{english:"Version control",french:"Gestion de versions"}),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"column-right"},c.a.createElement(g,{english:"Git, TFS",french:"Git, TFS"}))),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"column-left"},c.a.createElement(g,{english:"Software development life cycle",french:"Cycle de vie du d\xe9veloppement logiciel"}),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"column-right"},c.a.createElement(g,{english:"Agile methodology, continuous delivery, Kanban process, test pyramid",french:"m\xe9thode Agile, livraison continue, m\xe9thode Kanban, pyramide des tests"}))),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"column-left"},c.a.createElement(g,{english:"UX/UI design",french:"UX/UI design"}),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"column-right"},c.a.createElement(g,{english:"site map, moodboard, wireframing, mockup, prototype",french:"plan de site, planche d'inspiration, maquette, prototype"}))),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"column-left"},c.a.createElement(g,{english:"Soft skills",french:"Soft skills"}),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"column-right"},c.a.createElement(g,{english:"independent, quick learner, analytical mind",french:"autonome, apprend vite, esprit de synth\xe8se"}))))}),j=(a(53),function(e){return c.a.createElement("div",{className:"about-work"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement(w,{title:c.a.createElement(g,{english:"Work",french:"Exp\xe9rience"}),aboutRef:e.aboutRef})),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"border"},c.a.createElement(g,{english:"2015 - 2019 Full-stack developer with 4 years of experience in finance in London",french:"2015 - 2019 D\xe9veloppeure full-stack avec 4 ans d'exp\xe9rience en finance \xe0 Londres"}),c.a.createElement("br",null),c.a.createElement("div",{className:"border-keywords-container"},c.a.createElement("div",{className:"border-keywords"},"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"Language : \xa0\xa0",french:"Langage: \xa0\xa0"}),c.a.createElement(R,{text:c.a.createElement(g,{english:"C#",french:"C#"})}),c.a.createElement("br",null),"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"Database : \xa0\xa0",french:"Base de donn\xe9es: \xa0\xa0"}),c.a.createElement(R,{text:c.a.createElement(g,{english:"SQL Server",french:"SQL Server"})}),c.a.createElement(g,{english:",\xa0\xa0 ",french:",\xa0\xa0 "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"Sybase",french:"Sybase"})}),c.a.createElement("br",null),"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"Version control : \xa0\xa0",french:"Gestion de versions: \xa0\xa0"}),c.a.createElement(R,{text:c.a.createElement(g,{english:"Git, TFS",french:"Git, TFS"})}))))),c.a.createElement(y,{aboutRef:e.aboutRef},"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"I worked on an internal application used by the traders and sales of the Commodities department to enter their trades and manage their orders.",french:"J'ai travaill\xe9 sur une application interne utilis\xe9e par les traders et les sales du d\xe9partement Commodit\xe9s pour rentrer leurs trades et suivre leurs ordres."}),c.a.createElement(R,{text:c.a.createElement(g,{english:"",french:""})}),c.a.createElement(g,{english:"",french:""})),c.a.createElement(y,{aboutRef:e.aboutRef},"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"The team - organised within an ",french:"L'\xe9quipe - organis\xe9e selon une "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"Agile",french:"m\xe9thode Agile"})}),c.a.createElement(g,{english:" methodology -  followed a weekly release schedule, our goal was to reach ",french:" - suivait un planning d'une release par semaine, avec pour objectif d'atteindre la "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"continuous delivery",french:"livraison continue"})}),c.a.createElement(g,{english:". To this end, I took part in improving the release process, reaching no downtime for part of the services. Our software delivery was user-centric with extensive support provided.",french:". \xc0 ces fins, j'ai activement conttribu\xe9 \xe0 am\xe9liorer le processus de mise en production, une partie des services pouvant ainsi \xeatre d\xe9livr\xe9s sans coupure. Nous veillions \xe9galement \xe0 apporter aux utilisateurs un support soign\xe9."})),c.a.createElement(y,{aboutRef:e.aboutRef},"\xa0\xa0\xa0\xa0",c.a.createElement(g,{english:"As a side project, I developed a ",french:"Sur le c\xf4t\xe9, j'ai d\xe9velopp\xe9 un "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"bot",french:"bot"})}),c.a.createElement(g,{english:" to allow users to check the status of their operations. I also took part in the CTY ",french:" pour permettre aux utilisateurs de v\xe9rifier le status de leurs op\xe9rations. J'ai \xe9galement particip\xe9 au "}),c.a.createElement(R,{text:c.a.createElement(g,{english:"Hackathon",french:"Hackathon"})}),c.a.createElement(g,{english:", organised in Paris in December 2018, where I won first prize.",french:" de CTY, organis\xe9 \xe0 Paris en d\xe9cembre 2018, o\xf9 j'ai d\xe9croch\xe9 la premi\xe8re place."})))}),T=(a(55),a(57),function(e){return c.a.createElement("div",{className:"about-education-date"},c.a.createElement(y,{aboutRef:e.aboutRef},e.children,c.a.createElement("div",{className:"underline"})))}),I=(a(59),function(e){return c.a.createElement("div",{className:"about-education-list-item"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("a",{href:e.link,target:"_blank"},c.a.createElement("img",{src:e.imgSrc}),e.children)))}),L=(a(61),function(e){return c.a.createElement("div",{className:"about-education-list-item-title"},c.a.createElement(y,{aboutRef:e.aboutRef},e.children))}),O=function(e){return c.a.createElement("div",{className:"about-education"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement(w,{title:c.a.createElement(g,{english:"Education",french:"\xc9ducation"}),aboutRef:e.aboutRef})),c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("div",{className:"border"},c.a.createElement(g,{english:"Double degree Keio University and Centrale Marseille",french:"Double dipl\xf4me Keio University et Centrale Marseille"}),c.a.createElement("br",null))),c.a.createElement("div",{className:"one-line"},c.a.createElement("div",{className:"column-left"},c.a.createElement(T,{aboutRef:e.aboutRef},c.a.createElement(g,{english:"Sep 2013 - Sep 2015",french:"Sep 2013 - Sep 2015"}))),c.a.createElement("div",{className:"column-right"},c.a.createElement(L,{aboutRef:e.aboutRef},c.a.createElement("span",{className:"kiona"},c.a.createElement(g,{english:"Master in Fundamental Science and Technology at Keio University",french:"Master en Sciences Fondamentales et Technologie \xe0 Keio University"})),c.a.createElement(g,{english:", Tokyo with MEXT scholarship",french:", Tokyo avec la bourse MEXT"})),c.a.createElement(I,{aboutRef:e.aboutRef,imgSrc:"icons/video-games.png",link:"https://im-lab.net/"},c.a.createElement(g,{english:"Research at Interactive Media Laboratory under Maki Sugimoto",french:"Recherche au laboratoire "}),c.a.createElement("i",null,c.a.createElement(g,{english:"",french:"Interactive Media"})),c.a.createElement(g,{english:"",french:" du professeur Maki Sugimoto"})),c.a.createElement(I,{aboutRef:e.aboutRef,imgSrc:"icons/web-design.png",link:"http://jesto.co.jp/"},c.a.createElement(g,{english:"Internship at Jesto, a web design agency",french:"Stage \xe0 Jesto, une agence de web design"})),c.a.createElement(I,{aboutRef:e.aboutRef,imgSrc:"icons/chemistry.png",link:"https://www.st.keio.ac.jp/en/tprofile/chem/suenaga.html"},c.a.createElement(g,{english:"Research at Natural Product Chemistry Laboratory under Kiyotake Suenaga",french:"Recherche au laboratoire "}),c.a.createElement("i",null,c.a.createElement(g,{english:"",french:"Natural Product Chemistry"})),c.a.createElement(g,{english:"",french:" du professeur Kiyotake Suenaga"})),c.a.createElement(I,{aboutRef:e.aboutRef,imgSrc:"icons/paper.png",link:"https://pubs.acs.org/doi/pdf/10.1021/ol5036722"},c.a.createElement(g,{english:"Paper published by Organic Letters named ",french:"Article scientifique publi\xe9 par Organic Letters intitul\xe9 "}),c.a.createElement("i",null,c.a.createElement(g,{english:"Jahanyne, an Apoptosis-Inducing Lipopeptide from the Marine Cyanobacterium Lyngbya sp.",french:"Jahanyne, an Apoptosis-Inducing Lipopeptide from the Marine Cyanobacterium Lyngbya sp."}))))),c.a.createElement("div",{className:"one-line"},c.a.createElement("div",{className:"column-left"},c.a.createElement(T,{aboutRef:e.aboutRef},c.a.createElement(g,{english:"Sep 2009 - Sep 2011",french:"Sep 2009 - Sep 2011"}))),c.a.createElement("div",{className:"column-right"},c.a.createElement(L,{aboutRef:e.aboutRef},c.a.createElement("span",{className:"kiona"},c.a.createElement(g,{english:"Master in Engineering at Centrale Marseille",french:"Dipl\xf4me de grande \xe9cole d'ing\xe9nieur \xe0 Centrale Marseille"}))),c.a.createElement(I,{aboutRef:e.aboutRef,imgSrc:"icons/dna.png",link:"https://www.a-star.edu.sg/imcb"},c.a.createElement(g,{english:"Internship at Institute of Molecular and Cell Biology, A*STAR, Singapore avec SIGPA scholarship",french:"Stage \xe0 "}),c.a.createElement("i",null,c.a.createElement(g,{english:"",french:"Institute of Molecular and Cell Biology"})),c.a.createElement(g,{english:"",french:", un d\xe9partement de A*STAR \xe0 Singapour, avec la bourse SIGPA"})),c.a.createElement(I,{aboutRef:e.aboutRef,imgSrc:"icons/code.png",link:"https://www.cea.fr/Pages/le-cea/les-centres-cea/cadarache.aspx"},c.a.createElement(g,{english:"School project Mesh4fusion in collaboration with CEA Cadarache (creation of a software meshing tokamaks in a nuclear fusion reactor in Java)",french:"Projet scolaire Mesh4fusion en collaboration avec le CEA de Cadarache (cr\xe9ation d'un logiciel quadrillant les tokamaks dans un r\xe9acteur de fusion nucl\xe9aire en Java)"})))),c.a.createElement("div",{className:"one-line"},c.a.createElement("div",{className:"column-left"},c.a.createElement(T,{aboutRef:e.aboutRef},c.a.createElement(g,{english:"Sep 2011 - Sep 2013",french:"Sep 2011 - Sep 2013"}))),c.a.createElement("div",{className:"column-right"},c.a.createElement(L,{aboutRef:e.aboutRef},c.a.createElement("span",{className:"kiona"},c.a.createElement(g,{english:"Preparatory classes for selective entrance to French Engineering School at Saint Louis, Paris",french:"Classes pr\xe9paratoires PCSI et PC* au lyc\xe9e Saint Louis, Paris"}))))),c.a.createElement("div",{className:"one-line"},c.a.createElement("div",{className:"column-left"},c.a.createElement(T,{aboutRef:e.aboutRef},c.a.createElement(g,{english:"Jun 2009",french:"Jun 2009"}))),c.a.createElement("div",{className:"column-right"},c.a.createElement(L,{aboutRef:e.aboutRef},c.a.createElement("span",{className:"kiona"},c.a.createElement(g,{english:"High school diploma with honors at Petit Val, Sucy en Brie",french:"Baccalaur\xe9at S avec mention tr\xe8s bien en option Europe \xe0 Petit Val, Sucy en Brie"}))))))},A=(a(63),a(65),function(e){return c.a.createElement("div",{className:"hobby"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("img",{src:e.imgSrc}),e.children))}),F=function(e){return c.a.createElement("div",{className:"about-hobbies"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement(w,{title:c.a.createElement(g,{english:"Hobbies",french:"Loisirs"}),aboutRef:e.aboutRef})),c.a.createElement(A,{aboutRef:e.aboutRef,imgSrc:"icons/travel.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Nomad.",french:"Nomade."})}),c.a.createElement(g,{english:"\xa0\xa0 I like to experience different cultures.",french:"\xa0\xa0 J'aime partir \xe0 la d\xe9couverte des cultures du monde."})),c.a.createElement(A,{aboutRef:e.aboutRef,imgSrc:"icons/pizza.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Foodie.",french:"Foodie."})}),c.a.createElement(g,{english:"\xa0\xa0 With an obsession for bread, sushi and pizza.",french:"\xa0\xa0 Avec une obsession pour le bon pain, les sushis et les pizzas."})),c.a.createElement(A,{aboutRef:e.aboutRef,imgSrc:"icons/piano.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Musician",french:"Musicienne."})}),c.a.createElement(g,{english:"\xa0\xa0 since age 7. My favourite composers are Chopin and Schumann. Yes I am a romantic.",french:"\xa0\xa0 Je joue du piano depuis l'\xe2ge de 7 ans. Mes compositeurs pr\xe9f\xe9r\xe9s sont Chopin et Schumann. J'aime \xe0 penser que les romantiques \xe9taient les rock stars de leur \xe9poque."})),c.a.createElement(A,{aboutRef:e.aboutRef,imgSrc:"icons/sport.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Sporty.",french:"Sportive."})}),c.a.createElement(g,{english:"\xa0\xa0 Fitness, yoga, ski, tennis",french:"\xa0\xa0 Fitness, yoga, ski, tennis"})),c.a.createElement(A,{aboutRef:e.aboutRef,imgSrc:"icons/tiny-house.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Minimalist.",french:"Minimaliste."})}),c.a.createElement(g,{english:"\xa0\xa0 With the goal of owning a tiny house one day.",french:"\xa0\xa0 Avec pour objectif d'un jour faire construire ma propre tiny house."})))},M=(a(67),a(69),function(e){return c.a.createElement("div",{className:"language"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement("img",{src:e.imgSrc}),e.children))}),q=function(e){return c.a.createElement("div",{className:"about-languages"},c.a.createElement(y,{aboutRef:e.aboutRef},c.a.createElement(w,{title:c.a.createElement(g,{english:"Languages",french:"Langues"}),aboutRef:e.aboutRef})),c.a.createElement(M,{aboutRef:e.aboutRef,imgSrc:"icons/french-flag.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"French.",french:"Fran\xe7ais."})}),c.a.createElement(g,{english:"\xa0\xa0 My bain mainly functions in French.",french:"\xa0\xa0 Mon cerveau fonctionne principalement en fran\xe7ais."})),c.a.createElement(M,{aboutRef:e.aboutRef,imgSrc:"icons/uk-flag.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"English.",french:"Anglais."})}),c.a.createElement(g,{english:"\xa0\xa0 I used to live and work in London.",french:"\xa0\xa0 Je vivais et travaillais \xe0 Londres."})),c.a.createElement(M,{aboutRef:e.aboutRef,imgSrc:"icons/german-flag.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"German.",french:"Allemand."})}),c.a.createElement(g,{english:"\xa0\xa0 I used to be fluent in German.",french:"\xa0\xa0 Je parlais allemand couramment \xe0 une \xe9poque."})),c.a.createElement(M,{aboutRef:e.aboutRef,imgSrc:"icons/vietnamese-flag.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Vietnamese.",french:"Vietnamien."})}),c.a.createElement(g,{english:"\xa0\xa0 I know when I'm being scammed in a market in H\xe0 N\u1ed9i.",french:"\xa0\xa0 Je sais quand on essaye de m'embobiner au march\xe9 \xe0 H\xe0 N\u1ed9i."})),c.a.createElement(M,{aboutRef:e.aboutRef,imgSrc:"icons/japanese-flag.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Japanese.",french:"Japonais."})}),c.a.createElement(g,{english:"\xa0\xa0 I can ask my way when I'm lost in Tokyo.",french:"\xa0\xa0 Je peux demander mon chemin quand je suis perdue \xe0 Tokyo."})),c.a.createElement(M,{aboutRef:e.aboutRef,imgSrc:"icons/spanish-flag.png"},c.a.createElement(R,{text:c.a.createElement(g,{english:"Spanish.",french:"Espagnol."})}),c.a.createElement(g,{english:"\xa0\xa0 I can order tapas in Barcelona.",french:"\xa0\xa0 Je suis capable de commander des tapas \xe0 Barcelone."})))},D=function(e){var t=e.isVisible?"is-visible":"",a=Object(n.useState)(null),r=Object(o.a)(a,2),i=r[0],l=r[1];return c.a.createElement("div",{className:"about ".concat(t),ref:l,style:{backgroundImage:"url('noise/noise-black.png')"}},c.a.createElement(v,{isWhite:!0,isAbout:!0}),c.a.createElement(b,{isWhite:!0,isAbout:!0}),c.a.createElement(N,{isWhite:!0,isLeft:e.isVisible,displayedText:e.displayedSquareNameText,setDisplayedText:e.setDisplayedSquareNameText}),c.a.createElement("div",{className:"about-portrait"},c.a.createElement("img",{src:"photos/portrait.png"}),c.a.createElement("div",{className:"photo-credits"},c.a.createElement("a",{href:"https://sorensolkaer.com/",target:"_blank"},c.a.createElement(g,{english:"Photo credits : S\xf8ren Solk\xe6r",french:"Cr\xe9dits photo : S\xf8ren Solk\xe6r"})))),c.a.createElement("div",{className:"about-intro"}),c.a.createElement("div",{className:"about-text"},c.a.createElement(S,{aboutRef:i}),c.a.createElement(C,{aboutRef:i}),c.a.createElement(j,{aboutRef:i}),c.a.createElement(O,{aboutRef:i}),c.a.createElement(q,{aboutRef:i}),c.a.createElement(F,{aboutRef:i}),c.a.createElement(x,{aboutRef:i})))},W=(a(71),a(73),function(e){return c.a.createElement("div",{className:"contact-social"},c.a.createElement("a",{href:e.link,target:"_blank",className:"text"},e.text),c.a.createElement("a",{href:e.link,target:"_blank",className:"text pink"},e.text))}),J=(a(75),function(e){var t=e.isExpanded?"is-expanded":"";return c.a.createElement("svg",{viewBox:"0 0 100 100",className:"expand-icon",onClick:e.onClick},c.a.createElement("g",{id:"layer1",transform:"translate(3,3)"},c.a.createElement("path",{style:{fill:"none",stroke:"#000000",strokeWidth:4,strokeLinecap:"round"},d:"M 50,0 V 100",id:"path10",className:"bar1 ".concat(t)}),c.a.createElement("path",{style:{fill:"none",stroke:"#000000",strokeWidth:4,strokeLinecap:"round"},d:"M 0,50 H 100",id:"path10-9",className:"bar2 ".concat(t)})))}),P=function(e){var t=e.isVisible?"is-visible":"",a=Object(n.useState)(!1),r=Object(o.a)(a,2),i=r[0],l=r[1],s=i?"is-social-visible":"";return c.a.createElement("div",{className:"contact ".concat(t)},c.a.createElement("div",{className:"contact-background",style:{backgroundImage:"url('noise/noise-white.png')"}}),c.a.createElement(v,{isContact:!0}),c.a.createElement(b,{isContact:!0}),c.a.createElement("div",{className:"contact-content"},c.a.createElement("div",{className:"contact-intro"},c.a.createElement("div",{className:"contact-intro-line"},c.a.createElement("div",{className:"contact-intro-line-content"},c.a.createElement(g,{english:"If you have a website project",french:"Si vous avez un projet de site web"}))),c.a.createElement("div",{className:"contact-intro-line"},c.a.createElement("div",{className:"contact-intro-line-content"},c.a.createElement(g,{english:"feel free to contact me",french:"n'h\xe9sitez pas \xe0 me contacter"})))),c.a.createElement("div",{className:"contact-email"},c.a.createElement("div",{className:"contact-email-content"},c.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"contact-email-content-text outline"},"kimanhou@gmail.com"),c.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"contact-email-content-text fill"},"kimanhou@gmail.com")))),c.a.createElement("div",{className:"contact-social-container"},c.a.createElement(J,{onClick:function(){l(!i)},isExpanded:i}),c.a.createElement("div",{className:"contact-social-container-content"},c.a.createElement("div",{className:"contact-social-container-content-moving ".concat(s)},c.a.createElement(W,{text:"INSTAGRAM",link:"https://www.instagram.com/kimanhou/"}),c.a.createElement(W,{text:"GITHUB",link:"https://github.com/kimanhou"}),c.a.createElement(W,{text:"LINKEDIN",link:"https://www.linkedin.com/in/kanguyenlu/"})))))},U=(a(77),function(e){var t=Object(n.useContext)(f),a=Object(n.useContext)(h),r=function(e){a(e)},i=e.isWhite?"is-white":"";return c.a.createElement("div",{className:"languages ".concat(i),onClick:function(){"EN"==t.getShortName()?r(m.FR):r(m.EN)}},c.a.createElement("div",{className:"languages-title"},c.a.createElement(g,{english:"Language",french:"Langue"})),"EN"==t.getShortName()&&c.a.createElement("img",{src:"icons/uk-flag.png"}),"FR"==t.getShortName()&&c.a.createElement("img",{src:"icons/french-flag.png"}))}),V=(a(79),a(81),function(e){return c.a.createElement("div",{className:"footer-social"},c.a.createElement("a",{href:e.link,target:"_blank"},c.a.createElement("img",{src:e.iconUrl})))}),H=function(e){var t,a=!0===e.isDark?"is-dark":"",r=!0===e.isDark?"url('noise/noise-black.png')":"url('noise/noise-white.png')",i=!0===e.isDark?"social/instagram-white.png":"social/instagram.png",l=!0===e.isDark?"social/github-white.png":"social/github.png",s=!0===e.isDark?"social/linkedin-white.png":"social/linkedin.png",m=Object(n.useState)(""),u=Object(o.a)(m,2),f=u[0],h=u[1],d=Object(n.useState)(0),E=Object(o.a)(d,2),g=E[0],p=E[1],N=Object(n.useRef)(null);return t=function(){null!=N.current&&p(Math.floor(N.current.getBoundingClientRect().height))},t=Object(n.useCallback)(t,[]),Object(n.useEffect)(function(){return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),c.a.createElement("footer",{className:"footer ".concat(a)},c.a.createElement("div",{className:"footer-fixed-background",style:{backgroundImage:r}}),c.a.createElement("div",{className:"footer-fixed ".concat(f),ref:N},c.a.createElement("div",{className:"footer-name-and-logo"},c.a.createElement(b,{isFooter:!0,isWhite:e.isDark}),c.a.createElement("div",{className:"footer-name"},c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-right"},"K")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-below"},"i")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-above"},"m\xa0")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-left"},"A")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-right"},"n")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-below"},"h\xa0")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-right"},"N")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-above"},"g")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-left"},"u")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-below"},"y")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-right"},"e")),c.a.createElement("div",{className:"footer-name-letter"},c.a.createElement("div",{className:"from-left"},"n")))),c.a.createElement(v,{isFooter:!0,isWhite:e.isDark}),c.a.createElement("div",{className:"footer-social-container"},c.a.createElement(V,{iconUrl:i,link:"https://www.instagram.com/kimanhou/"}),c.a.createElement(V,{iconUrl:l,link:"https://github.com/kimanhou"}),c.a.createElement(V,{iconUrl:s,link:"https://www.linkedin.com/in/kanguyenlu/"}),c.a.createElement("div",{className:"footer-email-container"},c.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"footer-email"},"kimanhou@gmail.com"),c.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"footer-email pink"},"kimanhou@gmail.com"))),c.a.createElement(U,{isWhite:e.isDark}),c.a.createElement("div",{className:"footer-copyright"},"\xa92020")),c.a.createElement("div",{className:"footer-padding",style:{height:g}},c.a.createElement(k,{onActive:function(){h("active")},onUnactive:function(){h("")},className:"screen-detector"})))},B=(a(83),a(85),function(e){var t=e.isVisible?"is-visible":"",a=["web developer.","web designer.","freelancer.","digital nomad.","minimalist."],r=Object(n.useState)(""),i=Object(o.a)(r,2),l=i[0],s=i[1],m=function e(t,n){s(a[t].slice(0,n)),n+1>a[t].length?setTimeout(function(){return u(t,a[t].length)},2e3):setTimeout(function(){return e(t,n+1)},100)},u=function e(t,n){s(a[t].slice(0,n)),n-1<0?setTimeout(function(){return m((t+1)%a.length,0)},1e3):setTimeout(function(){return e(t,n-1)},100)};return Object(n.useEffect)(function(){setTimeout(function(){return m(0,0)},2e3)},[]),c.a.createElement("div",{className:"i-am ".concat(t)},c.a.createElement("div",{className:"i-am-hello-world"},c.a.createElement("div",{className:"i-am-hello-world-content"},"Hello world,")),c.a.createElement("div",{className:"i-am-i-am"},c.a.createElement("div",{className:"i-am-i-am-content"},"I am a ",l,c.a.createElement("div",{className:"i-am-cursor"}))))}),K=function(e){var t=e.isVisible?"is-visible":"";return c.a.createElement("div",{className:"home ".concat(t)},c.a.createElement("div",{className:"home-background",style:{backgroundImage:"url('noise/noise-white.png')"}}),c.a.createElement(v,{isHome:!0}),c.a.createElement(b,{isHome:!0}),c.a.createElement(N,{displayedText:e.displayedSquareNameText,setDisplayedText:e.setDisplayedSquareNameText,isLeft:!e.isVisible}),c.a.createElement(B,{isVisible:e.isVisible}))},z=(a(87),a(89),function(e){var t=Object(E.d)({path:"/",exact:!0}),a=Object(E.d)("/about"),r=null!==a?"is-route-about":"",i=Object(E.d)("/contact"),l=null!==i?"is-route-contact":"",s=Object(E.d)("/work"),m=null!==s?"is-route-work":"",f=null!==Object(E.d)("/services")?"is-route-services":"",h=null!==a||null!==s,d=Object(n.useState)(u.KimAnh),g=Object(o.a)(d,2),b=g[0],p=g[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-content ".concat(r," ").concat(l," ").concat(m," ").concat(f)},c.a.createElement(K,{isVisible:null!==t,displayedSquareNameText:b,setDisplayedSquareNameText:p}),c.a.createElement(D,{isVisible:null!==a,displayedSquareNameText:b,setDisplayedSquareNameText:p}),c.a.createElement(P,{isVisible:null!==i})),c.a.createElement(H,{isDark:h}))}),G=function(e){return c.a.createElement(l.a,{basename:"."},c.a.createElement(d,null,c.a.createElement(z,null)))};i.a.render(c.a.createElement(G,null),document.getElementById("root"))}]),[[19,2,1]]]);
//# sourceMappingURL=main.17d1879e.chunk.js.map