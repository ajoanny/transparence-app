import type {Source as SourceType} from "../../data/source.ts";
import {format} from "date-fns";

function Source({source, className }: { source: SourceType, className: string }) {
    return (
        <a className={className} target="_blank" href={source.url} >{source.publisher} - {source.title} - {format(source.published_at, "dd/MM/yyyy")}</a>
    )
}


export default Source
