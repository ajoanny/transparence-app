import type {Source} from "./source.ts";
import type {Party} from "./party.ts";

type LegalCase = {
    category: string,
    title: string,
    description: string,
    status: string,
    date: Date | null,
    verdict_date: Date | null,
    party: Party,
    politician: {
        id: string,
        full_name: string,
    }
    sources: Array<Source>
}


export { type LegalCase }