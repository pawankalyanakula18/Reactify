import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../common_utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


it("should render Header compt. with a Login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const LoginButton = screen.getByRole("button", {name:'Login'});
    expect(LoginButton).toBeInTheDocument();
});

it("should render Header compt. with cart button shown", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    // Cart button shown irrespective of number of items present in it.
    const CartButton = screen.getByText(/Cart/);
    expect(CartButton).toBeInTheDocument();
});

it("should change Login button to Logout button on-click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const LoginButton = screen.getByRole("button", {name:'Login'});

    fireEvent.click(LoginButton);

    const LogoutButton = screen.getByRole("button", {name:'Logout'});


    expect(LogoutButton).toBeInTheDocument();
});

