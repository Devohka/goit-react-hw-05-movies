"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[35],{35:(e,i,t)=>{t.r(i),t.d(i,{default:()=>l});var s=t(733),o=t(43),a=t(579);function l(){const[e,i]=(0,o.useState)(JSON.parse(localStorage.getItem("filmFull")));return console.log(e),console.log("https://api.themoviedb.org/3/movie/".concat(e.id,"/images").concat(e.backdrop_path)),fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"?api_key=a49a343936bdd37a7594fe7daf741bfa&language=en-US")).then((e=>e.json())).then((e=>localStorage.setItem("filmFull",JSON.stringify(e)))).catch((e=>console.log(e))),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.N_,{to:"/goit-react-hw-05-movies/",children:"Back Home"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.original_title}),(0,a.jsx)("h2",{children:e.original_title}),(0,a.jsx)("h2",{children:"Overview"}),(0,a.jsx)("p",{children:e.overview})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Additional information"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.N_,{to:"cast",children:"Cast"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.N_,{to:"reviews",children:"Reviews"})})]})]}),(0,a.jsx)(s.sv,{})]})}}}]);
//# sourceMappingURL=35.e4be83e4.chunk.js.map