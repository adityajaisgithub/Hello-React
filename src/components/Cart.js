import { useDispatch, useSelector } from "react-redux";
import ItemCategoryList from "./ItemCategoryList";
import { clearItems } from "../utils/cartSlice";

const Cart = ()=>{
  // Subscribing to store using useSelector 
  // useSelector give access to our store but we can choose what portion of store we need
  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();

     const clearItem = () =>{
          dispatch(clearItems())
     }
  return(<div className="w-6/12 mx-auto text-center">
          <h1 className=" font-bold m-6 text-2xl">Cart</h1>
          <button className="px-4 p-1 rounded-lg bg-black text-white " onClick={clearItem}>Clear</button>
          {cartItems.length === 0 && <h1>Cart is empty. Add Items to the Cart!</h1>}
          <ItemCategoryList item ={cartItems} />
         </div>)
}


export default Cart;