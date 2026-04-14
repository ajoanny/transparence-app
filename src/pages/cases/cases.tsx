import Case from "../../components/case/case.tsx";
import { useEffect, useState} from "react";
import type {LegalCase} from "../../data/legal-case.ts";
import { useSearchParams } from "react-router-dom";
import { fetchLegalCases } from "@api/transparence-api.ts";
import "./cases.css"
import type {Pagination as PaginationData} from "../../data/pagination.ts";
import Pagination from "../../components/pagination/pagination.tsx";
import {showNotification} from "../../components/notification/store.ts";

const defaultPagination = {page: 1, total: 0, page_size: 0, pages_count: 1 };

function Cases() {
    const [searchParams] = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;
    const search = searchParams.get("search") || "";

    const [legalCases, setLegalCases] = useState([] as LegalCase[])
    const [pagination, setPagination] = useState<PaginationData>(defaultPagination)


    useEffect(() => {
        fetchLegalCases({ search, page })
            .then(({ data, pagination }) => {
                setLegalCases(data)
                setPagination(pagination)
            })
            .catch(() => {
                showNotification("Oups ! Une erreur est survenue !")
            })
    },[search, page])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    },[legalCases])

    return (
        <>
            <h1 className="cases--title">Affaires judiciaires</h1>
            <h2 className="cases--sub-title" aria-label={ariaLabel(pagination)}>
                {subtitle(pagination)}
            </h2>
            { results(legalCases, pagination) }
        </>
    )
}

const results = (legalCases: LegalCase[], pagination: PaginationData) => {
    if(pagination.total === 0) {
        return <p className="no-results">Aucun résultat</p>
    }
    return (
        <>
            <header className='pagination'><Pagination pagination={pagination}/></header>
            {
                legalCases.map((legalCase, index) => {
                    return <Case legalCase={legalCase} key={index}/>
                })
            }
            <footer className='pagination'><Pagination pagination={pagination}/></footer>
        </>
    )
}

const subtitle = (pagination: PaginationData) => {

    return `${pagination.total} résultat${pagination.total > 1 ? 's' : ''} - page ${pagination.page} / ${pagination.pages_count}`
}

const ariaLabel = (pagination: PaginationData ) => {
    return `${pagination.total} résultat${pagination.total > 1 ? 's' : ''}, page ${pagination.page} sur ${pagination.pages_count}`
}

export default Cases