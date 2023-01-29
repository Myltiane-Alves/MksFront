import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Home from "@/pages";
import { store } from "@/services/store";
import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";

describe("", () => {
    let app: RenderResult;

    beforeEach(() => {
        app = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });


    it("should increase the amount of items by pressing the button", async () => { 
        const countItems = await app.findAllByTestId("");
        const buyButton = await waitFor(() => app.getByTestId("buyButton"));
        expect(coutItems).toBeInTheDocument();

        expect(Number(countItems.textContent)).toBe(0);
        expect(buyButton).toBeInTheDocument();
        
        fireEvent.click(buyButton);
        expect(Number(countItems.textContent)).toBe(1);
    });
})