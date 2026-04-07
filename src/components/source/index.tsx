import type {Source as SourceType} from "../../data/source.ts";

function Source({source, className }: { source: SourceType, className: string }) {
    return (
        <a className={className} href={source.url}>{source.publisher} - {source.title} - {source.published_at.toString()}</a>
    )
}


export default Source
