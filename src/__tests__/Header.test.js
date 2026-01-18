import Header from "../components/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

test("Testing whether header component got rendered or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Button = screen.getByRole("button");

  expect(Button).toBeInTheDocument();
});

test("Checking Multiple Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const textButton = screen.getByText("Login");

  expect(textButton).toBeInTheDocument();
});

test("Checking for cart-items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Button = screen.getByRole("button",{name:"Login"});

  expect(Button).toBeInTheDocument();
});


test("Checking for cart-items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button",{name:"Login"});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button",{name:"Logout"});


  expect(logoutButton).toBeInTheDocument();
});
