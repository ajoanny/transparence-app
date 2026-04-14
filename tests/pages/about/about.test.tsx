import {render, screen } from "@testing-library/react";
import About from "../../../src/pages/about/about.tsx";

describe('Page About', () => {

    it('display about text pages', async () => {
        render(<About />);
        const title1 = screen.getByText('À propos');
        const title2 = screen.getByText('Objectif du projet');
        const p1 = screen.getByText(/Ce projet a pour objectif de rendre les données de/);
        const link1 = screen.getByRole('link', { name: 'l’API Poligraph' });
        const link2 = screen.getByRole('link', { name: 'data.gouv.fr' });
        const p2 = screen.getByText(/Dans cette première version,/);

        expect(title1).toBeVisible()
        expect(title2).toBeVisible()
        expect(link1).toBeVisible()
        expect(link2).toBeVisible()
        expect(p1).toBeVisible()
        expect(p2).toBeVisible()
    })
});