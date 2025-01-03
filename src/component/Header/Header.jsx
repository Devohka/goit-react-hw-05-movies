
import { Link } from "react-router-dom";

export default function Header() {
    
    return (

        <nav>
            <ul>
                <li>
                    <Link to="/goit-react-hw-05-movies/">Home</Link>
                </li>
                <li>
                    <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
                </li>

            </ul>
            
        </nav>

    );
}

