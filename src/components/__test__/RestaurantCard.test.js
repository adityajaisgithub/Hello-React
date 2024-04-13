import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import Mock_Data from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props Data",()=>{
    render(<RestaurantCard resData={Mock_Data}/>);

    const name = screen.getByText("UBQ by Barbeque Nation");

    expect(name).toBeInTheDocument();
})