import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Film() {
    const { id } = useParams();
    // console.log(id);
    const [item, setItem] = useState({});


    // https://api.themoviedb.org/3/movie/{movie_id}/images
    // console.log(`https://api.themoviedb.org/3/movie/${item.id}/images${item.backdrop_path}`);

    // https://api.themoviedb.org/3/movie/${id}&include_adult=false&language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a49a343936bdd37a7594fe7daf741bfa&language=en-US`)
        .then(data =>
            data.json()
        ).then(data =>
            setItem(data)
            // console.log(data)
        ).catch(error =>
            console.log(error)
        );


    // console.log(item.production_companies[0].logo_path)
    // console.log(item.poster_path)
    return (
        <>
            <Link to="/goit-react-hw-05-movies/">Back Home</Link>



            <div>
                {/* https://image.tmdb.org/t/p/w300/${movieDetails.poster_path} */}

                        <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
   
                <h2>{item.original_title}</h2>
                <h2>Overview</h2>
                <p>{item.overview}</p>
            </div>

            <div>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>



            <Outlet />

        </>
    );
};