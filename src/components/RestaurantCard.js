import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({resData})=>{
  const {
    name,
   cloudinaryImageId,
   avgRating,
   cuisines,
   costForTwo,
   lastMileTravelString,
  
  } = resData?.info;
  const {loggedUserName} = useContext(UserContext);
  return(
    
      <div data-testid ="resCard" className=" m-2 p-2 bg-gray-200 w-60 rounded-lg hover:bg-gray-300 ">
      <img 
         className="rounded-lg "
         alt="res-logo"
         src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-medium">{name}</h3>
      <h4 className="truncate">{cuisines.join(",")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{lastMileTravelString}</h5>
      <h5>{loggedUserName}</h5>
  </div>

)};


export const withTopResLabel = (RestaurantCard)=>{
   return (props)=>{
    return(
      <div>
      <label className="absolute  rounded-md mx-2 p-1 bg-black text-white">Top Restaurant</label>
      <RestaurantCard {...props}/>
      </div>
    )
   }  
}



export default RestaurantCard;