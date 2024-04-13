import { fireEvent, logDOM, render,screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter} from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";


global.fetch = jest.fn(()=>{
   return Promise.resolve({
      json:() => {
         return Promise.resolve(MOCK_DATA);
      }
   })
})

it("Should Search Res List for burger text input", async ()=>{
    await act(async()=>render(
     <BrowserRouter>
       <Body/>
     </BrowserRouter>
    ));
   
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);
  

    const searchBtn = screen.getByRole("button",{name:"Search"});
    
    const searchInput = screen.getByTestId("searchInput");
    
    fireEvent.change(searchInput,{target:{value:"burger"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");
     console.log(cardsAfterSearch.length); 
    expect(cardsAfterSearch.length).toBe(2) 

})

it("Should Search Res List for burger text input", async ()=>{
   await act(async()=>render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>
   ));

   const TopRatedbtn = screen.getByRole("button",{name: "TOP RESTAURANT"});

   fireEvent.click(TopRatedbtn);

   const topFilteredResCard = screen.getAllByTestId("resCard");
 
   expect(topFilteredResCard.length).toBe(9);

   

})