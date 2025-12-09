import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {

const [listofRestaurents, setlistofRestaurents] = useState(resList);

useEffect(()=>{
 fetchData();
},[]);


const fetchData = async()=>{

const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5246091&lng=73.8786239&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();

console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
console.log(json);
setlistofRestaurents(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
};

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredlist = listofRestaurents.filter(
              (res) => res.info.avgRating > 4.5
            );

            setlistofRestaurents(filteredlist);

            console.log(filteredlist);
        
          }}

          //    onMouseOver={()=>
          //     console.log("Button was clicked")
          //   }
        >
          Top Rated Restaurant
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="res-container">
        {listofRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
