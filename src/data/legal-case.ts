import type {Source} from "./source.ts";
import type {Party} from "./party.ts";

type LegalCase = {
    category: string,
    title: string,
    description: string,
    status: string,
    date: Date,
    verdict_date: Date,
    party: Party,
    politician: {
        id: string,
        full_name: string,
    }
    sources: Array<Source>
}


export { type LegalCase }