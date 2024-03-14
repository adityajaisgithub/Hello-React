import React from "react";
import UserFun from "./UserFun";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(){
      super();
      // console.log("About constructor Called");
    }

  componentDidMount(){
      // console.log("About componentDidMount");
    }


  render(){
    // console.log("About render called");
    return(
          <div>
            <h1>About</h1>
            <div>This is Namste React web Series</div>
            <UserClass name = {"Aditya (Class)"} location ={"Gorakhpur"}/>
      
          </div>
        )
  }
}

// const About = ()=>{
//   return(
//     <div>
//       <h1>About</h1>
//       <div>This is Namste React web Series</div>
//       <UserFun name = {"Aditya (user)"} location = {"Gorakhpur"} />
//       <UserClass name = {"Aditya (Class)"} location ={"Gorakhpur"}/>

//     </div>
//   )
// }

export default About;