import { use, useEffect, useState } from "react";



const User = ({ name, location }) => {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(2);

  useEffect (()=>{
    // const Timer = setInterval(()=>{

    //     console.log("from User.js")
    // }, 1000);

   console.log("UseEffect Called");

    return ()=>{
        // clearInterval(Timer);
 console.log("STOP")
    };

},[])

console.log("render");
  return (
    <div className="user-card">
      {/* <h1>Count = {count}</h1>
      <h1>Count = {count2}</h1>
      <button
        className="count-btn"
        onClick={() => {
           
        setCount(count+1);
        setCount2(count2 +1);
    
        }}
      >
        Count Click
      </button>

      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: adarshsamal2021@gmail.com</h4> */}
    </div>
  );
};

export default User;
