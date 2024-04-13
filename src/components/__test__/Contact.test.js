import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test case",()=>{
   test("Should load contact us component",()=>{
      render(<Contact/>);
   
      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
   })
   
   it("Should load button inside Contact component",()=>{
      render(<Contact/>);
   
      const button = screen.getByText("Submit");
      expect(button).toBeInTheDocument();
   })
   
   it("Should load input name inside Contact component",()=>{
      render(<Contact/>);
   
      const input = screen.getByPlaceholderText("name");
      expect(input).toBeInTheDocument();
   })
   
   it("Should load two input boxes inside Contact component",()=>{
      render(<Contact/>);
   
      const input = screen.getAllByRole("textbox");
      // expect(input).toBeInTheDocument();
      // console.log(input.length);
   
      expect(input.length).toBe(2);
   })
})
