import { Link } from "react-router-dom"
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">All Articles</Link>
            <Link to="/topics" className="nav-link">Topics</Link>
        </nav>
    )
}

export default NavBar;