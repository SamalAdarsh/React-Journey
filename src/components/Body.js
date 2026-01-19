import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import uselistofRestaurents from "../utils/uselistofRestaurents";
// import { withPromotedLabel } from "./RestaurentCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const [listofRestaurents, setlistofRestaurents] = useState([]); 

  const listofRestaurents = uselistofRestaurents();

  console.log("Body Rendered", listofRestaurents);

  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);

  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  const [searchText, setsearchText] = useState("");

  const{loggedInUser,setUserName }= useContext(UserContext);

  useEffect(() => {
    setfilteredRestaurents(listofRestaurents);
  }, [listofRestaurents]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>You are Offline !!</h1>;

  return listofRestaurents.length === 0 ? (
  // return (listofRestaurents?.length || 0) === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-cyan-200 ">
      <div className="flex  items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid = "SearchInput"
            className="border border-black bg-amber-50"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-4 m-4 bg-purple-400 rounded-lg "
            onClick={() => {
              const filteredRes = listofRestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurents(filteredRes);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-green-500 px-2 py-3 rounded-lg"
            onClick={() => {
              const filteredlist = filteredRestaurents.filter(
                (res) => res.info.avgRating > 4.5
              );

              setfilteredRestaurents(filteredlist);

              console.log(filteredlist);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="mx-6" >
          <label>User : </label>
          <input className="border border-black bg-amber-50 "
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="res-container grid grid-cols-3 w-[85%] max-w-300 mx-auto my-7.5 gap-7.5 ">
        {filteredRestaurents.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurents/" + restaurent.info.id}
            className="restaurent-link"
          >
            {restaurent.info.veg ? (
              <RestaurantCardPromoted resData={restaurent} />
            ) : (
              <RestaurentCard resData={restaurent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
