import Body from "../components/Body";
import { render,screen } from "@testing-library/react";
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

it("Should render body component along with search", async () => {
  await act(async () =>  render(<BrowserRouter><Body /> </BrowserRouter>));

  const searchBtn = screen.getByRole("button",{name:"Search"});

//   console.log(searchBtn);

  expect(searchBtn).toBeInTheDocument();
});
