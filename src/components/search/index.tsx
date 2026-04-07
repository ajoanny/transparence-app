import "./search.css"
import searchIcon from "../../assets/magnifying-glass.svg";
import clearIcon from "../../assets/xmark.svg";
import {type ChangeEvent, useEffect, useState} from "react";

function SearchBar({ onSearch }:{ onSearch: (text: string) => void }) {
    const [text, setText] = useState("");
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const clearSearch = () => {
        setText("");
        onSearch("");
    }

    useEffect(() => {
        console.log(`OnSearch SearchBar /${text}/`)
        const timeout = setTimeout(() => onSearch(text), 1000)
        return () => clearTimeout(timeout)
    },[text, onSearch])

    return (
        <div className="search-bar">
            <div className="search-field">
                <button className="search-button" aria-label="Rechercher" onClick={() => onSearch(text) }>
                    <img src={searchIcon} alt=""/>
                </button>
                <label htmlFor="search" className="sr-only">Rechercher</label>
                <input
                    onChange={onChange}
                    value={text}
                    className="search-input"
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Rechercher par text"
                />
                <button className="clear-button" aria-label="Vider" onClick={clearSearch} disabled={ text === ""}><img src={clearIcon} alt=""/></button>
            </div>
        </div>
    )
}

export default SearchBar