import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [resInfo, setresInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/123456"
    );

    //https://api.allorigins.win/raw?url=

    //    const data = await fetch(
    //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5246091&lng=73.8786239&restaurantId=236455&catalog_qa=undefined&submitAction=ENTER"
    // );

    const json = await data.json();

    console.log(json);
    setresInfo(json.data);
    console.log(resInfo);
  };

  if(resInfo === null)  return <Shimmer />


  //   return (resInfo === null) ? (
  //     <Shimmer />
  //   ) :

  //  if (resInfo === null) return <Shimmer />;

  //   console.log(resInfo?.cards[2]?.card?.card.info?.name);

  const { name, cuisines, costForTwo } =
    resInfo?.cards[2]?.card?.card?.info || {};

console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

// const {itemCards} = resInfo;
  return  (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwo}
      </p>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Biryani</li>
        <li>Rolls</li>
      </ul>
    </div>
  );
};

export default RestaurentMenu;
