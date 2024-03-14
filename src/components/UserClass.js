import React from "react";

class UserClass extends React.Component{

  constructor(props){
    //  console.log("userClass constructor called");
    super(props)
   
    this.state = {
        userInfo:{
        name:"Dummy",
        location:"default"
    }}
  }

  async componentDidMount(){
    // console.log("UserClass componentDidMount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
         userInfo:json
    })
  }
  render(){
    // console.log("userClass render Called");
    const {name,location} =this.state.userInfo;
    return(
      <div className="user-card">
         <h2>Name: {name}</h2>
         <h3>Location:{location}</h3>
         <h4>Contact: adityajaiswal2482001@gmail.com</h4>
      </div>
    )
  }
}

export default UserClass;