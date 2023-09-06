import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./../js/404";

describe("404", () => {
    it("renders correctly", () => {
        const { getByText } = render(
            <Router>
                <NotFound/>
            </Router>);
        let textElement = getByText(/404/);
        expect(textElement).toBeInTheDocument();

        textElement = getByText(/PAGE NOT FOUND/);
        expect(textElement).toBeInTheDocument();
    });

    it("button has correct route", () => {
        const { getByText } = render (
           <Router>
               <NotFound/>
           </Router>);
        const buttonElement = getByText(/Go Home/);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute("href", "/");
    });
});
