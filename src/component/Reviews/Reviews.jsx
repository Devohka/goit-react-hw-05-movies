
import { useParams } from "react-router-dom";


export default function Reviews() {

    const { id } = useParams();
    console.log(id);
    // https://api.themoviedb.org/3/movie/${id}&include_adult=false&language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=a49a343936bdd37a7594fe7daf741bfa`)
        .then(data =>
            data.json()
        ).then(data =>
            localStorage.setItem("reviews", JSON.stringify(data))
            // console.log(data)
        ).catch(error =>
            console.log(error)
        );
    const item = JSON.parse(localStorage.getItem("reviews"));
    return (
        <>
            <ul>
                {item.results.map(reviews => {
                    return (
                        <li key={reviews.id}>
                            <h2>{reviews.author}</h2>
                            <p>{reviews.content}</p>
                        </li>
                    );
                })}
            </ul>



        </>
    );
};