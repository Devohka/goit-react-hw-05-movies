"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[569],{769:(e,i,t)=>{t.d(i,{A:()=>r});var s=t(733),n=t(579);function r(){return(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.N_,{to:"/goit-react-hw-05-movies/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.N_,{to:"/goit-react-hw-05-movies/movies",children:"Movies"})})]})})}},569:(e,i,t)=>{t.r(i),t.d(i,{default:()=>o});var s=t(769),n=t(733),r=t(43),c=t(579);function o(){const[e,i]=(0,r.useState)([]);return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=a49a343936bdd37a7594fe7daf741bfa").then((e=>e.json())).then((e=>i(e.results))).catch((e=>console.log(e))),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.A,{}),(0,c.jsx)("h1",{children:"Trending today"}),(0,c.jsx)("ul",{children:e.map((e=>(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/goit-react-hw-05-movies/movies/".concat(e.id),children:e.original_title})},e.id)})))})]})}}}]);
//# sourceMappingURL=569.e0f8ca3b.chunk.js.map