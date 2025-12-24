import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

console.log("Body Rendered");
  const [listofRestaurents, setlistofRestaurents] = useState([]);

  const [filteredRestaurents, setfilteredRestaurents] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://cors-anywhere.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

       const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurants"
    );


    const json = await data.json();

 
    console.log(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

   
    setlistofRestaurents(
     json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setfilteredRestaurents(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return(<h1>You are Offline !!</h1>);

  return listofRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-bar" value={searchText} onChange={(e)=> setsearchText(e.target.value)}/>
          <button
            onClick={() => {

            const filteredRes  = listofRestaurents.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRestaurents(filteredRes);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurents.map((restaurent) => (

            <Link key={restaurent.info.id} to={"/restaurents/" +restaurent.info.id } className="restaurent-link"><RestaurentCard  resData={restaurent} /></Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
