import { Link } from "react-router-dom"
import './NavBar.css';

function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
        </nav>
    )
}

export default NavBar;