import type {LegalCase} from "./legal-case.ts";
import type {Pagination} from "./pagination.ts";
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;


type Response<T> = {
    data: T[],
    pagination: Pagination,
}

type Parameters = { search: string , page: number}
class TransparenceApi {
    async legalCases(parameters: Parameters): Promise<Response<LegalCase>> {
        const reponse = await fetch(this.legalCasesUrl(apiUrl, parameters), this.requests())
        const json = await reponse.json()
        return json as Response<LegalCase>;
    }

    legalCasesUrl(api_url: string, parameters: Parameters) {
        const queryParams = Object.entries(parameters)
            .filter(([, value]) => value)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");

        return `${api_url}/api/legal-cases/?${queryParams}`;
    }


    requests() {
        return {
            headers: {
                "Authorization" : `API-KEY ${apiKey}`
            }
        }
    }
}

export default TransparenceApi