import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

const [listofRestaurents, setlistofRestaurents] = useState(resList);

// const arr = useState(resList);

// const [listofRestaurents, setlistofRestaurents] = arr;

// const listofRestaurents = arr[0];

// const setlistofRestaurents = arr[1];

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
