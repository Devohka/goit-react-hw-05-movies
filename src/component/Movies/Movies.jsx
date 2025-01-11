import { Link, Navigate } from "react-router-dom";
import Header from "../Header/Header";


export default function Movies() {
    const wordFilm = JSON.parse(localStorage.getItem("film"));
    const filmItem = JSON.parse(localStorage.getItem("itemFilm"));
    fetch(`https://api.themoviedb.org/3/search/movie?query=${wordFilm}&include_adult=false&language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa`)
        .then(data =>
            data.json()
        ).then(data =>
            localStorage.setItem("itemFilm", JSON.stringify(data))
        ).catch(error =>
            console.log(error)
        );

    const submitFilm = (e) => {
        localStorage.setItem("film", JSON.stringify(e.target.elements.name.value))

    };

    return (
        <>
            <Header></Header>

            <form onSubmit={submitFilm}>
                <input name="name" />
                <button type="submit">Search</button>
            </form>


            <ul>
                {filmItem.results.length > 0 ? (
                    <>
                        {filmItem.results.map(item => {
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
                    <Navigate to="/goit-react-hw-05-movies/non" replace />
                </>
                )}



            </ul>
        </>
    );
};