import { render, screen } from '@testing-library/react';
import type {LegalCase} from "../../../src/data/legal-case.ts";
import Case from "../../../src/components/case/case.tsx";

describe("Case", () => {
    it('displays the legal case title', () => {
        const legalCase : LegalCase = {
            status: "RELAXE",
            sources:[],
            date: null,
            category: "legal_case_category",
            title: "legal_case_title",
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
        render(<Case legalCase={ legalCase } />);
        const title = screen.getByText('legal_case_title');

        expect(title).toBeVisible();
    });

    it('displays the legal case status', () => {
        const legalCase : LegalCase = {
            status: "RELAXE",
            sources:[],
            date: null,
            category: "legal_case_category",
            title: "legal_case_title",
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
        render(<Case legalCase={ legalCase } />);

        const statustTitle = screen.getByText('Statut de l\'affaire');
        const status = screen.getByText('RELAXE');

        expect(statustTitle).toBeVisible();
        expect(status).toBeVisible();
    });

    it('displays the legal case party name', () => {
        const legalCase : LegalCase = {
            status: "RELAXE",
            sources:[],
            date: null,
            category: "legal_case_category",
            title: "legal_case_title",
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
        render(<Case legalCase={ legalCase } />);
        const partyTitle = screen.getByText('Parti');
        const party = screen.getByText('party_name');

        expect(partyTitle).toBeVisible();
        expect(party).toBeVisible();
    });

    it('displays the legal case politician name', () => {
        const legalCase : LegalCase = {
            status: "RELAXE",
            sources:[],
            date: null,
            category: "legal_case_category",
            title: "legal_case_title",
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
        render(<Case legalCase={ legalCase } />);
        const politician = screen.getByText('politician_full_name');

        expect(politician).toBeVisible();
    });

    it('displays the legal case description', () => {
        const legalCase : LegalCase = {
            status: "RELAXE",
            sources:[],
            date: null,
            category: "legal_case_category",
            title: "legal_case_title",
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
        render(<Case legalCase={ legalCase } />);
        const description = screen.getByText('description de l\'affaire');

        expect(description).toBeVisible();
    });

    it('displays the legal case sources', () => {
        const legalCase : LegalCase = {
            status: "RELAXE",
            date: null,
            category: "legal_case_category",
            title: "legal_case_title",
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
            sources:[
                {
                    title: "source_1",
                    publisher: "source_1_publisher",
                    url: "source_1_url",
                    published_at: new Date(2026,0,1),
                    type: "press1"
                },
                {
                    title: "source_2",
                    publisher: "source_2_publisher",
                    url: "source_2_url",
                    published_at: new Date(2026,0,2),
                    type: "press2"
                }
            ],

        }
        render(<Case legalCase={ legalCase } />);
        const link1 = screen.getByText("source_1_publisher - source_1 - 01/01/2026");
        const link2 = screen.getByText("source_2_publisher - source_2 - 02/01/2026");

        expect(link1).toBeVisible();
        expect(link1).toHaveAttribute("href", "source_1_url");

        expect(link2).toBeVisible();
        expect(link2).toHaveAttribute("href", "source_2_url");
    });


    describe('date', () => {
        it('displays the legal case date when there is a date', () => {
            const legalCase : LegalCase = {
                status: "RELAXE",
                sources:[],
                date: new Date(2026,0,1),
                category: "legal_case_category",
                title: "legal_case_title",
                description: 'description de l\'affaire',
                party: {
                    name:  "party_name",
                    id: 1,
                },
                politician: {
                    id: "politician_id",
                    full_name: "politician_full_name",
                },
                verdict_date: new Date(2026,1,2),

            }
            render(<Case legalCase={ legalCase } />);
            const dateTitle = screen.getByText('Date de l\'affaire');
            const date = screen.getByText("01/01/2026");

            expect(date).toBeVisible();
            expect(dateTitle).toBeVisible();
        });

        it('displays - when there is no date', () => {
            const legalCase : LegalCase = {
                status: "RELAXE",
                sources:[],
                date: null,
                category: "legal_case_category",
                title: "legal_case_title",
                description: 'description de l\'affaire',
                party: {
                    name:  "party_name",
                    id: 1,
                },
                politician: {
                    id: "politician_id",
                    full_name: "politician_full_name",
                },
                verdict_date: new Date(2026,1,2),

            }
            render(<Case legalCase={ legalCase } />);
            const dateTitle = screen.getByText('Date de l\'affaire');
            const date = screen.getByText("-");

            expect(date).toBeVisible();
            expect(dateTitle).toBeVisible();
        });
    })

    describe('verdict date', () => {
        it('displays the legal case date when there is a verdict date', () => {
            const legalCase : LegalCase = {
                status: "RELAXE",
                sources:[],
                date: new Date(2026,0,1),
                category: "legal_case_category",
                title: "legal_case_title",
                description: 'description de l\'affaire',
                party: {
                    name:  "party_name",
                    id: 1,
                },
                politician: {
                    id: "politician_id",
                    full_name: "politician_full_name",
                },
                verdict_date: new Date(2026,1,2),

            }
            render(<Case legalCase={ legalCase } />);
            const dateTitle = screen.getByText('Date de l\'affaire');
            const date = screen.getByText("02/02/2026");

            expect(date).toBeVisible();
            expect(dateTitle).toBeVisible();
        });

        it('displays - when there is no verdict_date', () => {
            const legalCase : LegalCase = {
                status: "RELAXE",
                sources:[],
                date: new Date(2016,1,1),
                category: "legal_case_category",
                title: "legal_case_title",
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
            render(<Case legalCase={ legalCase } />);
            const dateTitle = screen.getByText('Date de l\'affaire');
            const date = screen.getByText("-");

            expect(date).toBeVisible();
            expect(dateTitle).toBeVisible();
        });
    })
})
