
// key Api  a49a343936bdd37a7594fe7daf741bfa
// https://api.themoviedb.org/3/trending/all/day?language=en-US

import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";

let itemApp = JSON.parse(localStorage.getItem("item"));
// console.log(itemApp)
export default function Home() {

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
                            <li>
                                <Link to="film" item={item}>{item.title}</Link>
                            </li>
                            <Outlet />
                        </>
                    );
                })}
            </ul>

        </>
    );
}