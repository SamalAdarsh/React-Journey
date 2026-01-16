import { render , screen} from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Will test the render page" , ()=>{

    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});