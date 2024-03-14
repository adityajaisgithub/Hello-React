import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
       let [btnName,setBtnName] = useState("Login");
       const onlineStatus = useOnlineStatus();

  return (
  <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
          <img className="w-36" src={LOGO_URL}/>
      </div>
      <div className="flex  items-center ">
          <ul className="flex p-4 m-4 font-bold  ">
              <li className="p-2 m-4">Online Status :{onlineStatus ? "🟢": "🔴"}</li>
              <li className="p-2 m-4 hover:text-red-600"><Link to="/">Home</Link></li>
              <li className="p-2 m-4 hover:text-red-600"><Link to="/About">About Us</Link></li>
              <li className="p-2 m-4 hover:text-red-600"><Link to="/Contact">Contact Us</Link></li>
              <li className="p-2 m-4 hover:text-red-600">Cart</li>
              <button className="p-2 m-4 hover:text-green-600 bg-gray-200"
               onClick={()=>{
                setBtnName("Logout");
                btnName === "Login"? setBtnName("Logout") : setBtnName("Login");
              }}>{btnName}</button>
          </ul>
      </div>
  </div>
)};

export default Header;



