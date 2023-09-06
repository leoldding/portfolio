import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectTag from "./../js/ProjectTag";

describe("ProjectTag", () => {
   it("renders correctly", () => {
      const { getByText } = render(<ProjectTag text={"Mock Tag"}/>);
      const tagElement = getByText(/Mock Tag/);
      expect(tagElement).toBeInTheDocument();
   });
});
