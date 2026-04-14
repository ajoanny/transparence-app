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
                <button className="nav-bar--menu" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg aria-hidden="true" fill="#5b5b66" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        {/*Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.*/}
                        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
                    </svg>
                </button>
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