"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[569],{769:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(733),n=i(579);function r(){return(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.N_,{to:"/goit-react-hw-05-movies/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.N_,{to:"/goit-react-hw-05-movies/movies",children:"Movies"})})]})})}},569:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var s=i(769),n=i(733),r=i(579);function a(){const e=JSON.parse(localStorage.getItem("item"));return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=a49a343936bdd37a7594fe7daf741bfa").then((e=>e.json())).then((e=>localStorage.setItem("item",JSON.stringify(e)))).catch((e=>console.log(e))),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{}),(0,r.jsx)("h1",{children:"Trending today"}),(0,r.jsx)("ul",{children:e.results.map((e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{children:(0,r.jsxs)(n.N_,{to:"/goit-react-hw-05-movies/movies/".concat(e.id),children:[e.title,e.name]})},e.id)})))})]})}}}]);
//# sourceMappingURL=569.7c559a75.chunk.js.map