import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(()=>
Promise.resolve({
  json:()=> Promise.resolve(MOCK_DATA_NAME)
}))



it("should load Restaurant menu Component",async()=>{
 
  await act(async ()=> render(
   <Provider store={appStore}>
    <RestaurantMenu/>
   </Provider>
  ))
  
})

// it("Should Load Restaurant menu Component",async ()=>{
//     await act(async ()=> render(
//       <Provider store={appStore}>
//        <RestaurantMenu/>
//       </Provider>
//     ))

//     const accordianHeader = screen.getByText("New Thin n Crispy Pizzas (6)");
    
//     fireEvent.click(accordianHeader);

//     expect(screen.getAllByTestId("foodItems").length).toBe(6);
// })