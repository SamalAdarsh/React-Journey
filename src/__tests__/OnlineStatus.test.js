import { render, screen, act } from "@testing-library/react";
import Header from "../components/Header"; // Adjust the path to your Header component
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router";

describe("Header Component Online Status", () => {
  it("should display green dot when online and red dot when offline", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        </Provider>
      </BrowserRouter>
    );


    const onlineStatus = screen.getByText("Online Status: 🟢");
    expect(onlineStatus).toBeInTheDocument();

    // 2. Simulate going Offline
    act(() => {
      // Mock navigator.onLine to return false
      Object.defineProperty(window.navigator, "onLine", {
        value: false,
        configurable: true,
      });
      window.dispatchEvent(new Event("offline"));
    });

    expect(onlineStatus).toHaveTextContent("🔴");

    // 3. Simulate going back Online
    act(() => {
      Object.defineProperty(window.navigator, "onLine", {
        value: true,
        configurable: true,
      });
      window.dispatchEvent(new Event("online"));
    });

    expect(onlineStatus).toHaveTextContent("🟢");
  });
});
