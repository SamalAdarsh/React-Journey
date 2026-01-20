import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_API from "../mocks/DummyApiCall.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
// 1. IMPORT YOUR CONTEXT
import UserContext from "../utils/UserContext"; 

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_API),
    });
});

it("Should show UserName", async () => {
    // 2. CREATE THE MOCK FUNCTION
    const mockSetUserName = jest.fn();

    await act(async () => {
        render(
            <BrowserRouter>
                {/* 3. WRAP WITH THE CONTEXT PROVIDER */}
                {/* Ensure the 'value' object matches what your component expects */}
                <UserContext.Provider value={{ 
                    loggedInUser: "Default User", 
                    setUserName: mockSetUserName 
                }}>
                    <Body />
                </UserContext.Provider>
            </BrowserRouter>
        );
    });

    // 4. FIND THE INPUT
    const inputName = screen.getByTestId("userNameInput");

    // 5. TRIGGER THE CHANGE
    // This will now call 'mockSetUserName' instead of crashing
    fireEvent.change(inputName, { target: { value: "Adarsh Samal" } });

    // 6. ASSERTION
    expect(mockSetUserName).toHaveBeenCalledWith("Adarsh Samal");
});