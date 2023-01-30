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
        const buyButton = await waitFor(() => app.getAllByTestId("buyButton")[0]);
        expect(countItems).toBeInTheDocument();

        expect(Number(countItems.textContent)).toBe(0);
        expect(buyButton).toBeInTheDocument();
        
        fireEvent.click(buyButton);
        expect(Number(countItems.textContent)).toBe(1);
    });

    it("Should render a sidebar on click on cart button", async () => {     
        const btnCart = await app.findByTestId("buttonCart")
        
        fireEvent.click(btnCart);

        const sidebarCart = await app.findByTestId("cartItem")
        expect(sidebarCart).toBeInTheDocument();
    });

    it("Should unmount sidebar when click close button", async () => { 
      
        const btnCart = await app.findByTestId("buttonCart")
        
        fireEvent.click(btnCart);
        const sidebarCart = await app.findByTestId("cartItem")
        const btnCloseSidebar = await app.findByTestId("btnCloseSidebar")
        fireEvent.click(btnCloseSidebar);

        expect(sidebarCart).not.toBeInTheDocument();
    });



    // it("Should render a sidebar Item when fire the buy button", async () => {
    //     const btnCart = await app.findByTestId("buttonCart");
    //     fireEvent.click(btnCart);
    //     const buyButton = await waitFor(() => app.getAllByTestId("buyButton")[1]);
    //     fireEvent.click(buyButton);
    //     const cartItem = await waitFor(
    //       () => app.getAllByTestId("cartItem")[1]
    //     );
    //     expect(cartItem).not.toBeInTheDocument()
    // });

    // it("shoud increment the amount of items by pressing the increment button", async () => {
    //     const amount = await waitFor(() => app.getAllByTestId("amount")[1]);
    //     expect(amount).toBeInTheDocument();
    //     expect(amount.textContent).toBe("1");
    //     const incrementButton = await waitFor(
    //         () => app.getAllByTestId("btnIncrement")[1]
    //     );
    //     expect(incrementButton).toBeInTheDocument();
    //     fireEvent.click(incrementButton);
    //     expect(amount.textContent).toBe("2");
    // });

    // it("Should decrease the amount of itens when fire the decrease button", async () => {
    //     const amount = await waitFor(() => app.getAllByTestId("amount")[1]);
    //     expect(amount).toBeInTheDocument();
    //     expect(amount.textContent).toBe("2");
    //     const decrementButton = await waitFor(
    //         () => app.getAllByTestId("btnDecrement")[1]
    //     );
    //     expect(decrementButton).toBeInTheDocument();
    //     fireEvent.click(decrementButton);
    //     expect(amount.textContent).toBe("1");
    // });

    // it("Should unmount SidebarItem component when value value decreases to 0", async () => {
    //     const sidebarCart = await waitFor(
    //         () => app.getAllByTestId("sibarCart")[1]
    //     );
    //     expect(sidebarCart).toBeInTheDocument();
    //     const amount = await waitFor(
    //         () => app.getAllByTestId("sidebarCart")[1]
    //     );
    //     expect(amount.textContent).toBe("1");
    //     const decrementButton = await waitFor(
    //         () => app.getAllByTestId("btnDecrement")[1]
    //     );
    //     fireEvent.click(decrementButton);
    //     expect(sidebarCart).not.toBeInTheDocument();
    //     expect(amount).not.toBeInTheDocument();
    //     expect(decrementButton).not.toBeInTheDocument();
    // });

    // it("Should unmount Sidebar Item component when triggering clear button", async () => {
    //     const sidebarCart = await waitFor(
    //         () => app.getAllByTestId("sibarCart")[0]
    //     );
    //     expect(sidebarCart).toBeInTheDocument();
    //     const clearButton = await waitFor(
    //         () => app.getAllByTestId("removeProduct")[0]
    //     );
    //     fireEvent.click(clearButton)
    //      expect(sidebarCart).not.toBeInTheDocument();
    //      expect(clearButton).not.toBeInTheDocument();   
    // });
})