import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./../js/Home";

describe("Home", () => {
   it("renders correctly", () => {
      const { getByText, getByAltText } = render(
          <Router>
             <Home/>
          </Router>);
      let textElement = getByText(/Leo Ding/);
      expect(textElement).toBeInTheDocument();
      textElement = getByText(/graduate with a degree/);
      expect(textElement).toBeInTheDocument();
      textElement = getByText(/learning about technology/);
      expect(textElement).toBeInTheDocument();

      const imageElement = getByAltText(/profile/);
      expect(imageElement).toBeInTheDocument();
   });

   it("highlighted text is correct", () => {
      const { getByText } = render(
          <Router>
             <Home/>
          </Router>);
      let highlightElement = getByText(/NYU/);
      expect(highlightElement).toHaveClass("italic", "text-purple-600");
      highlightElement = getByText(/Computer Science/);
      expect(highlightElement).toHaveClass("font-bold", "italic", "bg-orange-200");
      highlightElement = getByText(/Data Science/);
      expect(highlightElement).toHaveClass("font-bold", "italic", "bg-orange-200");
      highlightElement = getByText(/Backend Engineer/);
      expect(highlightElement).toHaveClass("font-bold", "italic", "bg-orange-200");
   });

   it("button has correct route", () => {
      const { getByText } = render(
          <Router>
             <Home/>
          </Router>);
      const buttonElement = getByText(/Check out my projects!/);
      expect(buttonElement).toHaveAttribute("href", "/projects");
   });
});
