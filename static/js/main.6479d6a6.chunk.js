(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a(75)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=(a(24),a(7)),l=a(2),s=a(4),m=a(16),u=function e(t,a){var n=this;Object(m.a)(this,e),this.getShortName=function(){return n.shortName},this.getLongName=function(){return n.longName},this.shortName=t,this.longName=a};u.EN=new u("EN","English"),u.FR=new u("FR","Fran\xe7ais");var d,h=Object(n.createContext)(u.EN),f=(Object(n.createContext)(function(e){}),function(e){var t="";switch(Object(n.useContext)(h)){case u.FR:t=e.french;break;case u.EN:t=e.english}return i.a.createElement(i.a.Fragment,null,t)}),E=(a(26),function(e){var t=e.isFooter?"is-footer":"",a=e.isWhite?"is-white":"",n=e.isHome?"is-home":"",r=e.isAbout?"is-about":"",c=e.isContact?"is-contact":"",l=e.isWork?"is-work":"",s=e.isServices?"is-services":"";return i.a.createElement(o.b,{to:"/"},i.a.createElement("div",{className:"logo ".concat(t," ").concat(a," ").concat(n," ").concat(r," ").concat(c," ").concat(l," ").concat(s)},i.a.createElement("div",{className:"logo-inside-square"})))}),g=(a(33),a(35),function(e){var t=e.isWhite?"is-white":"";return i.a.createElement("div",{className:"navigation-link ".concat(t)},i.a.createElement("div",{className:"navigation-link-border-container"},i.a.createElement("div",{className:"navigation-link-border-top"})),i.a.createElement(o.b,{to:e.link},i.a.createElement(f,{english:e.titleEnglish,french:e.titleFrench})))}),v=function(e){var t=e.isFooter?"is-footer":"",a=e.isHome?"is-home":"",n=e.isAbout?"is-about":"",r=e.isContact?"is-contact":"",c=e.isWork?"is-work":"",o=e.isServices?"is-services":"";return i.a.createElement("div",{className:"navigation ".concat(t," ").concat(a," ").concat(n," ").concat(r," ").concat(c," ").concat(o)},i.a.createElement(g,{titleFrench:"\xc0 propos",titleEnglish:"About",link:"about",active:!1,isWhite:e.isWhite}),i.a.createElement(g,{titleFrench:"Contact",titleEnglish:"Contact",link:"contact",active:!1,isWhite:e.isWhite}))};a(37);!function(e){e.KimAnh="Kim Anh",e.Nguyen="Ngu yen"}(d||(d={}));var b=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1],o=r?"is-moving":"",s=!0===e.isWhite?"is-white":"",m=!0===e.isLeft?"is-left":"",u=!0===e.isWhite?"url('noise/noise-black.png')":"url('noise/noise-white.png')";return i.a.createElement("div",{className:"square-name ".concat(o," ").concat(s," ").concat(m),onMouseEnter:function(t){!1===r&&(c(!0),e.displayedText===d.KimAnh?setTimeout(function(){return e.setDisplayedText(d.Nguyen)},1e3):setTimeout(function(){return e.setDisplayedText(d.KimAnh)},1e3),setTimeout(function(){c(!1)},2e3))}},i.a.createElement("div",{className:"square-name-text"},i.a.createElement("div",{className:"square-name-text-side"},e.displayedText),i.a.createElement("div",{className:"square-name-cache line"},i.a.createElement("div",{className:"square-name-cache-half one",style:{backgroundImage:u}}),i.a.createElement("div",{className:"square-name-cache-half two",style:{backgroundImage:u}})),i.a.createElement("div",{className:"square-name-cache column"},i.a.createElement("div",{className:"square-name-cache-half three",style:{backgroundImage:u}}),i.a.createElement("div",{className:"square-name-cache-half four",style:{backgroundImage:u}}))))},p=(a(39),a(41),a(43),function(e){return i.a.createElement("span",{className:"about-keyword"},i.a.createElement("span",{className:"about-keyword-background"}),e.text)}),N=function(e){var t=Object(n.useRef)(null),a=Object(n.useCallback)(function(){!function(){var a=t.current.getBoundingClientRect();return e.debug&&(console.log("rect.bottom : ".concat(a.bottom)),console.log("rect.right : ".concat(a.right)),console.log("window.innerHeight : ".concat(window.innerHeight)),console.log("window.innerWidth : ".concat(window.innerWidth)),console.log("document.documentElement.clientHeight : ".concat(document.documentElement.clientHeight)),console.log("document.documentElement.clientWidth : ".concat(document.documentElement.clientWidth))),a.top>=0&&a.left>=0&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&a.right<=(window.innerWidth||document.documentElement.clientWidth)}()?void 0!==e.onUnactive&&e.onUnactive():e.onActive()},[]);return Object(n.useEffect)(function(){return a(),setTimeout(a,100),null!=e.scrollRef?(e.scrollRef.addEventListener("scroll",a,!1),function(){null!=e.scrollRef&&e.scrollRef.removeEventListener("scroll",a,!1)}):(addEventListener("scroll",a,!1),function(){return removeEventListener("scroll",a,!1)})},[e.scrollRef]),i.a.createElement("div",{className:"screen-detector ".concat(e.className),ref:t})},k=(a(45),function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],c=a[1];return i.a.createElement("div",{className:"about-text-title ".concat(r)},i.a.createElement("div",{className:"about-text-title-line-before"}),i.a.createElement("div",{className:"about-text-title-text"},e.title),i.a.createElement("div",{className:"about-text-title-line"},i.a.createElement("div",{className:"about-text-title-line-inside"})),i.a.createElement(N,{scrollRef:e.aboutRef,onActive:function(){c("active")},onUnactive:function(){c("")},className:"screen-detector-about-title"}))}),w=function(e){return i.a.createElement("div",{className:"about-current-status"},i.a.createElement(k,{title:i.a.createElement(f,{english:"Current status",french:"Situation actuelle"}),aboutRef:e.aboutRef}),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"I left London in Septembre 2019 to ",french:"J'ai quitt\xe9 Londres en septembre 2019 pour "}),i.a.createElement(p,{text:i.a.createElement(f,{english:"travel around the world",french:"un tour du monde"})}),i.a.createElement(f,{english:". I started with Europe before making my way to South East Asia. I was in Thailand when the COVID-19 pandemic hit the world and had to return to France at the end of March 2020.",french:". J'ai commenc\xe9 par l'Europe avant de continuer mon chemin vers l'Asie du Sud-Est. J'\xe9tais en Tha\xeflande lorsque la pand\xe9mie de la COVID-19 a frapp\xe9 le monde et j'ai ainsi d\xfb rentrer en France fin mars 2020."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"During lockdown, I was asked by relatives to give a hand on a ",french:"Pendant le confinement, j'ai \xe9t\xe9 sollicit\xe9e par des proches pour donner un coup de main sur un "}),i.a.createElement("a",{href:"http://lescovideastes.fr/",target:"_blank"},i.a.createElement(f,{english:"Wordpress website",french:"site Wordpress"})),i.a.createElement(f,{english:" and to help two local businesses create their website. To do so, I learned ",french:" et aider deux petits commerces \xe0 cr\xe9er leur site web. Pour cela, j'ai appris "}),i.a.createElement(p,{text:i.a.createElement(f,{english:"React",french:"React"})}),i.a.createElement(f,{english:" and Typescript on my own. I also took an online 4 course specialization at Calarts on Coursera to learn more about ",french:" et Typescript en autonomie. J'ai \xe9galement suivi une sp\xe9cialisation en ligne \xe0 Calarts sur Coursera pour en apprendre davantage sur le "}),i.a.createElement(p,{text:i.a.createElement(f,{english:"UX and UI design",french:"design UX et UI"})}),i.a.createElement(f,{english:".",french:"."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"I am looking for ",french:"Je suis \xe0 la recherche d'"}),i.a.createElement(p,{text:i.a.createElement(f,{english:"short opportunities",french:"opportunit\xe9s courtes"})}),i.a.createElement(f,{english:" while waiting for the sanitary situation to improve enough to allow me to keep travelling.",french:" en attendant que la situation sanitaire ne s'am\xe9liore et de pouvoir reprendre les voyages."}))},y=(a(47),function(e){return i.a.createElement("div",{className:"about-work"},i.a.createElement(k,{title:i.a.createElement(f,{english:"Work",french:"Exp\xe9rience"}),aboutRef:e.aboutRef}),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"4 years in London at Soci\xe9t\xe9 G\xe9n\xe9rale as a developer. I worked for the front office team of the Commodities department.",french:"4 ans \xe0 Londres \xe0 la Soci\xe9t\xe9 G\xe9n\xe9rale en tant que d\xe9veloppeuse."}))}),x=(a(49),function(e){return i.a.createElement("div",{className:"about-languages"},i.a.createElement(k,{title:i.a.createElement(f,{english:"Languages",french:"Langues"}),aboutRef:e.aboutRef}),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"My brain mainly functions in French, my dreams and work are usually in English, I used to speak fluently German, my parents speak to me in Vietnamese, I can order food in Spanish, I can ask my way in Japanese.",french:"Mon cerveau fonctionne principalement en fran\xe7ais, je r\xeave et travaille g\xe9n\xe9ralement en anglais, je parlais couramment allemand \xe0 une \xe9poque, mes parents me parlent en vietnamien, je peux commander au restaurant en espagnol et demander mon chemin en japonais."}))}),j=(a(51),function(e){return i.a.createElement("div",{className:"about-hobbies"},i.a.createElement(k,{title:i.a.createElement(f,{english:"Hobbies",french:"Hobbies"}),aboutRef:e.aboutRef}),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Nomad. I like to see how people live around the world.",french:"Nomade. J'aime d\xe9couvrir comment les gens vivent \xe0 travers le monde."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"City girl. I've lived in Paris, Tokyo and London.",french:"Citadine. J'ai v\xe9cu \xe0 Paris, Tokyo et Londres."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Foodie. With an obsession for sushi and pizza.",french:"Foodie. Avec une obsession pour le bon pain, les sushis et les pizzas."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Musician since age 7. My favourite composers are Chopin and Schumann. Yes I am a romantic.",french:"Je joue du piano depuis l'\xe2ge de 7 ans. Mes compositeurs pr\xe9f\xe9r\xe9s sont Chopin et Schumann. J'aime \xe0 penser que les romantiques \xe9taient les rock stars de leur \xe9poque."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Explorer. Be it a famous hike or a new restaurant in town, I like to try new things.",french:"Exploratrice. Que ce soit une randonn\xe9e connue ou un nouveau restaurant dans le quartier, j'aime exp\xe9rimenter de nouvelles choses."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Minimalist. With the goal of owning a tiny house one day.",french:"Minimaliste. Avec pour objectif de faire construire ma propre tiny house un jour."}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Sportive. Fitness, yoga, ski, tennis",french:"Sportive. Fitness, yoga, ski, tennis"}))}),S=(a(53),function(e){return i.a.createElement("div",{className:"about-hobbies"},i.a.createElement(k,{title:i.a.createElement(f,{english:"Education",french:"\xc9ducation"}),aboutRef:e.aboutRef}),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Master at Keio University, Tokyo",french:"Master \xe0 l'universit\xe9 de Keio, Tokyo"}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Master at Centrale Marseille, Marseille",french:"Dipl\xf4me de grand \xe9cole d'ing\xe9nieur \xe0 Centrale Marseille, Marseille"}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"Undergraduate at Saint Louis, Paris",french:"PCSI, PC* au lyc\xe9e Saint Louis, Paris"}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(f,{english:"High school graduation with honors at Petit Val, Sucy en Brie",french:"Baccalaur\xe9at S avec mention tr\xe8s bien en option Europe \xe0 Petit Val, Sucy en Brie"}))}),I=(a(55),function(e){return i.a.createElement("div",{className:"about-hobbies"},i.a.createElement(k,{title:i.a.createElement(f,{english:"Personal projects",french:"Projets personnels"}),aboutRef:e.aboutRef}),"\xa0\xa0\xa0\xa0",i.a.createElement(p,{text:i.a.createElement(f,{english:"Portfolio",french:"Portfolio"})}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(p,{text:i.a.createElement(f,{english:"Coffee",french:"Coffee"})}),i.a.createElement("br",null),"\xa0\xa0\xa0\xa0",i.a.createElement(p,{text:i.a.createElement(f,{english:"Corsica",french:"Corse"})}))}),C=function(e){var t=e.isVisible?"is-visible":"",a=Object(n.useState)(null),r=Object(l.a)(a,2),c=r[0],o=r[1];return i.a.createElement("div",{className:"about ".concat(t),ref:o,style:{backgroundImage:"url('noise/noise-black.png')"}},i.a.createElement(v,{isWhite:!0,isAbout:!0}),i.a.createElement(E,{isWhite:!0,isAbout:!0}),i.a.createElement(b,{isWhite:!0,isLeft:e.isVisible,displayedText:e.displayedSquareNameText,setDisplayedText:e.setDisplayedSquareNameText}),i.a.createElement("div",{className:"about-portrait"},i.a.createElement("img",{src:"photos/portrait-blur.png"}),i.a.createElement("div",{className:"photo-credits"},i.a.createElement("a",{href:"https://sorensolkaer.com/",target:"_blank"},i.a.createElement(f,{english:"Photo credits : S\xf8ren Solk\xe6r",french:"Cr\xe9dits photo : S\xf8ren Solk\xe6r"})))),i.a.createElement("div",{className:"about-intro"},i.a.createElement(f,{english:"I don't like the question ",french:"Je n'aime pas la question "}),i.a.createElement("i",null,i.a.createElement(f,{english:"\u201c Where do you come from ? \u201d",french:"\u201c D'o\xf9 viens-tu ? \u201d"})),i.a.createElement(f,{english:". It could have so many meanings depending who is asking and when : Where do you live ? Where did you grow up ? Where were you born ? Where did your parents grow up ? To all of these questions, I have a different answer.",french:". "})),i.a.createElement("div",{className:"about-text"},i.a.createElement(w,{aboutRef:c}),i.a.createElement(y,{aboutRef:c}),i.a.createElement(S,{aboutRef:c}),i.a.createElement(x,{aboutRef:c}),i.a.createElement(j,{aboutRef:c}),i.a.createElement(I,{aboutRef:c})))},T=(a(57),a(59),function(e){return i.a.createElement("div",{className:"contact-social"},i.a.createElement("a",{href:e.link,target:"_blank",className:"text"},e.text),i.a.createElement("a",{href:e.link,target:"_blank",className:"text pink"},e.text))}),R=(a(61),function(e){var t=e.isExpanded?"is-expanded":"";return i.a.createElement("svg",{viewBox:"0 0 100 100",className:"expand-icon",onClick:e.onClick},i.a.createElement("g",{id:"layer1",transform:"translate(3,3)"},i.a.createElement("path",{style:{fill:"none",stroke:"#000000",strokeWidth:4,strokeLinecap:"round"},d:"M 50,0 V 100",id:"path10",className:"bar1 ".concat(t)}),i.a.createElement("path",{style:{fill:"none",stroke:"#000000",strokeWidth:4,strokeLinecap:"round"},d:"M 0,50 H 100",id:"path10-9",className:"bar2 ".concat(t)})))}),O=function(e){var t=e.isVisible?"is-visible":"",a=Object(n.useState)(!1),r=Object(l.a)(a,2),c=r[0],o=r[1],s=c?"is-social-visible":"";return i.a.createElement("div",{className:"contact ".concat(t)},i.a.createElement("div",{className:"contact-background",style:{backgroundImage:"url('noise/noise-white.png')"}}),i.a.createElement(v,{isContact:!0}),i.a.createElement(E,{isContact:!0}),i.a.createElement("div",{className:"contact-content"},i.a.createElement("div",{className:"contact-intro"},i.a.createElement("div",{className:"contact-intro-line"},i.a.createElement("div",{className:"contact-intro-line-content"},i.a.createElement(f,{english:"If you have a website project",french:"Si vous avez un projet de site web"}))),i.a.createElement("div",{className:"contact-intro-line"},i.a.createElement("div",{className:"contact-intro-line-content"},i.a.createElement(f,{english:"feel free to contact me",french:"n'h\xe9sitez pas \xe0 me contacter"})))),i.a.createElement("div",{className:"contact-email"},i.a.createElement("div",{className:"contact-email-content"},i.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"contact-email-content-text outline"},"kimanhou@gmail.com"),i.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"contact-email-content-text fill"},"kimanhou@gmail.com")))),i.a.createElement("div",{className:"contact-social-container"},i.a.createElement(R,{onClick:function(){o(!c)},isExpanded:c}),i.a.createElement("div",{className:"contact-social-container-content"},i.a.createElement("div",{className:"contact-social-container-content-moving ".concat(s)},i.a.createElement(T,{text:"INSTAGRAM",link:"https://www.instagram.com/kimanhou/"}),i.a.createElement(T,{text:"GITHUB",link:"https://github.com/kimanhou"}),i.a.createElement(T,{text:"LINKEDIN",link:"https://www.linkedin.com/in/kanguyenlu/"})))))},W=(a(63),a(65),function(e){return i.a.createElement("div",{className:"footer-social"},i.a.createElement("a",{href:e.link,target:"_blank"},i.a.createElement("img",{src:e.iconUrl})))}),q=function(e){var t,a=!0===e.isDark?"is-dark":"",r=!0===e.isDark?"url('noise/noise-black.png')":"url('noise/noise-white.png')",c=!0===e.isDark?"social/instagram-white.png":"social/instagram.png",o=!0===e.isDark?"social/github-white.png":"social/github.png",s=!0===e.isDark?"social/linkedin-white.png":"social/linkedin.png",m=Object(n.useState)(""),u=Object(l.a)(m,2),d=u[0],h=u[1],f=Object(n.useState)(0),g=Object(l.a)(f,2),b=g[0],p=g[1],k=Object(n.useRef)(null);return t=function(){null!=k.current&&p(Math.floor(k.current.getBoundingClientRect().height))},t=Object(n.useCallback)(t,[]),Object(n.useEffect)(function(){return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),i.a.createElement("footer",{className:"footer ".concat(a)},i.a.createElement("div",{className:"footer-fixed-background",style:{backgroundImage:r}}),i.a.createElement("div",{className:"footer-fixed ".concat(d),ref:k},i.a.createElement("div",{className:"footer-name-and-logo"},i.a.createElement(E,{isFooter:!0,isWhite:e.isDark}),i.a.createElement("div",{className:"footer-name"},i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-right"},"K")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-below"},"i")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-above"},"m\xa0")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-left"},"A")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-right"},"n")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-below"},"h\xa0")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-right"},"N")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-above"},"g")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-left"},"u")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-below"},"y")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-right"},"e")),i.a.createElement("div",{className:"footer-name-letter"},i.a.createElement("div",{className:"from-left"},"n")))),i.a.createElement(v,{isFooter:!0,isWhite:e.isDark}),i.a.createElement("div",{className:"footer-social-container"},i.a.createElement(W,{iconUrl:c,link:"https://www.instagram.com/kimanhou/"}),i.a.createElement(W,{iconUrl:o,link:"https://github.com/kimanhou"}),i.a.createElement(W,{iconUrl:s,link:"https://www.linkedin.com/in/kanguyenlu/"}),i.a.createElement("div",{className:"footer-email-container"},i.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"footer-email"},"kimanhou@gmail.com"),i.a.createElement("a",{href:"mailto:kimanhou@gmail.com",className:"footer-email pink"},"kimanhou@gmail.com"))),i.a.createElement("div",{className:"footer-copyright"},"\xa92020")),i.a.createElement("div",{className:"footer-padding",style:{height:b}},i.a.createElement(N,{onActive:function(){h("active")},onUnactive:function(){h("")},className:"screen-detector"})))},A=(a(67),a(69),function(e){var t=e.isVisible?"is-visible":"",a=["web developer.","web designer.","freelancer.","digital nomad.","minimalist."],r=Object(n.useState)(""),c=Object(l.a)(r,2),o=c[0],s=c[1],m=function e(t,n){s(a[t].slice(0,n)),n+1>a[t].length?setTimeout(function(){return u(t,a[t].length)},2e3):setTimeout(function(){return e(t,n+1)},100)},u=function e(t,n){s(a[t].slice(0,n)),n-1<0?setTimeout(function(){return m((t+1)%a.length,0)},1e3):setTimeout(function(){return e(t,n-1)},100)};return Object(n.useEffect)(function(){setTimeout(function(){return m(0,0)},2e3)},[]),i.a.createElement("div",{className:"i-am ".concat(t)},i.a.createElement("div",{className:"i-am-hello-world"},i.a.createElement("div",{className:"i-am-hello-world-content"},"Hello world,")),i.a.createElement("div",{className:"i-am-i-am"},i.a.createElement("div",{className:"i-am-i-am-content"},"I am a ",o,i.a.createElement("div",{className:"i-am-cursor"}))))}),L=function(e){var t=e.isVisible?"is-visible":"";return i.a.createElement("div",{className:"home ".concat(t)},i.a.createElement("div",{className:"home-background",style:{backgroundImage:"url('noise/noise-white.png')"}}),i.a.createElement(v,{isHome:!0}),i.a.createElement(E,{isHome:!0}),i.a.createElement(b,{displayedText:e.displayedSquareNameText,setDisplayedText:e.setDisplayedSquareNameText,isLeft:!e.isVisible}),i.a.createElement(A,{isVisible:e.isVisible}))},D=(a(71),a(73),function(e){var t=Object(s.d)({path:"/",exact:!0}),a=Object(s.d)("/about"),r=null!==a?"is-route-about":"",c=Object(s.d)("/contact"),o=null!==c?"is-route-contact":"",m=Object(s.d)("/work"),u=null!==m?"is-route-work":"",h=null!==Object(s.d)("/services")?"is-route-services":"",f=null!==a||null!==m,E=Object(n.useState)(d.KimAnh),g=Object(l.a)(E,2),v=g[0],b=g[1];return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-content ".concat(r," ").concat(o," ").concat(u," ").concat(h)},i.a.createElement(L,{isVisible:null!==t,displayedSquareNameText:v,setDisplayedSquareNameText:b}),i.a.createElement(C,{isVisible:null!==a,displayedSquareNameText:v,setDisplayedSquareNameText:b}),i.a.createElement(O,{isVisible:null!==c})),i.a.createElement(q,{isDark:f}))}),M=function(e){return i.a.createElement(o.a,{basename:"."},i.a.createElement(D,null))};c.a.render(i.a.createElement(M,null),document.getElementById("root"))}]),[[19,2,1]]]);
//# sourceMappingURL=main.6479d6a6.chunk.js.map