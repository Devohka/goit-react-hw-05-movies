"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[265],{265:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(733),n=s(579);function o(){const{id:e}=(0,a.g)();console.log(e),fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1&api_key=a49a343936bdd37a7594fe7daf741bfa")).then((e=>e.json())).then((e=>localStorage.setItem("reviews",JSON.stringify(e)))).catch((e=>console.log(e)));const t=JSON.parse(localStorage.getItem("reviews"));return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{children:t.results.map((e=>(0,n.jsxs)("li",{children:[(0,n.jsx)("h2",{children:e.author}),(0,n.jsx)("p",{children:e.content})]},e.id)))})})}}}]);
//# sourceMappingURL=265.c072654b.chunk.js.map