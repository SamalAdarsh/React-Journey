import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {

    // console.log("Header Change")
    let btnName = "Login";

    const[btnNameReact, setbtnNameReact] = useState("Login");


    useEffect(()=>{

        // console.log("UseEffect is called");
    },[btnNameReact])
  return (<div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} />
    </div>

    <div className="nav-items">
      <ul>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact Us</Link></li>

        <li>Cart</li>

        <button className="login-btn" onClick = {()=>{


          btnNameReact === "Login"
          ?setbtnNameReact("Logout")
          :setbtnNameReact("Login");
          console.log(btnNameReact)

        }}>{btnNameReact}</button>
      </ul>
    </div>
  </div>)
};

export default Header;
