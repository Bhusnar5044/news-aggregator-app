!function(e){function t(t){for(var o,a,l=t[0],i=t[1],s=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(u&&u(t);f.length;)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;c.push([59,1]),n()}({59:function(e,t,n){"use strict";n.r(t);n(60),n(71),n(72),n(75),n(76),n(78),n(94);var o=document.getElementById("search");function r(){if(""===o.value){s("http://newsapi.org/v2/top-headlines?country=in&apiKey=f95bc5db28994a1da7895f7e38cdb7f3")}}window.onload=function(){document.querySelector(".loader").classList.add("fadeOut"),document.querySelector(".loader").classList.remove("loader"),r()};var c="",a="",l="",i="";function s(e){var t=new Request(e);fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.articles,n="";e.totalResults>0?(t.forEach((function(e){n+='<li class="article"><a href="'+e.url+'" class="article-link" target="_blank"><img class="article-img" src="'+e.urlToImage+'" alt=""></img><h2 class="article-title">'+e.title+'</h2><p class="article-description">'+e.description+'</p><span class="article-author">-'+e.author+"</span></a></li>"})),document.querySelector("#news-articles").innerHTML=n,document.querySelector("#news-articles").style.display="",v(),document.querySelector(".not-found").style.display="none"):0===e.totalResults?(document.querySelector(".not-found").style.display="block",document.querySelector("#news-articles").style.display="none"):r()}))}document.getElementById("getfilter").addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("frm1");c=(c=t.elements[0].value).toLowerCase(),a=t.elements[1].value,l=t.elements[2].value,i=t.elements[3].value,s("http://newsapi.org/v2/top-headlines?country="+c+"&category="+a+"&pageSize=80&from="+l+"&to="+i+"&sortBy=popularity&apiKey=f95bc5db28994a1da7895f7e38cdb7f3")}));var u=document.getElementById("switch");document.getElementsByClassName("article");u.addEventListener("change",(function(e){u.checked?(d(),document.body.classList.add("body-dark"),o.style.backgroundColor="#333333",o.style.color="#b5b5b5"):(d(),document.body.classList.remove("body-dark"),o.style.backgroundColor="#FCFCFC",o.style.color="#333333")}));var d=function(){document.body.classList.add("transition"),window.setTimeout((function(){document.body.classList.remove("transition")}),1e3)},f=document.getElementById("country");fetch("src/jsonData/countries.json").then((function(e){return e.json()})).then((function(e){var t="";e.forEach((function(e){t+='<option value="'+e.code+'">'+e.name+"</option>"})),f.innerHTML=t,f.value="IN"}));var y=document.getElementById("category");fetch("src/jsonData/category.json").then((function(e){return e.json()})).then((function(e){var t="";e.forEach((function(e){t+="<option>"+e.name+"</option>"})),y.innerHTML=t}));var p=document.getElementById("news-articles").children,m=1;function v(){for(var e=0;e<p.length;e++)p[e].style.display="none",e>=12*m-12&&e<12*m&&(p[e].style.display="");document.getElementById("page").innerHTML=m}document.getElementById("prev").addEventListener("click",(function(){m--,v()})),document.getElementById("next").addEventListener("click",(function(){m++,v()}))}});
//# sourceMappingURL=app.36b810e8.js.map