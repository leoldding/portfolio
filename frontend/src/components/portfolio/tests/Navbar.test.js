import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./../js/Navbar";

describe("Navbar", () => {
    it("renders correctly", () => {
       const { getByText } = render(
           <Router>
               <Navbar/>
           </Router>);
       const textElement = getByText(/Leo Ding/);
       expect(textElement).toBeInTheDocument();
       expect(textElement).toHaveAttribute("href", "/");
    });
});
