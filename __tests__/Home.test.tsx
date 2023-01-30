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
})