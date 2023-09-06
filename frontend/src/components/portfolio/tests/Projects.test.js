import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./../js/Projects";

describe("Projects", () => {
    it("renders correctly", () => {
       const { getByText } = render(
           <Router>
               <Projects/>
           </Router>);
       let textElement = getByText(/Featured Projects/);
       expect(textElement).toBeInTheDocument();
       textElement =getByText(/Other Projects/);
       expect(textElement).toBeInTheDocument();
    });
});
