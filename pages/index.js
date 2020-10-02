import React, { useState , useEffect, useContext } from "react";
import { Context } from "../context";

const index = () => {
  const { state, dispatch } = useContext(Context);



  const [Data , setData] = useState()
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(  data => {setData(data) ; console.log(data) ; 
         dispatch({
        type: "LOGGED",
        payload: data,
      }) 
    } )
   
}, [])

  return (
    <div>
      <p>index page</p>
   
      <button
        onClick={() =>
          dispatch({
            type: "LOGGED_IN_USER",
            payload: null,
          })
        }
      >
        logout
      </button>
      {JSON.stringify(state)}
    </div>
  );
};

export default index;

