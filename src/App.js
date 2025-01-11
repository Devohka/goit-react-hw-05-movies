import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
const Home = lazy(() => import( "./component/Home/Home"));
const Movies = lazy(() => import( "./component/Movies/Movies"));
const Film = lazy(() => import( "./component/Film/Film"));
const Cast = lazy(() => import( "./component/Cast/Cast"));
const Reviews = lazy(() => import( "./component/Reviews/Reviews"));
function App() {
  return (
    <BrowserRouter>
<Suspense fallback={<p>Is loading</p>}>
  <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Home />} />
        <Route path="/goit-react-hw-05-movies/non" element={<Movies />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route path="/goit-react-hw-05-movies/movies/:id" element={<Film />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
</Suspense>
      

    </BrowserRouter>
  );
}

export default App;
