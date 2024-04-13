import {  useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=>{
   const {resId} = useParams();
   const [ShowIndex,setShowIndex] = useState(0); 
   const resInfo = useRestaurantMenu(resId);
 
   if(resInfo === null) return <Shimmer/>;
   
   {console.log("resInfo?.cards....", resInfo)}

  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
 
 
  const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>
                       c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log(categories);
    
  return(
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} : {costForTwoMessage}</p>

      {categories.map((category,index)=> <RestaurantCategory key={index} 
                                           data={category.card.card}
                                           showItems={index === ShowIndex }
                                           setShowIndex = {()=> setShowIndex(index)} />)}
    </div>
  )
}

export default RestaurantMenu;



