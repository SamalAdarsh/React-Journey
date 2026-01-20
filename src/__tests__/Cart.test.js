import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurentMenu from "../components/RestaurentMenu";
import MOCK_DATA from "../mocks/DummyMenuApi.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart"
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render Restaurent menu", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurentMenu />
      </Provider>
    )
  );

  const accHeader = screen.getByText("Signature Burgers (3)");

  fireEvent.click(accHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(3);
});

it("Should render card items", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurentMenu />
      </Provider>
    )
  );

  const accHeader = screen.getByText("Signature Burgers (3)");

  fireEvent.click(accHeader);

//   const addBtn = screen.getAllByRole("button",{name: "Add +"});

//   fireEvent.click(addBtn[0]);
});


it("Clicked Items should be dispalyed on the header Cart", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <RestaurentMenu />
        <Header/>
        <Cart/>
      </Provider>
      </BrowserRouter>
    )
  );

  const accHeader = screen.getByText("Signature Burgers (3)");

  fireEvent.click(accHeader);

  const addBtn = screen.getAllByRole("button",{name: "Add +"});

expect(screen.getByText("Cart - (0 Items)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument();

   fireEvent.click(addBtn[1]);

    expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument();

     expect(screen.getAllByTestId("foodItems").length).toBe(5);

     fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    
     expect(screen.getAllByTestId("foodItems").length).toBe(3);
 
     expect(screen.getByText("Cart - (0 Items)")).toBeInTheDocument();

     expect(screen.getByText("Cart is empty, Please add some items😅")).toBeInTheDocument();

});
