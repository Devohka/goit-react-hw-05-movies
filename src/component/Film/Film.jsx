import { Link } from "react-router-dom";

export default function Film({item}) {
    console.log(item)
    return (
        <>
            <Link to="/">Back Home</Link>
            <img src={`https:${item.backdrop_path}`}/>
            <h2>{item.original_title}</h2>
            <h2>Overview</h2>
            <p>{item.overview}</p>

        </>
    );
};