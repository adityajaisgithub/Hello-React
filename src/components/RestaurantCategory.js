import {useState} from "react";
import ItemCategoryList from "./ItemCategoryList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
  const handleclick = ()=>{
      setShowIndex();
  }
  return(
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-4 p-4 bg-gray-50 shadow-lg ">
       
        <div className="flex justify-between cursor-pointer"
         onClick={handleclick}>
         <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
         <span>⬇️</span>
        </div>
       
      <div>
          { showItems && <ItemCategoryList item={data.itemCards}/>}
      </div>
      </div>
      {/* Accordane body */}

    </div>
  )
}

export default RestaurantCategory;