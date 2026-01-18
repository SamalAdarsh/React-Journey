
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
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
