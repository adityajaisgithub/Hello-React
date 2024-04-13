import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemCategoryList = ({item})=>{
  const dispatch = useDispatch();
  const handleItems = (c)=>{
      dispatch(addItems(c));
      console.log("itemwa",c);
  }
  
  return(
    <div>
     {item.map((c)=>{
      return <div
              data-testid ="foodItems"
              key={c.card.info.id}
              className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
              >
                
                 <div className="w-9/12">
                 <div className="font-bold text-sm">{c.card.info.name}</div>
                 <div className=" text-sm">
                  ₹
                  {c.card.info.price/100 || c.card.info.defaultPrice/100}</div>
                  <p className="text-xs">{c.card.info.description}</p>
                  </div>
                  <div className="w-3/12">
                    
                    <button className="absolute bg-black     text-white rounded-md" onClick={()=>handleItems(c)} >Add+</button>
                    <img src={CDN_URL + c.card.info.imageId} className="rounded-md"/>
                  </div>
             </div>
     })}
    </div>
  ) 
}

export default ItemCategoryList;