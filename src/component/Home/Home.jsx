
// key Api  a49a343936bdd37a7594fe7daf741bfa
// https://api.themoviedb.org/3/trending/all/day?language=en-US

import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";


// console.log(itemApp)
export default function Home() {
    // const itemApp = JSON.parse(localStorage.getItem("item"));
    const [itemApp, setItemApp] = useState([]);

    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=a49a343936bdd37a7594fe7daf741bfa")
        .then(data =>
            data.json()
        ).then(data =>
            setItemApp(data.results)
        ).catch(error =>
            console.log(error)
        );

// console.log(itemApp)

    return (
        <>
            <Header></Header>

            <h1>Trending today</h1>
            <ul>
                {itemApp.map(item => {
                    return (
                        <>
                            <li key={item.id}>
                                <Link to={`/goit-react-hw-05-movies/movies/${item.id}`} >
                                   {item.original_title}
                                   {item.original_name}
                                </Link>
                            </li>
                        </>
                    );
                })}
            </ul>

        </>
    );
}