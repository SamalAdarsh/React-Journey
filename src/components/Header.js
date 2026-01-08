import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // console.log("Header Change")
  let btnName = "Login";

  const { loggedInUser } = useContext(UserContext);

  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  useEffect(() => {
    // console.log("UseEffect is called");
  }, [btnNameReact]);
  return (
    <div className="flex justify-between  p-4 bg-blue-400 items-center sm:bg-green-300 lg:bg-amber-400">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex  m-4 p-4 ">
          <li className="px-4 font-bold">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-bold">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="/about">About</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold text-xl">
            <Link to="/cart"> Cart - ({cartItems.length} Items)</Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
