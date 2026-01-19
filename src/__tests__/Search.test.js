import Body from "../components/Body";
import { fireEvent, render,screen } from "@testing-library/react";
import  MOCK_API from "../mocks/DummyApiCall.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
   
    json: () => {
      return Promise.resolve(MOCK_API);
    },
  });
});

it("Should search Res List for Spice input", async () => {
  await act(async () =>  render(<BrowserRouter><Body /> </BrowserRouter>));


 const cardsBefore = screen.getAllByTestId("resCard");
  expect(cardsBefore.length).toBe(9);

  const searchBtn = screen.getByRole("button",{name:"Search"});

  const searchInput = screen.getByTestId("SearchInput");

  fireEvent.change(searchInput,{target:{value: "spice"}});

  fireEvent.click(searchBtn);

  const cardsAfter = screen.getAllByTestId("resCard");


//   console.log(searchBtn);

//   expect(searchBtn).toBeInTheDocument();
expect(cardsAfter.length).toBe(2);
});
