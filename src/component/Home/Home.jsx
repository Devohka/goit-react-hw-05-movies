
// key Api  a49a343936bdd37a7594fe7daf741bfa
// https://api.themoviedb.org/3/trending/all/day?language=en-US

import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

// console.log(itemApp)
export default function Home() {
const [itemApp, itemAppSet] = useState(JSON.parse(localStorage.getItem("item")));
    fetch("https://api.themoviedb.org/3/trending/all/day?api_key=a49a343936bdd37a7594fe7daf741bfa")
        .then(data =>
            data.json()
        ).then(data =>
            localStorage.setItem("item", JSON.stringify(data))
        ).catch(error =>
            console.log(error)
        );



    return (
        <>
            <Header></Header>

            <h1>Trending today</h1>
            <ul>
                {itemApp.results.map(item => {
                    return (
                        <>
                            <li key={item.id}>
                                <Link to={`movies/${item.id}`} >{item.original_title}</Link>
                            </li>
                        </>
                    );
                })}
            </ul>

        </>
    );
}