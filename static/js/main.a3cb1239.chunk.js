(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{31:function(e,c,t){},44:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),i=t(13),r=t.n(i),l=t(10),n=(t(30),t(31),t(7)),j=t(2),d=t.p+"static/media/pizza-logo.56ac8703.svg",o=t(0),b=function(){return Object(o.jsx)(l.b,{to:"/",title:"Home",children:Object(o.jsxs)("div",{className:"header__logo",children:[Object(o.jsx)("img",{src:d,alt:"Pizza logo"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"React Pizza"}),Object(o.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})})},m=t(23),p=t.p+"static/media/slider1.6c4e9a1f.jpeg",h=t.p+"static/media/slider2.1f360c45.jpeg",x=t.p+"static/media/slider3.c72070a6.jpeg",O=t.p+"static/media/slider4.5d27823e.jpeg",g=t.p+"static/media/slider5.e2a59594.jpeg",u=function(){return Object(o.jsxs)(m.Carousel,{autoPlay:!0,autoFocus:!0,interval:7e3,showArrows:!0,showThumbs:!1,showStatus:!1,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:80,selectedItem:2,transitionTime:1e3,useKeyboardArrows:!0,children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"banner-photo",alt:"slider3",src:x})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"banner-photo",alt:"slider1",src:p})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"banner-photo",alt:"slider4",src:O})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"banner-photo",alt:"slider5",src:g})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"banner-photo",alt:"slider2",src:h})})]})},f=t(45),z=function(e){var c=e.categoryNames,t=Object(s.useState)(0),a=Object(n.a)(t,2),i=a[0],r=a[1];return Object(o.jsx)("div",{className:"categories",children:Object(o.jsx)("ul",{children:c&&c.map((function(e,c){return Object(o.jsx)("li",{className:i===c?"active":"",onClick:function(){return r(c)},children:e},Object(f.a)())}))})})},v=function(e){var c=e.name,t=e.price,s=e.imageUrl;return Object(o.jsxs)("div",{className:"pizza-block",children:[Object(o.jsx)("img",{className:"pizza-block__image",src:s,alt:"Pizza"}),Object(o.jsx)("h4",{className:"pizza-block__title",children:c}),Object(o.jsxs)("div",{className:"pizza-block__selector",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"active",children:"\u0442\u043e\u043d\u043a\u043e\u0435"}),Object(o.jsx)("li",{children:"\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"active",children:"26 \u0441\u043c."}),Object(o.jsx)("li",{children:"30 \u0441\u043c."}),Object(o.jsx)("li",{children:"40 \u0441\u043c."})]})]}),Object(o.jsxs)("div",{className:"pizza-block__bottom",children:[Object(o.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",Object(o.jsx)("span",{className:"pizza-block__color",children:t})," uah"]}),Object(o.jsxs)("div",{className:"button button--outline button--add",children:[Object(o.jsx)("i",{className:"fas fa-plus"}),Object(o.jsx)("span",{className:"title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(o.jsx)("span",{className:"number",children:"2"})]})]})]})},N=function(e){var c=e.sortNames,t=Object(s.useState)(!1),a=Object(n.a)(t,2),i=a[0],r=a[1],l=Object(s.useState)(0),j=Object(n.a)(l,2),d=j[0],b=j[1],m=Object(s.useRef)(),p=c[d],h=function(e){e.path.includes(m.current)||r(!1)};return Object(s.useEffect)((function(){document.body.addEventListener("click",h)}),[]),Object(o.jsxs)("div",{ref:m,className:"sort",children:[Object(o.jsxs)("div",{className:"sort__label",children:[Object(o.jsx)("i",{className:"".concat(i?"rotated":""," ","fas fa-caret-up")}),Object(o.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(o.jsx)("span",{onClick:function(){return r(!i)},children:p})]}),i&&Object(o.jsx)("div",{className:"sort__popup",children:Object(o.jsx)("ul",{children:c&&c.map((function(e,c){return Object(o.jsx)("li",{className:d===c?"active":"",onClick:function(){return function(e){b(e),r(!1)}(c)},children:e},Object(f.a)())}))})})]})};function _(){return Object(o.jsx)("div",{className:"copyright",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-xl-6 col-lg-6 text-center text-lg-left",children:Object(o.jsx)("div",{className:"copyright__lg-section",children:Object(o.jsxs)("p",{children:["Copyright \xa9 2021, \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b ",Object(o.jsx)("span",{children:"React"})]})})}),Object(o.jsx)("div",{className:"col-xl-6 col-lg-6  d-lg-block text-right",children:Object(o.jsx)("div",{className:"copyright__rg-section",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Home"}),Object(o.jsx)("li",{children:"Terms"}),Object(o.jsx)("li",{children:"Privacy"}),Object(o.jsx)("li",{children:"Policy"}),Object(o.jsx)("li",{children:"Contact"})]})})})]})})}function y(){return Object(o.jsxs)("div",{className:"contact-us",children:[Object(o.jsxs)("div",{className:"contact-us__block",children:[Object(o.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(o.jsxs)("div",{className:"contact-us__text",children:[Object(o.jsx)("h3",{children:"\u041c\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u043c\u0441\u044f \u0442\u0443\u0442"}),Object(o.jsx)("span",{children:"\u041a\u0438\u0435\u0432. \u0423\u043b\u0438\u0446\u0430 \u0420\u0435\u0430\u043a\u0442-\u043f\u0438\u0446\u0446\u0430 28\u0430"})]})]}),Object(o.jsxs)("div",{className:"contact-us__block",children:[Object(o.jsx)("i",{className:"fas fa-phone"}),Object(o.jsxs)("div",{className:"contact-us__text",children:[Object(o.jsx)("h3",{children:"\u041d\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(o.jsx)("span",{children:"+38 (063) 888 99000"})]})]}),Object(o.jsxs)("div",{className:"contact-us__block",children:[Object(o.jsx)("i",{className:"far fa-envelope-open"}),Object(o.jsxs)("div",{className:"contact-us__text",children:[Object(o.jsx)("h3",{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0435 \u043f\u0438\u0441\u044c\u043c\u043e"}),Object(o.jsx)("span",{children:"reactpizza@gmail.com"})]})]})]})}var P=t.p+"static/media/visa.fcedc223.png",k=t.p+"static/media/mastercard.5873e7b7.svg",U=t.p+"static/media/app-store.ec6b1120.svg",I=t.p+"static/media/play-gogle.b52e61a1.svg";function w(){return Object(o.jsx)("div",{className:"main-content pt-3 pb-2",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12",children:Object(o.jsx)(y,{})}),Object(o.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12",children:Object(o.jsxs)("div",{className:"footer-store",children:[Object(o.jsx)("span",{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u0438"}),Object(o.jsxs)("div",{className:"pay",children:[Object(o.jsx)("img",{className:"pay__visa",src:P,alt:"icon-visa"}),Object(o.jsx)("img",{className:"pay__mastercard",src:k,alt:"icon-mastercard"})]}),Object(o.jsx)("span",{children:"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(o.jsxs)("div",{className:"download",children:[Object(o.jsx)("img",{className:"download__with-app-store",src:U,alt:"app-store"}),Object(o.jsx)("img",{className:"download__with-play-gogle",src:I,alt:"play-gogle"})]})]})}),Object(o.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12",children:Object(o.jsxs)("div",{className:"footer-social-icon",children:[Object(o.jsx)("span",{children:"\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u043d\u0430\u0448\u0438 \u0441\u043e\u0446\u0441\u0435\u0442\u0438"}),Object(o.jsxs)("div",{className:"social-icon",children:[Object(o.jsx)("i",{className:"fab fa-facebook-f facebook-bg",title:"Facebook"}),Object(o.jsx)("i",{className:"fab fa-twitter twitter-bg",title:"Twitter"}),Object(o.jsx)("i",{className:"fab fa-google-plus-g google-bg",title:"Gogle+"}),Object(o.jsx)("i",{className:"fab fa-youtube google-bg",title:"YouTube"}),Object(o.jsx)("i",{className:"fab fa-instagram insta-bg",title:"Instagram"})]}),Object(o.jsx)("h3",{children:"1 500 740 900 uah"}),Object(o.jsx)("p",{children:"\u0412\u044b\u0440\u0443\u0447\u043a\u0430 \u0443\u043a\u0440\u0430\u0438\u043d\u0441\u043a\u043e\u0439 \u0441\u0435\u0442\u0438 \u0432 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u044f\u0446\u0435."}),Object(o.jsx)("p",{children:"\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u043c \u2014 2 801 746 884 uah"})]})}),Object(o.jsx)("div",{className:"col-xl-3 col-lg-3 col-md-6 col-sm-12",children:Object(o.jsxs)("div",{className:"footer-logo",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)(b,{})}),Object(o.jsx)("h3",{children:"750 \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u0439"}),Object(o.jsx)("p",{children:"\u0412 10 \u0441\u0442\u0440\u0430\u043d\u0430\u0445, \u043e\u0442 \u0412\u0435\u043b\u0438\u043a\u043e\u0431\u0440\u0438\u0442\u0430\u043d\u0438\u0438 \u0434\u043e \u041a\u0430\u043d\u0430\u0434\u044b."}),Object(o.jsx)("p",{children:"\u041d\u0430\u0448\u0430 \u0446\u0435\u043b\u044c 20 \u0441\u0442\u0440\u0430\u043d \u0438 2000 \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u0439."})]})})]})})}function R(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"footer-section",children:[Object(o.jsx)(w,{}),Object(o.jsx)(_,{})]})})}var S=function(){return Object(o.jsxs)("button",{className:"button button--cart",children:[Object(o.jsx)("span",{children:"1000 uah"}),Object(o.jsx)("div",{className:"button__delimiter"}),Object(o.jsx)("i",{className:"fad fa-shopping-cart"}),Object(o.jsx)("span",{children:"5"})]})};function C(){return Object(o.jsxs)("div",{class:"lds-ripple",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{})]})}var T=t(24),E=["\u0412\u0441\u0435","\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],A=["\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435","\u0446\u0435\u043d\u0430","\u0430\u043b\u0444\u0430\u0432\u0438\u0442"],F=function(e){var c=e.pizzas,t=e.loader;return Object(o.jsxs)("div",{className:"custom-container",children:[Object(o.jsx)(u,{}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"content__top",children:[Object(o.jsx)(z,{categoryNames:E}),Object(o.jsx)(N,{sortNames:A})]}),Object(o.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),t||!c?Object(o.jsx)(C,{}):Object(o.jsx)("div",{className:"content__items",children:c&&c.map((function(e){return Object(o.jsx)(v,Object(T.a)({},e),e.id)}))})]})]})},H=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Igor Pop Ivan"})})},J=[{id:0,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/bc585c01ce0f4472a95b23112d81bc2e_584x584.jpeg",name:"\u041a\u043e\u043b\u0431\u0430\u0441\u043a\u0438 \u0411\u0430\u0440\u0431\u0435\u043a\u044e",types:[0,1],sizes:[26,30,40],price:180,category:5,rating:7},{id:1,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/f2e043398dad4bd5b42f4ef1990439c2_292x292.jpeg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u044b\u0440\u0430",types:[0,1],sizes:[26,30,40],price:180,category:3,rating:8},{id:2,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",name:"\u0426\u044b\u043f\u043b\u0435\u043d\u043e\u043a \u0431\u0430\u0440\u0431\u0435\u043a\u044e",types:[0],sizes:[26,40],price:180,category:1,rating:4},{id:3,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",name:"C\u043b\u0430\u0434\u043a\u0438\u0439 \u0446\u044b\u043f\u043b\u0435\u043d\u043e\u043a",types:[1],sizes:[26,30,40],price:180,category:2,rating:2},{id:4,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",name:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438 \u0441 \u043f\u0435\u0440\u0446\u0435\u043c \ud83c\udf36\ufe0f",types:[0,1],sizes:[26,30,40],price:170,category:0,rating:4},{id:5,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",name:"\u0421\u044b\u0440\u043d\u0430\u044f",types:[0],sizes:[26,40],price:170,category:1,rating:6},{id:6,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",name:"\u041a\u0440\u044d\u0439\u0437\u0438 \u043f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438 \ud83c\udf36\ufe0f",types:[0],sizes:[30,40],price:170,category:2,rating:2},{id:7,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/f208077ef1364c1ca2f11aad875c0fb7_292x292.jpeg",name:"\u041a\u0430\u0440\u0431\u043e\u043d\u0430\u0440\u0430",types:[0,1],sizes:[26,30,40],price:170,category:5,rating:7},{id:8,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",name:"\u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430",types:[0,1],sizes:[26,30,40],price:160,category:4,rating:10},{id:9,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",name:"\u0427\u0435\u0442\u044b\u0440\u0435 \u0441\u0435\u0437\u043e\u043d\u0430",types:[0,1],sizes:[26,30,40],price:160,category:5,rating:10},{id:10,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",name:"\u041e\u0432\u043e\u0449\u0438 \u0438 \u0433\u0440\u0438\u0431\u044b \ud83c\udf31",types:[0,1],sizes:[26,30,40],price:160,category:5,rating:7},{id:11,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",name:"\u041f\u0435\u043f\u043f\u0435\u0440\u043e\u043d\u0438",types:[0,1],sizes:[26,30,40],price:160,category:1,rating:9},{id:12,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/d8235a7151564f018897db8a113dc9c8_292x292.jpeg",name:"\u041f\u0435\u0441\u0442\u043e",types:[0,1],sizes:[26,30,40],price:150,category:3,rating:8},{id:13,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/ff2f661206c14919b69a8472ec9b9f39_292x292.jpeg",name:"\u0414\u043e\u0434\u043e",types:[0,1],sizes:[26,30,40],price:150,category:3,rating:8},{id:14,imageUrl:"https://dodopizza-a.akamaihd.net/static/Img/Products/88cfeba06c7d4863852c483d0817f763_292x292.jpeg",name:"\u041c\u044f\u0441\u043d\u0430\u044f",types:[0,1],sizes:[26,30,40],price:150,category:3,rating:8},{id:15,imageUrl:"https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",name:"\u0427\u0438\u0437\u0431\u0443\u0440\u0433\u0435\u0440-\u043f\u0438\u0446\u0446\u0430",types:[0,1],sizes:[26,30,40],price:150,category:3,rating:8}],L=function(){var e=Object(s.useState)([]),c=Object(n.a)(e,2),t=c[0],a=c[1],i=Object(s.useState)(!1),r=Object(n.a)(i,2),d=r[0],m=r[1];return Object(s.useEffect)((function(){new Promise((function(e){m(!0),setTimeout((function(){e(J),m(!1)}),1e3)})).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsxs)("div",{className:"custom-container",children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"header__cart",children:Object(o.jsx)(l.b,{to:"/cart",children:Object(o.jsx)(S,{})})})]})}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{path:"/cart",component:H,exact:!0}),Object(o.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(o.jsx)(F,{pizzas:t,loader:d})}}),Object(o.jsx)(j.a,{to:"/"})]})}),Object(o.jsx)(R,{})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(L,{})})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a3cb1239.chunk.js.map