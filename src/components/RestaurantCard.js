import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({resData})=>{

  const {
   cloudinaryImageId,
   avgRating,
   name,
   cuisines,
   costForTwo,
   lastMileTravelString,
   id
  } = resData?.info;
  return(
    <Link to={`/RestaurantMenu/${id}`}>
      <div className=" m-2 p-2 bg-gray-200 w-60 rounded-lg hover:bg-gray-300 ">
      <img 
         className="rounded-lg"
         alt="res-logo"
         src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-medium">{name}</h3>
      <h4 className="truncate">{cuisines.join(",")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{lastMileTravelString}</h5>
  </div></Link>

)};



export default RestaurantCard;