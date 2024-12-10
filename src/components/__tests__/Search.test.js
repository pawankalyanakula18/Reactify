import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mock_data/Restaurant_ListMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

//Mocking our fetch() function.
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should Search Restr. List for PIZZA text input", async () => {
    //fake an API call
    await act( async () =>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
            )
        }
    );

    const cardsBeforeSearch = screen.getAllByTestId("ResCard");

    expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button", {name:"Search"});

    expect(searchBtn).toBeInTheDocument();

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "pizza"}});

    fireEvent.click(searchBtn);

    //screen should load 1 Restr. Card
    const cardsAfterSearch = screen.getAllByTestId("ResCard");

    expect(cardsAfterSearch.length).toBe(1);

});

it("Should filter Top Rated Restaurants", async () => {
    //fake an API call
    await act( async () =>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
            )
        }
    );

    const cardsBeforeFilter = screen.getAllByTestId("ResCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    //screen should load 1 Restr. Card
    const cardsAfterFilter = screen.getAllByTestId("ResCard");

    expect(cardsAfterFilter.length).toBe(2);

});