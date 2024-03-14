import { useRouteError } from "react-router-dom";

const Error = ()=>{
  const err = useRouteError();
  console.log(err);
  return(
    <div>
      <h1>Oops!!!</h1>
      <h2>Somethig went wrong!!</h2>
      <h2>{err.status} : {err.statusText}</h2>
    </div>
  )
}

export default Error;