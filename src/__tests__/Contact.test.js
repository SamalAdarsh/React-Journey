import { render , screen} from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Test Cases for contact page",()=>{
it("Checking whether the contact page loaded" , ()=>{

    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

it("Checking button " , ()=>{

    render(<Contact/>);

    const bitton = screen.getByRole("button");

    expect(bitton).toBeInTheDocument();
})

test("Checking button by text",()=>{

    render(<Contact/>);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
})

test("Checking the Placeholder",()=>{

    render(<Contact/>);

    const Input = screen.getByPlaceholderText("name");

    expect(Input).toBeInTheDocument();
})

test("Checking multiple elements", ()=>{


    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes.length);

    // expect(inputBoxes).toBeInTheDocument();

    expect(inputBoxes.length).not.toBe(3);


});


});