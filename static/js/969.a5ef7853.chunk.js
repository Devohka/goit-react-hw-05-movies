"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[969],{769:(e,t,i)=>{i.d(t,{A:()=>r});var s=i(733),n=i(579);function r(){return(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.N_,{to:"/goit-react-hw-05-movies/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.N_,{to:"/goit-react-hw-05-movies/movies",children:"Movies"})})]})})}},969:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var s=i(733),n=i(769),r=i(579);function a(){const e=JSON.parse(localStorage.getItem("film")),t=JSON.parse(localStorage.getItem("itemFilm"));fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa")).then((e=>e.json())).then((e=>localStorage.setItem("itemFilm",JSON.stringify(e)))).catch((e=>console.log(e)));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{}),(0,r.jsxs)("form",{onSubmit:e=>{localStorage.setItem("film",JSON.stringify(e.target.elements.name.value))},children:[(0,r.jsx)("input",{name:"name"}),(0,r.jsx)("button",{type:"submit",children:"Search"})]}),(0,r.jsx)("ul",{children:t.results.length>0?(0,r.jsx)(r.Fragment,{children:t.results.map((e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{children:(0,r.jsx)(s.N_,{to:"/goit-react-hw-05-movies/movies/".concat(e.id),children:e.title})},e.id)})))}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.C5,{to:"/goit-react-hw-05-movies/non",replace:!0})})})]})}}}]);
//# sourceMappingURL=969.a5ef7853.chunk.js.map