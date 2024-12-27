
import { useParams } from "react-router-dom";


export default function Cast() {
    const item = JSON.parse(localStorage.getItem("cast"));
    const { id } = useParams();
    console.log(id);
    // https://api.themoviedb.org/3/movie/${id}&include_adult=false&language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa`)
        .then(data =>
            data.json()
        ).then(data =>
            localStorage.setItem("cast", JSON.stringify(data))
            // console.log(data)
        ).catch(error =>
            console.log(error)
        );

    return (
        <>
            <ul>
                {item.cast.map(cast => {
                    return (
                        <li key={cast.credit_id}>
                            <im src={cast.profile_path}/>
                            <h2>{cast.character}</h2>
                            <p>{cast.name}</p>
                        </li>
                    );
                })}
            </ul>



        </>
    );
};