import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("ContactUs page Test Cases", ()=> {

    test('check component loads or not',() => {
        render(<ContactUs/>); // render the component that want 
    
        const heading = screen.getByRole("heading", { name: /contact us.../i }); // Querying
        expect(heading).toBeInTheDocument(); // check heading is rendered in the document. 
            // Assertion
        });
    test('check load button inside Contact Us page or not',() => {
        render(<ContactUs/>); // render the component that want 
        
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument(); // check heading is rendered in the document.
        });
    test('should load input name inside Contact Us page',() => {
        render(<ContactUs/>); // render the component that want 
            
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument(); 
        });
    it('should load 2 input boxes inside Contact Us page',() => {
        render(<ContactUs/>); // render the component that want 
                
        const inputBoxes = screen.getAllByRole("textbox"); // Querying
    
        expect(inputBoxes.length).toBe(2); //Assertion
        });
    
});






