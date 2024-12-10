import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mock_data/Restr_CardMock.json";
import Restr_Card from "../Restr_Card";
import "@testing-library/jest-dom";

it("should render Restaurant Card compt. with props Data", () =>{

    render(<Restr_Card ResData={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});