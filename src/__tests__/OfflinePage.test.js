import { render, screen, act } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ 
        data: { 
            cards: [] // Provide an empty array so your list logic doesn't break
        } 
    }),
  })
);

describe("Body Component Offline Guard", () => {
  it("should show offline message when internet is disconnected", async () => {
    // 2. Render inside async act to handle initial fetch
    await act(async () => {
      render(<Body />);
    });

    // 3. Simulate Offline
    act(() => {
      Object.defineProperty(window.navigator, "onLine", {
        value: false,
        configurable: true,
      });
      window.dispatchEvent(new Event("offline"));
    });

    // 4. Look for the offline heading
    const offlineMessage = screen.getByText("You are Offline !!");
    expect(offlineMessage).toBeInTheDocument();
  });
});
