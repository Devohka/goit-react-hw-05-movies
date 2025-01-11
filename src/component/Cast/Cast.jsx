
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Cast() {
   const [item, setItem] = useState([]);
    const { id } = useParams();
    // console.log(id);
    // https://api.themoviedb.org/3/movie/${id}&include_adult=false&language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=a49a343936bdd37a7594fe7daf741bfa`)
        .then(data =>
            data.json()
        ).then(data =>
            setItem(data.cast)
            // console.log(data)
        ).catch(error =>
            console.log(error)
        );
 
    return (
        <>
            <ul>
                {item.map(cast => {
                    return (
                        <li key={cast.credit_id}>
                            <im src={cast.profile_path} />
                            <h2>{cast.character}</h2>
                            <p>{cast.name}</p>
                        </li>
                    );
                })}
            </ul>



        </>
    );
};