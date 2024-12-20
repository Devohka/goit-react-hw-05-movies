import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./component/Home/Home";
import Movies from "./component/Movies/Movies";
import Film from "./component/Film/Film";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} >
          <Route path='film' element={<Film />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
