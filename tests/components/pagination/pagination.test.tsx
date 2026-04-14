import {render, screen} from "@testing-library/react";
import {MemoryRouter, Route, Routes, useLocation} from "react-router-dom";
import Pagination from "../../../src/components/pagination/pagination.tsx";

const SearchRedirect = () => {
    const { search } = useLocation()
    return (
        <p>{search}</p>
    )
}

describe('Pagination', () => {

    describe('when there are more than 2 pages', () => {
        describe('when current pages is 1', () => {
            it('display 4 links', async () => {
                const pagination = {page: 1, total: 20, page_size: 10, pages_count: 25}
                render(
                    <MemoryRouter initialEntries={['/pagination']}>
                        <Routes>
                            <Route path="/pagination" element={<Pagination pagination={pagination}/>} />
                            <Route path="/" element={<SearchRedirect />} />
                        </Routes>
                    </MemoryRouter>
                );
                const page1 = screen.getByText('1');
                const page2 = screen.getByText('2');
                const page3 = screen.getByText('3');
                const more = screen.getByText('...');
                const page25 = screen.getByText('25');

                expect(page1).toBeVisible()
                expect(page2).toBeVisible()
                expect(page2).toHaveAttribute("href", "/?page=2")
                expect(page3).toBeVisible()
                expect(page3).toHaveAttribute("href", "/?page=3")
                expect(more).toBeVisible()
                expect(page25).toBeVisible()
                expect(page25).toHaveAttribute("href", "/?page=25")
            })
        })

        describe('when current pages is 2', () => {
            it('display 5 links', async () => {
                const pagination = {page: 2, total: 20, page_size: 10, pages_count: 25}
                render(
                    <MemoryRouter initialEntries={['/pagination']}>
                        <Routes>
                            <Route path="/pagination" element={<Pagination pagination={pagination}/>} />
                            <Route path="/" element={<SearchRedirect />} />
                        </Routes>
                    </MemoryRouter>
                );

                const page1 = screen.getByText('1');
                const page2 = screen.getByText('2');
                const page3 = screen.getByText('3');
                const page4 = screen.getByText('4');
                const page25 = screen.getByText('25');

                expect(page1).toBeVisible()
                expect(page1).toHaveAttribute("href", "/?page=1")
                expect(page2).toBeVisible()
                expect(page3).toBeVisible()
                expect(page3).toHaveAttribute("href", "/?page=3")
                expect(page4).toBeVisible()
                expect(page4).toHaveAttribute("href", "/?page=4")
                expect(page25).toBeVisible()
                expect(page25).toHaveAttribute("href", "/?page=25")
            })
        })

        describe('when current pages is 4', () => {
            it('display 6 links', async () => {
                const pagination = {page: 4, total: 20, page_size: 10, pages_count: 25}
                render(
                    <MemoryRouter initialEntries={['/pagination']}>
                        <Routes>
                            <Route path="/pagination" element={<Pagination pagination={pagination}/>} />
                            <Route path="/" element={<SearchRedirect />} />
                        </Routes>
                    </MemoryRouter>
                );

                const page1 = screen.getByText('1');
                const page2 = screen.getByText('2');
                const page3 = screen.getByText('3');
                const page4 = screen.getByText('4');
                const page5 = screen.getByText('5');
                const page6 = screen.getByText('6');
                const page25 = screen.getByText('25');

                expect(page1).toBeVisible()
                expect(page1).toHaveAttribute("href", "/?page=1")
                expect(page2).toBeVisible()
                expect(page2).toHaveAttribute("href", "/?page=2")
                expect(page3).toBeVisible()
                expect(page4).toBeVisible()
                expect(page5).toBeVisible()
                expect(page5).toHaveAttribute("href", "/?page=5")
                expect(page6).toBeVisible()
                expect(page6).toHaveAttribute("href", "/?page=6")
                expect(page25).toBeVisible()
                expect(page25).toHaveAttribute("href", "/?page=25")
            })

            describe('when current pages is the last page', () => {
                it('display 3 links', async () => {
                    const pagination = {page: 25, total: 20, page_size: 10, pages_count: 25}
                    render(
                        <MemoryRouter initialEntries={['/pagination']}>
                            <Routes>
                                <Route path="/pagination" element={<Pagination pagination={pagination}/>} />
                                <Route path="/" element={<SearchRedirect />} />
                            </Routes>
                        </MemoryRouter>
                    );

                    const page1 = screen.getByText('1');
                    const page23 = screen.getByText('23');
                    const page24 = screen.getByText('24');
                    const page25 = screen.getByText('25');

                    expect(page1).toBeVisible()
                    expect(page1).toHaveAttribute("href", "/?page=1")
                    expect(page23).toBeVisible()
                    expect(page23).toHaveAttribute("href", "/?page=23")
                    expect(page24).toBeVisible()
                    expect(page24).toHaveAttribute("href", "/?page=24")
                    expect(page25).toBeVisible()
                })
            })

            describe('when current pages is n-1', () => {
                it('display 4 links', async () => {
                    const pagination = {page: 24, total: 20, page_size: 10, pages_count: 25}
                    render(
                        <MemoryRouter initialEntries={['/pagination']}>
                            <Routes>
                                <Route path="/pagination" element={<Pagination pagination={pagination}/>} />
                                <Route path="/" element={<SearchRedirect />} />
                            </Routes>
                        </MemoryRouter>
                    );

                    const page1 = screen.getByText('1');
                    const page22 = screen.getByText('22');
                    const page23 = screen.getByText('23');
                    const page24 = screen.getByText('24');
                    const page25 = screen.getByText('25');

                    expect(page1).toBeVisible()
                    expect(page1).toHaveAttribute("href", "/?page=1")
                    expect(page22).toBeVisible()
                    expect(page22).toHaveAttribute("href", "/?page=22")
                    expect(page23).toBeVisible()
                    expect(page23).toHaveAttribute("href", "/?page=23")
                    expect(page24).toBeVisible()
                    expect(page25).toBeVisible()
                    expect(page25).toHaveAttribute("href", "/?page=25")
                })
            })

            describe('when current pages is n-2', () => {
                it('display 5 links', async () => {
                    const pagination = {page: 23, total: 20, page_size: 10, pages_count: 25}
                    render(
                        <MemoryRouter initialEntries={['/pagination']}>
                            <Routes>
                                <Route path="/pagination" element={<Pagination pagination={pagination}/>} />
                                <Route path="/" element={<SearchRedirect />} />
                            </Routes>
                        </MemoryRouter>
                    );

                    const page1 = screen.getByText('1');
                    const page21 = screen.getByText('21');
                    const page22 = screen.getByText('22');
                    const page23 = screen.getByText('23');
                    const page24 = screen.getByText('24');
                    const page25 = screen.getByText('25');

                    expect(page1).toBeVisible()
                    expect(page1).toHaveAttribute("href", "/?page=1")
                    expect(page21).toBeVisible()
                    expect(page21).toHaveAttribute("href", "/?page=21")
                    expect(page22).toBeVisible()
                    expect(page22).toHaveAttribute("href", "/?page=22")
                    expect(page23).toBeVisible()
                    expect(page24).toBeVisible()
                    expect(page24).toHaveAttribute("href", "/?page=24")
                    expect(page25).toBeVisible()
                    expect(page25).toHaveAttribute("href", "/?page=25")
                })
            })
            describe('when current pages is n-3', () => {
                it('display 6 links', async () => {
                    const pagination = {page: 22, total: 20, page_size: 10, pages_count: 25}
                    render(
                        <MemoryRouter initialEntries={['/pagination']}>
                            <Routes>
                                <Route path="/pagination" element={<Pagination pagination={pagination}/>} />
                                <Route path="/" element={<SearchRedirect />} />
                            </Routes>
                        </MemoryRouter>
                    );

                    const page1 = screen.getByText('1');
                    const page20 = screen.getByText('20');
                    const page21 = screen.getByText('21');
                    const page22 = screen.getByText('22');
                    const page23 = screen.getByText('23');
                    const page24 = screen.getByText('24');
                    const page25 = screen.getByText('25');

                    expect(page1).toBeVisible()
                    expect(page1).toHaveAttribute("href", "/?page=1")
                    expect(page20).toBeVisible()
                    expect(page20).toHaveAttribute("href", "/?page=20")
                    expect(page21).toBeVisible()
                    expect(page21).toHaveAttribute("href", "/?page=21")
                    expect(page22).toBeVisible()
                    expect(page23).toBeVisible()
                    expect(page23).toHaveAttribute("href", "/?page=23")
                    expect(page24).toBeVisible()
                    expect(page24).toHaveAttribute("href", "/?page=24")
                    expect(page25).toBeVisible()
                    expect(page25).toHaveAttribute("href", "/?page=25")
                })
            })
        })
    })
});