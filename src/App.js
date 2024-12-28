import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Movies from "./component/Movies/Movies";
import Film from "./component/Film/Film";
import Cast from "./component/Cast/Cast";
import Reviews from "./component/Reviews/Reviews";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Film />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;