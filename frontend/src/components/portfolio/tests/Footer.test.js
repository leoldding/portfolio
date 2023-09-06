import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from "./../js/Footer";

describe("Footer", () => {
    it("renders correctly", () => {
        const { getByText } = render(<Footer/>);
        const textElement = getByText(/Leo Ding/);
        expect(textElement).toBeInTheDocument();
    });
});
