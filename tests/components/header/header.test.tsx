import {render, screen, waitFor} from "@testing-library/react";
import Header from "../../../src/components/header/header.tsx";
import {MemoryRouter, Route, Routes, useLocation} from "react-router-dom";
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";

const SearchRedirect = () => {
    const { search } = useLocation()
    return (
        <p>{search}</p>
    )
}

describe('Header', () => {

    it('display menu', async () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        const menu = screen.getByLabelText('Ouvrir le menu');
        const caseLink = screen.getByText('Affaires');
        const aboutLink = screen.getByText('À propos');

        expect(menu).toBeVisible()
        expect(caseLink).toBeVisible()
        expect(caseLink).toHaveAttribute("href", "/")
        expect(aboutLink).toBeVisible()
        expect(aboutLink).toHaveAttribute("href", "/a-propos")
    })

    it('display the search input', async () => {

        render(
            <MemoryRouter initialEntries={['/form']}>
                <Routes>
                    <Route path="/form" element={<Header />} />
                    <Route path="/" element={<SearchRedirect />} />
                </Routes>
            </MemoryRouter>
        );
        const searchInput = screen.getByLabelText('Rechercher');
        userEvent.type(searchInput, "test");

        await waitFor(() => {
            const success = screen.getByText("?search=test");
            expect(success).toBeVisible()
        })
    })
});