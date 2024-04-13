import RestaurantCard, { withTopResLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";



const Body =()=>{

const [listOfRestaurant,setListOfRestaurant] = useState([]);
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
const [userName,setUserName] =useState();
const [searchText, setSearchText] = useState();



// whenever state variable update react trigger a reconcilation cycle(re-render the component)
// console.log("Body Render",listOfRestaurant);

const TopRestaurantCard = withTopResLabel(RestaurantCard);

useEffect(()=>{
   fetchData();
},[])

 
const fetchData = async ()=>{
 const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" 
       )
    
     const json = await data.json();
    //  console.log(json);
     
     setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
}
      const onlineStatus = useOnlineStatus();

   if(onlineStatus === false) return <h3>Your internet connection is lost!!</h3>;
   
   const {loggedUserName,setUserInfo} = useContext(UserContext)
  return (listOfRestaurant.length === 0)? <Shimmer/> : (
  <div className="body">
    <div className="flex m-4">
      <div className="">
        <input type="text" data-testid ="searchInput" className="border border-gray-400  p-0.5" value = {searchText} 
        onChange={(e)=>{
               setSearchText(e.target.value)
        }} />
        
        <button 
         className="bg-green-300 m-2 p-1 rounded-md"
        onClick={()=>{
         let filteredList = listOfRestaurant.filter(
            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )
            setFilteredRestaurant(filteredList);            
        }}>Search</button>

      </div>
      <button
       className="bg-gray-300 m-2 p-1 rounded-md"
        onClick={()=>{     
            setFilteredRestaurant(listOfRestaurant.filter(
              (res)=> res.info.avgRating >= 4.5
              ));
        }}
        
      >TOP RESTAURANT</button>
      <label className="  p-0.5 h-7 my-4 mx-2">UserName:</label>
      <input type="text" className="border border-gray-400  p-0.5 h-7 my-4 mx-2" value = {loggedUserName} 
        onChange={(e)=>{
          setUserInfo(e.target.value)
        }} />
    </div>
    <div className="flex flex-wrap w-screen">
      
    {filteredRestaurant.map((restaurant) => (
      <Link 
       key ={restaurant.info.id}
       to={`/RestaurantMenu/${restaurant.info.id}`}
       >
      {restaurant.info.avgRating >= 4.5 ? (<TopRestaurantCard resData={restaurant} />):
      (<RestaurantCard  resData={restaurant} />) }
      </Link>
    ))}
     
    </div>
  </div>
)};

export default Body;
