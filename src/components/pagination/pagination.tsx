import "./pagination.css"
import type {Pagination as PaginationData} from "../../data/pagination.ts";
import {Link, useSearchParams} from "react-router-dom";

function Pagination({ pagination }: { pagination: PaginationData }) {
    const [searchParams] = useSearchParams();
    const search  = searchParams.get("search") || "";

    return (
        <>
            <ul className="pagination--link-list">
                { previousLinks(pagination.page, search) }
            </ul >
            <span className="current-page" aria-current="page">{pagination.page}</span>
            <ul className="pagination--link-list">
                { nextLinks(pagination.page, pagination.pages_count, search) }
            </ul>
        </>
    )
}

const previousLinks = (page: number, search: string) => {
    const startPage = Math.max(1, page - 2)

    const links = []
    if (startPage >= 2) {
        const url = buildUrl({search, page: `${1}`})
        links.push(
            <li><Link key={0} className="pagination--link" to={url}>1</Link></li>,
        )
    }
    if (startPage > 2) {
        links.push(<li aria-hidden="true"><span key={-1}>...</span></li>)
    }
    for (let i = startPage; i < page; i++) {
        const url = buildUrl({search, page: `${i}`})
        links.push((
            <li><Link key={i} className={`pagination--link ${ i == page ?"current-page" : ""}` } to={url}>{i}</Link></li>
        ))
    }
    return links
}

const nextLinks = (page: number, pageCount: number, search: string) => {
    const endPage = Math.min(pageCount, page + 2)

    const links = []

    for (let i = page+1; i <= endPage ; i++) {
        const url = buildUrl({search, page: `${i}`})
        links.push((
            <li><Link key={i} className={`pagination--link ${ i == page ?"current-page" : ""}` } to={url}>{i}</Link></li>
        ))
    }
    if ( endPage< pageCount-1) {
        links.push(<li aria-hidden="true"><span key={-2}>...</span></li>)
    }
    if (endPage< pageCount) {
        const url = buildUrl({search, page: `${pageCount}`})
        links.push(
            <li><Link key={pageCount} className= "pagination--link" to={url}>{pageCount}</Link></li>
        )
    }

    return links
}

const buildUrl = (params: {search: string | null, page: string}) => {
    const queryParams = new URLSearchParams()
    if(params.search)
        queryParams.append("search", params.search)
    if(params.page)
        queryParams.append("page", params.page)

    return `/?${queryParams.toString()}`
}

export default Pagination;