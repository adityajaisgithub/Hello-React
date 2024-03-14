const UserFun = (props) =>{
  const {name,location} = props;
  return(
    <div className="user-card">
       <h2>Name: {name}</h2>
       <h3>Location: {location}</h3>
       <h4>Contact: adityajaiswal2482001@gmail.com</h4>
    </div>
  )
}

export default UserFun;