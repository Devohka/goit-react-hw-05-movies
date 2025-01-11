import { Link, Navigate} from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";

export default function Movies() {
    const [wordFilm, setWord] = useState("");
    const [filmItem, setFilmItem] = useState([]);
    fetch(`https://api.themoviedb.org/3/search/movie?query=${wordFilm}&include_adult=false&language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa`)
        .then(data =>
            data.json()
        ).then(data =>
            setFilmItem(data.results)
        ).catch(error =>
            console.log(error)
        );

    const submitFilm = (e) => {
        e.preventDefault();
        setWord(e.target.elements.name.value);

    };

   
    return (
        <>
            <Header></Header>

            <form onSubmit={submitFilm}>
                <input name="name" />
                <button type="submit">Search</button>
            </form>


            <ul>
                {filmItem.length > 0 ? (
                    <>
                        {filmItem.map(item => {
                            return (
                                <>
                                    <li key={item.id}>

                                        <Link to={`/goit-react-hw-05-movies/movies/${item.id}`} >{item.title}</Link>

                                    </li>

                                </>
                            );
                        })}
                    </>
                ) : ( 
                    <>
                         <Navigate to="/goit-react-hw-05-movies/non"  replace/>
                   </>
                )}



            </ul>
        </>
    );
};