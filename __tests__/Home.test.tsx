/* eslint-env jest */
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages";
import { store } from "../redux/store";
import { fireEvent, render, RenderResult, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import exp from "constants";

describe("Homepage", () => {
    let app: RenderResult;

    beforeEach(() => {
        app = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });


    it("should increase the amount of items by pressing the button", async () => { 
        // const countItems = await app.findAllByTestId("countItems");
        const countItems = await app.findByTestId("countItems")
        const buyButton = await waitFor(() => app.getByTestId("buyButton"));
        expect(countItems).toBeInTheDocument();

        expect(Number(countItems.textContent)).toBe(0);
        expect(buyButton).toBeInTheDocument();
        
        fireEvent.click(buyButton);
        expect(Number(countItems.textContent)).toBe(1);
    });

    it("should increase the amount of items by pressing the button", async () => {     
        const btnCart = await app.findByTestId("btnCart")
        
        fireEvent.click(btnCart);

        const sidebarCart = await app.findByTestId("sidebarCart")
        expect(sidebarCart).toBeInTheDocument();
    });

    it("should increase the amount of items by pressing the button", async () => { 
      
        const btnCart = await app.findByTestId("btnCart")
        
        fireEvent.click(btnCart);
        
        const sidebarCart = await app.findByTestId("sidebarCart")
        const btnCloseSidebar = await app.findByTestId("btnCloseSidebar")
        fireEvent.click(btnCloseSidebar);

        expect(sidebarCart).not.toBeInTheDocument();
    });
    it("should increase the amount of items by pressing the button", async () => { 
      
        const btnCart = await app.findByTestId("btnCart")
        fireEvent.click(btnCart);
        const buyButton = await waitFor(() => app.getAllByTestId("buyButton")[1]);

        fireEvent.click(buyButton);
        const sidebarCart = await waitFor(
            () => app.getAllByTestId("sidebarCart")[1]
        );

        expect(sidebarCart).toBeInTheDocument();
    });

    it("", async () => {
        const amount = await waitFor(() => app.getAllByTestId("amount")[1]);
        expect(amount).toBeInTheDocument();
        expect((await amount).textContent).toBe("1");
        const incrementButton = await waitFor(
            () => app.getAllByTestId("btnIncrement")[1]
        );
        expect(incrementButton).toBeInTheDocument();
        fireEvent.click(incrementButton);
        expect(amount.textContent).toBe("2");
    });

    it("", async () => {
        const amount = await waitFor(() => app.getAllByTestId("amount")[1]);
        expect(amount).toBeInTheDocument();
        expect(amount.textContent).toBe("2");
        const decrementButton = await waitFor(
            () => app.getAllByTestId("btnDecrement")[1]
        );
        expect(decrementButton).toBeInTheDocument();
        fireEvent.click(decrementButton);
        expect(amount.textContent).toBe("1");
    });

    it("", async () => {
        const sidebarCart = await waitFor(
            () => app.getAllByTestId("sibarCart")[1]
        );
        expect(sidebarCart).toBeInTheDocument();
        const amount = await waitFor(
            () => app.getAllByTestId("sidebarCart")[1]
        );
        expect(amount.textContent).toBe("1");
        const decrementButton = await waitFor(
            () => app.getAllByTestId("btnDecrement")[1]
        );
        fireEvent.click(decrementButton);
        expect(sidebarCart).not.toBeInTheDocument();
        expect(amount).not.toBeInTheDocument();
        expect(decrementButton).not.toBeInTheDocument();
    });

    it("", async () => {
        const sidebarCart = await waitFor(
            () => app.getAllByTestId("sibarCart")[1]
        );
        expect(sidebarCart).toBeInTheDocument();
        const clearButton = await waitFor(
            () => app.getAllByTestId("removeProduct")
        );
        fireEvent.click(clearButton)
         expect(sidebarCart).not.toBeInTheDocument();
         expect(clearButton).not.toBeInTheDocument();   
    })
})