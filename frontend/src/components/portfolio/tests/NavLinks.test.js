import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavLinks from "./../js/NavLinks";

describe("NavLinks", () => {
   it("renders correctly", () => {
       const { getByRole, getAllByRole } = render(
           <Router>
               <NavLinks/>
           </Router>);
       const listElement = getByRole("list");
       expect(listElement).toBeInTheDocument();
       const listItems = getAllByRole("listitem");
       expect(listItems).toHaveLength(3);
   });

   it("links have correct routes", () => {
      const { getAllByRole } = render(
          <Router>
              <NavLinks/>
          </Router>);
      const links = getAllByRole("link");
      expect(links).toHaveLength(3);
      expect(links[0].textContent).toBe("Projects");
      expect(links[0]).toHaveAttribute("href", "/projects");
      expect(links[1]).toHaveAttribute("href", "https://github.com/leoldding");
      expect(links[2]).toHaveAttribute("href", "https://linkedin.com/in/leo-ding");
   });
});