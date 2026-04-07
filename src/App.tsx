
import './App.css'
import TransparenceApi from "./data/transparence-api.ts";
import {useEffect, useState} from "react";
import type {LegalCase} from "./data/legal-case.ts";
import Case from "./components/case";
import SearchBar from "./components/search";

const api = new TransparenceApi()

function App() {

    const [legalCases, setLegalCases] = useState([] as LegalCase[])
    const [search, setSearch] = useState<string>("")
    const onSearch = (text: string) => {
        console.log(`OnSearch APP /${text}/`)
        setSearch(text)
    }
    useEffect(() => {
        console.log("CALL API")
        api.legalCases({ search, page: 1 })
            .then(({ data }) => setLegalCases(data))
            .catch(console.error)
    },[search])

    return (
        <>
            <header className="page-header">
                <SearchBar onSearch={ onSearch }/>
            </header>
            <main>
                {
                    legalCases.map((legalCase, index) => {
                        return <Case legalCase={legalCase} key={index}/>
                    })
                }
            </main>
        </>
    )
}


export default App
