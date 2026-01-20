import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_API from "../mocks/DummyApiCall.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_API);
    },
  });
});

it("Should show UserName", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  )

  const inputName = screen.getByTestId("userNameInput");

  console.log(inputName)

//   fireEvent.change(inputName, { target: { value: "Adarsh Samal" } });
})