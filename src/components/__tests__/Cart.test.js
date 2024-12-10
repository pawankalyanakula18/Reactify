import RestaurantMenu from "../RestaurantMenu.js";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mock_data/Restr_MenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../common_utils/appStore.js";
import Header from "../Header.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("Should load Restaurant Menu compt.", async () =>{
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
        
        ));
        const accordianHeader = screen.getByText("Signature Hyderabadi Desserts (3)");
        fireEvent.click(accordianHeader);

        const accordianItems = screen.getAllByTestId("foodItems");

        expect(accordianItems.length).toBe(3);

        expect(screen.getByText("Cart(0 items)")).toBeInTheDocument();

        const addBtns = screen.getAllByRole("button", { name: "ADD+"});
        fireEvent.click(addBtns[0]);

        expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();

})