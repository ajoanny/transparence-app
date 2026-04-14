import {Link} from "react-router-dom";
import SearchBar from "../search-bar/search-bar.tsx";
import { useLocation } from "react-router-dom";

import "./header.css"
import {useState} from "react";

function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => { setMenuOpen(false) }
    return (
        <header className="header">
            <nav className="nav-bar">
                <button className="nav-bar--menu" onClick={() => setMenuOpen(!menuOpen)}>AAA</button>
                <ul className={`nav-bar--list ${menuOpen ? 'menu-open' : ''}` } >
                    <li><Link className={`nav-bar--item ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={closeMenu}>Affaires</Link></li>
                    <li><Link className={`nav-bar--item ${location.pathname === '/a-propos' ? 'active' : ''}`} to="/a-propos"  onClick={closeMenu}>À propos</Link></li>
                </ul>
            </nav>
            <SearchBar></SearchBar>
        </header>
    )
}


export default Header;