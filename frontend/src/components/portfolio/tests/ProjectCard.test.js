import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectCard from "./../js/ProjectCard";

describe("ProjectCard", () => {
    it("renders all props correctly", () => {
       const { getByText, getAllByRole, getByTestId } = render(
           <Router>
               <ProjectCard title={"Mock Title"}
                            website={"Mock Website"}
                            github={"Mock GitHub"}
                            description={"Mock Description"}
                            tags={["Mock Tag 1", "Mock Tag 2", "Mock Tag 3"]}
                            featured={true}/>
           </Router>);
       const titleElement = getByText(/Mock Title/);
       expect(titleElement).toBeInTheDocument();
       const descriptionElement = getByText(/Mock Description/);
       expect(descriptionElement).toBeInTheDocument();
       const links = getAllByRole("link");
       expect(links).toHaveLength(2);
       expect(links[0]).toHaveAttribute("href", "/Mock GitHub");
       expect(links[1]).toHaveAttribute("href", "/Mock Website");
       const listItems = getAllByRole("listitem");
       expect(listItems).toHaveLength(5); // includes links above
       const divElement = getByTestId("cardDiv");
       expect(divElement).toHaveClass("col-span-1")
    });

    it("renders non-featured project correctly", () => {
        const { getByTestId } = render(
          <Router>
              <ProjectCard featured={false}/>
          </Router>);
        const divElement = getByTestId("cardDiv");
        expect(divElement).toHaveClass("col-span-1");
    });

    it("hides links without route", () => {
       const { getAllByRole } = render(
           <Router>
               <ProjectCard/>
           </Router>);
       const listItems = getAllByRole("listitem");
       expect(listItems).toHaveLength(2);
       expect(listItems[0]).toHaveClass("hidden");
       expect(listItems[1]).toHaveClass("hidden");
    });
});
