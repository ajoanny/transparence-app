import {render, screen} from "@testing-library/react";
import {fetchLegalCases, type Response} from "../../../src/data/transparence-api.ts";
import type { LegalCase } from "../../../src/data/legal-case.ts";
import {MemoryRouter, Route, Routes} from "react-router-dom";

vi.mock('@api/transparence-api.ts', () => ({
    fetchLegalCases: vi.fn(),
}));
import Cases from "../../../src/pages/cases/cases.tsx";

describe('Page About', () => {
    it('display page titles', async () => {
        const response: Response<LegalCase> = {
            data: [],
            pagination: {
                page: 2,
                pages_count: 5,
                total: 25,
                page_size: 5,
            }
        };

        vi.mocked(fetchLegalCases).mockResolvedValue(response);
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Cases  />} />
                </Routes>
            </MemoryRouter>
        )

        const title1 = screen.getByText('Affaires judiciaires');
        const title2 = await screen.findByLabelText('25 résultats, page 2 sur 5');

        expect(title1).toBeVisible()
        expect(title2).toBeVisible()
    })

    it('display information about cases', async () => {
        const response: Response<LegalCase> = {
            data: [
                {
                    status: "RELAXE",
                    sources:[],
                    date: null,
                    category: "legal_case_category",
                    title: "legal_case_1_title",
                    description: 'description de l\'affaire',
                    party: {
                        name:  "party_name",
                        id: 1,
                    },
                    politician: {
                        id: "politician_id",
                        full_name: "politician_full_name",
                    },
                    verdict_date: null,

                },
                {
                    status: "APPEL",
                    sources:[],
                    date: null,
                    category: "legal_case_category",
                    title: "legal_case_2_title",
                    description: 'description de l\'affaire',
                    party: {
                        name:  "party_name",
                        id: 1,
                    },
                    politician: {
                        id: "politician_id",
                        full_name: "politician_full_name",
                    },
                    verdict_date: null,

                }
            ],
            pagination: {
                page: 2,
                pages_count: 5,
                total: 25,
                page_size: 5,
            }
        };

        const mock = vi.mocked(fetchLegalCases).mockResolvedValue(response);
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Cases  />} />
                </Routes>
            </MemoryRouter>
        )

        const case1 = await screen.findByText('legal_case_1_title');
        const case2 = await screen.findByText('legal_case_2_title');

        expect(case1).toBeVisible()
        expect(case2).toBeVisible()
        expect(mock).toHaveBeenCalledWith({ search: "", page: 1 })

    })

    it('call api usign query params', async () => {
        const response: Response<LegalCase> = {
            data: [

            ],
            pagination: {
                page: 1,
                pages_count: 1,
                total: 0,
                page_size: 5,
            }
        };

        const mock = vi.mocked(fetchLegalCases).mockResolvedValue(response);
        render(
            <MemoryRouter initialEntries={['/?search=value&page=12']}>
                <Routes>
                    <Route path="/" element={<Cases  />} />
                </Routes>
            </MemoryRouter>
        )

        expect(mock).toHaveBeenCalledWith({ search: "value", page: 12 })

    })


});