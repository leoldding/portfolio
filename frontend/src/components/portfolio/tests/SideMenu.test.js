import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./../js/SideMenu";

describe("SideMenu", () => {
    it("renders correctly", () => {
        const { getByRole, getAllByRole } = render(
            <Router>
                <SideMenu/>
            </Router>);
        const buttonElement = getByRole("button");
        expect(buttonElement).toBeInTheDocument();
        const links = getAllByRole("link");
        expect(links).toHaveLength(4);
        expect(links[0]).toHaveTextContent("Home");
        expect(links[0]).toHaveAttribute("href", "/");
        expect(links[1]).toHaveTextContent("Projects");
        expect(links[1]).toHaveAttribute("href", "/projects");
        expect(links[2]).toHaveTextContent("GitHub");
        expect(links[2]).toHaveAttribute("href", "https://github.com/leoldding");
        expect(links[3]).toHaveTextContent("LinkedIn");
        expect(links[3]).toHaveAttribute("href", "https://linkedin.com/in/leo-ding");
    });

    it("initially offscreen", () => {
       const { getByTestId } = render(
           <Router>
               <SideMenu/>
           </Router>);
       const backgroundElement = getByTestId("menuBackground");
       expect(backgroundElement).toHaveClass("backdrop-blur-none", "translate-x-full");
   });

    it("opens menu on button click", () => {
       const { getByRole, getByTestId } = render(
         <Router>
             <SideMenu/>
         </Router>);
       const buttonElement = getByRole("button");
       fireEvent.click(buttonElement);
       const backgroundElement = getByTestId("menuBackground");
       expect(backgroundElement).toHaveClass("backdrop-blur", "translate-x-0");
    });
});

describe("Closing SideMenu", () => {
    const renderAndOpen = () => {
        const { getByRole, getByTestId } = render(
            <Router>
                <SideMenu/>
            </Router>);
        const buttonElement = getByRole("button");
        fireEvent.click(buttonElement);
    };

    beforeEach(() => {
        renderAndOpen();
    });

    it("closes menu when clicking non-menu area", () => {
        const backgroundElement = screen.getByTestId("menuBackground");
        expect(backgroundElement).toHaveClass("backdrop-blur", "translate-x-0");
        fireEvent.click(backgroundElement);
        expect(backgroundElement).toHaveClass("backdrop-blur-none", "translate-x-full");
    });

    it("closes menu when clicking close button", () => {
        const backgroundElement = screen.getByTestId("menuBackground");
        expect(backgroundElement).toHaveClass("backdrop-blur", "translate-x-0");
        const buttonElement = screen.getByTestId("closeButton");
        fireEvent.click(buttonElement);
        expect(backgroundElement).toHaveClass("backdrop-blur-none", "translate-x-full");
    });

   for(let i = 0; i < 4; i++) {
       it("closes menu when clicking link " + i, () => {
           const backgroundElement = screen.getByTestId("menuBackground");
           expect(backgroundElement).toHaveClass("backdrop-blur", "translate-x-0");
           const linkElements = screen.getAllByRole("link");
           fireEvent.click(linkElements[i]);
           expect(backgroundElement).toHaveClass("backdrop-blur-none", "translate-x-full");
       });
    };
});
