import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = ()=>{
   const {resId} = useParams();
    
   const resInfo = useRestaurantMenu(resId);
 
   if(resInfo ===null) return <Shimmer/>;

  const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
  
 
  const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  return(
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} : {costForTwoMessage}</p>

   {
    itemCards?.length>0 && <>
      <h3>Menu</h3>
      <div>
        {itemCards?.map(item => 
          (<li key={item.card.info.id} >{item.card.info.name} - {"Rs. "}
           {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>))}
      </div>
      </>
   }

    </div>
  )
}

export default RestaurantMenu;



